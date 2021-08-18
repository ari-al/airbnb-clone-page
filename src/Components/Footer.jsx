
function Footer(){
    return(
       <footer style={{background: "rgb(247 247 247)", borderTop: "solid 1px #e9e9e9"}}>
           <div style={{ width: "100%" }}>
               <div style={{ paddingLeft: "80px", paddingRight: "80px" }}>
                    <div style={{ paddingTop: "40px", paddingBottom: "50px", display: "flex", flexDirection: "row", borderBottom: "solid 1px #cbcbcb" }}>
                        <section className="footerSection">
                            <div className="footerLabel">소개</div>
                            <ul className="footerList">
                                <li><a href="/">에어비앤비 2021</a></li>
                                <li><a href="/">뉴스룸</a></li>
                                <li><a href="/">투자자 정보 </a></li>
                                <li><a href="/">에어비앤비 플러스 </a></li>
                                <li><a href="/">에어비앤비 Luxe </a></li>
                                <li><a href="/">호텔투나잇 </a></li>
                                <li><a href="/">에어비앤비 비즈니스 프로그램 </a></li>
                                <li><a href="/">호스트 분들이 있기에 가능합니다 </a></li>
                                <li><a href="/">채용정보 </a></li>
                                <li><a href="/">창립자 편지 </a></li>
                            </ul>
                        </section>
                        <section className="footerSection">
                            <div className="footerLabel">커뮤니티</div>
                            <ul className="footerList">
                                <li><a href="/">다양성 및 소속감 2021</a></li>
                                <li><a href="/">접근성 </a></li>
                                <li><a href="/">에어비앤비 어소시에이트 </a></li>
                                <li><a href="/">구호 인력을 위한 숙소</a></li>
                                <li><a href="/">게스트 추천 </a></li>
                                <li><a href="/">Airbnb.org </a></li>
                            </ul>
                        </section>
                        <section className="footerSection">
                            <div className="footerLabel">호스팅하기</div>
                            <ul className="footerList">
                                <li><a href="/">숙소 호스팅 2021</a></li>
                                <li><a href="/">온라인 체험 호스팅하기 </a></li>
                                <li><a href="/">체험 호스팅하기 </a></li>
                                <li><a href="/">책임감 있는 호스팅</a></li>
                                <li><a href="/">자료 센터 </a></li>
                                <li><a href="/">커뮤니티 센터</a></li>
                            </ul>
                        </section>
                        <section className="footerSection">
                            <div className="footerLabel">에어비앤비 지원</div>
                            <ul className="footerList">
                                <li><a href="/">에어비앤비의 코로나19 대응 방안</a></li>
                                <li><a href="/">도움말 센터 </a></li>
                                <li><a href="/">예약 취소 옵션 </a></li>
                                <li><a href="/">에어비앤비 이웃 민원 지원</a></li>
                                <li><a href="/">신뢰와 안전 </a></li>
                            </ul>
                        </section>
                    </div>
                    <div style={{ paddingTop: "10px", paddingBottom: "30px", textAlign: "left" }}> 
                        <ul className="footerList rowList">
                            <li>© 2021 Airbnb, Inc.</li>
                            <li><a href="/">개인정보 처리방침</a></li><span>·</span>
                            <li><a href="/">이용약관 </a></li><span>·</span>
                            <li><a href="/">사이트맵 </a></li><span>·</span>
                            <li><a href="/">한국의 변경된 환불 정책</a></li><span>·</span>
                            <li><a href="/">회사 세부정보</a></li>
                        </ul>
                    </div>
               </div>
           </div>
       </footer>
    );
}

export default Footer;