import React from 'react';
import { NavLink } from 'react-router-dom';

const Header: React.FC = () => {
  return (
    <header className="header">
      <div className="container">
        <h1>Webお墓参りアプリケーション</h1>
        <nav>
          <ul>
            <li>
              <NavLink exact to="/" activeClassName="active">
                ホーム
              </NavLink>
            </li>
            <li>
              <NavLink to="/graves" activeClassName="active">
                お墓一覧
              </NavLink>
            </li>
            <li>
              <NavLink to="/create" activeClassName="active">
                お墓を作成
              </NavLink>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
