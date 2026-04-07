import {
  createBrowserRouter,
  createRoutesFromElements,
  Outlet,
  Route,
  RouterProvider,
} from "react-router-dom";
import Navbar from "./pages/Navbar";
import Footer from "./pages/Footer";
import Home from "./pages/Home";
import About from "./pages/About";
import Cart from "./pages/Cart";
import Products from "./pages/Products";
import ProductDetails from "./pages/ProductDetails";
import Login from "./sign/Login";
import Signup from "./sign/Signup";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { setUser } from "./Redux/appslice";

const Layout = () => {
  return (
    <div>
      <Navbar />
      <Outlet />
      <Footer />
    </div>
  );
};

const App = () => {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route>
        <Route element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="cart" element={<Cart />} />
          <Route path="product/:id" element={<ProductDetails />} />
        </Route>
          <Route path="products" element={<Products />} />

        <Route path="login" element={<Login />} />
        <Route path="signup" element={<Signup />} />
      </Route>,
    ),
  );

  const dispatch = useDispatch();

  useEffect(() => {
    const auth = getAuth();

    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        const userData = {
          Username: user.displayName,
          Email: user.email,
        };

        dispatch(setUser(userData));
        localStorage.setItem("userInfo", JSON.stringify(userData));
      } else {
        dispatch(setUser(null));
        localStorage.removeItem("userInfo");
      }
    });

    return () => unsubscribe();
  }, [dispatch]);

  return (
    <div className="overflow-hidden min-h-screen bg-white text-black dark:bg-black dark:text-white transition">
      <RouterProvider router={router} />
    </div>
  );
};

export default App;
