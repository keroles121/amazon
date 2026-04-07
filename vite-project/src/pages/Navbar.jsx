import { Link } from "react-router-dom";
import { FaShoppingCart, FaMoon, FaSun } from "react-icons/fa";
import { CiSearch } from "react-icons/ci";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAuth, signOut } from "firebase/auth";
import { setUser, setSearchTerm } from "../Redux/appslice";

const Navbar = () => {
  const searchTerm = useSelector((state) => state.appReducer.searchTerm);
  const cartItems = useSelector((state) => state.appReducer.cart);
  const user = useSelector((state) => state.appReducer.userInfo);
  const dispatch = useDispatch();

  

  const [darkMode, setDarkMode] = useState(
    localStorage.getItem("theme") === "dark",
  );

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [darkMode]);

  const handleLogout = async () => {
    const auth = getAuth();
    await signOut(auth);

    localStorage.removeItem("userInfo");
    dispatch(setUser(null));
  };

  return (
    <div>
    <div className="flex justify-between items-center p-4 bg-gray-800 text-white">
      <div className="xs:hidden sm:block text-blue-500 text-xl font-bold">ecommerce</div>

      <ul className="flex gap-4 items-center">
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
        <li>
          <Link to="/products">products</Link>
        </li>

        <li className="relative hidden md:block">
          <input
            type="text"
            placeholder="Search..."
            className="px-4 py-2 pl-10 rounded-lg border text-black"
            value={searchTerm}
            onChange={(e) => dispatch(setSearchTerm(e.target.value))}
          />
          <CiSearch className="absolute left-2 top-2 text-gray-400" />
        </li>
      </ul>

      <div className="flex gap-4 items-center">
        <Link className="flex gap-1 items-center" to="/cart">
          <FaShoppingCart className="cursor-pointer hover:text-blue-500 transition" />
          <span className="text-sm text-gray-500">{cartItems.length}</span>
        </Link>

        {user ? (
          <div className="flex gap-2 items-center">
            <span className="text-blue-400">{user.Username}</span>
            <button onClick={handleLogout} className="text-red-400">
              Logout
            </button>
          </div>
        ) : (
          <Link to="/login" className="bg-blue-500 px-4 py-2 rounded">
            Login
          </Link>
        )}

        <button onClick={() => setDarkMode(!darkMode)}>
          {darkMode ? <FaSun /> : <FaMoon />}
        </button>
      </div>
    </div>
    <div className=" bg-gray-800 dark:bg-gray-900 text-gray-800 dark:text-gray-200">
       <ul className="flex items-center justify-center sm:translate-x-0 xs:translate-y-[-10px] xs:translate-x-[10px]">
          <li className="xs:block md:hidden relative">
          <input
            type="text"
            placeholder="Search..."
            className="px-4 py-2 pl-10 rounded-lg border text-black"
            value={searchTerm}
            onChange={(e) => dispatch(setSearchTerm(e.target.value))}
          />
          <CiSearch className="absolute left-2 top-2 text-gray-400" />
        </li>
      </ul>
     </div>
    </div>
  );
};

export default Navbar;
