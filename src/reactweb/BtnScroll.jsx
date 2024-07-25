import btnQuickBotton from  "./images/svg/btn_quick_bottom.svg";
import btnQuickKakao from "./images/svg/btn_quick_kakao.svg";
import btnQuickTop from "./images/svg/btn_quick_top.svg";
import "./css/BtnScroll.css";

export function BtnScroll(){
    return(
        <>
            <div id="btn_scroll">
                <a href="#"><img src={btnQuickKakao} alt="kakao"/></a>
                <a id="btn_scroll_up"><img src={btnQuickTop} alt="top"/></a>
                <a id="btn_scroll_down"><img src={btnQuickBotton} alt="bottom"/></a>
            </div>
        </>
    )
}