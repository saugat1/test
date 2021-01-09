import Axios from "axios";
let axiosConfig = Axios.create({
  baseURL: "https://api.themoviedb.org/3/",
});

export default axiosConfig;
