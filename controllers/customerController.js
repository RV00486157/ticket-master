const Customer = require('../models/customer.js')

module.exports.list = (req,res)=>{
	Customer.find().populate('user',['username'])
		.then(customers=>{
			res.json(customers)
		})
		.catch(err=>{
			res.json(err)
		})
}

module.exports.create = (req,res)=>{
	const body = req.body
	body.user = req.user._id
	const customer = new Customer(body)
	customer.save()
		.then(customer=>{
			res.json(customer)
		})
		.catch(err=>{
			res.json(err)
		})
}

module.exports.show = (req,res)=>{
	const id = req.params.id
	Customer.findById(id).populate('user',['username'])
		.then((customer)=>{
			if(customer){
				res.json(customer)
			}else{
				res.json({})
			}
		})
		.catch(err=>{
			res.json(err)
		})
}

module.exports.update = (req,res)=>{
	const id = req.params.id
	const body = req.body
	Customer.findByIdAndUpdate(id,body,{
		new: true,
		runValidators: true
	})
		.then(customer=>{
			if(customer){
				res.json(customer)
			}else{
				res.json({})
			}
		})
		.catch(err=>{
			res.json(err)
		})
}

module.exports.delete = (req,res)=>{
	const id= req.params.id
	Customer.findByIdAndDelete(id)
		.then(customer=>{
			if(customer){
				res.json(customer)	
			}else{
				res.json({})
			}
			
	})
}