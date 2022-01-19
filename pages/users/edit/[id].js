import AddEdit from "../../../components/AddEdit";
import userServices from "../../../helpers/user-services";
export default AddEdit;

export async function getServerSideProps({params}) {
  const user = await userServices.getById(params.id);
  return {
  	props:{user}
  };
}