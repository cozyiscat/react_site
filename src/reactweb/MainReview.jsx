import "./css/MainReview.css";
import btnMore from "./images/svg/btn_more.svg"
import imgNo1 from "./images/img_no_img01.jpg"
import rev1 from "./images/rev1.jpg"
import rev2 from "./images/rev2.jpg"
import rev3 from "./images/rev3.png"
import reviewImg2 from "./images/ec83950ba38f370946dfd0ab675f384c.jpg"
import reviewImg3 from "./images/3eb6fb019559a40a71b43ffeed6713e4.jpg"
import reviewImg4 from "./images/520cd41fb28bd96578f9c28ca125b0ce.jpg"
import icStar5 from "./images/ic_star5.png"
import icStar4 from "./images/ic_star4.png"

export function MainReview(){
    return(
        <>
        <div id="main_review">
            <div className="reviewTop">
                <h1>REVIEW</h1>
                <div>
                    <a href="#">MORE</a>
                    <img src={btnMore} alt=""/>
                </div>
            </div>
            <div className="reviewSec">
                <div className="reviewPart">
                    <div><a href="#"><img src={imgNo1} alt=""/></a></div>
                    <div className="reviewTxt">
                        <h3>퓨어셀 모달 워셔블 사계절 경추 베개</h3>
                        <p>
                            베개 강추합니다~<br/>
                            말랑말랑하니 아주 부드럽게 기분좋구요.
                        </p>
                        <div className="reviewTxtImg">
                                <a href="#"><img src={rev1} alt=""/></a>
                                <p>유****</p>
                            <img src={icStar5} alt=""/>
                        </div>
                    </div>
                </div>
                <div className="reviewPart">
                    <div><a href="#"><img src={reviewImg2} alt=""/></a></div>
                    <div className="reviewTxt">
                        <h3>퓨어셀 녹물제거 세면대 필터 헤드 1년세트</h3>
                        <p>
                            세면대에서 계속 철가루 같은게<br/> 나와서 찝찝하던 차에 
                            추천받아서 구매해봤습니다,
                        </p>
                        <div className="reviewTxtImg">
                                <a href="#"><img src={rev2} alt=""/></a>
                                <p>김****</p>
                                <img src={icStar4} alt=""/>
                        </div>
                    </div>
                </div>
                <div className="reviewPart">
                    <div><a href="#"><img src={reviewImg3} alt=""/></a></div>
                    <div className="reviewTxt">
                        <h3>퓨어셀 녹물제거 주방 헤드 기본세트_핸디형</h3>
                        <p>
                            사용하기 매우 편하네요. <br/>
                            디자인도 마음에 들구요~
                            물 수압도 강해진거 같아서 만족하며 쓰고 있습니다!
                        </p>
                        <div className="reviewTxtImg">
                                <a href="#"><img src={rev3} alt=""/></a>
                                <p>주****</p>
                            <img src={icStar4} alt=""/>
                        </div>
                    </div>
                </div>
                <div className="reviewPart">
                    <div><a href="#"><img src={reviewImg4} alt=""/></a></div>
                    <div className="reviewTxt">
                        <h3>퓨어셀 모달 워셔블 사계절 경추 베개</h3>
                        <p>
                            베개가 배송받을때는 딱딱하더니 <br/> 안내문대로 금새 말랑말랑해지네요~

                            적당한 높이하고 받쳐주는 느낌 아주 원하는 느낌이에요

                            잘사용해보겠습니다~
                        </p>
                        <div className="reviewTxtImg">
                                <a href="#"><img src={rev1} alt=""/></a>
                                <p>Y****</p>
                            <img src={icStar5} alt=""/>
                        </div>
                    </div>
                </div>
            </div>
         </div>
        </>
    )
}