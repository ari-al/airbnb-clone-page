import welcomeImage from "../Asset/image/top-welcome.jpg"

function Main() {
    return(
        <main>
            <div style={{minWidth: "1128px", minHeight: "626px", position: "relative"}}>
                <div style={{zIndex: "0", position: "absolute", top: "0px", right: "0px", 
                bottom: "74px", left: "0px", width: "100%", hegith: "100%", backgroundSize: "cover", overFlow: "hidden"}}>
                    <img src={welcomeImage} alt="" style={{width: "100%",
                    position: "absolute", left: "0px", right: "0px", bottom: "0px", objectFit: "contain", objectPosition: "center bottom"}}/>
                </div>
            </div>
        </main>

    );
}

export default Main;