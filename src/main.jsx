import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter,  RouterProvider } from "react-router-dom";
import App from "./App";
import { Hero } from "./components/Hero/Hero";
import { Root } from "./components/Route/Root";
import { Resources } from "./components/Resources/Resources";
import { PYQ } from "./components/PYQ/PYQ";
import { CT } from "./components/CT/CT";



const routes = createBrowserRouter([
  {
    path:'/',
    element:<Root/>,
    children:[
      {
        path:"/",
        element:<App/>
      },
      {
        path:"/resources",
        element: <Resources/>
      },
      {
        path:"/pyqs",
        element:<PYQ/>
      },
      {
        path:"/CTPapers",
        element:<CT/>
      }
    ]
  }
])
// ReactDOM.render(
//   <React.StrictMode>
    
//     <Router>
//       <App />
//     </Router>
//   </React.StrictMode>,
//   document.getElementById("root")
// );
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={routes} />
  </React.StrictMode>
);
