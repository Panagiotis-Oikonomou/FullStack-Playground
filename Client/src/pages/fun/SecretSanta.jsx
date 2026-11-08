import style from "./SecretSanta.module.css";
import { useEffect, useState } from "react";

function SecretSanta() {
    const [recipients, setRecipients] = useState(["1", "2", "3", "3", "5", "4", "6", "8", "2", "3", "3", "5", "4", "6", "8", "2", "3", "3", "5", "4", "6", "8"]);

    useEffect(() => { document.title = "Secret Santa" }, []);

    return (
        <div className={style.container}>
            <div className={style.title}>
                <h1>Secret Santa</h1>
            </div>

            <div className={style.all}>
                <div className={style.recipients}>
                    <textarea placeholder="Write the recipients with a comma seperating them (e.g gg@email,qq@email)"></textarea>
                    <div className={style.manageRecipients}>
                        {recipients.map((val, index) => (
                            <div className={style.insideManageRecipients} key={index}>{val} <div>hsh</div></div>
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