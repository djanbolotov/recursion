import React from 'react'

const Navbar = () => {
  return (
    <div className="navBar">
      <a className="logo" target="#" href="!#">Djan<span>bolotov</span></a>
      <div className="menu">
        <a className="menuLink" target="#" href="https://github.com/djanbolotov16">Projects</a>
        <a className="menuLink" target="#" href="https://t.me/djanbolotov16">My Telegram</a>
      </div>
    </div>
  );
};

export default Navbar;