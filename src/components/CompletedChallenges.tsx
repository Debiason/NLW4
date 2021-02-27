import { useContext } from 'react'
import { challengesContext, ChallengesProvider } from '../contexts/ChallengesContext'
import styles from '../styles/components/CompletedChallenges.module.css'

export function CompletedChallenges(){

    const {challengeCompleted} = useContext(challengesContext)


    return(
        <div className={styles.completedChallenges}>
            <span>Desafios Completos</span>
            <span>{challengeCompleted}</span>
        </div>
    )
}