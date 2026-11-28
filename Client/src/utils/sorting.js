export const sortByNameAscending =  (list) => {
    return [...list].sort((a, b) => a.task.localeCompare(b.task));
}

export const sortByNameDescending =  (list) => {
    return [...list].sort((a, b) => b.task.localeCompare(a.task));
}

export const sortByPriorityAscending =  (list) => {
    return [...list].sort((a, b) => a.priority - b.priority);
}

export const sortByPriorityDescending =  (list) => {
    return [...list].sort((a, b) => b.priority - a.priority);
}