import { useContext } from 'react'
import { challengesContext } from '../contexts/ChallengesContext'
import styles from '../styles/components/ChallengeBox.module.css'

export function ChallengeBox(){
    const { activeChallenge,resetChallenge} = useContext(challengesContext)

    return(
        <div className={styles.ChallengeBoxContainer}>
            {activeChallenge ? (
                <div className={styles.ChallengeActive}>
                    <header>Ganhe {activeChallenge.amount} xp</header>

                    <main>
                        <img src={`icons/${activeChallenge.type}.svg`} />
                        <strong>Novo desafio</strong>
                        <p>{ activeChallenge.description}</p>
                    </main>

                    <footer>
                        <button type="button" className={styles.ChallengeFailedButton} onClick={resetChallenge}>Falhei</button>
                        <button type="button" className={styles.ChallengeCompletedButton}>Completei</button>
                    </footer>
                </ div>
            ) : (

            <div className={styles.ChallengeNotActive}>
                <strong>Finalize um ciclo para receber um desafio</strong>
                <p>
                    <img src="icons/level-up.svg" alt="Level Up"/>
                    Avance de level completando desafios.
                </p>
            </div>
            )}
            
        </div>
    )
}