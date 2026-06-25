import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";

function Signup() {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [error, setError] = useState("");

  const handleSignup = () => {
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

    // store user in localStorage
    localStorage.setItem(
      "user",
      JSON.stringify({ email })
    );

    // go to login page
    navigate("/login");
  };

  return (
    <div className="auth-container">
      <div className="glass auth-box">

        <div className="auth-icon">📝</div>
        <h2>Create your account</h2>
        <p className="auth-sub">Join to unlock movies, songs, games &amp; favorites.</p>

        {/* ERROR */}
        {error && <p className="error">{error}</p>}

        <input
          type="text"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && handleSignup()}
        />

        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && handleSignup()}
        />

        <button onClick={handleSignup}>
          Signup
        </button>

        <p style={{ marginTop: "14px" }}>
          Already have account? <Link to="/login">Login</Link>
        </p>

      </div>
    </div>
  );
}

export default Signup;
