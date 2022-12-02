import { createBrowserRouter } from "react-router-dom";
import DashBoard from "../../Layout/DashBoard";
import Main from "../../Layout/Main";
import AllBooks from "../../Pages/AllBooks/AllBooks";
import Blog from "../../Pages/Blog/Blog";
import AddedProducts from "../../Pages/DashboardPages/AddedProducts/AddedProducts";
import Allbuyers from "../../Pages/DashboardPages/Allbuyers/Allbuyers";
import Allsellers from "../../Pages/DashboardPages/Allseller/Allsellers";
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
                loader: ({params}) => fetch(`https://book-shop-server.vercel.app/allbooks/${params.id}`),
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
                        loader: () => fetch(`https://book-shop-server.vercel.app/member/Buyer`),
                        element: <Allbuyers></Allbuyers>,
                    },
                    {
                        path: 'allseller',
                        loader: () => fetch(`https://book-shop-server.vercel.app/Seller`),
                        element: <Allsellers></Allsellers>,
                    },
                    {
                        path: 'reportitem',
                        loader: () => fetch(`https://book-shop-server.vercel.app/reported`),
                        element: <Reportitem></Reportitem>,
                    },
                    {
                        path: 'myorders/:email',
                        loader: ({params}) => fetch(`https://book-shop-server.vercel.app/orders/${params.email}`), 
                        element: <MyOrders></MyOrders>,
                    },
                    {
                        path: 'addproduct',
                        element: <AddedProducts></AddedProducts>,
                    },
                    {
                        path: 'myproudct/:email',
                        loader: ({params}) => fetch(`https://book-shop-server.vercel.app/allbook/${params.email}`),
                        element: <MyProducts></MyProducts>
                    },
                    

                ]
            },
        ]
    },
    

    {path: '*', element: <Error></Error>}
])