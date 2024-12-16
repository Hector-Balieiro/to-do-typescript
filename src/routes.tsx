import { createBrowserRouter } from "react-router-dom";
import {App} from './pages/main/index'
import { ReactElement } from "react";
import { Home } from "./pages/home/home";
import { Lista } from "./pages/lista/lista";

interface IRoutes{
    path:string;
    element:ReactElement;
    children?: IRoutes []
}

const routes :IRoutes[] = [
    {
        path:"/",
        element:<App/>,
        children:[
            {path:"/home",element:<Home/>},
            {path:"/lista",element:<Lista/>}
        ]
    },
]
export const router = createBrowserRouter(routes as any)