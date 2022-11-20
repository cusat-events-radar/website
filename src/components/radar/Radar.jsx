import React from "react";
import {getContext} from "./context";


export function Radar() {


    const divRef = React.useRef(null);
    React.useEffect(() => {
        if (divRef.current)
            getContext(divRef.current);
    }, []);
    return (
        <div ref={divRef} id="radar"/>
    );

}

