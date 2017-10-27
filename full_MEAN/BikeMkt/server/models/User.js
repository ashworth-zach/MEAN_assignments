var mongoose = require('mongoose');
var Schema = mongoose.Schema;

// TODO:
// 1) Add pre function to password to encrypt w/ bcrypt
// 2) Add validation to ensure against duplicate email addresses ("unique: true" is not enough!)

var UserSchema = new mongoose.Schema({
	first_name: {
		type: String,
		required: [true, "Please enter a first name."],
		validate: {
			validator: function(value){
				return /^[A-z]+$/.test(value)
			},
			message: "Please enter a real first name, doofus."
		}
	},

	last_name: {
		type: String,
		required: [true, "Please enter a last name."],
		validate: {
			validator: function(value){
				return /^[A-z]+$/.test(value)
			},
			message: "Please enter a real last name, goofus."
		}
	},

	email:{
		type: String,
		required: [true, "Please enter a valid email address."],
		validate: {
			validator: function(value){
				//return /\A[^@]+@([^@\.]+\.)+[^@\.]+\z/.test(value);
				return /@/.test(value)
			},
			message: "Please enter a valid email address."
		}
	},

	password:{
		type: String,
		required: [true, "Password must contain at least 1 number, Uppercase Letter, and special character."],
		minlength: 8,
		maxlength: 120,
		validate: {
			validator: function(value){
				return /^([a-zA-Z0-9@*#]{4,24})/.test( value );
			},
			message: "Password must contain at least 1 number, Uppercase Letter, and special character."
		}
	},

	bikes:[{type: Schema.Types.ObjectId, ref: 'Bike'}]
})
mongoose.model('User', UserSchema);