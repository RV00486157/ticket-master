const mongoose = require('mongoose')
const validator = require('validator')

const Schema = mongoose.Schema

const employeeSchema = new Schema({
	name:{
		type: String,
		required: true
	},
	email:{
		type: String,
        required: true,
        unique: true,
        validate: {
            validator: function(value){
                return validator.isEmail(value)
            },
            message: function(){
                return 'invalid email format'
            }
        }
	},
	phone:{
		type: String,
        unique: true,
        required: true, 
        minlength: 10,
        maxlength: 10,
        validate: {
            validator: function(value){
                return validator.isNumeric(value)
            }, 
            message: function(){
                return 'mobile should only numbers'
            }
        }
	},
	department:{
		type: Schema.Types.ObjectId,
		required:true,
		ref: 'Department'
    },
    user:{
        type: Schema.Types.ObjectId,
        ref: 'User'
    }
})


const Employee = mongoose.model('Employee', employeeSchema)
module.exports = Employee