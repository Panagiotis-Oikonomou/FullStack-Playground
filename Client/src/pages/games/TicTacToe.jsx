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

    const cB = { cursor: "default" };
    const c = { cursor: "pointer" };
    const wonStyle = { backgroundColor: "green", cursor: "default" };
    const [s, setS] = useState([c, c, c, c, c, c, c, c, c]);

    const [boxes, setBoxes] = useState(["", "", "", "", "", "", "", "", ""]);

    useEffect(() => { document.title = "Tic-Tac-Toe" }, []);

    useEffect(() => {
        const changeWhoPlays = () => {
            if (firstPlayer) setWhoPlays("1st Player Playing");

            else setWhoPlays("2nd Player Playing");
        }
        changeWhoPlays();
    }, [firstPlayer]);

    useEffect(() => {
        const fillWithGreen = (i0, i1, i2) => {
            setS(prev => {
                const updated = [...prev];
                updated[i0] = wonStyle;
                updated[i1] = wonStyle;
                updated[i2] = wonStyle;
                return updated;
            });
        }

        const chnageWhoWon = (whoWon) => {
            setGameFinished(true);
            if (whoWon == 0) {
                setWhoPlays("1st Player Won");
                setFirstScore(p => p + 1);
            }
            else if (whoWon == 1) {
                setWhoPlays("2nd Player Won");
                setSecondScore(p => p + 1);
            }
            else setWhoPlays("It's a Tie");
        }

        const checkIfDone = () => {
            if (boxes.every(p => p !== "")) chnageWhoWon(2);

            else if (boxes[0] == boxes[1] && boxes[1] == boxes[2] && boxes[0] == "X") {
                chnageWhoWon(1);
                fillWithGreen(0, 1, 2);
            }
        }

        checkIfDone();
    }, [boxes]);

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

    function play(index) {
        if (boxes[index] !== "" || gameFinished) return;

        setS(p => {
            const updated = [...p];
            updated[index] = cB;
            return updated;
        });

        if (firstPlayer) {
            setBoxes(p => {
                const updated = [...p];
                updated[index] = "X";
                return updated;
            });
        }

        else {
            setBoxes(p => {
                const updated = [...p];
                updated[index] = "O";
                return updated;
            });
        }

        setFirstPLayer(p => !p);
    }

    function playAgain() {
        setBoxes(Array(9).fill(""));

        setS(Array(9).fill(c));

        setGameFinished(false);
        setFirstPLayer(true);
        setWhoPlays("1st Player Playing");
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
                        <div className={style.box} style={s[0]} onClick={() => play(0)}>
                            <div className={style.insideBox}>{boxes[0]}</div>
                        </div>
                        <div className={style.box} style={s[1]} onClick={() => play(1)}>
                            <div className={style.insideBox}>{boxes[1]}</div>
                        </div>
                        <div className={style.box} style={s[2]} onClick={() => play(2)}>
                            <div className={style.insideBox}>{boxes[2]}</div>
                        </div>
                        <div className={style.box} style={s[3]} onClick={() => play(3)}>
                            <div className={style.insideBox}>{boxes[3]}</div>
                        </div>
                        <div className={style.box} style={s[4]} onClick={() => play(4)}>
                            <div className={style.insideBox}>{boxes[4]}</div>
                        </div>
                        <div className={style.box} style={s[5]} onClick={() => play(5)}>
                            <div className={style.insideBox}>{boxes[5]}</div>
                        </div>
                        <div className={style.box} style={s[6]} onClick={() => play(6)}>
                            <div className={style.insideBox}>{boxes[6]}</div>
                        </div>
                        <div className={style.box} style={s[7]} onClick={() => play(7)}>
                            <div className={style.insideBox}>{boxes[7]}</div>
                        </div>
                        <div className={style.box} style={s[8]} onClick={() => play(8)}>
                            <div className={style.insideBox}>{boxes[8]}</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default TicTacToe;
