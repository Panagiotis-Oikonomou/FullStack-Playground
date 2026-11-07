import style from "./TicTacToe.module.css";
import { useEffect, useState } from "react";

function TicTacToe() {
    const [firstScore, setFirstScore] = useState(0);
    const [secondScore, setSecondScore] = useState(0);
    const [firstSavedScore, setFirstSavedScore] = useState(localStorage.getItem("firstScore") ? localStorage.getItem("firstScore") : 0);
    const [secondSavedScore, setSecondSavedScore] = useState(localStorage.getItem("secondScore") ? localStorage.getItem("secondScore") : 0);
    const [gameFinished, setGameFinished] = useState(false);
    const [whoPlays, setWhoPlays] = useState("1st Player Playing");
    const [firstPlayer, setFirstPLayer] = useState(true);
    const [firstPlayerWon, setFirstPLayerWon] = useState(true);

    const cB = { cursor: "default" };
    const c = { cursor: "pointer" };
    const [s, setS] = useState({
        b1: c,
        b2: c,
        b3: c,
        b4: c,
        b5: c,
        b6: c,
        b7: c,
        b8: c,
        b9: c
    });

    const [boxes, setBoxes] = useState({
        b1: "",
        b2: "",
        b3: "",
        b4: "",
        b5: "",
        b6: "",
        b7: "",
        b8: "",
        b9: ""
    });

    useEffect(() => { document.title = "Tic-Tac-Toe" }, []);

    useEffect(() => {
        const changeWhoPlays = () => {
            if (firstPlayer) setWhoPlays("1st Player Playing");

            else setWhoPlays("2nd Player Playing");
        }
        changeWhoPlays();
    }, [firstPlayer]);

    useEffect(() => {
        const checkIfDone = () => {
            if (Object.values(boxes).every(p => p !== "")) {
                setGameFinished(true);
                if (firstPlayerWon) {
                    setWhoPlays("1st Player Won");
                    setFirstScore(p => p + 1);
                }

                else {
                    setWhoPlays("2nd Player Won");
                    setSecondScore(p => p + 1);
                }
            }
        }
        checkIfDone();
    }, [boxes, firstPlayerWon]);

    function saveScore() {
        if (firstScore == 0 && secondScore == 0) return;

        localStorage.setItem("firstScore", firstScore);
        localStorage.setItem("secondScore", secondScore);
        setFirstSavedScore(firstScore);
        setSecondSavedScore(secondScore);
    }

    function deleteSavedScore() {
        setFirstSavedScore(0);
        setSecondSavedScore(0);
        if (!localStorage.getItem("firstScore") && !localStorage.getItem("secondScore")) {
            console.log("There was nothing");
            return;
        }
        localStorage.removeItem("firstScore");
        localStorage.removeItem("secondScore");
    }

    function play(name) {
        if (boxes[name] == "X" || boxes[name] == "o") return;

        setS(p => ({ ...p, [name]: cB }));

        if (firstPlayer) {
            setBoxes(p => ({ ...p, [name]: "X" }));

        }

        else {
            setBoxes(p => ({ ...p, [name]: "O" }));

        }

        setFirstPLayer(p => !p);
    }

    function playAgain() {
        setBoxes({
            b1: "",
            b2: "",
            b3: "",
            b4: "",
            b5: "",
            b6: "",
            b7: "",
            b8: "",
            b9: ""
        });

        setS({
            b1: c,
            b2: c,
            b3: c,
            b4: c,
            b5: c,
            b6: c,
            b7: c,
            b8: c,
            b9: c
        });
    }

    return (
        <div className={style.container}>
            <div className={style.title}>
                <h1>Tic-Tac-Toe</h1>
            </div>

            <div className={style.all}>
                <div className={style.status}>
                    <div>1st player Score: {firstScore}</div>
                    <div>2nd player Score: {secondScore}</div>
                    <div>1st player Saved Score: {firstSavedScore}</div>
                    <div>2nd player Saved Score: {secondSavedScore}</div>
                    <button onClick={() => { setFirstScore(0); setSecondScore(0); }}>Delete Current Score</button>
                    <button onClick={saveScore}>Save Score</button>
                    <button onClick={deleteSavedScore}>Delete Saved Score</button>
                </div>
                <div className={style.game}>
                    <div className={style.left}>
                        <p>{whoPlays}</p>
                        {gameFinished && <button onClick={playAgain}>Play Again!</button>}
                    </div>
                    <div className={style.right}>
                        <div className={style.box} style={s.b1} onClick={() => play("b1")}>
                            <div className={style.insideBox}>{boxes.b1}</div>
                        </div>
                        <div className={style.box} style={s.b2} onClick={() => play("b2")}>
                            <div className={style.insideBox}>{boxes.b2}</div>
                        </div>
                        <div className={style.box} style={s.b3} onClick={() => play("b3")}>
                            <div className={style.insideBox}>{boxes.b3}</div>
                        </div>
                        <div className={style.box} style={s.b4} onClick={() => play("b4")}>
                            <div className={style.insideBox}>{boxes.b4}</div>
                        </div>
                        <div className={style.box} style={s.b5} onClick={() => play("b5")}>
                            <div className={style.insideBox}>{boxes.b5}</div>
                        </div>
                        <div className={style.box} style={s.b6} onClick={() => play("b6")}>
                            <div className={style.insideBox}>{boxes.b6}</div>
                        </div>
                        <div className={style.box} style={s.b7} onClick={() => play("b7")}>
                            <div className={style.insideBox}>{boxes.b7}</div>
                        </div>
                        <div className={style.box} style={s.b8} onClick={() => play("b8")}>
                            <div className={style.insideBox}>{boxes.b8}</div>
                        </div>
                        <div className={style.box} style={s.b9} onClick={() => play("b9")}>
                            <div className={style.insideBox}>{boxes.b9}</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default TicTacToe;
