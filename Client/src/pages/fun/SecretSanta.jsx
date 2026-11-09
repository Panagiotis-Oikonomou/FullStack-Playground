import style from "./SecretSanta.module.css";
import {Trash2} from "lucide-react";
import { useEffect, useState } from "react";

function SecretSanta() {
    const [recipients, setRecipients] = useState([{from:"1", to:"2", index:0}, {from:"2", to:"2", index:1}, {from:"3", to:"2", index:2}, {from:"4", to:"2", index:3}, {from:"5", to:"2", index:4}, {from:"6", to:"2", index:5}, {from:"7", to:"2", index:6}, {from:"8", to:"2", index:7}, {from:"9", to:"2", index:8}, {from:"10", to:"2", index:9}]);
    const [writtenSenders, setWrittenSenders] = useState("");
    const [readyToAdd, setReadyToAdd] = useState(false);
    const [globalIndex, setGlobalIndex] = useState(0);

    useEffect(() => { document.title = "Secret Santa" }, []);

    function removeEmail(index){
        setRecipients(r => r.filter(e => e.index != index));
    }

    function checkSenders(value){
        setWrittenSenders(value);
        const regex = /^[a-zA-Z0-9]+$/;
        // const regex = /([^.,][\W-]*.@([a-z]{2,4}..{1})+([a-z]{2,})(.,)?)+/;
        // const regex = /([\W-]*.@gmail.com,?)+/;
        // console.log(value);
        console.log(regex.test(value));

        setReadyToAdd(regex.test(value));
    }

    function addTheEmails(){

    }

    return (
        <div className={style.container}>
            <div className={style.title}>
                <h1>Secret Santa</h1>
            </div>

            <div className={style.all}>
                <div className={style.recipients}>
                    <textarea placeholder="Write the transmitters seperating with a comma (e.g from@email,from2@email)" name="senders" value={writtenSenders} onChange={(e) => checkSenders(e.target.value)}></textarea>
                    <button disabled={!readyToAdd} onClick={addTheEmails}>Add the emails</button>
                    <div className={style.manageRecipients}>
                        {recipients.map((row) => (
                                <div className={style.insideManageRecipients} key={row.index}>{row.from} <Trash2 onClick={() => removeEmail(row.index)} className={style.trash}/></div>
                            ))}
                    </div>
                </div>

                <div className={style.text}>
                    <textarea></textarea>
                </div>
            </div>
        </div>
    )
}

export default SecretSanta