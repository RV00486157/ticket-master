const User = require('../models/user')
const Customer = require('../models/customer')
const Department = require('../models/department')
const Employee = require('../models/employee')
const Ticket = require('../models/ticket')
const pick = require('lodash/pick')

module.exports.login = (req,res) =>{
    const body = req.body
    User.findByCredentials(body.email, body.password)
        .then(function(user){
           return user.generateToken()
        })
        .then(function(token){
            res.send({ 'token': token})
        })
        .catch(function(err){
            res.send(err)
        })
}

module.exports.register = (req,res) =>{
    const body = req.body;
    const user = new User(body);
    user.save()
        .then(user=>{
            res.send(pick(user,['_id' , 'username', 'email', 'createdAt']))
        })
        .catch(err=>{
            res.send(err)
        })
}

module.exports.account = (req,res) =>{
    const { user } = req
    Promise.all([Customer.find({ user: user._id}), Department.find({ user: user._id}), Employee.find({ user: user._id}), Ticket.find({ user: user._id})])
        .then((values)=>{
            res.send({ 'customers': values[0], 'departments':values[1], 'employees':values[2], tickets:values[3] , 'user': pick(user, ['_id', 'username', 'email'])})
        })
        .catch(err=>{
            res.send(err)
        })
}

module.exports.logout = (req,res) =>{
    const { user, token } = req 
    User.findByIdAndUpdate(user._id, { $pull: { tokens: { token: token }}})
        .then(function(){
            res.send({notice: 'successfully logged out'})
        })
        .catch(function(err){
            res.send(err)
        })
}