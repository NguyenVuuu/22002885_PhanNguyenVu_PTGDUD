import axios from "axios";

const instance = axios.create({
  baseURL: "https://67ec9394aa794fb3222e224b.mockapi.io",
});

instance.interceptors.response.use(
  function (response) {
    return response;
  },
  function (error) {
    return Promise.reject(error);
  }
);

export default instance;
