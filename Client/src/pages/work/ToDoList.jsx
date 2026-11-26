import { useEffect, useState } from "react";
import style from "./ToDoList.module.css";
import { Trash2, EditIcon, Filter } from "lucide-react";
import Swal from "sweetalert2";

function ToDoList() {
  const [pp, setPp] = useState([{ task: "hahah", priority: "Low", change: false, check: true }, { task: "smsm", priority: "Low", change: false, check: false }, { task: "smsm", priority: "high", change: false, check: false }, { task: "smsm", priority: "urgent", change: false, check: false }, { task: "smsm", priority: "urgent", change: false, check: false }, { task: "smsm", priority: "urgent", change: false, check: false }, { task: "smsm", priority: "high", change: false, check: false }, { task: "hahah", priority: "high", change: false, check: false }, { task: "hahah", priority: "high", change: false, check: false }]);
  const toDoList = false;
  const [newTask, setNewTask] = useState(true);
  const [task, setTask] = useState({ name: "", priority: "" });

  useEffect(() => { document.title = "To Do List" }, []);

  function removeItem(index) {
    Swal.fire({
      titleText: "Are you sure?",
      theme: "dark",
      icon: "question",
      heightAuto: false,
      allowOutsideClick: false,
      draggable: true,
      showCancelButton: true
    }).then((result) => {
      if (result.isConfirmed) setPp(r => r.filter((_, i) => i !== index))
    });
  }

  function changeEdit(val, index) {
    setPp(r => r.map((item, i) => i === index ? { ...item, change: val } : item));
  }

  function changePriority(val, index) {
    setPp(r => r.map((item, i) => i === index ? { ...item, priority: val } : item));
  }

  function changeTask(index, value) {
    if (value.length < 1) return;
    setPp(r => r.map((item, i) => i === index ? { ...item, task: value } : item));
  }

  function changeCheck(index) {
    setPp(r => r.map((item, i) => i === index ? { ...item, check: !item.check } : item));
  }

  function checkNewTask(e) {
    const { name, value } = e.target;
    setTask(prev => ({ ...prev, [name]: value }));
  }

  useEffect(() => {
    console.log(pp)
  }, [pp])

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
        {newTask ? (
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
                      <th style={{ width: "30%" }}>Utilities</th>
                    </tr>
                  )}
                </thead>
                <tbody>
                  {pp.map((value, index) => {
                    return (
                      <tr key={index}>
                        <td>
                          <div className={style.task}>
                            <input type="text" value={value.task} disabled={!value.change} onChange={(e) => changeTask(index, e.target.value)} onBlur={() => changeEdit(false, index)} />
                          </div>
                        </td>
                        {toDoList && (
                          <td>
                            <div className={style.priority}>
                              <select name="priority" value={value.priority} disabled={!value.change} onChange={(e) => changePriority(e.target.value, index)} onBlur={() => changeEdit(false, index)}>
                                <option value="Urgent">Urgent</option>
                                <option value="High">High</option>
                                <option value="Medium">Medium</option>
                                <option value="Low">Low</option>
                              </select>
                            </div>
                          </td>
                        )}
                        <td>
                          <div className={style.icons}>
                            <input type="checkbox" name="toDo1" title="Done" value={value.check} checked={value.check} onChange={() => changeCheck(index)} />
                            <button className={style.iconButton} title="Edit" disabled={value.check} onClick={() => changeEdit(true, index)}>
                              <EditIcon size={25} />
                            </button>
                            <span title="Remove"> <Trash2 onClick={() => removeItem(index)} /> </span>
                          </div>
                        </td>
                      </tr>
                    )
                  })}
                </tbody>
              </table>
            </div>

            <div className={style.bottom}>
              {toDoList ? (
                <button onClick={() => setNewTask(false)}>New Task</button>
              ) : (
                <button onClick={() => setNewTask(false)}>New Item</button>
              )}
              <div className={style.bottomRight}>
                <button>Save Changes</button>
                {toDoList && <span title="Filter"><Filter /></span>}
              </div>
            </div>
          </div>) : (
          <div className={style.list}>
            <div className={style.listTitle}>New Item</div>
            <div className={style.newTask}>
              <input type="text" name="name" value={task.name} onChange={checkNewTask} />
              {toDoList &&
                <select onChange={checkNewTask} name="priority" value={task.priority}>
                  <option value="Urgent">Urgent</option>
                  <option value="High">High</option>
                  <option value="Medium">Medium</option>
                  <option value="Low">Low</option>
                </select>
              }
              <button onClick={() => setNewTask(true)} disabled={task.name.length == 0}>Create Task</button>
              <button onClick={() => setNewTask(true)}>Go Back</button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default ToDoList;