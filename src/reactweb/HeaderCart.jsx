import icHdSearch from "./images/svg/ic_hd_search.svg";
import icHdBag from "./images/svg/ic_bag.svg";
import "./css/HeaderCart.css";
import {SearchImg} from "./SearchImg";
import { useState } from "react";
export function HeaderCart(){
    const [showSearch, setShowSearch] = useState(false);
   const handleSearchClick = (e) => {
        e.preventDefault();
        setShowSearch(true); // 상태를 토글
    };
    return (
        <>
            <div id="cart">
                <SearchImg showSearch={showSearch} setShowSearch={e=>setShowSearch(e)}/>
                <div className="search">
                    <a href="">
                        <img src={icHdSearch} alt="Search" className="imgSearch" onClick={handleSearchClick}/>
                    </a>
                    <a href="order-basket.html">
                        <img src={icHdBag} alt="Cart" />
                    </a>
                </div>
            </div>
        </>
    );
}