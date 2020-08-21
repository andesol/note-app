import axios from "axios";

const baseUrl = "/api/notes";

let token = null;

const setToken = newToken => {
  token = `bearer ${newToken}`;
};

const getAll = () => {
  return axios.get(baseUrl).then(res => res.data);
};

const create = newObject => {
  const config = {
    headers: { Authorization: token }
  };
  return axios.post(baseUrl, newObject, config).then(res => res.data);
};

export default { getAll, create, setToken };
