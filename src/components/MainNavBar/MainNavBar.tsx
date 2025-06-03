import { useState, useEffect, useRef } from "react";
import styles from "./MainNavBar.module.css";
import { useNavigate } from "react-router-dom";

const MainNavBar: React.FC = () => {
  const [show, setShow] = useState(false);
  const profileContainerRef = useRef<HTMLDivElement>(null);
  const navigate = useNavigate();

  const toggleOptions = () => {
    setShow((prev) => !prev);
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        profileContainerRef.current &&
        !profileContainerRef.current.contains(event.target as Node)
      ) {
        setShow(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <nav className={styles.nav}>
      <div className={styles.content}>
        <div className={styles.title}>CRM.demo</div>
        <div
          ref={profileContainerRef}
          className={styles["profile-container"]}
          onClick={toggleOptions}
        >
          <img
            className={styles.profile}
            src={"user.png"}
            alt={"profile"}
          />
          <div className={`${styles.options} ${show ? "" : styles.disable}`}>
            <button className={styles.logout} onClick={()=>{
                navigate("/auth");
            }}>Logout</button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default MainNavBar;
