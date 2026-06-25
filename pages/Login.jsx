import React, { useState, useContext } from "react";
import { useNavigate, Link } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";

function Login() {
  const { login } = useContext(AuthContext);
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [error, setError] = useState("");

  const handleLogin = () => {
    // validation
    if (!email || !password) {
      setError("Please fill all fields");
      return;
    }

    // email format check
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email)) {
      setError("Invalid email format");
      return;
    }

    // clear error
    setError("");

    // login user
    login({ email });

    // redirect to home
    navigate("/");
  };

  return (
    <div className="auth-container">
      <div className="glass auth-box">

        <div className="auth-icon">🔐</div>
        <h2>Welcome back</h2>
        <p className="auth-sub">Login to explore Movies, Songs, Artists &amp; more.</p>

        {/* ERROR MESSAGE */}
        {error && <p className="error">{error}</p>}

        <input
          type="text"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && handleLogin()}
        />

        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && handleLogin()}
        />

        <button onClick={handleLogin}>
          Login
        </button>

        <p style={{ marginTop: "14px" }}>
          New user? <Link to="/signup">Signup</Link>
        </p>

      </div>
    </div>
  );
}

export default Login;
