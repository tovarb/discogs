import { useState } from "react";
import Error from "./Error";
import logo from "../logo.png";

const Form = ({ setSearch }: { setSearch: any }) => {
  const [searchedText, setSearchedText] = useState<string>("");
  const [error, setError] = useState(false);

  //Storage of searched text
  const searchInformation = (e: any) => {
    e.preventDefault();

    let inputValue = (
      document.getElementById("searchInput") as HTMLTextAreaElement
    ).value;

    //console.log(inputValue);

    if (searchedText.trim() === "") {
      setError(true);
      return;
    }

    setSearch(searchedText);
  };

  return (
    <form onSubmit={searchInformation}>
      <div className="flex">
        <div>
          <img
            src={logo}
            alt="logo"
            className="p-4 text-2xl mr-4 hidden md:block"
          />
        </div>
        <div>
          <input
            type="text"
            placeholder="Search album or artist"
            className="w-25 md:w-30 lg:w-30 p-1 mt-5 mb-5"
            onChange={(e: any) => setSearchedText(e.target.value)}
            id="searchInput"
          />
        </div>
        <div>
          <input
            type="submit"
            value="Search"
            className="w-27 md:w-35 lg:w-35 bg-blue-500 text-zinc-100 rounded p-1 mt-5 mb-5 cursor-pointer"
          />
        </div>
      </div>

      {error ? (
        <Error message="Something went wrong, please write again an album or artist." />
      ) : null}
    </form>
  );
};

export default Form;
