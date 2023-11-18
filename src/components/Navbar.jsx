import logo from "../assets/logo.svg";
import Toggle from "./Toggle";

const Navbar = ({ isDark, handleChange }) => {
  return (
    <nav className="navbar flex">
      <img src={logo} alt="logo" />
      <div className="navBtn">
        <Toggle handleChange={handleChange} isChecked={isDark} /> {/* Pass isChecked prop */}
        <button id="course">Courses</button>
      </div>
    </nav>
  );
};

export default Navbar;
