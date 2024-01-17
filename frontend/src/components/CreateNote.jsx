import {useState} from 'react'

export function CreateNote(){

    const [title, setTitle] = useState('')
    const [description, setDescription] = useState('')

    return <div>
        <input style={{padding:10, margin: 10}} 
               type="text" 
               placeholder="title"
               onChange={(e)=> setTitle(e.target.value)}>
        </input> 
        <br/>
        <input style={{padding:10, margin: 10}} 
               type="text" 
               placeholder="description"
               onChange={(e)=>setDescription(e.target.value)}>
        </input>
        <br/>
        <button style={{padding:10, margin: 10}}
                onClick={()=>{
                    fetch("http://localhost:3000/note", {
                        method: "POST",
                        body: JSON.stringify({
                            title:title,
                            description:description
                        }),
                        headers: {
                            "Content-type": "application/json"
                        },
                    })
                    .then((res) => {
                        if (!res.ok) {
                            throw new Error('Network response was not ok');
                        }
                        return res.json();
                    })
                    .then(() => {
                        alert("TODO created!");
                    })
                    .catch((error) => {
                        console.error('There has been a problem with your fetch operation:', error);
                    });
                }}
        >Add a Note</button>
    </div>
}