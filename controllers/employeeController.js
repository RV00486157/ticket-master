const Employee = require('../models/employee')

module.exports.list = (req,res)=>{
	Employee.find().populate('user',['username']).populate('department',['name'])
		.then((employees)=>{
			res.json(employees)
		})
		.catch(err=>{
			res.json(err)
		})
}

module.exports.create = (req,res)=>{
	const body = req.body
	body.user = req.user._id
	const employee = new Employee(body)
	employee.save()
		.then((employee)=>{
			res.json(employee)
		})
		.catch(err=>{
			res.json(err)
		})
}

module.exports.show = (req,res)=>{
	const id = req.params.id
	Employee.findById(id).populate('user',['username']).populate('department',['name'])
		.then((employee)=>{
			if(employee){
				res.json(employee)
			}else{
				res.json({})
			}
		})
}

module.exports.update = (req,res)=>{
	const id = req.params.id
	const body = req.body
	Employee.findByIdAndUpdate(id,body,{
		new: true,
		runValidators:true
	})
		.then((employee)=>{
			if(employee){
				res.json(employee)
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
	Employee.findByIdAndDelete(id)
		.then((employee)=>{
			if(employee){
				res.json(employee)
			}else{
				res.json({})
			}
		})
		.catch(err=>{
			res.json(err)
		})
}