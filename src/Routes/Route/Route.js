import { createBrowserRouter } from "react-router-dom";
import Main from "../../Layout/Main";
import AllBooks from "../../Pages/AllBooks/AllBooks";
import Blog from "../../Pages/Blog/Blog";
import Error from "../../Pages/Error/Error";
import Banner from "../../Pages/Home/Banner/Banner";
import Login from "../../Pages/Login/Login";
import Register from "../../Pages/Register/Register";

export const routes = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Banner></Banner>
            },
            {
                path: '/allbooks/:id',
                loader: ({params}) => fetch(`http://localhost:5000/allbooks/${params.id}`),
                element: <AllBooks></AllBooks>
            },
            {
                path: '/blog',
                element: <Blog></Blog>
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/register',
                element: <Register></Register>
            },
        ]
    },

    {path: '*', element: <Error></Error>}
])