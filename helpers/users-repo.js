import * as fs from 'fs';
let users = require('/data/db.json');

function getAll() {
    return users;
}

function create({title,firstName,lastName,email,role,password,address}){
	const user = {title,firstName,lastName,email,role,password,address};
    
    //validate unique users
    if(users.find(x => x.email === user.email))
    	throw `User with email ${user.email} already exists`;

    //create a new id
    user.id = users.length ?Math.max(...users.map(x => x.id)) + 1:1;

    //set date created and updated
    user.dateCreated = new Date().toISOString();
    user.dateUpdated = new Date().toISOString();

    users.push(user);
    saveUser();


}
function _delete(id){
    users = users.filter(user => user.id.toString() !== id.toString())
    saveUser();
}

function getById(id) {
   return users.find(user => user.id.toString() === id.toString());
}

function update(id,{title,firstName,lastName,email,address,role,password}){
    const params = {title,firstName,lastName,email,address,role,password};
    const user = users.find(x => x.id.toString() === id.toString());
    
    if((params.email !== user.email) && users.find(x => x.email === params.email))
    	throw `User with ${params.email} already exists!!!`;

    if(!params.password){
    	delete params.password;
    }
	
    user.dateUpdated = new Date().toISOString();

    Object.assign(user,params);
    saveUser();

}

function saveUser(){
	fs.writeFileSync('data/db.json',JSON.stringify(users,null,4));
}

const usersRepo = {
	getAll,
	create,
	getById,
	update,
	delete:_delete
}; 

export default usersRepo;