import { useState } from 'react';
import { Link } from 'react-router-dom'

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

  return (
    <nav id="header" style={headerStyle}>
      <h1>
        <Link to={'/'}>가보자고</Link>
      </h1>
      {
        props.login
          ?
          <div style={linkFieldStyle}>
            <Link to={'/article'}>커뮤니티</Link>
            <Link to={'/accompany'}>동행</Link>
            <Link to={'/qna'}>Q&A</Link>
            <Link to={'/mypage'}>마이페이지</Link>
          </div>
          :
          <div style={linkFieldStyle}>
            <Link to={'/article'}>커뮤니티</Link>
            <Link to={'/accompany'}>동행</Link>
            <Link to={'/qna'}>Q&A</Link>
            <Link to={'/login'}>로그인</Link>
            <Link to={'/signup'}>회원가입</Link>
          </div>
      }
    </nav>
  );
}

export default Header;
