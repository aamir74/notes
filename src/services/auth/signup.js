import axios from "axios";

const signup = async (user) => {
  try {
    return axios.post("/api/auth/signup", user);
  } catch (err) {
    console.log("err", err);
    throw err;
  }
};

export { signup };
