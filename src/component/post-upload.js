import { Link } from "react-router-dom"
import "./style.css";
const Post_Create = () => {
  return (
    <>
      <section>
        <div className="container">
          <div className="login">
            <h1>Create Post</h1>
            <form action="">
              <div className="input-box">
                <input type="text" placeholder="Name" />
                <i class="far fa-user"></i>
              </div>
              <div className="input-box">
                <input type="file" placeholder="Upload File" />
                <i class="fas fa-file-alt"></i>
              </div>
              <button type="submit">Post</button>
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
export default Post_Create;
