import "./css/FooterTop.css"
export function FooterTop(){
    return(
        <>
        <div className="footerTop">
                <div className="footerSize">
                    <div className="footerTopLeft">
                        <span><a href="#">회사소개</a></span>
                        <div></div>
                        <span><a href="#">이용약관</a></span>
                        <div></div>
                        <span><a href="#" className="textBold">개인정보처리방침</a></span>
                        <div></div>
                        <span><a href="#">이용안내</a></span>
                    </div>
                    <div className="footerTopRight"></div>
                </div>
            </div>
        </>
    )
}