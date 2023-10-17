import Types from 'prop-types';
import styles from './style.module.scss';

const Button = ({ children, size = 'medium', style = {} }) => {
    let buttonHeight;
    if (size === 'small') {
        buttonHeight = 16;
    } else if (size === 'medium') {
        buttonHeight = 32;
    } else if (size === 'large') {
        buttonHeight = 48;
    } else {
        buttonHeight = size;
    }

    return (
        <button
            className={styles.ButtonContainer}
            style={{
                ...style,
                height: buttonHeight,
            }}>
            {children}
        </button>
    );
};

Button.propTypes = {
    children: Types.node.isRequired,
    size: Types.oneOfType([
        Types.number,
        Types.oneOf(['small', 'medium', 'large']),
    ]),
    style: Types.object,
};

export default Button;
