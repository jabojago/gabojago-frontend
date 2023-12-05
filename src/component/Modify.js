//import {NextPage} from "next";
import {useState, useCallback,useEffect} from "react";
//import Button from "../components/lib/button"
import React from "react";
import { useNavigate } from "react-router-dom";
import {useUserDispatch} from "./UserContext";
import useInput from "../hooks/useInput"
const Modify=() =>{

    const dispatch = useUserDispatch();
    const history=useNavigate();

    //초기값 세팅
    const [email, onChangeEmail, setEmail]=useInput("");
    // const[name, onChangename, setName]=useInput("");
    const[newNickname, onChangenewNickname, setnewNickname]=useInput("");
    const[newPassword, onChangePassword, setPassword]=useInput("");
    const[passwordConfirm, onChangePasswordConfirm, setpasswordConfirm]=useInput("");
    // const[birth, onChangeBirth, setBirth]=useInput("");
    const[newPhone, onChangenewPhone, setnewPhone]=useInput("");
    const [errorMessage, setErrorMessage] = useState({
        emailError: "",
        // nameError: "",
        newNicknameError:"",
        passwordError: "",
        passwordConfirmError: "",
        // birthError:"",
        newPhoneError:"",
      });
    const {emailError, passwordError, passwordConfirmError, newNicknameError, newPhoneError} = errorMessage;

    const inputRegexs = {
        emailReg:  /^[A-Za-z0-9_]+[A-Za-z0-9]*[@]{1}[A-Za-z0-9]+[A-Za-z0-9]*[.]{1}[A-Za-z]{1,3}$/,
        passwordReg: /^(?=.*[a-zA-Z])(?=.*[!@#$%^*+=-])(?=.*[0-9]).{8,25}$/,
      };
      const valemailationCheck = useCallback(
        (input, regex) => {
          let isValemailate = false;
          if (input === "") {
            isValemailate = false;
          } else if (regex.test(input)) {
            isValemailate = true;
          } else {
            isValemailate = false;
          }
          return isValemailate;
        },
        [newPassword, email]
      );

    const onReset = useCallback(() => {
        setEmail("");
        setPassword("");
        setpasswordConfirm("");
        //setName("");
        setnewNickname("");
        //setBirth("");
        setnewPhone("");
      }, [setEmail, setPassword, setpasswordConfirm,setnewNickname,setnewPhone]);
      
      /* 아이디 체크 */
      useEffect(() => {
        if (valemailationCheck(email, inputRegexs.emailReg) || email === "") {
          setErrorMessage({
            ...errorMessage,
            emailError: "",
          });
        } else {
          setErrorMessage({
            ...errorMessage,
            emailError: "이메일 형식으로 입력해 주세요",
          });
        }
      }, [email]);
    
      /* 비밀번호 체크 */
      useEffect(() => {
        if (valemailationCheck(newPassword, inputRegexs.passwordReg) || newPassword === "") {
          setErrorMessage({
            ...errorMessage,
            passwordError: "",
          });
        } else {
          setErrorMessage({
            ...errorMessage,
            passwordError:
              "숫자+영문자+특수문자 조합으로 8자리 이상 입력해주세요!",
          });
        }
      }, [newPassword]);
      
      /* 비밀번호 확인 체크 */
      useEffect(() => {
        if (newPassword === passwordConfirm || passwordConfirm === "") {
          setErrorMessage({
            ...errorMessage,
            passwordConfirmError: "",
          });
        } else {
          setErrorMessage({
            ...errorMessage,
            passwordConfirmError: "비밀번호 확인이 일치하지 않습니다.",
          });
        }
      }, [passwordConfirm]);
    
      const onModifyPassword=()=>{
        fetch('http://gabojago.shop/api/members/password',{
            method:'POST',
            headers:{ 'Content-Type': 'application/json; charset=utf-8' },
            body:JSON.stringify({
                newPassword:newPassword,
            })
        })
        .then(res=>res.json())
        .then(data=>{console.log(data);})
        alert("비밀번호 변경 완료");
        history('/');
    };
    const onModifynewNickname=()=>{
        fetch('http://gabojago.shop/api/members/nickname',{
            method:'POST',
            headers:{ 'Content-Type': 'application/json; charset=utf-8' },
            body:JSON.stringify({
                newnewNickname:newNickname,
            })
        })
        .then(res=>res.json())
        .then(data=>{console.log(data);})
        alert("닉네임 변경 완료");
        history('/');
    };
    const onModifynewPhone=()=>{
        fetch('http://gabojago.shop/api/members/phone',{
            method:'POST',
            headers:{ 'Content-Type': 'application/json; charset=utf-8' },
            body:JSON.stringify({
                newnewPhone:newPhone,
            })
        })
        .then(res=>res.json())
        .then(data=>{console.log(data);})
        alert("전화번호 변경 완료");
        history('/');
    };
    // const onChangeEmail=(e)=>{
    //     const currentEmail=e.target.value;
    //     setEmail(currentEmail);
    //     const emailRegExp=
    //         /^[A-Za-z0-9_]+[A-Za-z0-9]*[@]{1}[A-Za-z0-9]+[A-Za-z0-9]*[.]{1}[A-Za-z]{1,3}$/;
    //     if (!emailRegExp.test(currentEmail)) {
    //         setEmailMessage("이메일의 형식이 올바르지 않습니다!");
    //         setIsEmail(false);
    //         } else {
    //         setEmailMessage("사용 가능한 이메일 입니다.");
    //         setIsEmail(true);
    //         }
    // };

    // const onChangeName = (e) => {
    //     const currentName = e.target.value;
    //     setName(currentName);
     
    //     if (currentName.length < 2 || currentName.length > 5) {
    //       setNameMessage("이름은 2글자 이상 5글자 이하로 입력해주세요!");
    //       setIsName(false);
    //     } else {
    //       setNameMessage("사용가능한 이름 입니다.");
    //       setIsName(true);
    //     }
    //   };

    // const onChangenewNickname = (e) => {
    // const currentnewNickname = e.target.value;
    // setnewNickname(currentnewNickname);
    
    // if (currentnewNickname.length < 2 || currentnewNickname.length > 10) {
    //     setnewNicknameMessage("닉네임은 2글자 이상 10글자 이하로 입력해주세요!");
    //     setIsnewNickname(false);
    // } else {
    //     setnewNicknameMessage("사용가능한 닉네임 입니다.");
    //     setIsnewNickname(true);
    // }
    // };

    // const onChangePassword = (e) => {
    // const currentPassword = e.target.value;
    // setPassword(currentPassword);
    // const passwordRegExp =
    //     /^(?=.*[a-zA-Z])(?=.*[!@#$%^*+=-])(?=.*[0-9]).{8,25}$/;
    // if (!passwordRegExp.test(currentPassword)) {
    //     setPasswordMessage(
    //     "숫자+영문자+특수문자 조합으로 8자리 이상 입력해주세요!"
    //     );
    //     setIsPassword(false);
    // } else {
    //     setPasswordMessage("안전한 비밀번호 입니다.");
    //     setIsPassword(true);
    // }
    // };

    // const onChangePasswordConfirm = (e) => {
    // const currentPasswordConfirm = e.target.value;
    // setPasswordConfirm(currentPasswordConfirm);
    // if (password !== currentPasswordConfirm) {
    //     setPasswordConfirmMessage("똑같은 비밀번호를 입력해주세요.");
    //     setIsPasswordConfirm(false);
    // } else {
    //     setPasswordConfirmMessage("똑같은 비밀번호를 입력했습니다.");
    //     setIsPasswordConfirm(true);
    // }
    // };

    // const onChangeBirth = (e) => {
    // const currentBirth = e.target.value;
    // setBirth(currentBirth);
    // };

    // const onChangenewPhone = (getNumber) => {
    // const currentnewPhone = getNumber;
    // setnewPhone(currentnewPhone);
    // const newPhoneRegExp = /^01([0|1|6|7|8|9])-?([0-9]{3,4})-?([0-9]{4})$/;
    
    // if (!newPhoneRegExp.test(currentnewPhone)) {
    //     setnewPhoneMessage("올바른 형식이 아닙니다!");
    //     setIsnewPhone(false);
    // } else {
    //     setnewPhoneMessage("사용 가능한 번호입니다:-)");
    //     setIsnewPhone(true);
    // }
    // };

    // const addHyphen = (e) => {
    // const currentNumber = e.target.value;
    // setnewPhone(currentNumber);
    // if (currentNumber.length == 3 || currentNumber.length == 8) {
    //     setnewPhone(currentNumber + "-");
    //     onChangenewPhone(currentNumber + "-");
    // } else {
    //     onChangenewPhone(currentNumber);
    // }
    // };



    return (
    <>
        <h3>modify</h3>
        <div className="form">
        <div className="form-el">
            <label htmlFor="newNickname">Nick Name</label> <br />
            <input email="newNickname" name="newNickname" value={newNickname} onChange={onChangenewNickname} />
            {/* <p className="message">{newNicknameMessage}</p> */}
            {newNicknameError? <p>{newNicknameError}</p>:""}

        </div>

        <div className="form-el">
            <label htmlFor="password">Password</label> <br />
            <input
            email="newPassword"
            name="newPassword"
            value={newPassword}
            onChange={onChangePassword}
            />
            {/* <p className="message">{passwordMessage}</p> */}
            {passwordError? <p>{passwordError}</p>:""}

        </div>
        <div className="form-el">
            <label htmlFor="passwordConfirm">Password Confirm</label> <br />
            <input
            email="passwordConfirm"
            name="passwordConfirm"
            value={passwordConfirm}
            onChange={onChangePasswordConfirm}
            />
            {/* <p className="message">{passwordConfirmMessage}</p> */}
            {passwordConfirmError? <p>{passwordConfirmError}</p>:""}

        </div>


        <div className="form-el">
            <label htmlFor="newPhone">newPhone</label> <br />
            <input email="newPhone" name="newPhone" value={newPhone} onChange={onModifynewPhone} />
            {/* <p className="message">{newPhoneMessage}</p> */}
            {newPhoneError? <p>{newPhoneError}</p>:""}

        </div>
 
        <br />
        <br />
        {/* <button type="submit" onClick={onSignUp}>Submit</button> */}
        </div>
    </>
    );
};

export default Modify;