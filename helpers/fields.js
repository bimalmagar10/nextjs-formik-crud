const formFields = [
	{
		label:'First Name',
		name:'firstName'
	},
	{
		label:'Last Name',
		name:'lastName'
	},
	{
		label:'Email',
		name:'email'
	},
	{
		label:'Address',
		name:'address'
	},
	{
		label:'Password',
		name:'password'
	},
	{
		label:'Confirm Password',
		name:'confirmPassword'
	}
];
const headLabel = [
	{
		route:'/',
		label:'Home'
	},
	{
		route:'/users',
		label:'Users'
	},
	{
		route:'/users/add',
		label:'Users Add'
	},
	{
		route:'/users/edit',
		label:'Users - Edit'
	}
];

const path = require('path');
const dataPath = path.join(__dirname,"data/db.json");


export {formFields,headLabel,dataPath};