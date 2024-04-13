import React, { useState, useRef } from "react";
import { Link, useNavigate } from "react-router-dom";
import Validation from "./LoginValidation";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function Signin() {
  const [massage, setMassage] = useState(false);

  const name = useRef(null);

  const show = (e) => {
    e.preventDefault();
    const user = name.current.value;
    console.log(name.current.value);
    user === "" ? alert("enter email") : setMassage(true);
  };

  const [values, setValues] = useState({
    email: "",
    password: "",
  });

  const handleInput = (event) => {
    setValues((prev) => ({
      ...prev,
      [event.target.name]: [event.target.value],
    }));
  };

  const [errors, setErrors] = useState({});
  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();
    const newErrors = Validation(values);
    console.log(values);
    setErrors(newErrors);
    if (Object.keys(newErrors).every((key) => newErrors[key] === "")) {
      axios
        .post("http://localhost:4000/signin", values)
        .then((res) => {
          navigate("/home");
        })
        .catch((err) => console.log("ram" + err));
    }
  };

  return (
    <>
      <div className="main-1">
        <div className="container">
          <div className="body">
            <div className="h_1">
              <header>
                <h1 className="head">
                  Welcome <br />
                  Back
                </h1>
              </header>
            </div>
            <form action="" onSubmit={handleSubmit}>
              ``
              <div className="main-containent">
                <input
                  type="email"
                  onChange={handleInput}
                  name="email"
                  placeholder="Your email"
                  className="i-1"
                  ref={name}
                />

                <hr />
                {errors.email && <span className="err">{errors.email}</span>}
                <input
                  type="password"
                  onChange={handleInput}
                  name="password"
                  placeholder="Password"
                  className="i-1"
                />
                <hr />
                {errors.password && (
                  <span className="err">{errors.password}</span>
                )}
                <div className="btn1">
                  <button className="btn i-2" type="submit">
                    Sign in
                  </button>
                  <p>or</p>
                  <button className="btn i-3">Sign in with Google</button>
                </div>
              </div>
            </form>
            <footer>
              <Link to="/Signup" className="ft-p">
                Create account? Sign up
              </Link>
            </footer>
          </div>
        </div>
      </div>
    </>
  );
}

export default Signin;
