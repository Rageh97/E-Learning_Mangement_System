import LayoutRsolver from "../../layouts/LayoutResolver";
import React from "react";
import AreaChart from "../../components/charts/AreaChart";

import BoxCharts from "../../components/charts/BoxCharts";
import ChartEvents from "../../components/charts/ChartEvents";
export function Dashboard() {
  return (
    <LayoutRsolver>
      <>
        <section className="bg-light py-5 py-xl-8">
          <div className="container overflow-hidden  ">
            <div className="gy-md-0">
              <div className="text-md-start">
                <div className="text-lg-left text-md-center text-sm-center">
                  <h3 className="bg-gray-300 p-2 fw-bold text-xl mb-3">
                    Dashboard / Admin
                  </h3>
                </div>
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
                </div>
              </div>
            </div>
          </div>
        </section>
      </>
    </LayoutRsolver>
  );
}
