import React from "react";

export const ColorModeContext = React.createContext({
    mode:""
})

export default function ColorModeProvider(props){
    return(
        //enteder pq está sendo ignorado
        <ColorModeContext.Provider value={{ mode: props.initialMode }}>
            {props.children}
        </ColorModeContext.Provider>
    );
}