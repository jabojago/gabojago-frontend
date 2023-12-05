// import { useEffect } from "react";
// import { useNavigate } from "react-router-dom";
// import axios from "axios";
// import qs from "qs";

// const Callback = () => {
//   const REST_API_KEY = 'fdf7ad6fb2d6f952367db1a51326f792';
//   const REDIRECT_URI = "http://localhost:3000/callback";
//   const CLIENT_SECRET = 'pLJ9Zb5Hv6LLrhxzLGZCKnO3X8yxiyIn';
//   const code = new URL(window.location.href).searchParams.get("code");

//   const navigate = useNavigate();

//   const getToken = async () => {
//   //쿼리 문자열은 URL에서 ? 뒤에 붙는 값을 의미하며 그 쿼리 문자열을 전달하기 위하여 qs를 썼습니다.
//     const payload = qs.stringify({
//       grant_type: "authorization_code",
//       client_id: REST_API_KEY,
//       redirect_uri: REDIRECT_URI,
//       code: code,
//       client_secret: CLIENT_SECRET,
//       // 이것들은 kakao 측에서 정해준 형식이므로 key값은 꼭 똑같이 써야합니다!
//     });

//     try {
//       const res = await axios.post(
//         "https://kauth.kakao.com/oauth/token", // 마찬가지 입니다! 토큰을 받고싶으면 이렇게 써야함!
//         payload
//       );

//       fetch("http://gabojago.shop/oauth2/authorization/kakao", {
//       //백엔드에게 토큰을 전달하기 위함입니다.
//         headers: {
//           Authorization: res.data.access_token,
//         },
//       });

//       window.Kakao.init(REST_API_KEY);
//       window.Kakao.Auth.setAccessToken(res.data.access_token);
//       navigate("/");
//       //토큰을 받으면 메인으로 갈 수 있게 navigate를 썼습니다.
//     } catch (err) {}
//   };

//   useEffect(() => {
//     getToken();
//   });

//   return null;
// };
// export default Callback;