import { createBrowserRouter } from "react-router-dom";

import Home from '../../features/pages/Home';
import Login from "../../features/pages/Login";
import TeacherAdmin from "../../features/pages/TeacherAdmin";
import Homework from "../../features/pages/Homework";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <Home />,        
    },
    {
        path: "/login",
        element: <Login />,
    },
    {
        path: "/teacher-admin",
        element: <TeacherAdmin />,
    },
    {
        path: "/homework",
        element: <Homework />,
    }
]);