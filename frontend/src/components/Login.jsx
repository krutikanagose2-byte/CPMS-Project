import { useState, useCallback } from "react";
import "./Login.css";

import prmitrLogo from "../assets/prmitrlogojpg.jpg";
import campusImg from "../assets/prmitr.jpeg";

/* ─── CAPTCHA helper ─── */
const CHARS = "ABCDEFGHJKLMNPQRSTUVWXYZ23456789"; // no 0/O/1/I ambiguity
function generateCaptcha() {
  let code = "";
  for (let i = 0; i < 5; i++) {
    code += CHARS[Math.floor(Math.random() * CHARS.length)];
  }
  return code;
}

export default function Login({ onBack }) {
  const [mode, setMode] = useState("login");

  /* Login fields */
  const [enrollmentNo, setEnrollmentNo] = useState("");
  const [password, setPassword] = useState("");

  /* Signup extra fields */
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [signupEnrollment, setSignupEnrollment] = useState("");
  const [signupPassword, setSignupPassword] = useState("");

  /* CAPTCHA */
  const [captchaCode, setCaptchaCode] = useState(generateCaptcha);
  const [captchaInput, setCaptchaInput] = useState("");
  const [captchaError, setCaptchaError] = useState(false);

  const refreshCaptcha = useCallback(() => {
    setCaptchaCode(generateCaptcha());
    setCaptchaInput("");
    setCaptchaError(false);
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (mode === "login") {
      if (captchaInput.toUpperCase() !== captchaCode) {
        setCaptchaError(true);
        refreshCaptcha();
        return;
      }
      alert(`Login: Enrollment ${enrollmentNo}`);
    } else {
      alert(`Signup: ${name}, Enrollment: ${signupEnrollment}, Email: ${email}`);
    }
  };

  const switchMode = (m) => {
    setMode(m);
    setCaptchaInput("");
    setCaptchaError(false);
    setCaptchaCode(generateCaptcha());
  };

  return (
    <section className="login-page">

      {/* ================= NAVBAR ================= */}

      <nav className="nav-bar">
        <div className="brand">
          <img src={prmitrLogo} alt="PRMIT&R Logo" className="brand-logo" />
          <div className="brand-text">
            <div className="college">PRMIT&R, Badnera</div>
            <div className="tag">College Placement Management System</div>
          </div>
        </div>
        <button className="login-btn" onClick={onBack} type="button">
          ← Back to Home
        </button>
      </nav>

      <div className="login-container">

        {/* LEFT SECTION */}
        <div className="login-left" style={{ backgroundImage: `url(${campusImg})` }}>
          <div className="left-content">

            <div className="logo-row">
              <img src={prmitrLogo} alt="Logo" />
              <div className="logo-title">
                <h2>PRMIT&R</h2>
                <p>College Placement Management System</p>
              </div>
            </div>

            <div className="welcome-area">
              <h1>Welcome Back!</h1>
              <p>
                Access your placement dashboard,<br />
                track applications and connect<br />
                with top recruiters.
              </p>
            </div>

            <div className="info-card">
              <div className="info-item">
                <h2>120+</h2>
                <span>Companies</span>
              </div>
              <div className="info-item">
                <h2>750+</h2>
                <span>Placements</span>
              </div>
              <div className="info-item">
                <h2>85%</h2>
                <span>Placement Rate</span>
              </div>
            </div>

          </div>
        </div>

        {/* RIGHT SECTION */}
        <div className="login-right">

          <h2>{mode === "login" ? "Login" : "Sign Up"}</h2>

          <p className="subtitle">
            {mode === "login"
              ? "Enter your credentials to continue"
              : "Fill in your details to create an account"}
          </p>

          <form className="login-form" onSubmit={handleSubmit}>

            {/* ── LOGIN FIELDS ── */}
            {mode === "login" && (
              <>
                <label>Enrollment No.</label>
                <input
                  type="number"
                  placeholder="Enter Enrollment No."
                  value={enrollmentNo}
                  onChange={(e) => setEnrollmentNo(e.target.value)}
                  required
                />

                <label>Password</label>
                <input
                  type="password"
                  placeholder="Enter Password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />

                <div className="remember-row">
                  <label className="remember">
                    <input type="checkbox" />
                    Remember me
                  </label>
                  <a href="#">Forgot Password?</a>
                </div>

                {/* CAPTCHA */}
                <div className="captcha-row">
                  <div className="captcha-question">
                    <span className="captcha-sum">
                      {captchaCode.split("").map((ch, i) => (
                        <span key={i} className={`captcha-char captcha-char-${i % 3}`}>{ch}</span>
                      ))}
                    </span>
                    <button
                      type="button"
                      className="captcha-refresh"
                      onClick={refreshCaptcha}
                      title="Refresh CAPTCHA"
                    >
                      ↻
                    </button>
                  </div>
                  <input
                    type="text"
                    className={`captcha-input${captchaError ? " captcha-error" : ""}`}
                    placeholder="Enter Captcha"
                    value={captchaInput}
                    maxLength={5}
                    onChange={(e) => { setCaptchaInput(e.target.value); setCaptchaError(false); }}
                    required
                  />
                  {captchaError && (
                    <p className="captcha-err-msg">❌ Incorrect CAPTCHA. A new code has been generated.</p>
                  )}
                </div>
              </>
            )}

            {/* ── SIGNUP FIELDS ── */}
            {mode === "signup" && (
              <>
                <label>Full Name</label>
                <input
                  type="text"
                  placeholder="Enter Full Name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  required
                />

                <label>Enrollment No.</label>
                <input
                  type="number"
                  placeholder="Enter Enrollment No."
                  value={signupEnrollment}
                  onChange={(e) => setSignupEnrollment(e.target.value)}
                  required
                />

                <label>Email</label>
                <input
                  type="email"
                  placeholder="Enter Email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />

                <label>Password</label>
                <input
                  type="password"
                  placeholder="Enter Password"
                  value={signupPassword}
                  onChange={(e) => setSignupPassword(e.target.value)}
                  required
                />
              </>
            )}

            <button className="submit-btn" type="submit">
              {mode === "login" ? "Login" : "Sign Up"}
            </button>

            {mode === "login" && (
              <p className="help-text">
                Create new Account?{" "}
                <a href="#" onClick={(e) => { e.preventDefault(); switchMode("signup"); }}>
                  Signup
                </a>
              </p>
            )}

            {mode === "signup" && (
              <p className="help-text" style={{ marginTop: "14px" }}>
                Already have an account?{" "}
                <a href="#" onClick={(e) => { e.preventDefault(); switchMode("login"); }}>
                  Login
                </a>
              </p>
            )}

          </form>

        </div>

      </div>
    </section>
  );
}