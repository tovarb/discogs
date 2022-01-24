import MusicRelease from "./MusicRelease";
import { musicReleaseInfo } from "./musicReleaseInfo";

const ResultList = ({ musicReleases }: { musicReleases: any }) => {
  return (
    <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 md:ml-2 md:mr2 lg:ml-8 lg:mr-8 ">
      {musicReleases.map((musicRelease: musicReleaseInfo) => (
        <MusicRelease key={musicRelease.id} musicRelease={musicRelease} />
      ))}
    </div>
  );
};

export default ResultList;
