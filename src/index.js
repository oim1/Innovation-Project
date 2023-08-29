import * as React from "react";
import * as ReactDOM from "react-dom/client";
import {createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import Home from "./pages/HomePage";
import Assets from "./pages/AssetsPage";
import About from "./pages/AboutPage";
import Transactions from "./pages/TransactionsPage";
import "../src/styles/App.css"
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

const App = () => {
    const Layout = () => {
        return <div>
            <Navbar />
            <Footer />
            <Outlet />
        </div>
    }

    const router = createBrowserRouter([
        {
            element: <Layout />,
            children: [
                { path: "/", element: <Home /> },
                { path: "/assetspage", element: <Assets /> },
                { path: "/about", element: <About /> },
                { path: "/transactions", element: <Transactions /> },
            ]
        },
    ]);
    return <div className="App">
        <RouterProvider router={router} />
    </div>
}

ReactDOM.createRoot(document.getElementById("root")).render(
    <React.StrictMode>
        <App />
    </React.StrictMode>
);