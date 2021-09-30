import './App.css'
import {useState, useRef} from "react"

import paper from './img/paper.png'
import rock from './img/rock.jpg'
import scissors from './img/scissors.png'

export default function App() {
    let usersVar, robotVar

    const [usersScore, setUsersScore] = useState(0)
    const [robotsScore, setRobotsScore] = useState(0)
    const [roundsCount, setRoundsCount] = useState(0)

    const rockRef = useRef()
    const paperRef = useRef()
    const scissorsRef = useRef()
    const resultText = useRef()

    const getRandom = () => { robotVar = Math.ceil(Math.random() * 3) }

    const isUserWin = robotVar => {
        if (robotVar === 1 && usersVar === 'rock') return 0
        else if (robotVar === 1 && usersVar === 'paper') return 1
        else if (robotVar === 1 && usersVar === 'scissors') return -1

        else if (robotVar === 2 && usersVar === 'paper') return 0
        else if (robotVar === 2 && usersVar === 'rock') return -1
        else if (robotVar === 2 && usersVar === 'scissors') return 1

        else if (robotVar === 3 && usersVar === 'scissors') return 0
        else if (robotVar === 3 && usersVar === 'rock') return 1
        else if (robotVar === 3 && usersVar === 'paper') return -1
    }

    const isWinTxt = isWin => {
        if (isWin === -1) {
            resultText.current.innerHTML = `Robot choosed ${robotVar === 1 ? 'rock' : robotVar === 2 ? 'paper' : 'scissors'}. - You lose`
            setRobotsScore(robotsScore + 1)
        } else if (isWin === 0) {
            resultText.current.innerHTML = `Robot choosed ${robotVar === 1 ? 'rock' : robotVar === 2 ? 'paper' : 'scissors'}. - You equals`
        } else {
            resultText.current.innerHTML = `Robot choosed ${robotVar === 1 ? 'rock' : robotVar === 2 ? 'paper' : 'scissors'}. You win`
            setUsersScore(usersScore + 1)
        }
    }

    const clickedRock = () => {
        usersVar = 'rock'
        getRandom()
        setRoundsCount(roundsCount + 1)
        isWinTxt(isUserWin(robotVar))
    }
    const clickedPaper = () => {
        usersVar = 'paper'
        getRandom()
        setRoundsCount(roundsCount + 1)
        isWinTxt(isUserWin(robotVar))
    }
    const clickedScissors = () => {
        usersVar = 'scissors'
        getRandom()
        setRoundsCount(roundsCount + 1)
        isWinTxt(isUserWin(robotVar))
    }

    return (
        <div className="App">
            <div className="appInner">
                <h2 ref={resultText}>Rock, Paper, Scissors game</h2>
                <div className="cardsWrapper">
                    <div className="rock" ref={rockRef} onClick={clickedRock}>
                        <img src={rock} alt="Rock" className="cardImage"/>
                        <span className="cardName">Rock</span>
                    </div>
                    <div className="paper" ref={paperRef} onClick={clickedPaper}>
                        <img src={paper} alt="Paper" className="cardImage"/>
                        <span className="cardName">Paper</span>
                    </div>
                    <div className="scissors" ref={scissorsRef} onClick={clickedScissors}>
                        <img src={scissors} alt="Scissors" className="cardImage"/>
                        <span className="cardName">Scissors</span>
                    </div>
                </div>
                <div className="scoresWrapper">
                    <span>
                        User: <span className="userScore">{usersScore}</span>
                    </span>
                    <span>
                        Robot: <span className="robotScore">{robotsScore}</span>
                    </span>
                    <span>
                        All rounds: <span className="roundsCounter">{roundsCount}</span>
                    </span>
                    <span>
                        Winner percentage: <span className="winPercent">{ usersScore === 0 || robotsScore === 0 ? 0 : usersScore / (usersScore + robotsScore)}%</span>
                    </span>
                </div>
            </div>
        </div>
    )
}