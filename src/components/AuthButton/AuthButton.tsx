import React, { type ReactNode } from "react";
import styles from "./AuthButton.module.css";
interface AuthButtonProps {
  icon: ReactNode;   
  label: string;
  onClick?: () => void;
}

const AuthButton: React.FC<AuthButtonProps> = ({ icon, label, onClick }) => {
  return (
    <button
      onClick={onClick}
      className={styles.button}
    >
      {icon}
      <span className={styles.label}>{label}</span>
    </button>
  );
};

export default AuthButton;
