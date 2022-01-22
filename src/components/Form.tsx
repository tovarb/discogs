const Form = () => {
  return (
    <form>
      <div className="columns-2">
        <div className="">
          <input
            type="text"
            placeholder="Search the artist, example: Vicente Fernandez"
            className="w-96 p-1"
          />
        </div>
        <div className="">
          <input
            type="submit"
            placeholder="Search"
            className="w-48 bg-red-400 text-zinc-100 rounded-md p-1"
          />
        </div>
      </div>
    </form>
  );
};

export default Form;
