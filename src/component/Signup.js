import React, { useState, useRef } from "react";
import { Link, useNavigate } from "react-router-dom";
import Validation from "./SignupValidation";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function Signup() {
  const [values, setValues] = useState({
    name: "",
    email: "",
    password: "",
    cpassword: "",
  });

  const handleInput = (event) => {
    setValues({ ...values, [event.target.name]: event.target.value });
  };

  const [errors, setErrors] = useState({});
  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();
    const newErrors = Validation(values);
    setErrors(newErrors);
    if (Object.keys(newErrors).every((key) => newErrors[key] === "")) {
      axios
        .post("http://localhost:3000/signup", values)
        .then((res) => {
          navigate("/");
        })
        .catch((err) => console.log("ram" + err));
    }
  };

  const notify = () => toast("register successfully ");

  return (
    <>
      <div className="main-1">
        <div className="container">
          <div className="body">
            <div className="h_1">
              <header>
                <h1 className="head">Create Your Account</h1>
              </header>
            </div>

            <form action="" onSubmit={handleSubmit}>
              <div className="main-containent">
                <input
                  type="text"
                  placeholder="Your name "
                  className="i-1"
                  name="name"
                  onChange={handleInput}
                />
                <hr />
                {errors.name && <span className="err">{errors.name}</span>}
                <input
                  type="email"
                  placeholder="Your email"
                  className="i-1"
                  name="email"
                  onChange={handleInput}
                />
                <hr />
                {errors.email && <span className="err">{errors.email}</span>}
                <input
                  type="password"
                  placeholder="Password"
                  className="i-1"
                  name="password"
                  onChange={handleInput}
                />
                <hr />
                {errors.password && (
                  <span className="err">{errors.password}</span>
                )}
                <input
                  type="password"
                  placeholder="Confirm password"
                  className="i-1"
                  onChange={handleInput}
                  name="cpassword"
                />
                <hr />
                {errors.cpassword && (
                  <span className="err">{errors.cpassword}</span>
                )}
                <button type="submit" className="btn i-1" onClick={notify}>
                  Sign up
                </button>
                <ToastContainer />
              </div>
            </form>
            <footer>
              <Link to="/" className="ft-p">
                Back to Sign in
              </Link>
            </footer>
          </div>
        </div>
      </div>
    </>
  );
}

export default Signup;
