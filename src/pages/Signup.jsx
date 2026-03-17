import { useNavigate } from "react-router-dom";

function Signup() {

  const navigate = useNavigate();

  const handleSubmit = () => {
    navigate("/account");
  };

  return (
    <div>

      <h2 className="title">Create your PopX account</h2>

      <label className="label">Full Name*</label>
      <input className="input" placeholder="Marry Doe" />

      <label className="label">Phone number*</label>
      <input className="input" placeholder="Marry Doe" />

      <label className="label">Email address*</label>
      <input className="input" placeholder="Marry Doe" />

      <label className="label">Password*</label>
      <input className="input" placeholder="Marry Doe" />

      <label className="label">Company name</label>
      <input className="input" placeholder="Marry Doe" />

      <label className="label">Are you an Agency?*</label>

      <div className="radio-group">
        <label>
          <input type="radio" name="agency" /> Yes
        </label>

        <label>
          <input type="radio" name="agency" /> No
        </label>
      </div>

      <button
        className="btn btn-primary"
        style={{marginTop:"220px"}}
        onClick={handleSubmit}
      >
        Create Account
      </button>

    </div>
  );
}

export default Signup;