import { createBrowserRouter, useParams } from "react-router-dom";
import Root from "../Root/Root";
import Login from "../pages/Login";
import Registration from "../pages/Registration";
import Home from "../pages/Home/Home";
import JobDetails from "../pages/JobDetails";
import ErrorPage from "../pages/ErrorPage";
import AddJob from "../pages/AddJob";
import MyPostedJobs from "../pages/MyPostedJobs";
import UpdateJob from "../pages/UpdateJob";
import PrivateRoutes from "./PrivateRoutes";
import MyBids from "../pages/MyBids";
import BidRequests from "../pages/BidRequests";
import AllJobs from "../pages/AllJobs";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage/>,
    children: [
      {
        path:'/',
        element: <Home/>, 
      },
      {
        path: '/login',
        element: <Login/>
      },
      {
        path: '/registration',
        element: <Registration/>
      },
      {
        path: '/jobs/:id',
        element: <PrivateRoutes><JobDetails/></PrivateRoutes>,
        loader: ({params}) => fetch(`${import.meta.env.VITE_API_URL}/jobs/${params.id}`)
      },
      {
        path: '/update/:id',
        element: <PrivateRoutes><UpdateJob/></PrivateRoutes>,
        loader: ({params}) => fetch(`${import.meta.env.VITE_API_URL}/jobs/${params.id}`)
      },
      {
        path: '/add-job',
        element: <PrivateRoutes><AddJob/></PrivateRoutes>
      },
      {
        path:'/my-posted-job',
        element: <PrivateRoutes><MyPostedJobs/></PrivateRoutes>
      },
      {
        path: '/my-bids',
        element: <PrivateRoutes><MyBids/></PrivateRoutes>
      },
      {
        path:'/bid-request',
        element: <PrivateRoutes> <BidRequests/> </PrivateRoutes>
      },
      {
        path: '/job',
        element: <AllJobs/>
      }
    ],
  },
]);
export default router;
