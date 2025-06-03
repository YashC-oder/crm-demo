import { createBrowserRouter, Navigate } from "react-router-dom";
import AuthPage from "../pages/AuthPage/AuthPage";
import RootLayout from "../pages/Root/RootLayout";
import Dashboard from "../pages/DashBoard/DashBoard";
import Segment from "../pages/Segment/Segment";
import Campaign from "../pages/Campaign/Compaign";

const router = createBrowserRouter(
  [
    {
      path: "/auth",
      element: <AuthPage />,
    },
    {
      path: "/",
      element: <RootLayout />,
      children: [
        {
          index: true,
          element: <Navigate to="/auth" replace />,
        },
        {
          path: "dashboard",
          element: <Dashboard />,
        },
        {
          path: "segment",
          element: <Segment />,
        },
        {
          path: "campaign",
          element: <Campaign />,
        },
      ],
    },
  ],
  {
    basename: "/crm-demo/"
  }
);

export default router;
