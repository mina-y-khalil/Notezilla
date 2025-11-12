import React from "react";

function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer>Copyright © {new Date().getFullYear()} Developed By: <a href="https://www.linkedin.com/in/mina-y-khalil/" target="_blank">Mina Y. Khalil</a>

</footer>
  );
}

export default Footer;
