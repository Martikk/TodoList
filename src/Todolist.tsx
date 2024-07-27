function sum (a:number, b:number) {
    alert(a+b)
}
// sum (12,14)





export function Todolist(props:any) {
    return (
        <div>
            <h3>What to learn</h3>
            <div>
                <input/>
                <button>Click me!</button>
            </div>
            <ul>
                <li><input type="checkbox" checked={true}/><span>CSS&HTML</span></li>
                <li><input type="checkbox" checked={true}/><span>JS</span></li>
                <li><input type="checkbox" checked={false}/><span>React</span></li>
            </ul>
            <div>
                <button>All</button>
                <button>Active</button>
                <button>Completed</button>
            </div>
        </div>
    )
}