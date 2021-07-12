const AnchorButton = (props)=>{
    return(
        <div className={props.itemClass}>
            <div>
                <a href="/" className={props.buttonClass}>
                    {props.children}
                </a>
            </div>
        </div>
    );
}

export default AnchorButton