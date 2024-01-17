export function Notes({notes}){
    return <div>
        {notes.map(function(note){
        return <div>
                    <h1>{note.title}</h1>
                    <h2>{note.description}</h2>
            </div>
        })}
    </div>
}