import style from "./RPS.module.css";
import rock from "../assets/images/rock.png";
import paper from "../assets/images/paper.png";
import scissors from "../assets/images/scissors.png";
import { useState } from "react";

function RPS() {
    const [showResult, setShowResult] = useState(false);
    const [score, setScore] = useState(0);

    return (
        <div className={style.container}>
            <div className={style.title}>
                <h1>Rock Paper Scissors</h1>
            </div>

            <div className={style.all}>

                <div className={style.status}>
                    <div>Score: {score}</div>  
                    <div>Saved Score: {score}</div>  
                    <button>Delete Current Score</button>
                    <button>Save Score</button>
                    <button>Delete Saved Score</button>
                </div>

                {!showResult &&
                    <div className={style.rockPaperScissors}>
                        <div className={style.scissorsPaper}>
                            <div className={style.scissors}>
                                <img src={scissors} />
                            </div>

                            <div className={style.paper}>
                                <img src={paper} />
                            </div>
                        </div>

                        <div className={style.rock}>
                            <img src={rock} />
                        </div>
                    </div>}

                {showResult &&
                    <div className={style.fight}>
                        <div className={style.choice}>
                            <img src={paper} />
                            <p>You</p>
                        </div>

                        <div className={style.result}>
                            <p>You Won</p>
                            <button>Play Again</button>
                        </div>

                        <div className={style.choice}>
                            <img src={rock} />
                            <p>Computer</p>
                        </div>
                    </div>
                }
            </div>
        </div>
    )
}

export default RPS