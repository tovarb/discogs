import { useState } from "react";
import { useEffect } from "react";
import "./App.css";
import Form from "./components/Form";

function App() {
  const [search, setSearch] = useState("");
  //búsqueda - guardar búsqueda

  useEffect(() => {
    if (search === "") return;

    const callApi = async () => {
      const resultsPerPage = 20;
      const key = "zhCaEllGVyLwAekgqCSE";
      const token = "OHzlegNvJTDAdSsMuzVXDCTxhCzdOtao";
      const url = `https://api.discogs.com/database/search?q=${search}&key=${key}&secret=${token}&per_page=${resultsPerPage}`;

      const response = await fetch(url);
      const result = await response.json();

      setSearch(result.results);
    };

    callApi();
  }, [search]);
  return (
    <div>
      <div className="grid justify-items-center bg-zinc-700 pb-1">
        <Form setSearch={setSearch} />
      </div>
    </div>
  );
}

export default App;
