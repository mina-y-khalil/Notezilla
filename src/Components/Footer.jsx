import React from "react";


const date = new Date();
const year = date.getFullYear();

function Footer() {
    return (
        <footer>
        <p>© {year} Developed By: <a href="https://www.linkedin.com/in/mina-y-khalil/" target="_blank">Mina Y. Khalil</a>
</p>
        </footer>
    );
    }


export default Footer;