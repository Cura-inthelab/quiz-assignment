import { useEffect } from 'react';
import { createPortal } from 'react-dom';
import Types from 'prop-types';
import styles from './styles.moudle.scss';

const Modal = ({ show, children, onClose, cancelable = true }) => {
    useEffect(() => {
        document.body.style.overflow = show ? 'hidden' : 'auto';
        return () => {
            document.body.style.overflow = 'auto';
        };
    }, [show]);

    if (show) {
        return createPortal(
            <div className={styles.ModalContainer}>
                <button
                    className={styles.CloseBackground}
                    onClick={(e) => {
                        if (cancelable) onClose();
                        e.stopPropagation();
                        e.preventDefault();
                    }}
                />
                <button className={styles.ModalBackground}>{children}</button>
            </div>,
            document.querySelector('#modal-portal'),
        );
    }

    return null;
};

Modal.propTypes = {
    children: Types.node,
    show: Types.bool.isRequired,
    onClose: Types.func.isRequired,
    cancelable: Types.bool,
};

export default Modal;
