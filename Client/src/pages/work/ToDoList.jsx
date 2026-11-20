import { useEffect } from "react";
import style from "./ToDoList.module.css";
import { Trash2, EditIcon } from "lucide-react";

function ToDoList() {
    const ll = "dcbaasas";
    const pp = [{ task: "hahah", priority: "Low" }, { task: "smsm", priority: "Low" }, { task: "smsm", priority: "high" }, { task: "smsm", priority: "urgent" }, { task: "smsm", priority: "urgent" }, { task: "smsm", priority: "urgent" }, { task: "smsm", priority: "high" }, { task: "hahah", priority: "high" }, { task: "hahah", priority: "high" }];

    useEffect(() => { document.title = "To Do List" }, []);

    return (
        <div className={style.container}>
            <div className={style.title}>
                <h1>To Do List</h1>
            </div>

            <div className={style.all}>
                <div className={style.list}>
                    <div className={style.tableContainer}>
                        <table >
                            <thead>
                                <tr>
                                    <th style={{ width: "40%" }}>Task</th>
                                    <th style={{ width: "30%" }}>Priority</th>
                                    <th style={{ width: "30%" }}>Utilities</th>
                                </tr>
                            </thead>
                            <tbody>
                                {pp.map((value, index) => (
                                    <tr key={index}>
                                        <td>
                                            <div className={style.task}>
                                                {value.task}
                                            </div>
                                        </td>
                                        <td>
                                            <div className={style.priority}>
                                                {value.priority}
                                            </div>
                                        </td>
                                        <td>
                                            <div className={style.icons}>
                                                <input type="checkbox" name="toDo1" title="Done" />
                                                <span title="Edit"> <EditIcon /> </span>
                                                <span title="Remove"> <Trash2 /> </span>
                                            </div>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ToDoList;