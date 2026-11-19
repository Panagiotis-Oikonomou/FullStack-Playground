import style from "./Home.module.css";
import rockPaperScissors from "../assets/images/rockPaperScissors/Rock-paper-scissors.png";
import ticTacToe from "../assets/images/ticTacToe/ticTacToe.png";
import secretSanta from "../assets/images/secretSanta/secretSanta.png";
import toDoList from "../assets/images/toDoList/toDoList.png";
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
                    <Link to="/rock_paper_scissors" className={style.insideOther}>
                            <div className={style.eachOther}>
                                <img src={rockPaperScissors} />
                            </div>
                            <div className={style.projectTitle}>Rock-Paper-Scissors</div>
                    </Link>
                </div>

                <div className={style.other}>
                    <Link to="/tictactoe" className={style.insideOther}>
                            <div className={style.eachOther}>
                                <img src={ticTacToe} />
                            </div>
                            <div className={style.projectTitle}>Tic-Tac-Toe</div>
                    </Link>
                </div>

                <div className={style.other}>
                    <Link to="/secret-santa" className={style.insideOther}>
                            <div className={style.eachOther}>
                                <img src={secretSanta} />
                            </div>
                            <div className={style.projectTitle}>Secret Santa</div>
                    </Link>
                </div>

                <div className={style.other}>
                    <Link to="/to-do-list" className={style.insideOther}>
                            <div className={style.eachOther}>
                                <img src={toDoList} />
                            </div>
                            <div className={style.projectTitle}>To Do List</div>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default Home
