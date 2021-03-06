import fetchWrapper from "./fetch-wrapper";
const apiUrl = process.env.NODE_ENV === 'development' ?
'http://localhost:3000/api': //replace your own live url here
'http://localhost:3000/api'; // replace your own live url here e.g "https://72e3h.sse.codesandbox.io/api"
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