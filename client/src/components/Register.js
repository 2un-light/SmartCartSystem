import React, { useState } from "react";
import axios from "axios";
import "./Register.css";

const Register = () => {
  const [id, setId] = useState("");
  const [password, setPassword] = useState("");
  const [passwordCheck, setPasswordCheck] = useState("");
  const [phone, setPhone] = useState("");
  const [code, setCode] = useState("");
  const [postcode, setPostcode] = useState("");
  const [address, setAddress] = useState("");
  const [address2, setAddress2] = useState("");
  const [birthday, setBirthday] = useState("");
  const [checkbox1, setCheckbox1] = useState(false);
  const [checkbox2, setCheckbox2] = useState(false);
  const [checkbox3, setCheckbox3] = useState(false);

  const onCompleteRegistration = (e) => {
    e.preventDefault();
    console.log(
      id,
      password,
      passwordCheck,
      phone,
      code,
      postcode,
      address,
      address2,
      birthday,
      checkbox1,
      checkbox2,
      checkbox3
    );

    if (!checkbox1 || !checkbox2) {
      alert("약관을 동의해주세요.");
      return;
    }

    if (!id || !password || !passwordCheck || !phone || !postcode || !address) {
      alert("필수 항목을 채워주세요");
      return;
    }

    if (password !== passwordCheck) {
      alert("패스워드 확인이 일치하지 않습니다");
      return;
    }

    if (birthday.length !== 6) {
      alert("생년월일은 6자리여야합니다");
      return;
    }

    const url = "http://localhost:5000/api/registration";
    axios
      .post(url, {
        id,
        password,
        phone,
        postcode,
        address: address + " " + address2,
        birthday,
      })
      .then((res) => {
        console.log(res.data);
        if (res.data?.err?.code === "ER_DUP_ENTRY") {
          alert("중복 아이디가 존재합니다.");
        } else {
          alert("가입 되었습니다!");
          window.location = "/login";
        }
      })
      .catch((e) => {
        console.log(e);
        alert("입력이 잘못되었습니다.");
      });
  };

  const checkDuplicate = (e) => {
    e.preventDefault();
    const url = "http://localhost:5000/api/check-duplicate?id=" + id;
    axios
      .get(url)
      .then((res) => {
        console.log(res.data);
        if (res.data) {
          alert("중복 아이디 입니다.");
        } else {
          alert("사용 가능한 아이디 입니다.");
        }
      })
      .catch((e) => {
        console.log(e);
      });
  };

  return (
    <>
      <header className="header">회원가입</header>
      <form className="loginWrapperR">
        <div className="inputBoxR">
          <input
            className="inputR"
            placeholder="아이디"
            value={id}
            onChange={(e) => setId(e.target.value)}
          />
          <button className="buttonR" onClick={checkDuplicate}>
            중복확인
          </button>
        </div>
        <div className="inputBoxR">
          <input
            className="inputR"
            placeholder="비밀번호"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <div className="inputBoxR">
          <input
            className="inputR"
            placeholder="비밀번호 확인"
            type="password"
            value={passwordCheck}
            onChange={(e) => setPasswordCheck(e.target.value)}
          />
        </div>
        <div className="inputBoxR">
          <input
            className="inputR"
            placeholder="휴대폰 번호"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
          />
          <button className="buttonR">인증번호 전송</button>
        </div>
        <div className="inputBoxR">
          <input
            className="inputR"
            placeholder="인증번호"
            value={code}
            onChange={(e) => setCode(e.target.value)}
          />
        </div>
        <div className="inputBoxR">
          <input
            className="inputR"
            placeholder="우편번호"
            value={postcode}
            onChange={(e) => setPostcode(e.target.value)}
          />
          <button className="buttonR">우편번호 찾기</button>
        </div>
        <div className="inputBoxR">
          <input
            className="inputR"
            placeholder="주소"
            value={address}
            onChange={(e) => setAddress(e.target.value)}
          />
        </div>
        <div className="inputBoxR">
          <input
            className="inputR"
            value={address2}
            onChange={(e) => setAddress2(e.target.value)}
          />
        </div>
        <div className="inputBoxR">
          <input
            className="inputR"
            placeholder="생년월일(8자리)"
            type="dete"
            style={{ width: "50%" }}
            value={birthday}
            onChange={(e) => setBirthday(e.target.value)}
          />
        </div>
        <div
          className="inputBoxR"
          style={{ justifyContent: "flex-start", marginTop: "5px" }}
        >
          <input
            type="checkBox"
            checked={checkbox1}
            onChange={(e) => setCheckbox1(e.target.checked)}
          />
          <span>이용약관 동의 (필수)</span>
        </div>
        <div
          className="inputBoxR"
          style={{ justifyContent: "flex-start", marginTop: "5px" }}
        >
          <input
            type="checkBox"
            checked={checkbox2}
            onChange={(e) => setCheckbox2(e.target.checked)}
          />
          <span>개인정보 취급방침 동의 (필수)</span>
        </div>
        <div
          className="inputBoxR"
          style={{ justifyContent: "flex-start", marginTop: "5px" }}
        >
          <input
            type="checkBox"
            checked={checkbox3}
            onChange={(e) => setCheckbox3(e.target.checked)}
          />
          <span>마케팅 정보 수신 동의 (선택)</span>
        </div>
        <button
          className="buttonR"
          style={{ width: "100%", marginLeft: "0" }}
          onClick={onCompleteRegistration}
        >
          회원가입
        </button>
      </form>
    </>
  );
};

export default Register;
