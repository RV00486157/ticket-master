const Ticket = require('../models/ticket')

module.exports.list = (req,res)=>{
	Ticket.find().populate('user', ['username']).populate('department', ['name']).populate('customer',['name']).populate('employees')
		.then(tickets=>{
			res.json(tickets)
		})
		.catch(err=>{
			res.json(err)
		})
}

module.exports.create = (req,res)=>{
	const body = req.body
	body.user = req.user._id
	const ticket = new Ticket(body)
	ticket.save()
		.then(ticket=>{
			res.json(ticket)
		})
		.catch(err=>{
			res.json(err)
		})
}

module.exports.show = (req,res)=>{
	const id = req.params.id
	Ticket.findById(id)
		.then((ticket)=>{
			if(ticket){
				res.json(ticket)
			}else{
				res.json({})
			}
		})
}

module.exports.update = (req,res)=>{
	const id = req.params.id
	const body = req.body
	Ticket.findByIdAndUpdate(id,body)
		.then((ticket)=>{
			if(ticket){
				res.json(ticket)
			}else{
				res.json({})
			}
		})
		.catch(err=>{
			res.json(err)
		})
}

module.exports.delete = (req,res)=>{
	const id = req.params.id
	Ticket.findByIdAndDelete(id)
		.then((ticket)=>{
			if(ticket){
				res.json(ticket)
			}else{
				res.json({})
			}
		})
		.catch(err=>{
			res.json(err)
		})
}