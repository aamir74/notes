import axios from "axios";

const removeFromArchive = async (id, note) => {
  //   const token = localStorage.get("auth-token");
  const token =
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiIzOTFiYjM4MS05MDU0LTRlMzktYTQxNS0wMzFjOTJhMTM0N2QiLCJlbWFpbCI6ImFhbWlyQGdtYWlsLmNvbSJ9.Es_WoR1NERFopzr5Uk3BP8RkNuVTukAFACUewSwjR10";
  const response = await axios.post(
    `/api/archives/restore/${id}`,
    { note },
    {
      headers: { authorization: token },
    }
  );
  return response;
};
export { removeFromArchive };
