const Loader = () => {
  return (
    <>
      <div className="border h-[520px] border-blue-300 shadow rounded-md p-4 max-w-sm w-full mx-auto">
        <div className="animate-pulse flex flex-col space-y-4">
          <div className="bg-slate-700  w-full h-[300px] rounded"></div>
          <div className="flex-1 space-y-4 py-1">
            <div className="h-4 bg-slate-700 rounded"></div>
            <div className="h-4 bg-slate-700 rounded"></div>
            <div className="h-4 bg-slate-700 rounded"></div>
            <button className="bg-slate-700 h-10 w-full rounded"></button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Loader;
