import { useState } from "react";
import { useEffect } from "react";
import "./App.css";
import Form from "./components/Form";
import ResultList from "./components/ResultList";

function App() {
  const [search, setSearch] = useState("");
  const [musicReleases, setMusicReleases] = useState([]);

  useEffect(() => {
    if (search === "") return;

    const callApi = async () => {
      const resultsPerPage = 18;
      const key = "zhCaEllGVyLwAekgqCSE";
      const token = "OHzlegNvJTDAdSsMuzVXDCTxhCzdOtao";
      const url = `https://api.discogs.com/database/search?q=${search}&key=${key}&secret=${token}&per_page=${resultsPerPage}`;

      const response = await fetch(url);
      const result = await response.json();

      setMusicReleases(result.results);
      console.log(result.results);
    };

    callApi();
  }, [search]);
  return (
    <div>
      <div className="grid justify-items-center bg-zinc-700 pb-1">
        <Form setSearch={setSearch} />
      </div>
      <div>
        <ResultList musicReleases={musicReleases} />
      </div>
    </div>
  );
}

export default App;
