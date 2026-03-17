import { Link } from "react-router-dom";

function Landing() {
  return (
    <div style={{marginTop:"560px"}}>
      <h2 className="title">Welcome to PopX</h2>

      <p className="desc">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit
      </p>

      <Link to="/signup">
        <button className="btn btn-primary">
          Create Account
        </button>
      </Link>

      <Link to="/login">
        <button className="btn btn-secondary">
          Already Registered? Login
        </button>
      </Link>
    </div>
  );
}

export default Landing;