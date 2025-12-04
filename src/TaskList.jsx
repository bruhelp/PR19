function TaskList() {
    const tasks = [
        { id: 1, title: 'Смачно квакнуть', completed: true },
        { id: 2, title: 'Стать злодеем', completed: false },
        { id: 3, title: 'Покормить детей', completed: false },
        { id: 4, title: 'Сдать детей Звёздочке', completed: false }
    ]

    return (
        <div className="task-list">
            <h2>Список задач</h2>
            <ul>
                {tasks.map(task => (
                    <li key={task.id} className={task.completed ? 'completed' : 'pending'}>
                        <span>{task.title}</span>
                        {task.completed ? '☑️' : '⏳'}
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default TaskList;
