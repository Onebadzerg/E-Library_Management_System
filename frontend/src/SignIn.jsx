
import React from "react";
import { motion } from "framer-motion";
import "./styles.css";
import { toast } from "react-toastify";

// Animated SignIn component using Framer Motion
function SignIn() {
  const [state, setState] = React.useState({
    email: "",
    password: ""
  });

  const handleChange = (evt) => {
    setState({
      ...state,
      [evt.target.name]: evt.target.value
    });
  };

  const handleOnSubmit = (evt) => {
    evt.preventDefault();
    const { email, password } = state;

    if (!email || !password) {
      toast.error("Please fill in both fields");
      return;
    }

    // Simulate login API call
    toast.success("Logged in successfully!");
    setState({ email: "", password: "" });
  };

  return (
    <motion.div
      className="container"
      id="container"
      initial={{ opacity: 0, x: -100 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: 100 }}
      transition={{ duration: 0.5 }}
    >
      <div className="form-container sign-in-container">
        <form onSubmit={handleOnSubmit}>
          <h1>Sign in</h1>
          <div className="social-container">
            <a href="#" className="social"><i className="fab fa-facebook-f"></i></a>
            <a href="#" className="social"><i className="fab fa-google-plus-g"></i></a>
            <a href="#" className="social"><i className="fab fa-linkedin-in"></i></a>
          </div>
          <span>or use your account</span>
          <input type="email" placeholder="Email" name="email" value={state.email} onChange={handleChange} />
          <input type="password" placeholder="Password" name="password" value={state.password} onChange={handleChange} />
          <a href="#">Forgot your password?</a>
          <button type="submit">Sign In</button>
        </form>
      </div>
      <div className="overlay-container">
        <div className="overlay">
          <div className="overlay-panel overlay-right">
            <h1>Hello, Friend!</h1>
            <p>Enter your personal details and start journey with us</p>
            <a href="/signup"><button className="ghost">Sign Up</button></a>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export default SignIn;
