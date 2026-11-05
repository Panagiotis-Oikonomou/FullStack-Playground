import style from "./Home.module.css";
import rockPaperScissors from "../assets/images/rockPaperScissors/Rock-paper-scissors.png";
import { Link } from "react-router-dom";

function Home() {
    return (
        <div className={style.container}>
            <div className={style.title}>
                <h1>FullStack-Playground</h1>
            </div>

            <div className={style.other}>
                <Link to="/rock_paper_scissors">
                    <div className={style.eachOther}>
                        <img src={rockPaperScissors} />
                    </div>
                </Link>
            </div>

        </div>
    )
}

export default Home
