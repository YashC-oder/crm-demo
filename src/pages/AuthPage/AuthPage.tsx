import { useNavigate } from "react-router-dom";
import AuthButton from "../../components/AuthButton/AuthButton";
import GoogleIcon from "../../utils/Icons";
import styles from "./AuthPage.module.css";

const AuthPage:React.FC = () => {
    const navigate = useNavigate();
    return <main className={styles.main}>
        <AuthButton icon={<GoogleIcon/>} label={"Sign in With Google"} onClick={() => navigate('/dashboard')}/>
    </main>
}
export default AuthPage;