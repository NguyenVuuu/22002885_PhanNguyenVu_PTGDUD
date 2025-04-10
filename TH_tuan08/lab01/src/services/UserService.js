import axios from "axios";

const fetchAllUser = () => {
  return axios.get("https://67ec9394aa794fb3222e224b.mockapi.io/report");
};

export { fetchAllUser };
