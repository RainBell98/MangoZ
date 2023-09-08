const jwtCookie = document.cookie.split('; ').find(cookie => cookie.startsWith('token='));
console.log(jwtCookie)
// let jwtToken = null;

if (jwtCookie) {
  jwtToken = jwtCookie.split('=')[1];
}
const signin = document.querySelector('#signin');

if (jwtCookie!=null) {
    signin.textContent = 'LOGOUT';
    signin.href = '#';
    signin.setAttribute('onclick', 'logout()');
} else {
    signin.textContent = 'LOGIN'
};

function logout() {
    // 쿠키 삭제
    document.cookie = 'token=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;'; 
    document.location.href = '/'; 
}