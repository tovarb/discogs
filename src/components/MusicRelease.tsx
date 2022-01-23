const MusicRelease = ({ musicRelease }: { musicRelease: any }) => {
  const { thumb, title } = musicRelease;
  return (
    <div className="border-solid border-2 m-4 items-center justify-center">
      <div className="bg-white">
        <img src={thumb} alt={title} />
        <p className="text-sky-700">{title}</p>
      </div>
    </div>
  );
};

export default MusicRelease;
