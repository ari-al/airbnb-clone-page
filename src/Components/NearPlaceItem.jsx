
function NearPlaceItem(props){
    return(
        <div>
            <div>
                <a href="/" style={{ display: "flex", alignItems: "center" }}  className="cityIconText">
                    <span style={{ flex: "0 0 72px", height: "72px", borderRadius: "8px", position: "relative", marginRight: "16px" }}>
                        <div style={{ width: "100%", height: "100%" }}> 
                            <img src={props.iconSrc} alt="" style={{ width: "100%", height: "100%", borderRadius: "8px" }}/>
                        </div>
                    </span>
                    <span style={{ flexGrow: "1", flexWrap: "wrap"}}>
                        <span style={{ flex: "0 1 100%", display: "flex" }}>{ props.placeName }</span>
                        <span style={{ flex: "0 1 100%", fontWeight: "400", display: "flex" }}>{ props.distance }</span>
                    </span>
                </a>
            </div>
        </div>
    );
}

export default NearPlaceItem;