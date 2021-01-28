import './TopNav.css'

function TopNav() {
  return (
    <div className="navContainer">
      {/* <div>
        <img src={} />
      </div> */}
      <h1>Jaquez Jaw</h1>
      <ul className="nav">
        <li>About Me</li>
        <li>Services</li>
        <li>Contact</li>
      </ul>
      <div className="nav_mobile_header">Jaquez Law</div>
      <ul className="nav_mobile">
        <li>About Me</li>
        <li>Services</li>
        <li>Contact</li>
      </ul>
    </div>
  );
}

export default TopNav;
