import logo from "../assets/logo.svg";
import Toggle from "./Toggle";

const Navbar = ({ isDark, handleChange }) => {
  return (
    <div className="navbar flex">
      <img src={logo} alt="logo" />
      <div className="navBtn">
        <Toggle handleChange={handleChange} isChecked={isDark} /> {/* Pass isChecked prop */}
        <button id="course">Courses</button>
      </div>
    </div>
  );
};

export default Navbar;
