import React from "react";
import Router from "./Components/Routes/Router";
import { GlobalState } from "./Components/States/states";


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
