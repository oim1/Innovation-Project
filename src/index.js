import * as React from "react";
import * as ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/HomePage";
import Assets from "./pages/AssetsPage";
import About from "./pages/AboutPage";
import Transactions from "./pages/TransactionsPage";

const router = createBrowserRouter([
    { path: "/", element: <Home /> },
    { path: "/assetspage", element: <Assets /> },
    { path: "/about", element: <About /> },
    { path: "/transactions", element: <Transactions /> },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
    <React.StrictMode>
        <RouterProvider router={router} />
    </React.StrictMode>
);