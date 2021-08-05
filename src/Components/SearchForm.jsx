
function SearchForm(){
    return(
        <form style={{margin: "0 auto", maxWidth: "850px" }}>
            <fieldset style={{ display: "flex", alignItems: "center", height:"80px" }}>
                <div style={{ display: "flex", margin: "0 auto" }}>
                    <label>
                        <span style={{display: "flex", fontSize: "16px", lineHeight: "20px", fontWeight: "400", padding: "10px 16px", color: "#FFFFFF"}}> 숙소 </span>
                    </label>
                    <label>
                        <span style={{display: "flex", fontSize: "16px", lineHeight: "20px", fontWeight: "400", padding: "10px 16px", color: "#FFFFFF"}}> 체험 </span>
                    </label>
                    <label>
                        <span style={{display: "flex", fontSize: "16px", lineHeight: "20px", fontWeight: "400", padding: "10px 16px", color: "#FFFFFF"}}> 온라인 체험 </span>
                    </label>
                </div>
            </fieldset>
            <div style={{border: "1px solid #DDDDDD", borderRadius: "32px", color: "#222222", height: "66px", backgroundColor: "#FFFFFF", width: "100%", textAlign: "left", display: "flex" }}>
                <div>
                    <div className="flex">
                        <label style={{ padding: "14px 32px", display: "block" }}>
                            <div style={{ fontWeight: "800", letterSpacing: "0.04em", fontSize: "12px", lineHeight: "16px", paddingBottom: "2px" }}>
                                <div style={{ display: "flex", paddingBottom: "2px" }}>위치</div>
                                <input type="text" placeholder="어디로 여행가세요?" className="inputTypeText"></input>
                            </div>
                        </label>
                    </div>
                    {/* <span style={{ backgroundColor: "#EBEBEB", backgroundClip: "padding-box", border: "1px solid transparent", borderRadius: "32px", bottom: "0px", left: "0px", position: "absolute", right: "0px", top: "0px" }}></span> */}
                </div>
                <div className="crossLine"></div>
                <div className="flex" style={{ flex: "2 0 0%" }}>
                    <div className="flex">
                        <div style={{ padding: "14px 32px", display: "block" }}>
                            <div style={{ fontWeight: "800", letterSpacing: "0.04em", fontSize: "12px", lineHeight: "16px", paddingBottom: "2px" }}>
                                <div style={{ display: "flex", paddingBottom: "2px" }}>체크인</div>
                                <div className="inputTypeText">날짜 입력</div>
                                {/* <input type="text" placeholder="날짜 입력" style={{ display: "inline-block", background: "none", fontSize: "14px", lineHeight: "18px", color: "#222222", margin: "0px", padding: "0px", border: "0px"}}></input> */}
                            </div>
                        </div>
                    </div>
                    <div className="crossLine"></div>
                    <div className="flex">
                        <div style={{ padding: "14px 32px", display: "block" }}>
                            <div style={{ fontWeight: "800", letterSpacing: "0.04em", fontSize: "12px", lineHeight: "16px", paddingBottom: "2px" }}>
                                <div style={{ display: "flex", paddingBottom: "2px" }}>체크아웃</div>
                                <div className="inputTypeText">날짜 입력</div>
                                {/* <input type="text" placeholder="날짜 입력" style={{ display: "inline-block", background: "none", fontSize: "14px", lineHeight: "18px", color: "#222222", margin: "0px", padding: "0px", border: "0px"}}></input> */}
                            </div>
                        </div>
                    </div>
                </div>
                <div className="crossLine"></div>
                <div className="flex" style= {{ alignItems: "center" }}>
                    <div className="flex">
                        <div style={{ padding: "14px 32px", display: "block" }}>
                            <div style={{ fontWeight: "800", letterSpacing: "0.04em", fontSize: "12px", lineHeight: "16px", paddingBottom: "2px" }}>
                                <div style={{ display: "flex", paddingBottom: "2px" }}>인원</div>
                                <div className="inputTypeText">게스트 추가</div>
                            </div>
                        </div>
                    </div>
                    <div className="flex" style= {{ flex: "0 0 auto", marginLeft: "-6px", paddingRight: "9px", position: "relative", zIndex: "5"}}>
                        <button style={{ backgroundColor: "#FF385C", color: "#FFFFFF", border: "none", lineHeight: "16px", maxWidth: "48px", height: "48px", borderRadius: "24px", paddingLeft: "0px", zIndex: "1" }}>
                            <div style= {{ display: "inline-flex", padding: "16px", position: "relative", zIndex: "1" }}>
                                <svg viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" className="svgSmallIcon" style={{strokeWidth: "4", overflow: "visible", fill: "none", stroke: "currentColor"}}aria-hidden="true" role="presentation" focusable="false">
                                    <g fill="none">
                                        <path d="m13 24c6.0751322 0 11-4.9248678 11-11 0-6.07513225-4.9248678-11-11-11-6.07513225 0-11 4.92486775-11 11 0 6.0751322 4.92486775 11 11 11zm8-3 9 9"></path>
                                    </g>
                                </svg>
                            </div>
                        </button>
                    </div>
                </div>
                
            </div>
        </form>
    );
}

export default SearchForm