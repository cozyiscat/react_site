import titleLogo from "./images/title_logo.png";
import "./css/HeaderLogin.css";

export function HeaderLogin(){
    return(
        <>
         <div id="header_login">
                <a href="login.html" className="login">로그인</a>
                <span>ㅣ</span>
                <a href="#" className="login">회원가입</a>
                <span>ㅣ</span>
                <a href="#" className="login">고객센터</a>
            </div>
            <div id="logo"><a href="mainpage.html"><img src={titleLogo} alt=""/></a></div>
        </>
    )
}