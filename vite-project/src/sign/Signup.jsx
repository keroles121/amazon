import * as Yup from "yup";
import { getAuth, createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import { ErrorMessage, Field, Form, Formik } from "formik";



const Signup = () => {

    const Navigate = useNavigate();

   const RegisterSchema = Yup.object().shape({
    name: Yup.string().required("UserName is required"),
    email: Yup.string().email("Invalid email").required("Email is required"),
    password: Yup.string()
      .min(8, "Password must be at least 8 characters")
      .required("Password is required"),
    repassword: Yup.string()
      .oneOf([Yup.ref("password"), null], "Passwords must match")
      .required("Confirm Password is required"),
  });

  const handleSubmit = async (values) => {
  const auth = getAuth();

  try {
    const user = await createUserWithEmailAndPassword(auth, values.email, values.password);

    await updateProfile(auth.currentUser, {
      displayName: values.name
    });

    Swal.fire({
      icon: "success",
      title: "Registration Successful",
      text: "Your account has been created successfully!",
      }).then(() => {
        Navigate("/login");
      });

    console.log(user);
  } catch (error) {
    const errorCode = error.code;
    const errorMessage = error.message;
    console.log(errorCode, errorMessage);
  }
};


  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100 px-4">
  <Formik
    initialValues={{
      name: "",
      email: "",
      password: "",
      repassword: "",
    }}
    validationSchema={RegisterSchema}
    onSubmit={handleSubmit}
  >
    {({ isSubmitting }) => (
      <Form className="w-full max-w-md bg-white p-6 rounded-2xl shadow-lg space-y-5">
        
        <h2 className="text-2xl font-bold text-center text-gray-700">
          Create Account
        </h2>

        <div>
          <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
            Username
          </label>
          <Field
            id="name"
            name="name"
            placeholder="Enter your name"
            className="w-full border border-gray-300 rounded-xl p-3 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition"
          />
          <ErrorMessage
            name="name"
            component="div"
            className="text-red-500 text-sm mt-1"
          />
        </div>

        <div>
          <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
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
          <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-1">
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
          <label htmlFor="repassword" className="block text-sm font-medium text-gray-700 mb-1">
            Confirm Password
          </label>
          <Field
            id="repassword"
            name="repassword"
            type="password"
            placeholder="Confirm your password"
            className="w-full border border-gray-300 rounded-xl p-3 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition"
          />
          <ErrorMessage
            name="repassword"
            component="div"
            className="text-red-500 text-sm mt-1"
          />
        </div>

        <button
          type="submit"
          disabled={isSubmitting}
          className="w-full bg-blue-500 text-white py-3 rounded-xl font-semibold hover:bg-blue-600 active:scale-95 transition duration-200 disabled:bg-gray-400 disabled:cursor-not-allowed"
        >
          {isSubmitting ? "Registering..." : "Register"}
        </button>

      </Form>
    )}
  </Formik>
</div>
  )
}

export default Signup