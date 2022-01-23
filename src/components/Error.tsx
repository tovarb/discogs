const Error = ({ message }: { message: string }) => {
  return (
    <div className="absolute bg-white mt-10 justify-center">
      <p>{message}</p>
    </div>
  );
};

export default Error;
