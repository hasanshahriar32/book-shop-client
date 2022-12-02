import { createBrowserRouter } from "react-router-dom";
import DashBoard from "../../Layout/DashBoard";
import Main from "../../Layout/Main";
import AllBooks from "../../Pages/AllBooks/AllBooks";
import Blog from "../../Pages/Blog/Blog";
import AddedProducts from "../../Pages/DashboardPages/AddedProducts/AddedProducts";
import Allbuyers from "../../Pages/DashboardPages/Allbuyers/Allbuyers";
import Allseller from "../../Pages/DashboardPages/Allseller/Allseller";
import MyOrders from "../../Pages/DashboardPages/MyOrders/MyOrders";
import MyProducts from "../../Pages/DashboardPages/MyProducts/MyProducts";
import Reportitem from "../../Pages/DashboardPages/Reportitem/Reportitem";
import Error from "../../Pages/Error/Error";
import Banner from "../../Pages/Home/Banner/Banner";
import Login from "../../Pages/Login/Login";
import Register from "../../Pages/Register/Register";
import SideNav from "../../Pages/SideNav/SideNav/SideNav";

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
            },{
                path: '/dashboard',
                element: <DashBoard></DashBoard>,
                children: [
                    {
                        path: 'allbuyers',
                        loader: () => fetch(`http://localhost:5000/member/Buyer`),
                        element: <Allbuyers></Allbuyers>,
                    },
                    {
                        path: 'allseller',
                        loader: () => fetch(`http://localhost:5000/member/Seller`),
                        element: <Allseller></Allseller>,
                    },
                    {
                        path: 'reportitem',
                        element: <Reportitem></Reportitem>,
                    },
                    {
                        path: 'myorders/:email',
                        loader: ({params}) => fetch(`http://localhost:5000/orders/${params.email}`), 
                        element: <MyOrders></MyOrders>,
                    },
                    {
                        path: 'addproduct',
                        element: <AddedProducts></AddedProducts>,
                    },
                    {
                        path: 'myproudct/:email',
                        loader: ({params}) => fetch(`http://localhost:5000/allbook/${params.email}`),
                        element: <MyProducts></MyProducts>
                    },
                    

                ]
            },
        ]
    },
    

    {path: '*', element: <Error></Error>}
])