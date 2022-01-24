import { musicReleaseInfo } from "./musicReleaseInfo";

const MusicRelease = ({ musicRelease }: { musicRelease: musicReleaseInfo }) => {
  //Extraction of main elements of musicRelease
  const { thumb, title, uri } = musicRelease;
  const url = "https://www.discogs.com" + uri;

  return (
    <div className="border-solid border-2 m-4 items-center justify-center">
      <div className="bg-white pl-2 pr-2 pt-3 pb-2 md:pl-3 md:pr-3 md:pt-3 lg:pl-3  lg:pr-3 lg:pt-4 lg:pb-4">
        <a href={url} target="_blank" rel="noopener noreferrer">
          <img src={thumb} alt={title} />
          <p className="text-sky-700">{title}</p>
        </a>
      </div>
    </div>
  );
};

export default MusicRelease;
