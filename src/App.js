import './App.css';
import React, {Component} from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './component/Header';
import Home from './component/Home';
import Article from './component/Article';
import Accompany from './component/Accompany';
import Qna from './component/Qna';
import Login from './component/Login';
import Signup from './component/Signup';
import Mypage from './component/Mypage';
import Modify from './component/Modify';
// import Callback from './component/Callback';
import { useState, useEffect } from 'react';
import { UserProvider,useUserState } from './component/UserContext';

function App() {
  const [login, setLoginState] = useState(false);
  //const { user } = useUserState();
  const storedUserLoggedIninfo=localStorage.getItem('login_token');
  useEffect(()=>{
    if(storedUserLoggedIninfo===null){
      console.log('로그인 실패')
    }
    else{
      setLoginState(true)
      console.log("로그인 성공")
    }
  },[])

   return (
    //<UserProvider>
      <BrowserRouter>
            <div className="App">
              <Header login={login}/>
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/article" element={<Article />} />
                <Route path="/accompany" element={<Accompany />} />
                <Route path="/qna" element={<Qna />} />
                {/* <Route path="/callback" element={<Callback />} /> */}
                {/* <Route path='/logout' element={<LogoutButton/>}/> */}
                <Route path="/login" element={<Login setLoginState={setLoginState}/>} />
                <Route path="/signup" element={<Signup setLoginState={setLoginState}/>} />
                <Route path="/mypage" element={<Mypage setLoginState={setLoginState}/>} />
                <Route path="/modify" element={<Modify setLoginState={setLoginState}/>} />

              </Routes>
            </div>
          </BrowserRouter>
    //</UserProvider>
    
  );
}

export default App;
