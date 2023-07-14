import React, { useEffect, useRef, useState } from "react";
import "./Body.css";
import Boy from "../Assets/boy.PNG";
import RemoveIcon from "@mui/icons-material/Remove";
import MapsUgcIcon from "@mui/icons-material/MapsUgc";
import WhatshotIcon from "@mui/icons-material/Whatshot";
import girl from "../Assets/girl.PNG";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import EmailIcon from "@mui/icons-material/Email";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import ContentCopyIcon from "@mui/icons-material/ContentCopy";
import Sidebar from "./Sidebar";
import men from "../Assets/men.PNG";

const Body = () => {
  const contentRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      const contentElement = contentRef.current;
      const sidebarElement = contentElement.previousElementSibling;

      if (!contentElement || !sidebarElement) {
        return;
      }

      const contentScrollHeight = contentElement.scrollHeight;
      const contentClientHeight = contentElement.clientHeight;
      const sidebarClientHeight = sidebarElement.clientHeight;

      if (contentScrollHeight - contentClientHeight <= sidebarClientHeight) {
        sidebarElement.style.position = "sticky";
        sidebarElement.style.top = `${
          contentClientHeight - sidebarClientHeight
        }px`;
      } else {
        sidebarElement.style.position = "initial";
        sidebarElement.style.top = "auto";
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const [isCopied, setIsCopied] = useState(false);

  const handleCopy = () => {
    const textToCopy = document.querySelector(".link p");
    if (textToCopy) {
      navigator.clipboard.writeText(textToCopy.innerText);
      setIsCopied(true);
      setTimeout(() => {
        setIsCopied(false);
      }, 2000);
    }
  };

  return (
    <div className="body">
      <div className="content" ref={contentRef}>
        <div className="imgboy">
          <img src={Boy} alt="boy" />
        </div>
        <div className="bigHeading">
          Far far away, behind the word mountains
        </div>
        <div className="imgboydetail">
          <span>August 15, 2019</span>
          <span>
            <RemoveIcon />
          </span>
          <span>2 min read</span>
          <span
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <MapsUgcIcon style={{ color: "red" }} />2
          </span>
          <span
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <WhatshotIcon style={{ color: "red" }} />
            323
          </span>
        </div>
        <div className="normaltext">
          <p>
            Far far away, behind the word mountains, far from the countries{" "}
            <span className="black">Vokalia and Consonantia</span>, there live
            the blind texts.
          </p>
          <p>
            Separated they live in{" "}
            <span className="black"> Bookmarksgrove </span>
            right at the coast of the Semantics, a large language ocean.
          </p>
          <p>
            A small river named Duden flows by their place and supplies it with
            the necessary regelialia. It is a{" "}
            <span className="red">paradisematic country</span> , in which
            roasted parts of sentences fly into your mouth.
          </p>
        </div>
        <div className="imgboy">
          <img src={girl} alt="girl" />
        </div>
        <div className="normaltext">
          <p>
            The Big Oxmox advised her not to do so, because there were thousands
            of bad Commas, wild Question Marks and devious Semikoli, but the
            Little Blind Text didn’t listen. She packed her seven versalia, put
            her initial into the belt and made herself on the way.
          </p>
          <p className="quote">
            Even the all-powerful Pointing has no control about the blind texts
            it is an almost unorthographic life One day however a small line of
            blind text by the name of Lorem Ipsum decided to leave for the far
            World of Grammar.
          </p>
          <span className="poet">John Doe</span>
          <p style={{ width: "100%" }}>
            She packed her seven versalia, put her initial into the belt and
            made herself on the way.
          </p>
          <p>
            When she reached the first hills of the Italic Mountains, she had a
            last view back on the skyline of her hometown Bookmarksgrove, the
            headline of Alphabet Village and the subline of her own road, the
            Line Lane.
          </p>
        </div>
        <div className="threeimages">
          <img src={Boy} />
          <img src={Boy} />
          <img src={Boy} />
        </div>
        <div className="imgboy">
          <img src={girl} alt="girl" />
        </div>
        <div className="bigHeading" style={{ textAlign: "left" }}>
          Little Blind Text
        </div>
        <div className="normaltext">
          <p>
            Pityful a rethoric question ran over her cheek, then she continued
            her way. On her way she met a copy.
          </p>
          <p>
            The copy warned the Little Blind Text, that where it came from it
            would have been rewritten a thousand times and everything that was
            left from its origin would be the word “and” and the Little Blind
            Text should turn around and return to its own, safe country.
          </p>
          <ul>
            <li>
              But nothing the copy said could convince her and so it didn’t take
              long until a few insidious Copy Writers ambushed her,
            </li>
            <li>
              Made her drunk with Longe and Parole and dragged her into their
              agency.
            </li>
            <li>Where they abused her for their projects again and again.s</li>
          </ul>
          <p>
            And if she hasn’t been rewritten, then they are still using her. Far
            far away, behind the word mountains, far from the countries Vokalia
            and Consonantia, there live the blind texts.
          </p>
        </div>
        <div className="bodybottom">
          <div className="category">
            <h1>Categorized in:</h1>
          </div>
          <div className="blocks">
            <div className="blockcat">
              <span style={{ color: "red" }}>#</span>Music
            </div>
            <div className="blockcat">
              <span style={{ color: "#5895FF" }}>#</span>Technology
            </div>
            <div className="blockcat">
              <span style={{ color: "#C3A7E6" }}>#</span>Travel
            </div>
          </div>
        </div>
        <div className="share">
          <h1>Share Article:</h1>
          <div className="article" style={{ backgroundColor: "#135CB6" }}>
            <FacebookIcon />
          </div>
          <div className="article" style={{ backgroundColor: "#00ACED" }}>
            <TwitterIcon />
          </div>
          <div className="article" style={{ backgroundColor: "#FF4C60" }}>
            <EmailIcon />
          </div>
          <div className="article" style={{ backgroundColor: "#1FB381" }}>
            <WhatsAppIcon />
          </div>
        </div>
        <div className="link">
          <p>
            https://themes.estudiopatagon.com/wordpress/maktub/far-far-away-behind-the-word-mountains/
          </p>
          <ContentCopyIcon
            style={{ color: isCopied ? "green" : "red" }}
            onClick={handleCopy}
          />
        </div>

        <div className="comments">
          <div className="commentheading">
            <h1>2 Comments</h1>
            <p></p>
          </div>
          <div className="aboutcomment">
            <div className="commentimg">
              <img src={men} />
            </div>
            <div className="commentcontent">
              <div className="commenttop">
                <div className="commentname" style={{ color: "black" }}>
                  Jonathan Doe
                </div>
                <div className="commentntdate">on May 16, 2022</div>
              </div>
              <div className="commentdata">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. In
                feugiat dui a velit commodo, in sagittis odio imperdiet.
                Praesent rutrum, metus et luctus viverra, nisl risus pharetra
                nisi, at aliquet felis justo et velit.
              </div>
              <div className="replybutton">
                <button>Reply</button>
              </div>
            </div>
          </div>
        </div>
        <div className="comments">
          <div className="aboutcomment">
            <div className="commentimg">
              <img src={men} />
            </div>
            <div className="commentcontent">
              <div className="commenttop">
                <div className="commentname" style={{ color: "black" }}>
                  Jonathan Doe
                </div>
                <div className="commentntdate">on May 16, 2022</div>
              </div>
              <div className="commentdata">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. In
                feugiat dui a velit commodo, in sagittis odio imperdiet.
                Praesent rutrum, metus et luctus viverra, nisl risus pharetra
                nisi, at aliquet felis justo et velit.
              </div>
              <div className="replybutton">
                <button>Reply</button>
              </div>
            </div>
          </div>
        </div>
        <div className="commentheading">
          <h1>Leave a Reply</h1>
          <p></p>
        </div>

        <div className="reply">
          <div className="replycomment">
            <input placeholder="Comment" />
          </div>
          <div className="replysec">
            <div className="replyname">
              <input placeholder="Name" />
            </div>
            <div className="replyname">
              <input placeholder="Email" />
            </div>
          </div>
          <button className="postcomment">Post Comment</button>
        </div>
      </div>
      <div className="sidebar">
        <Sidebar />
      </div>
    </div>
  );
};

export default Body;
