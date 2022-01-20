import {useState,useEffect} from 'react';
import {
	Table,
	Thead,
    Tbody,
    Th,
    Td,
    Tr,
    HStack,
    Button,
    Heading,
    Spinner
	} from "@chakra-ui/react";
import {EditIcon,DeleteIcon,AddIcon} from "@chakra-ui/icons";
import {useRouter} from "next/router";
import userServices from "../../helpers/user-services";
Users.title = "Users";
export default function Users() {
	const router = useRouter();
	const [users,setUsers] = useState([]);
	useEffect(() => {
		userServices.getAll().then(x => {
			setUsers(x);
		});
	},[]);
     
    function deleteUser(id) {
        setUsers(users.map(x => {
        	if(x.id === id) {x.isDeleting = true;}
        	return x;
        }));
        userServices.delete(id).then(() => {
        	setUsers(users => users.filter(x => x.id !== id));
        })
    }
	return (
		<>
	      	<Heading fontSize="25px" mb="10px">
	      		Users
	      	</Heading>
	      	<Button
	      	    mb="20px" 
	     		size="sm"
	      		rightIcon={<AddIcon/>} 
	      		colorScheme="green"
	      		onClick={(e) => {
	      			e.preventDefault();
	      			router.push("/users/add")
	      		}}
	      	>
	      	    Add User
	      	</Button>
	      	<Table>
 				<Thead>
 					<Tr>
 						<Th>Full Name</Th>
 						<Th>Role</Th>
 						<Th>Email</Th>
 						<Th>Actions</Th>
 					</Tr>
 				</Thead>
 				<Tbody>
 				            {
 				            	users && !users.length && (
 				            		<pre>No any users</pre>
 				            	)
 				            }
 				            {
 				            	!users && (
 				            		<Spinner color="red.500" size="xl"/>
 				            	)
 				            }
 				    		{
 				    			users.map((user,index) => (
 				    				<Tr key={index}>
				 						<Td>{user.firstName}{" "}{user.lastName}</Td>
				 						<Td>{user.role}</Td>
				 						<Td>{user.email}</Td>
				 						<Td>
				 							<HStack spacing="10px">
				 							    <Button 
					 							    colorScheme="facebook" 
					 							    leftIcon={<EditIcon/>}
					 							    onClick={() => router.push(`/users/edit/${user.id}`)}
				 							    >Edit</Button>
				 							    <Button 
					 							    colorScheme="red" 
					 							    rightIcon={<DeleteIcon/>}
					 							    onClick={() => deleteUser(user.id)}
				 							    >Delete</Button>
				 							</HStack>
				 						</Td>
 									</Tr>
 				    			))
 				    		}
 				</Tbody>
	      	</Table>
      	</>
	);
}