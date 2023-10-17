import Types from 'prop-types';

const Input = ({ children, type = 'text', value, onChange }) => {
    return (
        <div>
            <div>{children}</div>
            <input type={type} value={value} onChange={onChange} />
        </div>
    );
};

Input.propTypes = {
    children: Types.node,
    type: Types.oneOf(['number', 'text']),
    value: Types.oneOfType(Types.number, Types.string).isRequired,
    onChange: Types.func.isRequired,
};

export default Input;
