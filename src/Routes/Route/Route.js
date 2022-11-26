import { createBrowserRouter } from "react-router-dom";
import Main from "../../Layout/Main";
import Banner from "../../Pages/Home/Banner/Banner";

export const routes = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Banner></Banner>
            }
        ]
    }
])