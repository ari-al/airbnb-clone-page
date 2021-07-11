
function TopNotice(){
    return(
        <aside style={{backgroundColor: "#222222", color: "#A3A3A3", paddingLeft: "80px",
        paddingRight: "80px", paddingTop: "20px", paddingBottom: "20px"}}>
            <a href="/" target="blank" style={{fontWeight: "600", color: "#A3A3A3" }}>
                <span style={{fontSize: "14px", lineHeight: "16px", letterSpacing: "-0.7px"}}>에어비앤비의 코로나19 대응 방안에 대한 최신 정보를 확인하세요.</span>
            </a>
        </aside>
    );
}

export default TopNotice;