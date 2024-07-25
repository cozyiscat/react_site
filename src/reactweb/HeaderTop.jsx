import topImg from "./images/2c8f696ba5f27ed5c5950f5660c53a79.jpg";
import icTopBn from "./images/m_ic_top_bn.png";
import "./css/HeaderTop.css";


export function HeaderTop(){
    return(
        <div id="header_top">
            <a href="#">
                <img src={topImg} alt="로딩" className="topBannerImg"/>
                <span>카카오채널 추가시 할인쿠폰 지급
                    <img src={icTopBn} alt="쿠폰"/>
                </span>
            </a>
        </div>
    )
}