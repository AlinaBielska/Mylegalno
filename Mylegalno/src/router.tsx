import { createBrowserRouter } from "react-router-dom";
import RootLayout from "./pages/RootLayout/RootLayout";
import Home from "./pages/Home/Home";
import AboutUs from "./pages/AboutUs/AboutUs";
import Services from "./pages/Services/Services";
import Price from "./pages/Price/Price";
import Contact from "./pages/Contact/Contact";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    // loader: rootLoader,
    children: [
      {
        path: "/",
        element: <Home />,
        // loader: teamLoader,
        },
        {
        path: "about-us",
        element: <AboutUs />,
        // loader: teamLoader,
        },
        {
        path: "services",
        element: <Services />,
        // loader: teamLoader,
        },
        {
        path: "price",
        element: <Price />,
        // loader: teamLoader,
        },
        {
        path: "contact",
        element: <Contact />,
        // loader: teamLoader,
        },
    ],
  },
]);

export default router;