import React from "react";
import "./Sidebar.css";
import tree from "../Assets/tree.PNG";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import RssFeedIcon from "@mui/icons-material/RssFeed";
import InstagramIcon from "@mui/icons-material/Instagram";
import MenuIcon from "@mui/icons-material/Menu";

const Sidebar = () => {
  return (
    <div className="sidebarComponent">
      <div className="sidebartop">
        <h1>Recent Post</h1>
        <p></p>
      </div>
      <div className="sidebarbody">
        <div className="sidebarimg">
          <img src={tree} />
        </div>
        <div className="sidebarbodytext">
          <h1>Far far away, behind the word mountains</h1>
          <p>August 15, 2019</p>
        </div>
      </div>
      <div className="sidebarbody">
        <div className="sidebarimg">
          <img src={tree} />
        </div>
        <div className="sidebarbodytext">
          <h1>Far far away, behind the word mountains</h1>
          <p>August 15, 2019</p>
        </div>
      </div>
      <div className="sidebarbody">
        <div className="sidebarimg">
          <img src={tree} />
        </div>
        <div className="sidebarbodytext">
          <h1>Far far away, behind the word mountains</h1>
          <p>August 15, 2019</p>
        </div>
      </div>
      <div className="sidebarbody">
        <div className="sidebarimg">
          <img src={tree} />
        </div>
        <div className="sidebarbodytext">
          <h1>Far far away, behind the word mountains</h1>
          <p>August 15, 2019</p>
        </div>
      </div>

      <div className="sidebartop">
        <h1>Social</h1>
        <p></p>
      </div>
      <div className="fourblocks">
        <div
          className="socialblockback"
          style={{ border: "1px solid #63CDF1" }}
        >
          <div className="socialblock" style={{ backgroundColor: "#63CDF1" }}>
            <TwitterIcon />
          </div>
        </div>

        <div
          className="socialblockback"
          style={{ border: "1px solid #3563C2" }}
        >
          <div className="socialblock" style={{ backgroundColor: "#3563C2" }}>
            <FacebookIcon />
          </div>
        </div>

        <div
          className="socialblockback"
          style={{ border: "1px solid #E62BA9" }}
        >
          <div className="socialblock" style={{ backgroundColor: "#E62BA9" }}>
            <InstagramIcon />
          </div>
        </div>

        <div
          className="socialblockback"
          style={{ border: "1px solid #F7B454" }}
        >
          <div className="socialblock" style={{ backgroundColor: "#F7B454" }}>
            <RssFeedIcon />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
