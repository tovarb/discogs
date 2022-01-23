import { useState } from "react";
import { useEffect } from "react";
import Form from "./components/Form";
import ResultList from "./components/ResultList";

function App() {
  const [search, setSearch] = useState("");
  const [musicReleases, setMusicReleases] = useState<any>([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);

  useEffect(() => {
    if (search === "") return;

    //Call of API
    const callApi = async () => {
      const resultsPerPage = 18;
      const key = "zhCaEllGVyLwAekgqCSE";
      const token = "OHzlegNvJTDAdSsMuzVXDCTxhCzdOtao";
      const url = `https://api.discogs.com/database/search?q=${search}&key=${key}&secret=${token}&per_page=${resultsPerPage}&page=${currentPage}`;

      const response = await fetch(url);
      const result = await response.json();

      setMusicReleases(result.results);

      const numberOfPages = result.pagination.items;

      const totalPages = Math.ceil(numberOfPages / resultsPerPage);
      setTotalPages(totalPages);

      //Scroll to top after prev or next click
      const jumbotron = document.querySelector(".jumbotron");
      jumbotron!.scrollIntoView({ behavior: "smooth" });
    };

    callApi();
  }, [search, currentPage]);

  //Pagination function - last page
  const lastPage = () => {
    const newCurrentPage = currentPage - 1;

    if (newCurrentPage === 0) return;

    setCurrentPage(newCurrentPage);
  };

  //Pagination function - next page
  const nextPage = () => {
    const newCurrentPage = currentPage + 1;

    if (newCurrentPage === totalPages) return;

    setCurrentPage(newCurrentPage);
  };

  return (
    <div>
      <div className="grid justify-items-center bg-zinc-700 pb-1 jumbotron">
        <Form setSearch={setSearch} />
      </div>
      <div className="justify-items-center">
        <ResultList musicReleases={musicReleases} />
      </div>
      <div className="flex justify-center">
        {currentPage === 1 ? null : (
          <button
            type="button"
            className="bg-blue-500 text-zinc-100 p-2 mt-7 mb-7"
            onClick={lastPage}
          >
            &laquo; Prev
          </button>
        )}
        {currentPage === totalPages ? null : (
          <button
            type="button"
            className="bg-blue-500 text-zinc-100 p-2 ml-3 mt-7 mb-7"
            onClick={nextPage}
          >
            Next &raquo;
          </button>
        )}
      </div>
    </div>
  );
}

export default App;
