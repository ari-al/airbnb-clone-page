import welcomeImage from "../Asset/image/top-welcome.jpg"
import middleBanner from "../Asset/image/middle-banner.jpg"
import middleAccomodation1 from "../Asset/image/middle2-accomodation1.jpg"
import middleAccomodation2 from "../Asset/image/middle2-accomodation2.jpg"
import middleAccomodation3 from "../Asset/image/middle2-accomodation3.jpg"
import middleAccomodation4 from "../Asset/image/middle2-accomodation4.jpg"
import cityIcon from "../Asset/image/city-icon-london.jpg"
import NearPlaceItem from './NearPlaceItem';

function Main() {
    let nearPlaceList = [
        { iconSrc: cityIcon , placeName: "서울", distance: "차로 15분 거리" },
        { iconSrc: cityIcon , placeName: "부산", distance: "차로 5시간 거리" },
        { iconSrc: cityIcon , placeName: "양양군", distance: "차로 2.5시간 거리" },
        { iconSrc: cityIcon , placeName: "속초시", distance: "차로 2.5시간 거리" },
        { iconSrc: cityIcon , placeName: "제주도", distance: "차로 7시간 거리" },
        { iconSrc: cityIcon , placeName: "대구", distance: "차로 3.5시간 거리" },
        { iconSrc: cityIcon , placeName: "고성군", distance: "차로 3시간 거리" },
        { iconSrc: cityIcon , placeName: "완주군", distance: "차로 3시간 거리" }
    ];
    const placeItems = () =>{
        const result = [];
        for (let i=0; i<nearPlaceList.length; i++){
            result.push(<NearPlaceItem key={i} iconSrc={ nearPlaceList[i].iconSrc } placeName={ nearPlaceList[i].placeName } distance={ nearPlaceList[i].distance } ></NearPlaceItem>);
        } 
        return result;
    };
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
                <div style={{ paddingLeft: "70px", paddingRight: "70px" }}>
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
                                    { placeItems() }
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div style={{ paddingLeft: "70px", paddingRight: "70px" }}>
                    <div>
                        <div className="flex">
                            <div style={{ width: "100%", position: "relative" }}>
                                <div style={{ height: "480px", width: "500px", position: "relative",  display: "flex", alignItems: "left" }}>
                                    <div style={{ textAlign: "left"}}>
                                        <span style={{ fontSize: "47px", fontWeight: "700", lineHeight: "52px", paddingBottom: "10px", margin: "77px", display: "block" }}>
                                            어디든 상관없이 떠나고 싶을때 에어비앤비가 도와드립니다!
                                        </span>
                                    </div>
                                    <div style={{ position: "absolute", bottom: "85px"}}>
                                        <button style={{ borderRadius: "8px", border: "none", background: "#000000", color: "#ffffff", fontSize: "16px", fontWeight: "600", padding: "14px 25px 14px 25px", marginLeft: "75px"}}>유연한 검색</button>
                                    </div>
                                </div>
                                <a href="/" style={{ display: "flex", alignItems: "center" }}>
                                    <div style={{ height: "480px", width: "100%", position: "absolute", top: "0px", padding: "8px", zIndex: -5 }}>
                                        <div style={{ width: "100%", height: "100%", overflow: "hidden", borderRadius: "16px", position: "relative", marginRight: "16px" }}> 
                                            <img src={ middleBanner } alt="" style={{ width: "100%", objectFit: "cover", borderRadius: "16px" }}/>
                                        </div>
                                    </div>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
                <div style={{ paddingLeft: "70px", paddingRight: "70px" }}>
                    <div style={{ marginTop: "45px", marginBottom: "38px" }}>
                        <div style={{ paddingBottom: "20px" }}>
                            <div className="flex">
                                <div className="flex">
                                    <span style={{ fontSize: "32px", fontWeight: "700", lineHeight: "52px", paddingBottom: "10px", marginLeft: "8px" }}>
                                        어디에서나, 여행은 살아보는거야!
                                    </span>
                                </div>
                            </div>
                        </div>
                        <div>
                            <ul>
                                <li style={{ borderWidth: "0 5px", maxWidth: "25%", flex: "0 0 25%", display: "inline-block"}}>
                                    <div>
                                        <a href="/" style={{ display: "flex", alignItems: "center", marginLeft: "8px", textDecoration: "none", fontSize: "18px", fontWeight: "600", lineHeight: "22px", color: "#000000" }}>
                                            <div>
                                                <div class="flex">
                                                    <span style={{ height: "326px", borderRadius: "8px", position: "relative", marginRight: "16px" }}>
                                                        <div style={{ width: "100%", height: "100%" }}> 
                                                            <img src={ middleAccomodation1 } alt="" style={{ width: "100%", height: "100%", borderRadius: "8px" }}/>
                                                        </div>
                                                    </span>
                                                </div>
                                                <div class="flex">
                                                    <span style={{ paddingTop: "10px" }}>
                                                        독특한 공간
                                                    </span>
                                                </div>
                                            </div>
                                        </a>
                                    </div>
                                </li>
                                <li style={{ borderWidth: "0 5px", maxWidth: "25%", flex: "0 0 25%", display: "inline-block"}}>
                                    <div>
                                        <a href="/" style={{ display: "flex", alignItems: "center", marginLeft: "8px", textDecoration: "none", fontSize: "18px", fontWeight: "600", lineHeight: "22px", color: "#000000" }}>
                                            <div>
                                                <div class="flex">
                                                    <span style={{ height: "326px", borderRadius: "8px", position: "relative", marginRight: "16px" }}>
                                                        <div style={{ width: "100%", height: "100%" }}> 
                                                            <img src={ middleAccomodation2 } alt="" style={{ width: "100%", height: "100%", borderRadius: "8px" }}/>
                                                        </div>
                                                    </span>
                                                </div>
                                                <div class="flex">
                                                    <span style={{ paddingTop: "10px" }}>
                                                        자연생활을 만끽할 수 있는 숙소
                                                    </span>
                                                </div>
                                            </div>
                                        </a>
                                    </div>
                                </li>
                                <li style={{ borderWidth: "0 5px", maxWidth: "25%", flex: "0 0 25%", display: "inline-block"}}>
                                    <div>
                                        <a href="/" style={{ display: "flex", alignItems: "center", marginLeft: "8px", textDecoration: "none", fontSize: "18px", fontWeight: "600", lineHeight: "22px", color: "#000000" }}>
                                            <div>
                                                <div class="flex">
                                                    <span style={{ height: "326px", borderRadius: "8px", position: "relative", marginRight: "16px" }}>
                                                        <div style={{ width: "100%", height: "100%" }}> 
                                                            <img src={ middleAccomodation3 } alt="" style={{ width: "100%", height: "100%", borderRadius: "8px" }}/>
                                                        </div>
                                                    </span>
                                                </div>
                                                <div class="flex">
                                                    <span style={{ paddingTop: "10px" }}>
                                                        집 전체
                                                    </span>
                                                </div>
                                            </div>
                                        </a>
                                    </div>
                                </li>
                                <li style={{ borderWidth: "0 5px", maxWidth: "25%", flex: "0 0 25%", display: "inline-block"}}>
                                    <div>
                                        <a href="/" style={{ display: "flex", alignItems: "center", marginLeft: "8px", textDecoration: "none", fontSize: "18px", fontWeight: "600", lineHeight: "22px", color: "#000000" }}>
                                            <div>
                                                <div class="flex">
                                                    <span style={{ height: "326px", borderRadius: "8px", position: "relative", marginRight: "16px" }}>
                                                        <div style={{ width: "100%", height: "100%" }}> 
                                                            <img src={ middleAccomodation4 } alt="" style={{ width: "100%", height: "100%", borderRadius: "8px" }}/>
                                                        </div>
                                                    </span>
                                                </div>
                                                <div class="flex">
                                                    <span style={{ paddingTop: "10px" }}>
                                                        반려동물 동반 가능
                                                    </span>
                                                </div>
                                            </div>
                                        </a>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            
        </main>

    );
}

export default Main;