
import React from "react";
import { motion } from "framer-motion";
import "./styles.css";
import { toast } from "react-toastify";

// Animated SignUp component using Framer Motion
function SignUp() {
  const [state, setState] = React.useState({
    username: "",
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
    const { username, email, password } = state;

    if (!username || !email || !password) {
      toast.error("Please fill in all fields");
      return;
    }

    // Simulate register API call
    toast.success("Account created!");
    setState({ username: "", email: "", password: "" });
  };

  return (
    <motion.div
      className="container"
      id="container"
      initial={{ opacity: 0, x: 100 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -100 }}
      transition={{ duration: 0.5 }}
    >
      <div className="form-container sign-in-container">
        <form onSubmit={handleOnSubmit}>
          <h1>Create Account</h1>
          <div className="social-container">
            <a href="#" className="social"><i className="fab fa-facebook-f"></i></a>
            <a href="#" className="social"><i className="fab fa-google-plus-g"></i></a>
            <a href="#" className="social"><i className="fab fa-linkedin-in"></i></a>
          </div>
          <span>or use your email for registration</span>
          <input type="text" placeholder="Username" name="username" value={state.username} onChange={handleChange} />
          <input type="email" placeholder="Email" name="email" value={state.email} onChange={handleChange} />
          <input type="password" placeholder="Password" name="password" value={state.password} onChange={handleChange} />
          <button type="submit">Sign Up</button>
        </form>
      </div>
      <div className="overlay-container">
        <div className="overlay">
          <div className="overlay-panel overlay-right">
            <h1>Welcome Back!</h1>
            <p>To keep connected with us, please login with your credentials</p>
            <a href="/signin"><button className="ghost">Sign In</button></a>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export default SignUp;
