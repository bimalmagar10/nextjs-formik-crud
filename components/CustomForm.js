import {useEffect,useState} from "react";
import {Form,Field} from "formik";
import {useRouter} from "next/router";
import {
	SimpleGrid,
	FormControl,
	FormLabel,
	Input,
	FormErrorMessage,
	HStack,
	Button,
	Box,
	Heading,
	Text,
	VStack
} from "@chakra-ui/react";
import MySelect from "./MySelect";
import MyInput from "./MyInput";
import {formFields} from "../helpers/fields";

export default function CustomForm(props) {
	const router = useRouter();
	const [user,setUser] = useState({});
	const [showPassword,setShowPassword] = useState(false);

	useEffect(() =>{
		if(!props.isAddMode) {
			const fields = ["title","firstName","lastName","role","email","address"];
			fields.forEach(field => props.setFieldValue(field,props.user[field],false));
			setUser(props.user);
		}
	},[]);
	return (
		<Form>
		    <SimpleGrid columns={2} spacingX="50px" spacingY="10px" mb="30px">
			    <MySelect name="title" label="Title" placeholder="Choose title">
			    	<option value="Mr">Mr</option>
			    	<option value="Mrs">Mrs</option>
			    	<option value="Ms">Miss</option>
			    </MySelect>
			    <MySelect name="role" label="Role" placeholder="Choose Role">
			    	<option value="Admin">Admin</option>
			    	<option value="User">User</option>
			    </MySelect>
			    {
			    	formFields.map(({label,name},index) => (
			    		<Field name={name} key={index}>
					    	{({field,form}) => (
					    		<FormControl isInvalid={form.errors[name] && form.touched[name]} isRequired={(!props.isAddMode && (name==="password" || name === "confirmPassword"))? false : true}>
					    			<FormLabel htmlFor={name}>{label}</FormLabel>
					    			{
					    				(name === "password" ||
					    				name === "confirmPassword") ?
					    				(<MyInput id={name} {...field}/>) :
					    				(<Input id={name} {...field}/>)

					    			}
					    			<FormErrorMessage>{form.errors[name]}</FormErrorMessage>
					    		</FormControl>
					    	)}
			    		</Field>	
			    	))
			    }
			    
		    </SimpleGrid>
		    {
		    	!props.isAddMode && (
		    		<VStack justify="center" mb="50px">
			    		<Box textAlign="center">
			    			<Heading fontSize="20px">Change password</Heading>
			    			<Text fontSize="15px">Please leave blank to keep the same password.</Text>
			    		</Box>
			    
			    	{
				     	(!showPassword ?(
				     		<Box justifySelf="flex-start">
				     		    Password - &nbsp;
					     		<Button 
					     		variant="link" 
					     		colorScheme="blue"
					     		onClick={() => setShowPassword(!showPassword)}
					     		>
					    	       Show
					    		</Button>
				    		</Box>
				     	):(
				     	<Box justifySelf="flex-start">
				     	    Password - &nbsp;
				     		<span>{user.password}</span>
				     	</Box>
				     	))
			     	}
			       
		    		</VStack>

		    	) 
		    }
		    
		    <HStack>
			    <Button 
			        size="sm"
			    	type="submit"
			    	isLoading={props.isSubmitting}
			    	colorScheme="teal"
			    >
			    	Submit
			    </Button>
			    <Button  
				    size="sm" 
				    variant="link" 
				    colorScheme="blue"
				    onClick={() => router.push("/users")}
				>
			    	Cancel
			    </Button>
		    </HStack>
		</Form>
	);
}


