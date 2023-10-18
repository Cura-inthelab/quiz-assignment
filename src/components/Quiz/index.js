import Types from 'prop-types';
import Button from 'components/Button';

const QuizGame = ({ children, answers, correct, onSelect }) => {
    return (
        <div>
            <h1>{children}</h1>
            <div>
                {answers?.map((answer) => (
                    <Button
                        key={answer.description}
                        onClick={(answer) => onSelect(answer)}>
                        {answer.description}
                    </Button>
                ))}
            </div>
        </div>
    );
};

QuizGame.propType = {
    children: Types.node,
    answers: Types.array,
    correct: Types.string,
    onSelect: Types.func.isRequired,
};

export default QuizGame;
