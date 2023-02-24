const element = (
  // Write your code here.
  <div className="bg">
    <h1> Congratulations</h1>
    <div className="bg2">
      <div>
        <img
          src="https://assets.ccbp.in/frontend/react-js/congrats-card-profile-img.png"
          className="image"
        />
      </div>

      <h1>Kiran.v</h1>
      <p>vishnu institute of computer education</p>

      <div>
        <img
          src="https://assets.ccbp.in/frontend/react-js/congrats-card-watch-img.png"
          className="image"
        />
      </div>
    </div>
  </div>
);

ReactDOM.render(element, document.getElementById("root"));
