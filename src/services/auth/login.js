import axios from "axios";

const login = async (user) => {
  try {
    return axios.post("/api/auth/login", user);
  } catch (err) {
    console.log("err", err);
    throw err;
  }
};

export { login };
