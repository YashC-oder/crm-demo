import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import styles from './NavBar.module.css';
import { BarChart3, Users, MessageSquare } from 'lucide-react';

const tabs = [
  { id: 'dashboard', label: 'Dashboard', icon: BarChart3, path: '/dashboard' },
  { id: 'segments', label: 'Segments', icon: Users, path: '/segment' },
  { id: 'campaigns', label: 'Campaigns', icon: MessageSquare, path: '/campaign' }
];

const NavBar: React.FC = () => {
  const location = useLocation();
  const activePath = location.pathname;

  return (
    <nav className={styles.nav}>
      {tabs.map((tab) => {
        const Icon = tab.icon;
        const isActive = activePath === tab.path;
        return (
          <Link
            key={tab.id}
            to={tab.path}
            className={`${styles.tabButton} ${isActive ? styles.active : ''}`}
            aria-current={isActive ? 'page' : undefined}
          >
            <Icon className={styles.icon} />
            {tab.label}
          </Link>
        );
      })}
    </nav>
  );
};

export default NavBar;
