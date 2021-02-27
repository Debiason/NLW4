import styles from '../styles/components/Profile.module.css'


export function Profile() {
    return (
        <div className={styles.profileContainer}>
            <img src="https://github.com/Debiason.png" alt="Douglas Biason" />
            <div>
                <strong>Douglas Biason</strong>
                <p>
                    <img src="icons/level.svg" alt="Level" />
                    Level 1
                </p>
            </div>
        </div>
    )
}