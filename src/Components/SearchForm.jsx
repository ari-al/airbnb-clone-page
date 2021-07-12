
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
                    <div style={{ display:"flex" }}>
                        <label style={{ padding: "14px 32px", display: "block" }}>
                            <div style={{ fontWeight: "800", letterSpacing: "0.04em", fontSize: "12px", lineHeight: "16px", paddingBottom: "2px" }}>
                                <div style={{ display: "flex", paddingBottom: "2px" }}>위치</div>
                                <input type="text" placeholder="어디로 여행가세요?" style={{ display: "inline-block", background: "none", fontSize: "14px", lineHeight: "18px", color: "#222222", margin: "0px", padding: "0px", border: "0px"}}></input>
                            </div>
                        </label>
                    </div>
                    {/* <span style={{ backgroundColor: "#EBEBEB", backgroundClip: "padding-box", border: "1px solid transparent", borderRadius: "32px", bottom: "0px", left: "0px", position: "absolute", right: "0px", top: "0px" }}></span> */}
                </div>
                <div style={{ display: "flex" }}>
                    <div style={{ display: "flex" }}>
                        <label style={{ padding: "14px 32px", display: "block" }}>
                            <div style={{ fontWeight: "800", letterSpacing: "0.04em", fontSize: "12px", lineHeight: "16px", paddingBottom: "2px" }}>
                                <div style={{ display: "flex", paddingBottom: "2px" }}>체크인</div>
                                <input type="text" placeholder="날짜 입력" style={{ display: "inline-block", background: "none", fontSize: "14px", lineHeight: "18px", color: "#222222", margin: "0px", padding: "0px", border: "0px"}}></input>
                            </div>
                        </label>
                    </div>
                </div>
                <div style={{ display: "flex" }}>
                    <div style={{ display: "flex" }}>
                        <label style={{ padding: "14px 32px", display: "block" }}>
                            <div style={{ fontWeight: "800", letterSpacing: "0.04em", fontSize: "12px", lineHeight: "16px", paddingBottom: "2px" }}>
                                <div style={{ display: "flex", paddingBottom: "2px" }}>체크아웃</div>
                                <input type="text" placeholder="날짜 입력" style={{ display: "inline-block", background: "none", fontSize: "14px", lineHeight: "18px", color: "#222222", margin: "0px", padding: "0px", border: "0px"}}></input>
                            </div>
                        </label>
                    </div>
                </div>
                <div style={{ display: "flex" }}>
                    <div style={{ display: "flex" }}>
                        <label style={{ padding: "14px 32px", display: "block" }}>
                            <div style={{ fontWeight: "800", letterSpacing: "0.04em", fontSize: "12px", lineHeight: "16px", paddingBottom: "2px" }}>
                                <div style={{ display: "flex", paddingBottom: "2px" }}>인원</div>
                                <input type="text" placeholder="게스트 추가" style={{ display: "inline-block", background: "none", fontSize: "14px", lineHeight: "18px", color: "#222222", margin: "0px", padding: "0px", border: "0px"}}></input>
                            </div>
                        </label>
                    </div>
                </div>
            </div>
        </form>
    );
}

export default SearchForm