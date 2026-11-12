import style from "./SecretSanta.module.css";
import axios from "../../api/axios";
import { Trash2 } from "lucide-react";
import { useEffect, useState } from "react";

function SecretSanta() {
    const [emails, setEmails] = useState([]);
    const [writtenSenders, setWrittenSenders] = useState("");
    const [readyToAdd, setReadyToAdd] = useState(false);
    const [emailError, setEmailError] = useState("");

    useEffect(() => { document.title = "Secret Santa" }, []);

    function removeEmail(index) {
        setEmails(r => r.filter((_, ind) => ind !== index));
    }

    function checkSenders(value) {
        setWrittenSenders(value);
        if (value == "") {
            setEmailError("")
            return;
        }
        const regex = /^(?!.*\.\.)[^\s@,:]+@[^\s@,:]+\.[^\s@,:]+:[a-zA-Z]+(,\s*[^\s@,:]+@[^\s@,:]+\.[^\s@,:]+:[a-zA-Z]+)*$/;

        regex.test(value) ? setEmailError("") : setEmailError("There is a problem with the structure of your emails");

        setReadyToAdd(regex.test(value));
    }

    function addTheEmails() {
        setEmails(r => {
            const updated = [...r];
            const e = writtenSenders.split(",");
            e.forEach(em => {
                let newEmail = true;
                updated.forEach(cE => { if (cE == em) newEmail = false; });

                if (newEmail) updated.push(em);
            });
            return updated;
        });
    }

    function sendTheEmails(){
        try{
            axios.post("/secret-santa", emails);
            setEmails([]);
        }
        catch(err){
            console.log(err);
        }
    }

    return (
        <div className={style.container}>
            <div className={style.title}>
                <h1>Secret Santa</h1>
            </div>

            <div className={style.all}>
                <div className={style.recipients}>
                    <textarea placeholder="Write the emails and then the name of the person that has that email seperating them with a : and seperate them all with a comma (e.g email@email:panos,email2@email:someone)" name="senders" value={writtenSenders} onChange={(e) => checkSenders(e.target.value)}></textarea>
                    <div className={style.emailError}>{emailError}</div>
                    <button disabled={!readyToAdd} onClick={addTheEmails}>Add the emails</button>
                    <button disabled={emails.length == 0} onClick={sendTheEmails}>Send the invitations</button>
                </div>

                <div className={style.manageRecipients}>
                    {emails.map((value, index) => (
                        <div className={style.insideManageRecipients} key={index}>{value} <Trash2 onClick={() => removeEmail(index)} className={style.trash} /></div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default SecretSanta