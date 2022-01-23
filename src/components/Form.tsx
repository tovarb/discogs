import { useState } from "react";

const Form = ({ setSearch }: { setSearch: any }) => {
  const [searchedText, setSearchedText] = useState("");

  const searchInformation = (e: any) => {
    e.preventDefault();

    setSearch(searchedText);
  };

  return (
    <form onSubmit={searchInformation}>
      <div className="flex flex-row">
        <div className="basis-1/4">
          <h1 className="p-4 text-2xl text-white mr-4">Discogs</h1>
        </div>
        <div className="basis-2/4">
          <input
            type="text"
            placeholder="Search album or artist example: Vicente Fernandez"
            className="w-96 p-1 mt-4"
            onChange={(e: any) => setSearchedText(e.target.value)}
          />
        </div>
        <div className="basis-1/4">
          <input
            type="submit"
            value="Search"
            className="w-32 bg-blue-500 text-zinc-100 rounded p-1 ml-3 mt-4"
          />
        </div>
      </div>
    </form>
  );
};

export default Form;
