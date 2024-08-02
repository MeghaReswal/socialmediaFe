import { Link } from "react-router-dom";
import "./style.css";
const Login = () => {
  return (
    <>
      <section>
        <div className="container navigation">
          <div className="login">
            <Link to="/">
              <button type="button" class="btn btn-secondary ">
                Login
              </button>
            </Link>
            <Link to="/register">
              <button type="button" class="btn btn-secondary ">
                Register
              </button>
            </Link>
            <Link to="/post">
              <button type="button" class="btn btn-secondary ">
                Post
              </button>
            </Link>
            <Link to="/create-post">
              <button type="button" class="btn btn-secondary ">
                Create Post
              </button>
            </Link>
          </div>
        </div>
        <div className="container">
          <div className="login">
            <h1>Login Form</h1>
            <form action="">
              <div className="input-box">
                <input type="email" placeholder="Email" />
                <i className="fa fa-envelope"></i>
              </div>
              <div className="input-box">
                <input type="password" placeholder="Password" />
                <i class="fas fa-lock"></i>
              </div>
              <div className="rembar">
                <input id="rembar" type="checkbox" />
                <label for="rembar">remember me</label>
              </div>
              <button type="submit">LOGIN</button>
              <div className="links">
                <Link to="/register">Register here</Link>
              </div>
            </form>
          </div>
        </div>
      </section>
    </>
  );
};
export default Login;
