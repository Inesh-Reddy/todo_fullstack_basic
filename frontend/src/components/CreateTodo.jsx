import { useState } from 'react';
export function CreateTodo(){
    const [title, setTitle] = useState("")
    const [description, setDescription] = useState("") 
    
    return <div>
        <input id="title" type="text" placeholder="title" onChange={function(e){
            const value = e.target.value;
            setTitle(e.target.value);
        }} /><br />
        <input id="description" type="text" placeholder="description" onChange={function(e){
            const value = e.targett.value;
            setDescription(e.target.value);
        }}/><br />
        <button onClick={function(){
            fetch("http://localhost:3000/todo", {
                method: "POST",
                body: JSON.stringify({
                    title: title,
                    description:description,
                }),
                headers: {
                    "content-type": "application/json"
                }
            })
                .then(async function(res){
                    const json = await res.json();
                    alert("Todo Added!!")
                })
        }}>Add Todo</button><br />
    </div>
}