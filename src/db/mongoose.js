const mongoose = require('mongoose')

mongoose.connect('mongodb://127.0.0.1:27017/task-manager-api', {
	useNewUrlParser: true,
	useCreateIndex: true
})

const User = mongoose.model('User', {
	name: {
		type: String
	},
	age: {
		type: Number
	}
})

const Task = mongoose.model('Task', {
	description: {
		type: String
	},
	completed: {
		type: Boolean
	}
})

const me = new User({
	name: 'Joshua',
	age: 'Mike'
})

const task = new Task({
	description: 'Clean the house',
	completed: false
})

// me.save().then(() => {
// 	console.log(me)
// }).catch((error) => {
// 	console.log('Error! ', error)
// })

task.save().then((task) => {
	console.log(task)
}).catch((error) => {
	console.log('Error! ', error)
})