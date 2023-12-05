import {useState, useLocation, useEffect, useCallback} from "react";
import React from "react";
import {useNavigate} from "react-router-dom";
import { Link } from 'react-router-dom'
import { useUserState, useUserDispatch } from "./UserContext";
import KaKaoLogin from 'react-kakao-login';
import useInput from '../hooks/useInput';

const Login=() =>{
  const navigation = useNavigate();

  const[email, onChangeEmail, setEmail]=useInput("");
  const[password, onChangePassword, setPassword]=useInput("");

  const { userList } = useUserState();
  const dispatch = useUserDispatch();

  const onReset = useCallback(() => {
    setEmail("");
    setPassword("");
  }, [setEmail, setPassword]);

  const onLogin = () => {
    if (!email || !password) {
      alert("모든 값을 정확하게 입력해주세요");
      return;
    }

    console.log('click login')
    console.log('Email: ',email)
    console.log('Password: ',password)
    fetch('http://gabojago.shop/auth/login',{
      method:'POST',
      headers:{ 'Content-Type': 'application/json; charset=utf-8' },
      body:JSON.stringify({
          email:email,
          password:password,
      }),
    })
    .then(response=>response.json())
    .then(response=>{
      console.log(response);
      console.log("------------- 로그인 성공")
      window.localStorage.setItem('login_token', response.token);
      //navigation("/");
      window.location.replace("/")
      // dispatch({
      //   type: "LOGIN",
      //   userId: email,
      // });
      //alert("로그인");
      //onReset();
    })

   
  };
  //-------------------------------------------------------
  
  // const { userList } = useUserState();
  // const dispatch = useUserDispatch();

  //   const [email, setEmail]=useState("");
  //   const [password,setPassword]=useState("");                                                                                                                                                                                                                                                                                                                                                                                       
  //   //오류 메세지 상태 저장
  //   const [emailMessage, setEmailMessage]=useState("");
  //   const [passwordMessage, setPasswordMessage]=useState("");
  //   //유효성 검사
  //   const[isEmail, setIsEmail]=useState(false);
  //   const[isPassword, setIsPassword]=useState(false);


//----------------------------------------------------------

    // const location = useLocation();
    // const params = new URLSearchParams(location.search);
    // const AUTH_CODE = params.get('code');
  


    // const handleEmail=(e)=>{
    //   setEmail(e.target.value)
    // }
    // const handlePassword=(e)=>{
    //   setPassword(e.target.value)
    // }

    // const onClickLogin=()=>{
    //   dispatch({
    //     type: "LOGIN",
    //     userId: email,
    //   });
    //   //onReset();

      // if(!email || !password){
      //   alert("모든 값을 정확하게 입력해주세요");
      //   return;
      // }
      // console.log('click login')
      // console.log('Email: ',email)
      // console.log('Password: ',password)
      // fetch('http://gabojago.shop/auth/login',{
      //   method:'POST',
      //   headers:{ 'Content-Type': 'application/json; charset=utf-8' },
      //   body:JSON.stringify({
      //       email:email,
      //       password:password,
      //   }),
      // })
      // .then(response=>response.json())
      // .then(response=>{
      //   console.log(response);
      //   console.log("------------- 로그인 성공")
      //   sessionStorage.setItem('login_token', response.ACCESS_TOKEN);
      //   //navigation("/");
      //   window.location.replace("/")
      // })


    // }

    //  카카오 로그인
  
    // const Rest_api_key="fdf7ad6fb2d6f952367db1a51326f792"
    // const redirect_uri='http://localhost:3000/auth' 
    // const kakaoURL=`https://kauth.kakao.com/oauth/authorize?client_id=${Rest_api_key}&redirect_uri=${redirect_uri}&response_type=code`
    const kakaoClientId="26288952b543c975b160fb9f23848d86"
    const kakoOnSuccess=async(data)=>{
      console.log(data)
      // const login_token=data.response.id_token
      localStorage.setItem('login_token',data.response.id_token)
      window.location.replace("/")
      //navigation('/');
      // dispatch({
      //   type: "LOGIN",
      //   userId: email,
      // });
    }
    const kakaoOnFailure=(error)=>{
      console.log(error);
    };
    // const onhandleLogin=()=>{
    //   //oauth 요청 url
    //   window.location.href=kakaoURL
    //   const code=new URL(window.location.href).searchParams.get("code");
    // }
    
     



    return (
    <>
        <h3>Login</h3>
        <div className="form">
        <div className="form-el">
            <label htmlFor="email">Email</label> <br />
            <input
            id="email"
            name="name"
            value={email}
            onChange={onChangeEmail}
            placeholder="이메일을 입력해주세요"
            required
            />
            {/* <p className="message">{emailMessage}</p> */}
        </div>
    
        <div className="form-el">
            <label htmlFor="password">Password</label> <br />
            <input
            id="password"
            name="password"
            value={password}
            placeholder="비밀번호를 입력해주세요"
            onChange={onChangePassword}
            required
            />
            {/* <p className="message">{passwordMessage}</p> */}
        </div>
        
        <br />
        <br />
        <button type="submit" value="로그인" onClick={onLogin} >login</button>
        {/* onClick={StateChange} */}
        </div>
        <br/>
        <button type="submit">sign up</button>
        <br/>
        {/* <button onClick={onhandleLogin}>카카오로그인</button> */}
        <KaKaoLogin
          token={kakaoClientId}
          onSuccess={kakoOnSuccess}
          onFail={kakaoOnFailure}
          />
        
        </>
    );
};

export default Login;

                // console.log("response.data.eamil:: ",response.email)
                // console.log("response.data.password :: ",response.password)
                // if (response.data.email===undefined){
                //   console.log('================')
                //   alert('email 일치 아님')
                // }
                // else if(response.data.email===null){
                //   console.log("============")
                //   alert('비밀번호 일치 아님')
                // }
                // else if (response.data.email===email){

                //서버에서 넘어오는 응답에 이메일이랑 패스워드가 없음.
                  
