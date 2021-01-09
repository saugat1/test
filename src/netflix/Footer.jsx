import React from "react";

function Footer() {
  return (
    <div className="footer">
      <div className="top"></div>
      <div className="upper">
        <div className="left">
          <h3>NETFLIX</h3>
        </div>
        <div className="right">
          <a href="https://facebook.com/technicalnir">
            <i class="fa fa-facebook-official" aria-hidden="true"></i>
          </a>
          <a href="https://youtube.com/technicalnir">
            <i class="fa fa-youtube-play" aria-hidden="true"></i>
          </a>
          <a href="https://twitter.com/technicalnir">
            <i class="fa fa-twitter" aria-hidden="true"></i>
          </a>
          <a href="https://instagram.com/technicalnir">
            <i class="fa fa-instagram" aria-hidden="true"></i>
          </a>
        </div>
      </div>
      <div className="lower">
        <small>
          {" "}
          &copy; 2021 NF by <span>Saugat</span>
        </small>
      </div>
    </div>
  );
}

export default Footer;
