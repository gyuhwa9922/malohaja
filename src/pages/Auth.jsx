import React, { useEffect } from "react";
import axios from "axios";
import { useParams, useSearchParams } from "react-router-dom";

// function UserAuthTypeApi() {
//   return axios.get();
// }
axios.defaults.withCredentials = true;

const Auth = () => {
  const [searchParams] = useSearchParams();
  const code = searchParams.get("code");
  const { provider } = useParams();
  console.log(code, "code");
  console.log("very good", provider);
  const sss = async () => {
    const ww = await axios.get(
      `http://172.20.10.3:8080/api/v1/auth/${provider}?code=${code}`
    );
    console.log("Www", ww);
  };

  useEffect(() => {
    sss();
  }, []);

  return <div></div>;
};

export default Auth;
