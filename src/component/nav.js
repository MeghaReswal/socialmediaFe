import { Link } from "react-router-dom";
import "./style.css";
const Nav = () => {
  return (
    <>
      <div className="container navigation">
        <div className="login">
          <Link to="/"><button type="button" class="btn btn-secondary ">Login</button></Link>
          <Link to="/register"><button type="button" class="btn btn-secondary ">Register</button></Link>
          <Link to="/post"><button type="button" class="btn btn-secondary ">Post</button></Link>
          <Link to="/create-post"><button type="button" class="btn btn-secondary ">Create Post</button></Link>
        </div>
      </div>
    </>
  );
};
export default Nav;
