const mongoose = require('mongoose')
const Schema = mongoose.Schema
const validator = require('validator')

const customerSchema = new Schema({
	name:{
		type: String,
		required : true
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
    user:{
        type: Schema.Types.ObjectId,
        ref: 'User'
    },
	createdAt:{
		type:Date,
		required:true,
		default: Date.now()
	}
})

const Customer = mongoose.model('Customer', customerSchema)
module.exports = Customer