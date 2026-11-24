import { useEffect } from "react";
import style from "./ToDoList.module.css";
import { Trash2, EditIcon, Filter } from "lucide-react";

function ToDoList() {
    const ll = "dcbaasas";
    const pp = [{ task: "hahah", priority: "Low" }, { task: "smsm", priority: "Low" }, { task: "smsm", priority: "high" }, { task: "smsm", priority: "urgent" }, { task: "smsm", priority: "urgent" }, { task: "smsm", priority: "urgent" }, { task: "smsm", priority: "high" }, { task: "hahah", priority: "high" }, { task: "hahah", priority: "high" }];
    const toDoList = false;

    useEffect(() => { document.title = "To Do List" }, []);

    useEffect(() => {
        const mergeSort = (word) => {

            console.log(word.length, word);

            if (word.length <= 1) return word;

            let mid = Math.floor((0 + word.length) / 2);
            console.log("Mid", mid);
            console.log("Left", word.slice(0, mid));
            console.log("Right", word.slice(mid));
            // return;

            let left = mergeSort(word.slice(0, mid));
            let right = mergeSort(word.slice(mid));
            return left + right;
        }
        const fun = () => {
            // const f = ll.slice(ll.length / 2, ll.length);
            // console.log(f.slice(0, 1));
            // console.log(f.slice(1, 2));
            // console.log(ll.slice(0, 2) > ll.slice(2, 4));
            // const l = f.slice(0, 1);   
            // const r = f.slice(1, 2);
            // if(l >= r) console.log( r + l);
            // else  console.log( l + r);
            // console.log(f.slice(1, 2) < f.slice(0, 1));
            console.log("Merge", mergeSort(ll));
        }
        // fun();
    }, []);

    return (
        <div className={style.container}>
            <div className={style.title}>
                {toDoList ? (
                    <h1>To Do List</h1>
                ) : (
                    <h1>List</h1>
                )}
            </div>

            <div className={style.all}>
                <div className={style.list}>
                    <div className={style.listTitle}>New List</div>
                    <div className={style.tableContainer}>
                        <table >
                            <thead>
                                {toDoList ? (
                                    <tr>
                                        <th style={{ width: "50%" }}>Task</th>
                                        <th style={{ width: "30%" }}>Priority</th>
                                        <th style={{ width: "20%" }}>Utilities</th>
                                    </tr>
                                ) : (

                                    <tr>
                                        <th style={{ width: "50%" }}>Task</th>
                                        {/* <th style={{ width: "0%" }}>Task</th> */}
                                        <th style={{ width: "30%" }}>Utilities</th>
                                    </tr>
                                )}
                            </thead>
                            <tbody>
                                {pp.map((value, index) => (
                                    <tr key={index}>
                                        <td>
                                            <div className={style.task}>
                                                {value.task}
                                            </div>
                                        </td>
                                        {toDoList && (
                                            <td>
                                                <div className={style.priority}>
                                                    {value.priority}
                                                </div>
                                            </td>

                                        )}
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

                    <div className={style.bottom}>
                        {toDoList ? (
                            <button>New Task</button>
                        ) : (
                            <button>New Item</button>
                        )}
                        <div className={style.bottomRight}>
                            <button>Save Changes</button>
                            <span title="Filter"><Filter /></span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ToDoList;