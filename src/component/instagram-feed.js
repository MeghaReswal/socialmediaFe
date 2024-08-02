import { Link } from "react-router-dom";
import "./instagram-feed.css";
const Instagramfeed = () => {
  return (
    <>
      <Link to="/"><button type="button" class="btn btn-dark ">Home</button></Link>
      <div className="feed">
        <div className="username">
          <div className="name_profile">
            <div className="image">
              <a href="#">
                <img src="https://i1.wp.com/www.winhelponline.com/blog/wp-content/uploads/2017/12/user.png?fit=256%2C256&quality=100&ssl=1" />
              </a>
            </div>
            <div className="id">
              <a href="#">kentury</a>
            </div>
          </div>
          <div className="follow">
            <a href="#">Follow</a>
          </div>
        </div>
        <div className="post">
          <img src="https://i0.wp.com/myadventuresacrosstheworld.com/wp-content/uploads/2018/03/rice-fields-bali-spa-1-e1522157798920.jpg?resize=1000%2C667&ssl=1" />
        </div>
        <div className="btn-group">
          <button type="button" className="btn-love">
            <i className="far fa-heart fa-lg"></i>
          </button>
          <button type="button" className="btn-comment">
            <i className="far fa-comment fa-lg"></i>
          </button>
          <button type="button" className="btn-share">
            <i className="fas fa-share fa-lg "></i>
          </button>
          <button type="button" className="btn-bookmark">
            <i className="far fa-bookmark fa-lg"></i>
          </button>
        </div>
        <div className="caption">
          <p className="like">20 likes</p>
          <p>
            <b>
              <a className="id" href="#">
                kentury_
              </a>
            </b>{" "}
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam
            rutrum, purus ut consequat convallis, nulla nisl tincidunt nulla,
            sed pulvinar.{" "}
          </p>
          <p className="time">5 minute ago</p>
        </div>
      </div>
    </>
  );
};
export default Instagramfeed;
