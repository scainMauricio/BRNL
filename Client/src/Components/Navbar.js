import { useContext } from "react";
import { NavLink } from "react-router-dom";
import { searchContext } from "../Contexts/searchContext";

export default function Navbar() {
  const { setSearchTerm } = useContext(searchContext);

  return (
    <>
      <div className="navContainer">
        <a href="/" className="logoContainer">
          <img
            className="logo"
            src="https://res.cloudinary.com/brnl/image/upload/v1654850399/brnl/newlogo1_horizonta_ephrtj.png"
          ></img>{" "}
        </a>
        <form className="searchContainer">
          <input
            //onBlur clears the Search Input once its clicked out of it
            onBlur={(event) => {
              event.target.value = "";
              setTimeout(() => {
                setSearchTerm(event.target.value);
              }, 100);
            }}
            name="searchInput"
            placeholder="Search"
            className="searchInput"
            onChange={(event) => {
              setSearchTerm(event.target.value);
            }}
          ></input>
        </form>
        <NavLink to={"/advertise/"} className="advertiseContain">
          Adversite Here
        </NavLink>
      </div>
    </>
  );
}
