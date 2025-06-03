import { Outlet } from "react-router-dom";
import MainNavBar from "../../components/MainNavBar/MainNavBar";
import styles from "./RootLayout.module.css";
import NavBar from "../../components/NavBar/NavBar";
const RootLayout:React.FC = ()=>{
    return <>
        <header>
            <MainNavBar/>
            <NavBar/>
        </header>
        <main className={styles.main}>
            <Outlet/>
        </main>
    </>
}

export default RootLayout;