import { useEffect } from "react";
import style from "./ToDoList.module.css";
import { Trash2, EditIcon } from "lucide-react";

function ToDoList() {

    useEffect(() => { document.title = "To Do List" }, []);

    return (
        <div className={style.container}>
            <div className={style.title}>
                <h1>To Do List</h1>
            </div>

            <div className={style.all}>
                <div className={style.list}>
                    <div className={style.toDoBox}>
                        <div className={style.toDo}>
                            <div className={style.task}>dddd jsjs</div>
                            <div className={style.priority}>High</div>
                        </div>
                        <div className={style.icons}>
                            <input type="checkbox" name="toDo1" /> <EditIcon /> <Trash2 />
                        </div>
                    </div>
                    <div className={style.toDoBox}>
                        <div className={style.toDo}>
                            <div className={style.task}>dddd jsjs</div>
                            <div className={style.priority}>Urgent</div>
                        </div>
                        <div className={style.icons}>
                            <input type="checkbox" name="toDo2" /> <EditIcon /> <Trash2 />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ToDoList;