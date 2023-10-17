import { useState } from 'react';
import { Link } from 'react-router-dom';
import Input from 'components/Input';

import styles from './style.module.scss';

const QuestionPage = ({}) => {
    const [amount, setAmount] = useState(1);
    return (
        <div className={styles.QuizPageContainer}>
            <Input
                type={'number'}
                value={amount}
                onChange={(e) => {
                    const value = e.target.value;
                    if (value < 1) {
                        return;
                    }
                    setAmount(value);
                }}>
                갯수
            </Input>
            <Link to={'/quiz/question'}>다음</Link>
        </div>
    );
};

export default QuestionPage;
