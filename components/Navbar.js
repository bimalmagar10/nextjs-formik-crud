import {
	Box,
	Link as ChakraLink,
	Stack
} from "@chakra-ui/react";
import {useRouter} from "next/router"
export default function Navbar(){
	const router = useRouter();

	return (
		<Box bg="gray.300" p="30px">
		   <Stack direction="row" justify="center" spacing="20px">
			<ChakraLink 
			className={router.pathname === "/" ? "active" :null} 
			onClick={(e) => {
				e.preventDefault();
				router.push("/")
			}}>Home</ChakraLink>
			<ChakraLink 
			className={router.pathname.includes("/users") ? "active" :null}  
			onClick={(e) => {
				e.preventDefault();
				router.push("/users")}
			}>Users</ChakraLink>	
			</Stack>
		</Box>
	);
}