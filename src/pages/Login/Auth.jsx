import React, { useEffect } from "react";
import { useNavigate, useParams, useSearchParams } from "react-router-dom";
import { useDispatch } from "react-redux";
import { REQUEST_PROVIDER_REQUEST } from "../../reducers/user";

// function UserAuthTypeApi() {
//   return axios.get();
// }
// axios.defaults.withCredentials = true;

const Auth = () => {
  const dispatch = useDispatch();
  const nav = useNavigate();
  const [searchParams] = useSearchParams();
  const code = searchParams.get("code");
  const { provider } = useParams();
  console.log(code, "code");
  console.log("very good", provider);

  useEffect(() => {
    // sss();
    console.log("eff");
    dispatch({
      type: REQUEST_PROVIDER_REQUEST,
      data: { provider: provider, code: code },
    });
    nav("/signup");
  }, []);

  return <div>good</div>;
};

export default Auth;
