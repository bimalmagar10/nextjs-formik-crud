import usersRepo from "../../../helpers/users-repo";

export default function handler(req,res) {
	switch (req.method) {
		case 'GET':
		return getUsers();
		case 'POST':
		return createUsers();
		default:
		return res.status(405).end(`Method ${req.method} not allowed`);
	}

	function getUsers() {
		const users = usersRepo.getAll();
		return res.status(200).json(users);
	}
	function createUsers() {
		try {
			usersRepo.create(req.body);
			return res.status(200).json({});
		} catch(err) {
			return res.status(400).json({message:err});
		}
	}
}