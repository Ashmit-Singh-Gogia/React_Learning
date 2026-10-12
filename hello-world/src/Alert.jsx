import styles from "./Alert.module.css"

export const Alert = ({ children, type }) => {
    return (
        <div className={`${styles.alert} ${styles[type]}`}>
            {children}
        </div >
    );
}