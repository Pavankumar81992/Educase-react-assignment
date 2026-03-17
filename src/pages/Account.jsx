
function Account() {
  return (
    <div>

      {/* HEADER */}
      <div className="account-header">
        Account Settings
      </div>

      {/* PROFILE SECTION */}
      <div className="profile-section">

        <div className="profile-row">
          <div className="profile-img-container">
            <img 
  src="https://randomuser.me/api/portraits/women/44.jpg" 
  className="profile-img" 
/>

            <div className="camera-icon">📷</div>
          </div>

          <div>
            <h4 style={{margin:0}}>Marry Doe</h4>
            <p style={{margin:0, color:"#777"}}>Marry@gmail.com</p>
          </div>
        </div>

        <p className="profile-text">
          Lorem Ipsum Dolor Sit Amet, Consetetur Sadipscing Elitr,
          Sed Diam Nonumy Eirmod Tempor Invidunt Ut Labore Et
          Dolore Magna Aliquyam Erat, Sed Diam
        </p>

      </div>

    </div>
  );
}

export default Account;