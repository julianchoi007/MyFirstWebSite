import React from 'react';
import logo from './logo.svg';
import './App.css';
import NavBar from "./components/NavBar/NavBar"
import Root from './routes/root'; 
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
const router = createBrowserRouter([
  {
    path: "/",
    element: <Root/>,
  },
]);

function App() {
  return (
    <div className="App">
      <NavBar title={"test"}/>
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
