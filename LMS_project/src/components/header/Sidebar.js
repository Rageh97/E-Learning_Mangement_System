import React from 'react';
import { Link } from 'react-router-dom';

function Sidebar() {
  return (
    <aside className="sidebar">
      <ul className="sidebar-menu">
        <li>
          <Link to='create-exame'>Create Exame</Link>
        </li>
        
      </ul>
    </aside>
  );
}

export default Sidebar;
