import best1 from "./images/tkfka1.PNG";
import best2 from "./images/tkfka2.PNG";
import best3 from "./images/tkfka3.PNG";
import "./css/MainBest.css"
export function MainBest(){
    return(
        <>
        <div id="main_best">
            <h1>BEST PRODUCT</h1>
            <div className="bestList">
                <ul className="bestImg">
                    <li><a href="#"><img src={best1} alt=""/>
                    <div className="listDecoBox">26%</div>
                </a></li>
                    <li className="bestImgText"><a href="#">퓨어셀 허리에좋은 액티브 메모리폼 매트리스 침대 매트릭스 퀸 사이즈 Q</a></li>
                    <li>
                        <h1>339,000원</h1>
                        <s>459,000원</s>
                    </li>
                </ul>
                <ul className="bestImg">
                    <li><a href="#"><img src={best2} alt=""/>
                        <div className="listDecoBox">69%</div>
                    </a></li>
                    <li className="bestImgText"><a href="#">퓨어셀 3단 접이식 매트리스 바닥 토퍼 접는 단단한 허리에좋은 1인용 디스크 매트릭스 싱글</a></li>
                    <li>
                        <h1>169,000원</h1>
                        <s>549,000원</s>
                    </li>
                </ul>
                <ul className="bestImg">
                    <li><a href="#"><img src={best3} alt=""/>
                        <div className="listDecoBox">20%</div>
                    </a></li>
                    <li className="bestImgText"><a href="#">퓨어셀 녹물제거 필터 샤워기 1년세트</a></li>
                    <li>
                        <h1>31,900원</h1>
                        <s>39,900원</s>
                    </li>
                </ul>
            </div>
        </div>
        </>
    )
}