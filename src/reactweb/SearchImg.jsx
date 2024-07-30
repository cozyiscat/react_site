import btnSearchClose from "./images/svg/btn_search_close.svg";
import search2 from "./images/ic_header_search2.png";
import "./css/SearchImg.css";
import { useEffect, useState } from "react";
import { useRef } from "react";

export function SearchImg({onClose}){
    const [show, setShow] = useState(true);
    const searchImgRef = useRef(null);


    const slideClose = ()=>{
        setShow(false);
        if (onClose) {
            onClose();//부모 컴포넌트의 onClose 함수 호출
        }
    }
    return(
        <>
            <div id="searchImg" ref={searchImgRef} className={show?'show':'hide'}>
                <div className="searchSize">
                    <div className="searchClose">
                        <img src={btnSearchClose} onClick={slideClose} alt=""/>
                    </div>
                    <div className="searchInput">
                        <input type="text" placeholder=" 검색어를 입력해주세요."/>
                        <div className="inputImg">
                            <a href="#">
                                <img src={search2} alt=""/>
                            </a>
                        </div>
                    </div>
                    <div className="searchFav">
                        <p>인기 검색어</p>
                        <div><a href="#">토퍼</a></div>
                        <div><a href="#">베게</a></div>
                        <div><a href="#">샤워기</a></div>
                    </div>
                </div>
            </div>
        </>
    )
}