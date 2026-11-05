import style from "./RPS.module.css";
import rock from "../assets/images/rockPaperScissors/rock.png";
import paper from "../assets/images/rockPaperScissors/paper.png";
import scissors from "../assets/images/rockPaperScissors/scissors.png";
import { useState } from "react";

function RPS() {
    const [showResult, setShowResult] = useState(false);
    const [score, setScore] = useState(0);
    const [savedScore, setSavedScore] = useState(localStorage.getItem("score") ? localStorage.getItem("score") : 0);
    const [result, setResult] = useState("");
    const [meImage, setMeImage] = useState(rock);
    const [computerImage, setComputerImage] = useState(rock);
    const images = { rock, paper, scissors };

    function play(choice) {
        setShowResult(true);

        let computer = Math.floor(Math.random() * 2);
        let computersChoice = "rock";

        if (computer == 0) {
            if (choice == "rock") setResult("Tie!");

            else if (choice == "paper") {
                setResult("You Won!!!");
                setScore(prev => prev + 1);
            }
            else setResult("You Lost:(");

        }
        else if (computer == 1) {
            computersChoice = "paper";
            if (choice == "rock") setResult("You Lost:(");

            else if (choice == "paper") setResult("Tie!");
            else {
                setResult("You Won!!!");
                setScore(prev => prev + 1);
            }

        }
        else {
            computersChoice = "scissors";
            if (choice == "rock") {
                setResult("You Won!!!");
                setScore(prev => prev + 1);
            }

            else if (choice == "paper") setResult("You Lost:(");
            else setResult("Tie!");
        }

        setMeImage(images[choice]);
        setComputerImage(images[computersChoice]);
    }

    function saveScore() {
        if (score == 0) return;

        localStorage.setItem("score", score);

        setSavedScore(score);
    }

    function deleteSavedScore() {
        setSavedScore(0);

        if (!localStorage.getItem("score")) return;

        localStorage.removeItem("score");
    }

    return (
        <div className={style.container}>
            <div className={style.title}>
                <h1>Rock Paper Scissors</h1>
            </div>

            <div className={style.all}>
                <div className={style.status}>
                    <div>Current Score: {score}</div>
                    <div>Saved Score: {savedScore}</div>
                    <button onClick={() => setScore(0)}>Delete Current Score</button>
                    <button onClick={saveScore}>Save Score</button>
                    <button onClick={deleteSavedScore}>Delete Saved Score</button>
                </div>

                {!showResult &&
                    <div className={style.rockPaperScissors}>
                        <div className={style.scissorsPaper}>
                            <div className={style.scissors}>
                                <img src={scissors} onClick={() => play("scissors")} />
                            </div>

                            <div className={style.paper}>
                                <img src={paper} onClick={() => play("paper")} />
                            </div>
                        </div>

                        <div className={style.rock}>
                            <img src={rock} onClick={() => play("rock")} />
                        </div>
                    </div>}

                {showResult &&
                    <div className={style.fight}>
                        <div className={style.choice}>
                            <img src={meImage} />
                            <p>You</p>
                        </div>

                        <div className={style.result}>
                            <p>{result}</p>
                            <button onClick={() => setShowResult(false)}>Play Again</button>
                        </div>

                        <div className={style.choice}>
                            <img src={computerImage} />
                            <p>Computer</p>
                        </div>
                    </div>
                }
            </div>
        </div>
    )
}

export default RPS