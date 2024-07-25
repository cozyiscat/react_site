import { BtnScroll } from "./BtnScroll";
import { HeaderBottom } from "./HeaderBottom";
import { HeaderTop } from "./HeaderTop";
import { SearchImg } from "./SearchImg";
import "./css/MainHeader.css";

export function MainHeader(){
    return(
        <>
        <BtnScroll/>
        <SearchImg/>
        <div id="header">
            <HeaderTop/>
            <HeaderBottom/>
        <div className="line"></div>
        </div>
        </>
    )
}