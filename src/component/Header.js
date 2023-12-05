import React, { useCallback, useState, useEffect } from 'react';
import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom';
import { useUserDispatch, useUserState } from './UserContext';
function Header(props) {

  let headerStyle ={
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '0 10px',
    backgroundColor: '#d4d4e5'
  };

  let linkFieldStyle = {
    display: 'flex',
    justifyContent: 'space-between',
    width: '400px'
  }
  const {Kakao}=window;
  const navigation = useNavigate();

  const { user } = useUserState();
  const dispatch = useUserDispatch();
  

  const onLogout=()=>{
    //if (Kakao.Auth.getAccessToken()){
    //  console.log(
    //    '카카오 인증 액세스 토큰이 존재합니다.',
    //    Kakao.Auth.getAccessToken(),
    //  );
    //  Kakao.Auth.logout(()=>{
    //     console.log('로그아웃 되었습니다.',Kakao.Auth.getAccessToken());
    //     sessionStorage.clear()
    //     //window.location.replace("/")    
    //     //this.props.history.push('/');
    //     navigation('/');
    //   })
    // }
    // else{


      // dispatch({
      //   type: "LOGOUT",
      // });
      localStorage.clear()
      window.location.replace("/")
      //navigation('/');
      console.log("로그아웃 했습니다.")


    //}
  }

  return (
    <nav id="header" style={headerStyle}>
      <h1>
        <Link to={'/'}>가보자고</Link>
      </h1>
      {
        props.login
        ?
          (<div style={linkFieldStyle}>
            {/* <p>{user.userId}님 환영합니다.</p> */}
            <Link to={'/article'}>커뮤니티</Link>
            <Link to={'/accompany'}>동행</Link>
            <Link to={'/qna'}>Q&A</Link>
            <Link to={'/mypage'}>마이페이지</Link>
            <Link to={"/login"} onClick={onLogout}>로그아웃</Link>
          </div>
          ):
          (<div style={linkFieldStyle}>
            <Link to={'/article'}>커뮤니티</Link>
            <Link to={'/accompany'}>동행</Link>
            <Link to={'/qna'}>Q&A</Link>
            <Link to={'/login'}>로그인</Link>
            <Link to={'/signup'}>회원가입</Link>
          </div>)
      }
    </nav>
  );
}

export default Header;
