import styles from "./Modal.module.scss";
import team from "../../assets/images/team.jpg";
import clsx from "clsx";

export const Modal = ({show, setShow}) => {

    return (
        <div
            className={show ? clsx(styles.modal, styles.modalShowed) : styles.modal}
            onClick={() => setShow(false)}
        >
            <div 
                className={styles.modalWrapper}
            >
                <img
                    className={show ? clsx(styles.modalImage, styles.modalShowed) : styles.modal} 
                    onClick={(e) => e.stopPropagation()}
                    src={team}
                    alt="Команда агентства «Дрожжи»"
                />
                <button
                    className={styles.closeModalButton}
                    onClick={() => setShow(false)}
                >
                    Закрыть просмотр
                </button>
            </div>
        </div>
    )
}