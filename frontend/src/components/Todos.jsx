export function Todos({todos}){
    return <div>
        {todos.map(function(todo){
            return <div>
                <h1>{todo.title}</h1><br />
                <h1>{todo.description}</h1><br />
                <button>{todo.completed == true ? "Completed" : "mark as Completed"}</button><br />
            </div>
        })}
    </div>
}