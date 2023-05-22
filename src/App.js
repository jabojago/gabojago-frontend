import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './component/Header';
import Home from './component/Home';
import Article from './component/Article';
import Accompany from './component/Accompany';
import Qna from './component/Qna';
import Login from './component/Login';
import Signup from './component/Signup';
import Mypage from './component/Mypage';
import Content from './component/Content';
import { useState } from 'react';

function App() {
  const [login, setLoginState] = useState(undefined);

  return (
    <BrowserRouter>
      <div className="App">
        <Header login={login}/>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/articles" element={<Article />} />
          <Route path="/articles/:id" element={<Content />} />
          <Route path="/accompany" element={<Accompany />} />
          <Route path="/accompany/:id" element={<Content />} />
          <Route path="/qna" element={<Qna />} />
          <Route path="/qna/:id" element={<Content />} />
          <Route path="/login" element={<Login setLoginState={setLoginState}/>} />
          <Route path="/signup" element={<Signup setLoginState={setLoginState}/>} />
          <Route path="/mypage" element={<Mypage setLoginState={setLoginState}/>} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
