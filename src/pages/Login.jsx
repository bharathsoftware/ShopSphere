import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Login({ onLogin }) {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!email || !password) {
      alert("Please enter email and password");
      return;
    }

    // Demo user details
    const user = {
      name: email.split("@")[0],
      email: email,
    };

    onLogin(user);

    alert("Login successful!");

    navigate("/");
  };

  return (
    <main className="auth-page">
      <div className="auth-card">
        <div className="auth-icon">👤</div>

        <h1>Welcome Back</h1>

        <p className="auth-subtitle">
          Login to continue shopping with ShopSphere
        </p>

        <form onSubmit={handleSubmit}>
          <label>Email Address</label>

          <input
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <label>Password</label>

          <input
            type="password"
            placeholder="Enter your password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          <button type="submit" className="auth-btn">
            Login
          </button>
        </form>

        <p className="auth-note">
          Demo login — any valid email and password will work.
        </p>
      </div>
    </main>
  );
}

export default Login;