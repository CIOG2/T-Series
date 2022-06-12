import React from "react";
import { SeriesContext } from "../SeriesContext";

const AppUI = () => {

    const { 
        saludo,
    } = React.useContext(SeriesContext);

    return (
        <React.Fragment>
            <div>{saludo}</div>
        </React.Fragment>
    );
}

export { AppUI };