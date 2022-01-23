import MusicRelease from "./MusicRelease";

const ResultList = ({ musicReleases }: { musicReleases: any }) => {
  return (
    <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 border-double border-4 ml-12 mr-12 ">
      {musicReleases.map((musicRelease: any) => (
        <MusicRelease key={musicRelease.id} musicRelease={musicRelease} />
      ))}
    </div>
  );
};

export default ResultList;
