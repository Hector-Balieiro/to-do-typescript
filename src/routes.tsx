import { createBrowserRouter } from "react-router-dom";
import {App} from './pages/main/index'
import { ReactElement } from "react";

interface IRoutes{
    path:string;
    element:ReactElement;
}

const routes :IRoutes[] = [
    {
        path:"/",
        element:<App/>,
    },
]
export const router = createBrowserRouter(routes as any)