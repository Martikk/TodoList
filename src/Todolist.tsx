function sum (a:number, b:number) {
    alert(a+b)
}
// sum (12,14)

export type TaskType = {
    id: number,
    title: string,
    isDone: boolean,
}

type PropsType = {
    title: string,
    tasks: Array<TaskType>
    removeTask:Function
}



export function Todolist (props: PropsType) {
    return (
        <div>
            <h3>{props.title}</h3>
            <div>
                <input/>
                <button>Click me!</button>
            </div>
            <ul>
                {
                    props.tasks.map((task)=>{
                        return <li><input type="checkbox"
                                          checked={task.isDone}/><span>{task.title}</span>
                            <button onClick={()=>{props.removeTask(task.id)}}>x</button>
                        </li>

                    })
                }
            </ul>
            <div>
                <button>All</button>
                <button>Active</button>
                <button>Completed</button>
            </div>
        </div>
    )
}