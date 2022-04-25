import React from "react";
import "../styles/blog.css";
import { Link, NavLink } from "react-roiter-dom";

const NavBar = ({ onPress }) => {
  return (
    <div className="blog-post-navbar">
      <div className="blog-post-brand">
        <a href="https://itjuana.com/">
          <img
            src="https://itjuana.com/wp-content/uploads/ITJ_tm-logo.png"
            alt="itjuana logo"
            width={80}
            height={80}
          />
        </a>
      </div>
      <ul>
        <li>
          <Link to="join-our-team">Join our team</Link>
        </li>
        <li>
          <a href="#">Contact us</a>
        </li>
        <li>
          <button onClick={() => onPress()}>Create New Post</button>
        </li>
      </ul>
    </div>
  );
};

export default NavBar;
