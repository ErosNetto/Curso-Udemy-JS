import React from 'react';
import { FaHome, FaSignInAlt, FaUser } from 'react-icons/fa';
import { Link } from 'react-router-dom';

import { Nav } from './style';

export default function Header() {
  return (
    <Nav>
      <Link to="/">
        <FaHome size={24} />
      </Link>
      <Link to="/login">
        <FaUser size={24} />
      </Link>
      <Link to="/aa">
        <FaSignInAlt size={24} />
      </Link>
    </Nav>
  );
}
