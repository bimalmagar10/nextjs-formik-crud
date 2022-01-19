import {Formik} from "formik";
import {useRouter} from "next/router";
import userServices from '../helpers/user-services';
import CustomForm from "./CustomForm";
import * as Yup from "yup";
import {useToast} from "@chakra-ui/react";
AddEdit.title = 'Users - Add or Edit';
export default function AddEdit(props) {
	const user = props?.user;
    const isAddMode  = !user;
	const router = useRouter();
    const toast = useToast();

    //validationSchema defined
	const validate = Yup.object({
	title:Yup.string()
	.oneOf(['Mr','Mrs','Ms'],'Invalid title')
	.required('Required'),
	firstName:Yup.string()
	.max(20,'Should not be more than 20 characters long')
	.required('Required'),
	lastName:Yup.string()
	.max(20,'Should not be more than 20 characters long')
	.required('Required'),
	email:Yup.string()
	.email('Invalid email address')
	.required('Required'),
	role:Yup.string()
	.oneOf(['Admin','User'],'Invalid role type')
	.required('Required'),
	address:Yup.string()
	.required('Required'),
	password:Yup.string()
	.concat(isAddMode? Yup.string().required('Required') : null)
	.min(8,'Must be minimum 8 characters'),
	confirmPassword:Yup.string()
	.when('password',(password,schema) => {
		if(password || isAddMode) return schema.required('Required');
	})
	.oneOf([Yup.ref('password')],'Password must match')

});

	function handleSubmit(values,{setSubmitting}) {
 		isAddMode ? 
 		createUser(values,setSubmitting) : 
 		updateUser(user.id,values,setSubmitting);
	}

	function createUser(values,setSubmitting) {
		userServices.create(values).then(() => {
			toast({
				title:'User created successfully',
				description:`We've added a new ${values.role}`,
				variant:'top-accent',
				status:'success',
				duration:5000,
				isClosable:true
			})
			router.push('/users');
		}).catch(err => {
			toast({
				title:'An error occured',
				variant:'top-accent',
				status:'error',
				duration:4000,
				isClosable:true
			})
			setSubmitting(false);
		})
	}
	function updateUser(id,data,setSubmitting){
		userServices.update(id,data).then(() => {
			toast({
				title:`${data.role} updated successfully`,
				variant:'top-accent',
				status:'success',
				duration:5000,
				isClosable:true
			})
			router.push("/users");
		}).catch(err => {
			toast({
				title:'An error occured',
				variant:'top-accent',
				status:'error',
				duration:4000,
				isClosable:true
			})
			setSubmitting(false);
		})
	}

	return (
		<Formik
		   initialValues={{
		   	
		   }}
		   validationSchema={validate}
		   onSubmit={handleSubmit}

		>
			{({errors,isSubmitting,setFieldValue}) => {
				return isAddMode ? (
					<CustomForm
					  isAddMode={isAddMode}
					  isSubmitting={isSubmitting}
					/>
					):(
					<CustomForm
					  isAddMode={isAddMode}
					  isSubmitting={isSubmitting}
					  setFieldValue={setFieldValue}
					  user={user}
					/>
					);
			}}
		</Formik>
	);
}