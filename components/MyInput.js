import {useState} from "react";
import {
	InputGroup,
	Input,
	InputRightElement,
	IconButton
} from "@chakra-ui/react";
import {ViewIcon,ViewOffIcon} from "@chakra-ui/icons";
export default function MyInput({id,...field}){
	const [show,setShow] = useState(false);
	return (
		<InputGroup>
			<Input 
   			  id={id}
   			  {...field}
			  type={show ? 'text' :'password'}
			  placeholder={id === "password" ? 'Enter password' :'Confirm password'}
			/>
			<InputRightElement width="50px">
			   <IconButton 
				   size="md" 
				   variant="link" 
				   icon={show ?<ViewIcon/>:<ViewOffIcon/>}
				   onClick={() => setShow(!show)}
			   />
			</InputRightElement>
		</InputGroup>
	);
}