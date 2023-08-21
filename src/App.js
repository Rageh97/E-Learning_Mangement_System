
import React from "react";
import {  RouterProvider  , createBrowserRouter} from "react-router-dom";

import { allRoutes }  from './core/page'

const router =  createBrowserRouter(allRoutes);
const App = () => {
  return (
    <RouterProvider router={router} ></RouterProvider> 
    );
};

export default App;
