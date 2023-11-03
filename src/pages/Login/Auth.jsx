import React, { useEffect } from "react";
import { useNavigate, useParams, useSearchParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { REQUEST_PROVIDER_REQUEST } from "../../reducers/userAction";

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
  const { redirectUrl, providerDone } = useSelector((state) => state.user);
  console.log(code, "code");
  console.log("very good", provider);

  useEffect(() => {
    console.log("eff");
    dispatch({
      type: REQUEST_PROVIDER_REQUEST,
      data: { provider: provider, code: code },
    });
    if (providerDone && redirectUrl === "/") {
      nav("/");
    } else {
      nav("/signup");
    }
  }, [providerDone]);

  return <div>loading...</div>;
};

export default Auth;
