import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { searchContext } from "../Contexts/searchContext";

const logo =
  "https://res.cloudinary.com/brnl/image/upload/v1654692785/brnl/logonovo_vogkak.png";
export default function Navbar() {
  const { searchTerm, setSearchTerm } = useContext(searchContext);
  // const navigate = useNavigate();

  // const submitHandler = (e) => {
  //   e.preventDefault();
  //   navigate("/searched/" + searchTerm);
  // };

  return (
    <>
      <div className="navContainer">
        <div className="logoContainer">
          <img className="logo" src={logo}></img>{" "}
        </div>
        <div className="searchContainer">
          <form>
            <input
              placeholder="Search"
              className="searchInput"
              onChange={(event) => {
                setSearchTerm(event.target.value);
                // navigate("/searched/" + searchTerm);
              }}
            ></input>
          </form>
        </div>
        {/* <div className="advertiseContain"></div> */}
      </div>
    </>
  );
}
