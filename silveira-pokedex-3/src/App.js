import React from "react";
import Router from "./Components/Routes/Router";
import { GlobalState } from "./Components/GlobalStates/globalStates";


function App() {
  return (
    <div>
      <GlobalState>
        <Router />
      </GlobalState>
    </div>
  );
}

export default App;
