import { useNavigate } from "react-router-dom";

function Login() {

  const navigate = useNavigate();

  const handleLogin = () => {
    navigate("/account");
  };

  return (
    <div style={{marginTop:"0px", paddingTop:"30px"}}>

      <h2 style={{fontSize:"24px", fontWeight:"bold", marginTop:"0"}}>
  Signin to your PopX account
</h2>

      <p className="desc">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit
      </p>

      <label className="label">Email Address</label>
      <input
        className="input"
        type="email"
        placeholder="Enter email address"
      />

      <label className="label">Password</label>
      <input
        className="input"
        type="password"
        placeholder="Enter password"
      />

      <button
        className="login-btn"
        onClick={handleLogin}
      >
        Login
      </button>

    </div>
  );
}

export default Login;