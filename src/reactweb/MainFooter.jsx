import { FooterBottom } from "./FooterBottom";
import { FooterTop } from "./FooterTop";
import "./css/MainFooter.css"
export function MainFooter(){
    return (
        <>
        <div id="footer">
            <FooterTop/>
            <FooterBottom/>
        </div>
        </>
    )
}