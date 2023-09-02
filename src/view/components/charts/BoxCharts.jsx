import React from "react";

const BoxCharts = () => {
  return (
    <>
      <div className="grid md:grid-cols-4 sm:grid-cols-2 grid-cols-1 gap-4">
        <div className="bg-blue-600  flex flex-col items-start p-2 gap-4 rounded-xl shadow-lg h-44">
          <h2 className="text-xl text-white">Students</h2>
          <h1 className=" text-white">
            56 <span>(50%) ⏳</span>
          </h1>
          <p className=" bg-slate-200 p-1 rounded-lg opacity-75 cursor-pointer">→ {" "} see the list</p>
        </div>
        <div className="bg-blue-400 flex flex-col items-start p-2 gap-4 rounded-xl shadow-lg h-44">
          <h2 className="text-xl text-white">Professors</h2>
          <h1 className=" text-white">
            56 <span>(50%) ⏳</span>
          </h1>
          <p className=" bg-slate-200 p-1 rounded-lg opacity-75 cursor-pointer">→ {" "} see the list</p>
        </div>
        <div className="bg-yellow-500 flex flex-col items-start p-2 gap-4 rounded-xl shadow-lg h-44">
          <h2 className="text-xl text-white">Courses</h2>
          <h1 className=" text-white">
            56 <span>(50%) ⏳</span>
          </h1>
          <p className=" bg-slate-200 p-1 rounded-lg opacity-75 cursor-pointer">→ {" "} see the list</p>
        </div>
        <div className="bg-red-500 flex flex-col items-start p-2 gap-4 rounded-xl shadow-lg h-44">
          <h2 className="text-xl text-white">Balance</h2>
          <h1 className=" text-white">
            56 <span>(50%) ⏳</span>
          </h1>
          <p className=" bg-slate-200 p-1 rounded-lg opacity-75 cursor-pointer">→ {" "} see the list</p>
        </div>
      </div>
    </>
  );
};

export default BoxCharts;
