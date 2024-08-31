import { HomeContainer, DashboardContainer } from './StyledComponents';
import { Link } from 'react-router-dom';
import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTachometerAlt, faBox, faShoppingCart, faUndo, faUser, faTruck, faLink, faCalculator, faFileAlt, faUserCog, faPuzzlePiece } from '@fortawesome/free-solid-svg-icons';
import './index.css';

const Home = () => {
  const [activeItem, setActiveItem] = useState('');

  const handleItemClick = (item) => {
    setActiveItem(item); 
  };

  return (
    <HomeContainer>
      <DashboardContainer>
        <Link to="/" onClick={() => handleItemClick('dashboard')} className={`nav-item ${activeItem === 'dashboard' ? 'active' : ''}`}>
          <FontAwesomeIcon icon={faTachometerAlt} className="icon" />
          <span className="text">Dashboard</span>
        </Link>
        <Link to="/inventory" onClick={() => handleItemClick('inventory')} className={`nav-item ${activeItem === 'inventory' ? 'active' : ''}`}>
          <FontAwesomeIcon icon={faBox} className="icon" />
          <span className="text">Inventory</span>
        </Link>
        <Link to="/order" onClick={() => handleItemClick('order')} className={`nav-item ${activeItem === 'order' ? 'active' : ''}`}>
          <FontAwesomeIcon icon={faShoppingCart} className="icon" />
          <span className="text">Order</span>
        </Link>
        <Link to="/returns" onClick={() => handleItemClick('returns')} className={`nav-item ${activeItem === 'returns' ? 'active' : ''}`}>
          <FontAwesomeIcon icon={faUndo} className="icon" />
          <span className="text">Returns</span>
        </Link>
        <Link to="/customers" onClick={() => handleItemClick('customers')} className={`nav-item ${activeItem === 'customers' ? 'active' : ''}`}>
          <FontAwesomeIcon icon={faUser} className="icon" />
          <span className="text">Customers</span>
        </Link>
        <Link to="/shipping" onClick={() => handleItemClick('shipping')} className={`nav-item ${activeItem === 'shipping' ? 'active' : ''}`}>
          <FontAwesomeIcon icon={faTruck} className="icon" />
          <span className="text">Shipping</span>
        </Link>
        <Link to="/channel" onClick={() => handleItemClick('channel')} className={`nav-item ${activeItem === 'channel' ? 'active' : ''}`}>
          <FontAwesomeIcon icon={faLink} className="icon" />
          <span className="text">Channel</span>
        </Link>
        <Link to="/integrations" onClick={() => handleItemClick('integrations')} className={`nav-item ${activeItem === 'integrations' ? 'active' : ''}`}>
          <FontAwesomeIcon icon={faPuzzlePiece} className="icon" />
          <span className="text">Integrations</span>
        </Link>
        <Link to="/calculators" onClick={() => handleItemClick('calculators')} className={`nav-item ${activeItem === 'calculators' ? 'active' : ''}`}>
          <FontAwesomeIcon icon={faCalculator} className="icon" />
          <span className="text">Calculators</span>
        </Link>
        <Link to="/reports" onClick={() => handleItemClick('reports')} className={`nav-item ${activeItem === 'reports' ? 'active' : ''}`}>
          <FontAwesomeIcon icon={faFileAlt} className="icon" />
          <span className="text">Reports</span>
        </Link>
        <Link to="/account" onClick={() => handleItemClick('account')} className={`nav-item ${activeItem === 'account' ? 'active' : ''}`}>
          <FontAwesomeIcon icon={faUserCog} className="icon" />
          <span className="text">Account</span>
        </Link>
      </DashboardContainer>
    </HomeContainer>
  );
};

export default Home;
