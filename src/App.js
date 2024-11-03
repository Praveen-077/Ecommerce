import { Counter } from "./features/counter/Counter";
// import ProductList from './features/product-list/ProductList';
import "./App.css";
import Home from "./pages/Home";
import LoginPage from "./pages/LoginPage";
import SignupPage from "./pages/SignupPage";
import Cart from "./features/cart/Cart";
import CheckOutPage from "./pages/CheckOutPage";

//  ********* Routing
import { createRoot } from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Link,
} from "react-router-dom";
import ProductDetailPage from "./pages/ProductDetailPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home></Home>,
  },
  {
    path: "/login",
    element: <LoginPage></LoginPage>,
  },
  {
    path: "/signup",
    element: <SignupPage></SignupPage>,
  },
  // Only for testing
  {
    path: "/cart",
    element: <Cart></Cart>,
  },
  {
    path: "/checkout",
    element: <CheckOutPage></CheckOutPage>,
  },
  {
    path: "/product-detail",
    element:<ProductDetailPage></ProductDetailPage>,
  },
]);

// createRoot(document.getElementById("root")).render(
//   <RouterProvider router={router} />
// );
//  ********* Routing End

function App() {
  return (
    <div className="App">
      {/* <Home></Home> */}
      {/* <LoginPage></LoginPage> */}
      {/* <SignupPage></SignupPage> */}
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
