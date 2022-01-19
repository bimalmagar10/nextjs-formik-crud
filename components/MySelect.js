import {useField} from 'formik';
import {
	FormControl,
	FormLabel,
	Select,
	FormErrorMessage
} from "@chakra-ui/react";

export default function MySelect({label,placeholder,...props}) {
	const [field,meta] = useField(props);
	return (
        <FormControl isInvalid={meta.error && meta.touched} isRequired>
        	<FormLabel htmlFor={props.name}>{label}</FormLabel>
        	<Select {...field} {...props} placeholder={placeholder}/>
        	<FormErrorMessage>{meta.error}</FormErrorMessage>
        </FormControl>
	);
}