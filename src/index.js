import * as React from "react";
import * as ReactDOM from "react-dom/client";
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import Home from "./pages/HomePage";
import Assets from "./pages/AssetsPage";
import About from "./pages/AboutPage";
import Transactions from "./pages/TransactionsPage";
import "../src/styles/App.css"

const App = () => {
    const router = createBrowserRouter([
        { path: "/", element: <Home /> },
        { path: "/assetspage", element: <Assets /> },
        { path: "/about", element: <About /> },
        { path: "/transactions", element: <Transactions /> },
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