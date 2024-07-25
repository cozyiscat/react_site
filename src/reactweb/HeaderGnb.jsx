import "./css/HeaderGnb.css";

export function HeaderGnb(){
    return(
        <>
         <div id="header_gnb">
                <ul id="main_gnb">
                    <li><a href="product-brand.html">브랜드</a></li>
                    <div>/</div>
                    <li><a href="product-all-page1.html">all</a></li>
                    <div>/</div>
                    <li>
                    <a href="product-bath.html">바스</a>
                        <ul className="gnb">
                            <li><a href="product-bath.html">ALL</a></li>
                            <li><a href="#">샤워기</a></li>
                            <li><a href="#">싱크대</a></li>
                            <li><a href="#">세면대</a></li>
                            <li><a href="#">필터</a></li>
                        </ul>
                    </li>
                    <div>/</div>
                    <li>
                    <a href="product-utensils.html">주방용품</a>
                        <ul className="gnb">
                            <li><a href="product-utensils.html">ALL</a></li>
                            <li><a href="#">도마</a></li>
                            <li><a href="#">식기건조대</a></li>
                        </ul>
                    </li>
                    <div>/</div>
                    <li>
                    <a href="product-living.html">리빙</a>
                        <ul className="gnb">
                            <li><a href="product-living.html">ALL</a></li>
                            <li><a href="#">매트리스</a></li>
                            <li><a href="#">토퍼</a></li>
                            <li><a href="#">베게</a></li>
                        </ul>    
                    </li>
                    <div>/</div>
                    <li>
                    <a href="#">CS</a>
                        <ul className="gnb">
                            <li><a href="cs-qna.html">QNA</a></li>
                            <li><a href="cs-notice.html">공지사항</a></li>
                            <li><a href="cs-faq.html">FAQ</a></li>
                        </ul>
                    </li>
                </ul>
            </div>
        </>
    )
}