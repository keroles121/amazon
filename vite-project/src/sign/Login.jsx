import * as Yup from "yup";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { ErrorMessage, Field, Form, Formik } from "formik";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import { setUser } from "../Redux/appslice";

const Login = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const SignInSchema = Yup.object().shape({
    email: Yup.string().email("Invalid email").required("Email is required"),
    password: Yup.string()
      .min(8, "your password is wrong")
      .required("Password is required"),
  });

  const handleSubmit = async (values, { setSubmitting, resetForm }) => {
  const auth = getAuth();

  try {
    const userCredential = await signInWithEmailAndPassword(
      auth,
      values.email,
      values.password
    );

    const user = userCredential.user;

    const userData = {
      Username: user.displayName,
      Email: user.email,
    };

    // 🔥 أهم 3 سطور
    dispatch(setUser(userData));
    localStorage.setItem("userInfo", JSON.stringify(userData));

    Swal.fire({
      icon: "success",
      title: "Login Successful",
      timer: 2000,
      showConfirmButton: true,
    });

    resetForm();

    setTimeout(() => {
      navigate("/");
    }, 2000);

  } catch (error) {
    console.log(error.code, error.message);

    Swal.fire({
      icon: "error",
      title: "Login Failed",
      text: error.message,
      showConfirmButton: true,
    });

  } finally {
    setSubmitting(false);
  }
};

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100 px-4">
      <Formik
        initialValues={{ email: "", password: "" }}
        validationSchema={SignInSchema}
        onSubmit={handleSubmit}
      >
        {({ isSubmitting }) => (
          <Form className="w-full max-w-md bg-white p-6 rounded-2xl shadow-lg space-y-5">
            <h2 className="text-2xl font-bold text-center text-gray-700">
              Sign In
            </h2>

            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                Email
              </label>
              <Field
                id="email"
                name="email"
                placeholder="Enter your email"
                className="w-full border border-gray-300 rounded-xl p-3 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition"
              />
              <ErrorMessage
                name="email"
                component="div"
                className="text-red-500 text-sm mt-1"
              />
            </div>

            <div>
              <label
                htmlFor="password"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                Password
              </label>
              <Field
                id="password"
                name="password"
                type="password"
                placeholder="Enter your password"
                className="w-full border border-gray-300 rounded-xl p-3 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition"
              />
              <ErrorMessage
                name="password"
                component="div"
                className="text-red-500 text-sm mt-1"
              />
            </div>
            <div>
              <label
                htmlFor="signup"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                Don't have an account?{" "}
                <span
                  onClick={() => navigate("/signup")}
                  className="text-blue-500 cursor-pointer hover:underline"
                >
                  Sign Up
                </span>
              </label>
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full bg-blue-500 text-white py-3 rounded-xl font-semibold hover:bg-blue-600 active:scale-95 transition duration-200 disabled:bg-gray-400 disabled:cursor-not-allowed"
            >
              {isSubmitting ? "Signing in..." : "Sign In"}
            </button>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default Login;