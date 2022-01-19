import fetchWrapper from "./fetch-wrapper";
const apiUrl = process.env.NODE_ENV === 'development' ?'http://localhost:3000/api' : 'https://nextjs-formik-crud-r7ayxmgnp-bimalmagar10.vercel.app/api';
const baseUrl = `${apiUrl}/users`;

function getAll() {
	return fetchWrapper.get(baseUrl);
}

function create(params) {
	return fetchWrapper.post(baseUrl,params);
}
function _delete(id) {
	return fetchWrapper.delete(`${baseUrl}/${id}`);
}

function getById(id) {
   return fetchWrapper.get(`${baseUrl}/${id}`);
}
function update(id,params) {
   return fetchWrapper.put(`${baseUrl}/${id}`,params);
}

const userServices = {
	getAll,
	create,
	getById,
	update,
	delete:_delete
};
export default userServices;