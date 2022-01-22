import React from "react";
import "./App.css";
import Form from "./components/Form";

function App(): JSX.Element {
  return (
    <div>
      <div className="grid justify-items-center">
        <h1 className="p-6">Discogs</h1>
        <Form />
      </div>
    </div>
  );
}

export default App;
