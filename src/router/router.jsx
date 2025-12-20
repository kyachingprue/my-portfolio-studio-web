import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layout/MainLayout";
import ErrorPage from "../pages/ErrorPage";
import Home from "../pages/Home";
import MyProject from "../pages/MyProject";
import Projects from "../components/Projects";
import Contact from "../pages/Contact";

const router = createBrowserRouter([
  {
    path: '/',
    element: <MainLayout />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: '/',
        element: <Home/>
      },
      {
        path: 'my-projects',
        element: <MyProject/>
      },
      {
        path: 'projects',
        element: <Projects/>
      },
      {
        path: 'contact-me',
        element: <Contact/>
      }
    ]
  }
])

export default router;