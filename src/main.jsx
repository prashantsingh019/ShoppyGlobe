import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { store } from "./redux/store.js";
import { Provider } from "react-redux";
import { createBrowserRouter, RouterProvider } from "react-router";
import Cart from "./components/Cart.jsx";
import NotFound from "./components/NotFound.jsx";
import ProductList from "./components/ProductList.jsx";
import Body from "./components/Body.jsx";
import ProductDetails from "./components/ProductDetails.jsx";
const routes = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path:'/',
        element:<Body/>
      }
      ,
      {
        path: "/cart",
        element: <Cart />,
      },
      {
        path:"/products",
        element:<ProductList/>
      },
      {
        path:"/product/:id",
        element:<ProductDetails />
      }
    ],
    errorElement:<NotFound/>
  },
]);
createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Provider store={store}>
      <RouterProvider router={routes} />
    </Provider>
  </StrictMode>
);
