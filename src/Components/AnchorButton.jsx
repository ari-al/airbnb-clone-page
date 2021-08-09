const AnchorButton = (props)=>{
    return(
        <div className={props.itemClass}>
            <div className="buttonBackground">
                <a href="/" className={props.buttonClass}>
                    {props.children}
                </a>
            </div>
        </div>
    );
}

export default AnchorButton