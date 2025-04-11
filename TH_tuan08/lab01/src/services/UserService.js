import axios from "./customize-axios";
const fetchAllUser = () => {
  return axios.get("/report");
};

const postCreateUser = (name, company, status) => {
  // Đảm bảo tên tham số khớp với tên trường trong request body
  return axios.post("/report", { customerName: name, company, status });
};

export { fetchAllUser, postCreateUser };
