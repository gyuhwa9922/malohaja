const KAKAO_REST_API_KEY = process.env.REACT_APP_KAKAO_REST_API_KEY;
// const REDIRECT_URI = process.env.REACT_APP_KAKAO_REDIRECT_URI; // 배포후 변경 주소
// const KAKAO_REDIRECT_URI = process.env.KAKAO_REDIRECT_URI;

const GITHUB_REST_API_KEY = process.env.REACT_APP_GITHUB_REST_API_KEY;
// const REDIRECT_URI = process.env.REACT_APP_KAKAO_REDIRECT_URI; // 배포후 변경 주소
// const GITHUB_REDIRECT_URI = process.env.GITHUB_REDIRECT_URI;
// &redirect_uri=${GITHUB_REDIRECT_URI}&response_type=code
// https://github.com/login/oauth/authorize?client_id=8c50d4f8275999baf766&scope=user:email&redirect_uri=http://localhost:8080/api/v1/auth/github
export const GITHUB_AUTH_URL = `https://github.com/login/oauth/authorize?client_id=${GITHUB_REST_API_KEY}`;
export const KAKAO_AUTH_URL = `https://kauth.kakao.com/oauth/authorize?client_id=${KAKAO_REST_API_KEY}`;
// &redirect_uri=${KAKAO_REDIRECT_URI}&response_type=code
