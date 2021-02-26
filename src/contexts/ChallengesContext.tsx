import { createContext, ReactNode, useState } from 'react'
import challenges from '../../challenges.json'

interface Challenge{
    type:'body' | 'eye';
    description: string;
    amount:number
}



interface challengesContextData {
    level:number;
    experienceToNextLevel:number;
    currentExperience:number;
    challengeCompleted:number;
    activeChallenge:Challenge;
    levelUp:()=>void;
    startNewChallenge:()=>void;
    resetChallenge:()=>void;
}

interface ChallengesProviderProps {
    children: ReactNode
}


export const challengesContext = createContext({} as challengesContextData)

export function ChallengesProvider({children}: ChallengesProviderProps){
    const [level, setLevel] = useState(1)
    const [currentExperience, setCurrentExperience] = useState(0)
    const [challengeCompleted, setChallengeCompleted] = useState(0)
    
    const [activeChallenge,setActiveChallenge] = useState(null)

    const experienceToNextLevel = Math.pow((level + 1 ) * 4, 2)
    
    function levelUp(){
        setLevel(level + 1)
    }
    
    function startNewChallenge(){
        const randomChallengeIndex = Math.floor(Math.random() * challenges.length)
        const challenge = challenges[randomChallengeIndex]
        
        setActiveChallenge(challenge)
    }
    
    function resetChallenge(){
        setActiveChallenge(null)
    }


    return(
        <challengesContext.Provider 
        value={{
            level,
            currentExperience,
            experienceToNextLevel,
            challengeCompleted, 
            levelUp,
            startNewChallenge,
            activeChallenge,
            resetChallenge
            }}>
            {children}
        </challengesContext.Provider>
)
}