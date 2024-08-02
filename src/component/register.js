import { Link } from 'react-router-dom';
import "./style.css";
const Register = () => {
  return (
    <>
      <section>
        <div className="container">
          <div className="login">
            <h1>Register Form</h1>

            <form action="">
              <div className="input-box">
                <input type="text" placeholder="Name" />
                <i class="far fa-user"></i>
              </div>
              <div className="input-box">
                <input type="email" placeholder="Email" />
                <i className="fa fa-envelope"></i>
              </div>
              <div className="input-box">
                <input type="text" placeholder="Phone" />
                <i class="fas fa-phone-alt"></i>
              </div>
              <div className="input-box">
                <input type="text" placeholder="New Password" />
                <i class="fas fa-lock"></i>
              </div>
              <div className="input-box">
                <input type="password" placeholder="Confirm Password" />
                <i class="fas fa-lock"></i>
              </div>
              <button type="submit">REGISTER</button>
              <div className="links">
              <Link  to="/">Go to Home</Link>
              </div>
             
            </form>
          </div>
        </div>
      </section>
    </>
  );
};
export default Register;
