const mongoose = require('mongoose')
const Schema = mongoose.Schema

const ticketSchema = new Schema({
	code:{
		type:String,
		required: true
	},
	createdAt:{
		type:Date,
		default: Date.now
	},
	customer:{
		type:Schema.Types.ObjectId,
		ref:'Customer'
	},
	department:{
		type:Schema.Types.ObjectId,
		ref:'Department'
	},
	employees:{
		type:
		[
			{
				type:Schema.Types.ObjectId,
				ref: 'Employee'
			}
		]
	},
	user:{
		type: Schema.Types.ObjectId,
		ref: 'User'
	},
	message:{
		type:String
	},
	priority:{
		type:String
	},
	isResolved:{
		type:Boolean,
		default:false
	}
})

const Ticket = mongoose.model('Ticket', ticketSchema)
module.exports  = Ticket