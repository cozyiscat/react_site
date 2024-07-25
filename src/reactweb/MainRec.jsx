import recLeftMain from "./images/product_pick_01.jpg";
import recLeftTop from "./images/Untitled-2.gif";
import recImg1 from "./images/recimg1.PNG";
import recImg2 from "./images/recimg2.PNG";
import recBtn from "./images/ic_buy_btn.png";
import "./css/MainRec.css"
export function MainRec(){
    return(
        <>
        <div id="main_rec">
            <div className="recSet">
                <div className="recLeft">
                    <div><a href="">
                        <img className="recLeftMain" src={recLeftMain} alt=""/>
                        <img className="recLeftTop" src={recLeftTop} alt=""/>
                    </a></div>
                </div>
                <div className="recRight">
                    <div className="recRightImgBox">
                        <div>
                            <a href="#">
                                <img src={recImg1} alt=""/>
                                <div className="listDecoBox">26%</div>
                            </a>
                        </div>
                        <div className="recRightText">
                            <a href="#">퓨어셀 시그니처 상부장 부착식 물빠짐 식기건조대 싱크대 그릇 설거지 정리대</a>
                            <h1>62,900원</h1>
                            <s>84,900원</s>
                            <div>
                                <img src={recBtn} alt=""/>
                            </div>
                        </div>
                    </div>
                    <div className="recRightImgBox">
                        <div>
                            <a href="">
                                <img src={recImg2} alt=""/>
                                <div className="listDecoBox">26%</div>
                            </a>
                        </div>
                        <div className="recRightText">
                            <a href="#">관심상품 등록 전 장바구니 담기
                                퓨어셀 허리에좋은 액티브 메모리폼 매트리스 침대 매트릭스 퀸 사이즈 Q</a>
                            <h1>339,000원</h1>
                            <s>459,000원</s>
                            <div>
                                <img src={recBtn} alt=""/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </>
    )
}