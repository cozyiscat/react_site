import mainSlide1 from "./images/main_slide_01.jpg";
import mainSlide2 from "./images/main_slide_02.jpg";
import mainSlide3 from "./images/main_slide_03.jpg";
import btnQuickTop from "./images/svg/btn_quick_top.svg";
import "./css/MainSlide.css";
import { useEffect, useState } from "react";

export function MainSlide(){
    const [currentIndex, setCurrentIndex] = useState(1);
    const sliders = [mainSlide1, mainSlide2, mainSlide3];

    const handleArrowClick = (direction) => {
        let newIndex = currentIndex + direction;
        if(newIndex<0){newIndex = 0;}else if(newIndex >= sliders.length){
            newIndex= sliders.length-1;
        }
        setCurrentIndex(newIndex);
    }
    useEffect(()=>{
        const interval = setInterval(
            ()=>{
                setCurrentIndex((idx)=>(idx+1)%sliders.length)
            },3000
        );
        return()=>clearInterval(interval);
    },[])
    return (
        <>
            <div id="main_slide_box">

                <div id="main_slide">
                <ul className="slider_panel">
                    {
                        sliders.map((slider,index)=>(
                            <li key={index} style={{transform: `translateX(-${currentIndex * 100}%)` }}>                                
                            <a href="#">
                                <img src={slider} alt={`slide ${index+1}`}/></a></li>
                        ))
                    }
                    {/* <li><a href="#"><img src={mainSlide1} alt=""/></a></li>
                    <li><a href="#"><img src={mainSlide2} alt=""/></a></li>
                <li><a href="#"><img src={mainSlide3} alt=""/></a></li> */}
                </ul>
                <div className="control_panel">
                   {sliders.map((slider,index)=>(
                     <div key={index} className={`control_btn ${index === currentIndex ? 'btn_check' : ''}`} data-index={index}></div>
                   ))}
                </div>
                <div className="slide_btn">
                    <div className="leftBtn" onClick={()=>handleArrowClick(-1)}><img src={btnQuickTop} alt=""/></div>
                    <div className="rightBtn" onClick={()=>handleArrowClick(+1)}><img src={btnQuickTop} alt=""/></div>
                </div>
            </div>
        </div>
        </>
    )
}