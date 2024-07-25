import new1 from "./images/new1.PNG";
import new2 from "./images/new2.PNG";
import new3 from "./images/new3.PNG";
import "./css/MainNew.css"
export function MainNew(){
    return(
        <>
         <div id="main_new">
            <h1>NEW PRODUCT</h1>
            <div className="newList">
                <ul className="newImg">
                    <li><a href="#"><img src={new1} alt=""/>
                    <div className="listDecoBox">26%</div>
                </a></li>
                    <li className="newImgText"><a href="#">퓨어셀 시그니처 상부장 부착식 물빠짐 식기건조대 싱크대 그릇 설거지 정리대</a></li>
                    <li>
                        <h1>62,900원</h1>
                        <s>84,900원</s>
                    </li>
                </ul>
                <ul className="newImg">
                    <li><a href="#"><img src={new2} alt=""/>
                        <div className="listDecoBox">31%</div>
                    </a></li>
                    <li className="newImgText"><a href="#">퓨어셀 칼자국 칼집 안나는 항균 TPU 안심 이유식 도마</a></li>
                    <li>
                        <h1>15,900원</h1>
                        <s>22,900원</s>
                    </li>
                </ul>
                <ul className="newImg">
                    <li><a href="#"><img src={new3} alt=""/>
                        <div className="listDecoBox">31%</div>
                    </a></li>
                    <li className="newImgText"><a href="#">퓨어셀 녹슬지 않는 자동배수 깔끔 식기건조대</a></li>
                    <li>
                        <h1>31,900원</h1>
                        <s>45,900원</s>
                    </li>
                </ul>
            </div>
        </div>
        </>
    )
}