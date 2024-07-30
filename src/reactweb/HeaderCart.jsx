import icHdSearch from "./images/svg/ic_hd_search.svg";
import icHdBag from "./images/svg/ic_bag.svg";
import "./css/HeaderCart.css";
import {SearchImg} from "./SearchImg";
import { useState } from "react";
export function HeaderCart(){
    const [showSearch, setShowSearch] = useState(false);
    
   const handleSearchClick = () => {
        setShowSearch(showSearch => !showSearch); // 상태를 토글
    };
    const handleClose = () => {
        setShowSearch(false);
    };
    return (
        <>
            <div id="cart">
                <div className="search">
                    <a href="" onClick={handleSearchClick}>
                        <img src={icHdSearch} alt="Search" className="imgSearch" />
                    {showSearch && <SearchImg onClose={handleClose} />}
                    </a>
                    <a href="order-basket.html">
                        <img src={icHdBag} alt="Cart" />
                    </a>
                </div>
            </div>
        </>
    );
}