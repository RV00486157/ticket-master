const Department = require('../models/department')

module.exports.list = (req,res)=>{
	Department.find().populate('user', ['username'])
		.then(departments=>{
			res.json(departments)
		})
		.catch(err=>{
			res.json(err)
		})
}

module.exports.create = (req,res)=>{
	const body = req.body
	body.user = req.user._id
	const department = new Department(body)
	department.save()
		.then(department=>{
			res.json(department)
		})
		.catch(err=>{
			res.json(err)
		})
}

module.exports.show = (req,res)=>{
	const id = req.params.id
	Department.findById(id).populate('user',['username'])
		.then(department=>{
			if(department){
				res.json(department)
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
	Department.findByIdAndUpdate(id,body)
		.then(department=>{
			if(department){
				res.json(department)
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
	Department.findByIdAndDelete(id)
		.then(department=>{
			if(department){
				res.json(department)
			}else{
				res.json({})
			}
		})
		.catch(err=>{
			res.json(err)
		})
}