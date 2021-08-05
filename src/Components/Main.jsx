import welcomeImage from "../Asset/image/top-welcome.jpg"
import cityIcon from "../Asset/image/city-icon-london.jpg"

function Main() {
    return(
        <main>
            <div style={{minWidth: "1128px", minHeight: "626px", position: "relative"}}>
                <div>
                    <div>
                        <div style={{zIndex: "0", top: "0px", right: "0px", 
                        bottom: "74px", left: "0px", width: "100%", hegith: "100%", backgroundSize: "cover", overFlow: "hidden"}}>
                            <img src={welcomeImage} alt="" style={{width: "100%",
                            position: "relative", left: "0px", right: "0px", objectFit: "contain", objectPosition: "center bottom"}}/>
                        </div>
                    </div>
                </div>
                <div style={{ paddingLeft: "60px", paddingRight: "60px" }}>
                    <div style={{ marginTop: "45px", marginBottom: "38px" }}>
                        <div>
                            <div className="flex">
                                <div className="flex">
                                    <span style={{ fontSize: "32px", fontWeight: "700", lineHeight: "52px", paddingBottom: "10px", marginLeft: "8px" }}>
                                        가까운 여행지 둘러보기
                                    </span>
                                </div>
                            </div>
                            <div>
                                <div style={{ gridTemplateColumns: "repeat(4, 1fr)", gridAutoFlow: "row", display: "grid", padding: "8px", gap: "16px" }}>
                                    <div>
                                        <div>
                                            <a href="/" style={{ display: "flex", alignItems: "center" }}  className="cityIconText">
                                                <span style={{ flex: "0 0 72px", height: "72px", borderRadius: "8px", position: "relative", marginRight: "16px" }}>
                                                    <div style={{ width: "100%", height: "100%" }}> 
                                                        <img src={cityIcon} alt="" style={{ width: "100%", height: "100%", borderRadius: "8px" }}/>
                                                    </div>
                                                </span>
                                                <span style={{ flexGrow: "1", flexWrap: "wrap"}}>
                                                    <span style={{ flex: "0 1 100%", display: "flex" }}>서울</span>
                                                    <span style={{ flex: "0 1 100%", fontWeight: "400", display: "flex" }}>차로 15분 거리</span>
                                                </span>
                                            </a>
                                        </div>
                                    </div>
                                    <div>
                                        <div>
                                            <a href="/" style={{ display: "flex", alignItems: "center" }}  className="cityIconText">
                                                <span style={{ flex: "0 0 72px", height: "72px", borderRadius: "8px", position: "relative", marginRight: "16px" }}>
                                                    <div style={{ width: "100%", height: "100%" }}> 
                                                        <img src={cityIcon} alt="" style={{ width: "100%", height: "100%", borderRadius: "8px" }}/>
                                                    </div>
                                                </span>
                                                <span style={{ flexGrow: "1", flexWrap: "wrap"}}>
                                                    <span style={{ flex: "0 1 100%", display: "flex" }}>서울</span>
                                                    <span style={{ flex: "0 1 100%", fontWeight: "400", display: "flex" }}>차로 15분 거리</span>
                                                </span>
                                            </a>
                                        </div>
                                    </div>
                                    <div>
                                        <div>
                                            <a href="/" style={{ display: "flex", alignItems: "center" }}  className="cityIconText">
                                                <span style={{ flex: "0 0 72px", height: "72px", borderRadius: "8px", position: "relative", marginRight: "16px" }}>
                                                    <div style={{ width: "100%", height: "100%" }}> 
                                                        <img src={cityIcon} alt="" style={{ width: "100%", height: "100%", borderRadius: "8px" }}/>
                                                    </div>
                                                </span>
                                                <span style={{ flexGrow: "1", flexWrap: "wrap"}}>
                                                    <span style={{ flex: "0 1 100%", display: "flex" }}>서울</span>
                                                    <span style={{ flex: "0 1 100%", fontWeight: "400", display: "flex" }}>차로 15분 거리</span>
                                                </span>
                                            </a>
                                        </div>
                                    </div>
                                    <div>
                                        <div>
                                            <a href="/" style={{ display: "flex", alignItems: "center" }}  className="cityIconText">
                                                <span style={{ flex: "0 0 72px", height: "72px", borderRadius: "8px", position: "relative", marginRight: "16px" }}>
                                                    <div style={{ width: "100%", height: "100%" }}> 
                                                        <img src={cityIcon} alt="" style={{ width: "100%", height: "100%", borderRadius: "8px" }}/>
                                                    </div>
                                                </span>
                                                <span style={{ flexGrow: "1", flexWrap: "wrap"}}>
                                                    <span style={{ flex: "0 1 100%", display: "flex" }}>서울</span>
                                                    <span style={{ flex: "0 1 100%", fontWeight: "400", display: "flex" }}>차로 15분 거리</span>
                                                </span>
                                            </a>
                                        </div>
                                    </div>
                                    <div>
                                        <div>
                                            <a href="/" style={{ display: "flex", alignItems: "center" }}  className="cityIconText">
                                                <span style={{ flex: "0 0 72px", height: "72px", borderRadius: "8px", position: "relative", marginRight: "16px" }}>
                                                    <div style={{ width: "100%", height: "100%" }}> 
                                                        <img src={cityIcon} alt="" style={{ width: "100%", height: "100%", borderRadius: "8px" }}/>
                                                    </div>
                                                </span>
                                                <span style={{ flexGrow: "1", flexWrap: "wrap"}}>
                                                    <span style={{ flex: "0 1 100%", display: "flex" }}>서울</span>
                                                    <span style={{ flex: "0 1 100%", fontWeight: "400", display: "flex" }}>차로 15분 거리</span>
                                                </span>
                                            </a>
                                        </div>
                                    </div>
                                    <div>
                                        <div>
                                            <a href="/" style={{ display: "flex", alignItems: "center" }}  className="cityIconText">
                                                <span style={{ flex: "0 0 72px", height: "72px", borderRadius: "8px", position: "relative", marginRight: "16px" }}>
                                                    <div style={{ width: "100%", height: "100%" }}> 
                                                        <img src={cityIcon} alt="" style={{ width: "100%", height: "100%", borderRadius: "8px" }}/>
                                                    </div>
                                                </span>
                                                <span style={{ flexGrow: "1", flexWrap: "wrap"}}>
                                                    <span style={{ flex: "0 1 100%", display: "flex" }}>서울</span>
                                                    <span style={{ flex: "0 1 100%", fontWeight: "400", display: "flex" }}>차로 15분 거리</span>
                                                </span>
                                            </a>
                                        </div>
                                    </div>
                                    <div>
                                        <div>
                                            <a href="/" style={{ display: "flex", alignItems: "center" }}  className="cityIconText">
                                                <span style={{ flex: "0 0 72px", height: "72px", borderRadius: "8px", position: "relative", marginRight: "16px" }}>
                                                    <div style={{ width: "100%", height: "100%" }}> 
                                                        <img src={cityIcon} alt="" style={{ width: "100%", height: "100%", borderRadius: "8px" }}/>
                                                    </div>
                                                </span>
                                                <span style={{ flexGrow: "1", flexWrap: "wrap"}}>
                                                    <span style={{ flex: "0 1 100%", display: "flex" }}>서울</span>
                                                    <span style={{ flex: "0 1 100%", fontWeight: "400", display: "flex" }}>차로 15분 거리</span>
                                                </span>
                                            </a>
                                        </div>
                                    </div>
                                    <div>
                                        <div>
                                            <a href="/" style={{ display: "flex", alignItems: "center" }}  className="cityIconText">
                                                <span style={{ flex: "0 0 72px", height: "72px", borderRadius: "8px", position: "relative", marginRight: "16px" }}>
                                                    <div style={{ width: "100%", height: "100%" }}> 
                                                        <img src={cityIcon} alt="" style={{ width: "100%", height: "100%", borderRadius: "8px" }}/>
                                                    </div>
                                                </span>
                                                <span style={{ flexGrow: "1", flexWrap: "wrap"}}>
                                                    <span style={{ flex: "0 1 100%", display: "flex" }}>서울</span>
                                                    <span style={{ flex: "0 1 100%", fontWeight: "400", display: "flex" }}>차로 15분 거리</span>
                                                </span>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            
        </main>

    );
}

export default Main;