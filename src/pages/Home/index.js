import { Link } from 'react-router-dom';
import styles from './style.module.scss';

const Home = ({}) => {
    return (
        <div className={styles.HomeContainer}>
            <Link to={'/quiz'}>퀴즈 시작</Link>
            <Link to={'/review'}>오답 노트</Link>
        </div>
    );
};

export default Home;
