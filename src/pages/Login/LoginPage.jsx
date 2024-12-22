import React from "react";
import KakaoLogin from "../../assets/KakaoLogin.svg";
import "./style.css";

export const LoginPage = () => {
  const clientId = process.env.REACT_APP_KAKAO_API_KEY;
  const redirectUri = process.env.REACT_APP_KAKAO_REDIRECT_URI;

  // 카카오 로그인 버튼 클릭 시 실행
  const handleKakaoLogin = () => {
    const kakaoAuthUrl = `https://kauth.kakao.com/oauth/authorize?response_type=code&client_id=${clientId}&redirect_uri=${redirectUri}`;
    window.location.href = kakaoAuthUrl; // 카카오 인증 페이지로 리디렉션
  };

  return (
    <div className="login">
      <img
        className="kakao-login"
        alt="Kakao login"
        src={KakaoLogin} // 카카오 로그인 버튼 이미지 사용
        onClick={handleKakaoLogin}
      />
    </div>
  );
};

export default LoginPage;
