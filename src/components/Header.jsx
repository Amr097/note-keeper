import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faFire} from '@fortawesome/free-solid-svg-icons'

function Header() {
  return (
    <header>
      <h1><FontAwesomeIcon icon={faFire} /> Keeper</h1>
    </header>
  );
}

export default Header;
