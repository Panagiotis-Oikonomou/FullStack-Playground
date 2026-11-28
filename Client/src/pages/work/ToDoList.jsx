import { useEffect, useState } from "react";
import style from "./ToDoList.module.css";
import { Trash2, EditIcon, Filter } from "lucide-react";
import Swal from "sweetalert2";
import { sortByNameAscending, sortByNameDescending, sortByPriorityAscending, sortByPriorityDescending } from "../../utils/sorting";

function ToDoList() {
  const [tasks, setTasks] = useState([]);
  const toDoList = true;
  const [showFilters, setShowFilters] = useState(false);
  const [newTask, setNewTask] = useState(true);
  const [sortingMethod, setSortingMethod] = useState("ascending");
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
      if (result.isConfirmed) setTasks(r => r.filter((_, i) => i !== index))
    });
  }

  function changeEdit(val, index, name) {
    if (name == "task" && val.length < 1) return;
    if (name == "check") setTasks(r => r.map((item, i) => i === index ? { ...item, check: !item.check, change: false } : item));
    else setTasks(r => r.map((item, i) => i === index ? { ...item, [name]: val } : item));
  }

  function checkNewTask(e) {
    const { name, value } = e.target;
    setTask(prev => ({ ...prev, [name]: value }));
  }

  function goBack() {
    setNewTask(true);
    setTask(p => ({ name: "", priority: "" }));
  }

  function createTask() {
    setTasks(prev => {
      const updated = [
        ...prev,
        { task: task.name, priority: task.priority, change: false, check: false }
      ];

      return sortTasks(sortingMethod, updated);
    });

    goBack();
  }

  function goForNewTask() {
    setNewTask(false);
    setShowFilters(false);
  }

  function sortTasks(method, list) {
    setSortingMethod(method);
    switch (method) {
      case "ascending":
        return sortByNameAscending(list);

      case "descending":
        return sortByNameDescending(list);

      case "priorityasc":
        return sortByPriorityAscending(list);

      case "prioritydesc":
        return sortByPriorityDescending(list);

      default:
        return list;
    }
  }
  
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
                  {tasks.length == 0 && <tr><td colSpan={3} style={{ height: "150px" }}><div className={style.noItems}>No Items</div></td></tr>}
                  {tasks.map((value, index) => {
                    return (
                      <tr key={index} className={value.check ? (toDoList ? style.completedOne : style.completedTwo) : ""}>
                        <td>
                          <div className={style.task} onBlur={(e) => {
                            if (!e.currentTarget.contains(e.relatedTarget)) {
                              changeEdit(false, index, "change");
                            }
                          }}>
                            <span style={{}}><input type="text" value={value.task} disabled={!value.change} onChange={(e) => changeEdit(e.target.value, index, "task")} /></span>
                          </div>
                        </td>
                        {toDoList && (
                          <td>
                            <div className={style.priority}>
                              <select name="priority" value={value.priority} disabled={!value.change} onChange={(e) => changeEdit(e.target.value, index, "priority")} >
                                <option value="1">Urgent</option>
                                <option value="2">High</option>
                                <option value="3">Medium</option>
                                <option value="4">Low</option>
                              </select>
                            </div>
                          </td>
                        )}
                        <td>
                          <div className={style.icons}>
                            <input type="checkbox" name="toDo1" title="Done" value={value.check} checked={value.check} onChange={() => changeEdit(0, index, "check")} />
                            <button className={style.iconButton} title="Edit" disabled={value.check} onClick={() => changeEdit(true, index, "change")}>
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
                <button onClick={goForNewTask}>New Task</button>
              ) : (
                <button onClick={goForNewTask}>New Item</button>
              )}
              <div className={style.bottomRight}>
                <button>Save Changes</button>
                <div className={style.filterContainer}>
                  {showFilters &&
                    <div className={style.filtersAll}>
                      <span className={style.filterTitle}>Filters</span>
                      <div className={style.filters}>
                        {toDoList && <span className={style.filter} onClick={() => setTasks(sortTasks("priorityasc", tasks))}>Priority Ascending</span>}
                        {toDoList && <span className={style.filter} onClick={() => setTasks(sortTasks("prioritydesc", tasks))}>Priority Descending</span>}
                        <span className={style.filter} onClick={() => setTasks(sortTasks("ascending", tasks))}>Name Ascending</span>
                        <span className={style.filter} onClick={() => setTasks(sortTasks("descending", tasks))}>Name Descending</span>
                      </div>
                    </div>
                  }
                  {toDoList && <span title="Filter" onClick={() => setShowFilters(prev => !prev)}><Filter /></span>}
                </div>
              </div>
            </div>
          </div>) : (
          <div className={style.list}>
            <div className={style.listTitle}>New Item</div>
            <div className={style.newTask}>
              <input type="text" name="name" value={task.name} onChange={checkNewTask} autoFocus />
              {toDoList && (
                <>
                  <select onChange={checkNewTask} name="priority" value={task.priority}>
                    <option value="" disabled>Select Priority</option>
                    <option value="1">Urgent</option>
                    <option value="2">High</option>
                    <option value="3">Medium</option>
                    <option value="4">Low</option>
                  </select>
                  <button onClick={createTask} disabled={task.name == "" || task.priority == ""}>Create Task</button>
                </>
              )}
              {!toDoList && <button onClick={createTask} disabled={task.name == ""}>Create Item</button>}
              <button onClick={goBack}>Go Back</button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default ToDoList;