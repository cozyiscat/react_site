import "./css/FooterBottom.css"
import logoImg from "./images/logo.png"
export function FooterBottom(){
    return(
        <>
        <div className="footerBottom">
                <div className="footerSize">
                    <div className="footerBottomLeft">
                        <div className="footerImg">
                            <a href="#"><img src={logoImg} alt=""/></a>
                        </div>
                        <div className="footerText">
                            <p>(주) 퓨어셀코리아 <br/>
                                대표자 : 김철호사업자 등록번호 : 411-81-92320<br/>
                                통신판매업 신고번호 : 2020-서울강남-02095 [사업자정보확인]<br/>
                                주소 : 서울특별시 강남구 학동로101길 26 (청담동) 211호 개인정보관리책임자 : 이진희<br/>
                            </p>
                            <address>Copyright © PURESELL 퓨어셀. All rights reserved.</address>
                        </div>
                    </div>
                    <div className="footerBottomRight">
                        <div className="footerCs">
                            <h2>CS CENTER 1599-8604</h2>
                            <p>평일 10:00 - 17:00 <br/>
                                (점심시간 : 12:00 - 13:00)<br/>
                                ​토.일.공휴일 휴무</p>
                        </div>
                        <div className="footerBox">
                            <div><a href="#">1:1문의하기</a></div>
                            <div><a href="#">자주 묻는 질문</a></div>
                        </div>
                </div>
                </div>
            </div>
        </>
    )
}