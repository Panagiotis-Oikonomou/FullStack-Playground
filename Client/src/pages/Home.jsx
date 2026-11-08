import style from "./Home.module.css";
import rockPaperScissors from "../assets/images/rockPaperScissors/Rock-paper-scissors.png";
import ticTacToe from "../assets/images/ticTacToe/ticTacToe.png";
import secretSanta from "../assets/images/secretSanta/secretSanta.png";
import { Link } from "react-router-dom";
import { useEffect } from "react";

function Home() {
    useEffect(() => { document.title = "Home" }, []);

    return (
        <div className={style.container}>
            <div className={style.title}>
                <h1>FullStack-Playground</h1>
            </div>

            <div className={style.all}>
                <div className={style.other}>
                    <Link to="/rock_paper_scissors">
                        <div className={style.eachOther}>
                            <img src={rockPaperScissors} />
                        </div>
                    </Link>
                    <div className={style.projectTitle}>Rock-Paper-Scissors</div>
                </div>

                <div className={style.other}>
                    <Link to="/tictactoe">
                        <div className={style.eachOther}>
                            <img src={ticTacToe} />
                        </div>
                    </Link>
                </div>

                <div className={style.other}>
                    <Link to="/secret-santa">
                        <div className={style.eachOther}>
                            <img src={secretSanta} />
                        </div>
                    </Link>
                </div>

            </div>
        </div>
    )
}

export default Home
