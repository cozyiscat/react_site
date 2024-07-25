import "./css/MainPage.css"
import { MainBanner } from "./MainBanner"
import { MainBest } from "./MainBest"
import { MainNew } from "./MainNew"
import { MainRec } from "./MainRec"
import { MainReview } from "./MainReview"
import { MainSlide } from "./MainSlide"

export function MainPage(){
    return(
        <div id="main">
        <MainSlide/>
        <MainBest/>
        <MainBanner/>
        <MainRec/>
        <MainNew/>
        <MainReview/>
        </div>
    )
}