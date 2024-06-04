import React from 'react';
import { Link } from 'react-router-dom'; // Corrected import statement

const NavItem = ({ to, label }) => {
  return (
    <li>
      <Link to={to} className="mr-3 hover:text-red-600">
        {label}
      </Link>
    </li>
  );
};

export default NavItem;
