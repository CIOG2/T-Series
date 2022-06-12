import React from "react";

const SeriesContext = React.createContext();


function SeriesProvider(props) {

  const saludo = "Hola Iván";

  return (
    <SeriesContext.Provider value={{
      saludo
    }}>
        {props.children}
    </SeriesContext.Provider>
  );
}


export { SeriesContext, SeriesProvider };