import axios from "./customize-axios";
const fetchAllUser = () => {
  return axios.get("/report");
};

export { fetchAllUser };
