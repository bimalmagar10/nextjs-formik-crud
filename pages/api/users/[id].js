import usersRepo from '../../../helpers/users-repo';
export default function handler(req,res){
	switch(req.method){
		case 'GET':
		return getUserById();
		case 'DELETE':
		return deleteUser();
		case 'PUT':
		return updateUser();
		default:
		return res.status(405).end(`Method ${req.method} not allowed!!`);
	}
	function deleteUser(){
		usersRepo.delete(req.query.id);
		return res.status(200).json({});
	}
	function getUserById() {
		const user = usersRepo.getById(req.query.id);
		return res.status(200).json(user);
	}
	function updateUser(){
		try {
			usersRepo.update(req.query.id,req.body);
			return res.status(200).json({});
		}catch(error){
			return res.status(400).json({message:error});
		}
	}
}