import { useState, useEffect } from "react";
import { FaSignInAlt } from "react-icons/fa";

function Dashboard() {
  // Declare state outside of return
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  // onChange function to handle form input changes
  const onChange = (e) => {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  const onSubmit = (e) => {
    e.preventDefault();
  };

  const { email, password } = formData;

  return (
    <>
      <section className="heading">
        <h1>
          <FaSignInAlt /> Login
        </h1>
        <p>Please login to your account</p>
      </section>

      <section className="form-group">
        <form onSubmit={onSubmit}>
          <input
            type="email"
            className="form-control"
            id="email"
            name="email"
            value={email}
            placeholder="Enter your email"
            onChange={onChange}
          />
          <input
            type="password"
            className="form-control"
            id="password"
            name="password"
            value={password}
            placeholder="Enter your password"
            onChange={onChange}
          />

          <button type="Login" className="btn btn-block">
            Login
          </button>
        </form>
      </section>
    </>
  );
}

export default Dashboard;
