import { useContext, useState } from "react";
import { useNavigate, NavLink } from "react-router-dom";
import { searchContext } from "../Contexts/searchContext";

const logo =
  "https://res.cloudinary.com/brnl/image/upload/v1654850399/brnl/newlogo1_horizonta_ephrtj.png";
export default function Navbar() {
  const { searchTerm, setSearchTerm } = useContext(searchContext);
  const [searching, setSearching] = useState("");
  const navigate = useNavigate();

  const cleanSearch = (event) => {
    setSearchTerm("");
    event.target.value = "";
    console.log("dentro");
  };

  return (
    <>
      <div className="navContainer">
        <a href="/" className="logoContainer">
          <img className="logo" src={logo}></img>{" "}
        </a>
        <form className="searchContainer">
          <input
            onBlur={(event) => {
              event.target.value = "";
              setTimeout(() => {
                setSearchTerm(event.target.value);
              }, 100);

              // navigate("/searched/" + searchTerm);
            }}
            name="searchInput"
            placeholder="Search"
            className="searchInput"
            onChange={(event) => {
              setSearchTerm(event.target.value);
              // navigate("/searched/" + searchTerm);
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
