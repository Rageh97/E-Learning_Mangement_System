import LayoutRsolver from "../../layouts/LayoutResolver";
import React from "react";
import AreaChart from "../../components/charts/AreaChart";

import BoxCharts from "../../components/charts/BoxCharts";
import ChartEvents from "../../components/charts/ChartEvents";

import Table from "../../components/charts/Table";

export function Dashboard() {
  const users = JSON.parse(localStorage.getItem("users"));
  const columns = [
    {
      name: "Name",
      selector: (row) => row.name,
    },
    {
      name: "Email",
      selector: (row) => row.email,
    },
    {
      name: "Role",
      selector: (row) => row.role,
    },
    {
      name: "Code",
      selector: (row) => row.code,
    },
  ];
  return (
    <LayoutRsolver>
      <>
        <section className="bg-light py-5 py-xl-8">
          <div className="container overflow-hidden  ">
            <div className="gy-md-0">
              <div className="text-md-start">
                <h3
                  style={{ backgroundColor: "#F1F1F1" }}
                  className=" p-2 shadow-md text-gray-500 fw-bold text-xl mb-3"
                >
                  Dashboard / Admin
                </h3>

                <div className="row">
                  <BoxCharts />
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <AreaChart />
                    </div>
                    <div>
                      <ChartEvents />
                    </div>
                  </div>
                  <div className="w-full">
                    <Table title={"Users Belong To Community"} data={users} columns={columns}/>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </>
    </LayoutRsolver>
  );
}
