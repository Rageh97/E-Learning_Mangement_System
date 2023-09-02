import React from "react";

const BoxCharts = () => {

  return (
    <>
      <div className="grid md:grid-cols-4 sm:grid-cols-2 grid-cols-1 gap-4">
        <div className="bg-blue-600  flex flex-col items-start p-2 gap-4 rounded-xl shadow-lg h-44">
          <h1 className="text-xl text-white">
            56 <span>(50%) ⏳</span>
          </h1>
          <p className="text-white">Students</p>
         
        </div>
        <div className="bg-blue-400 flex flex-col items-start p-2 gap-4 rounded-xl shadow-lg h-44">
          <h1 className="text-xl text-white">
            56 <span>(50%) ⏳</span>
          </h1>
          <p className="text-white">Students</p>
        </div>
        <div className="bg-yellow-500 flex flex-col items-start p-2 gap-4 rounded-xl shadow-lg h-44">
          <h1 className="text-xl text-white">
            56 <span>(50%) ⏳</span>
          </h1>
          <p className="text-white">Students</p>
        </div>
        <div className="bg-red-500 flex flex-col items-start p-2 gap-4 rounded-xl shadow-lg h-44">
          <h1 className="text-xl text-white">
            56 <span>(50%) ⏳</span>
          </h1>
          <p className="text-white">Students</p>
        </div>
      </div>
    </>
  );
};

export default BoxCharts;
