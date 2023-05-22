import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './component/Header';
import Home from './component/Home';
import Login from './component/Login';
import Signup from './component/Signup';
import Mypage from './component/Mypage';
import Content from './component/Content';
import PostList from './component/PostList';
import { useState } from 'react';

function App() {
  const [login, setLoginState] = useState(undefined);

  return (
    <BrowserRouter>
      <div className="App">
        <Header login={login}/>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/articles" element={<PostList category='articles'/>} />
          <Route path="/articles/:id" element={<Content />} />
          <Route path="/accompany" element={<PostList category='accompany' />} />
          <Route path="/accompany/:id" element={<Content />} />
          <Route path="/qna" element={<PostList category='qna' />} />
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
