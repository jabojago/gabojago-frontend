import React,{ useState, useEffect } from 'react';
import{useUserState} from "./UserContext";
import { Link } from 'react-router-dom'

function Mypage(props) {

  //const {user}=useUserState();
  const [loading, setLoading]=useState(true);
  const [users, setUsers]=useState([]);
  //const storedUserLoggedIninfo=localStorage.getItem('login_token');
  //console.log(localStorage.getItem("login_token"))

  useEffect(()=>{
    fetch('http://gabojago.shop/api/members/myInfo',{
      method:"GET",
      headers:{
        "Content-Type": 'application/json',
        //"Authorization": `Bearer ${localStorage.getItem("login_token")}`
        "Authorization": `Bearer ${window.localStorage.getItem("login_token")}`
      },
    })
    .then(response=>response.json())
    .then((users)=>{
      setUsers(users);
      setLoading(false);
      //console.log(users);
      //console.log(localStorage.getItem("login_token"))
    })
  },[]);

  return (
    <div className="App">
      Mypage<br/>
      <p>Email</p>
      <p>{users.email}</p>
      <p>nickname</p>
      <p>{users.nickname}</p>
      <p>phone number</p>
      <p>{users.phone}</p>

      <button>내가 쓴 글</button><br/>
      <button>내가 쓴 댓글</button><br/>
      {/* <button>회원정보 수정</button><br/> */}
      <Link to={'/modify'}>회원 정보 수정</Link><br/>
      <button>회원 탈퇴</button><br/>
    </div>
  );
}

export default Mypage;
