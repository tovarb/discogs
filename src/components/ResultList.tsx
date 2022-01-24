import MusicRelease from "./MusicRelease";
import { musicReleaseInfo } from "./musicReleaseInfo";

const ResultList = ({ musicReleases }: { musicReleases: any }) => {
  return (
    <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 ml-12 mr-12 ">
      {musicReleases.map((musicRelease: musicReleaseInfo) => (
        <MusicRelease key={musicRelease.id} musicRelease={musicRelease} />
      ))}
    </div>
  );
};

export default ResultList;
