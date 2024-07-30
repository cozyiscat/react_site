import icHdSearch from "./images/svg/ic_hd_search.svg";
import icHdBag from "./images/svg/ic_bag.svg";
import "./css/HeaderCart.css";
import {SearchImg} from "./SearchImg";
import { useState } from "react";
export function HeaderCart(){
    const imgSearch = (".imgSearch");
    return(
        <>
         <div id="cart">
                <div className="search">
                    <a href="#"><img src={icHdSearch} onClick={()=>handleSlide} alt="" className="imgSearch"/></a>
                    <a href="order-basket.html"><img src={icHdBag} alt=""/></a>
                </div>
            </div>
        </>
    )
}