import { RouterProvider, createBrowserRouter } from "react-router-dom";
import "./App.css";
import User from "./Components/User/User";
import React from "react";
import Book from "./Components/Book/Book";

const router = createBrowserRouter([
    {
        path: "/",
        element: <User />,
    },
    {
        path: "/books",
        element: <Book />,
    },
]);

function App() {
    return (
        <React.StrictMode>
            <RouterProvider router={router} />
        </React.StrictMode>
    );
}

export default App;
