const container = document.querySelector(".new-notes-container")
const addBtn = document.querySelector(".add-note-btn")
addBtn.addEventListener("click",()=>{
    const newNote = document.createElement("div")
    newNote.classList.add("newnote")
    newNote.insertAdjacentHTML("beforeend",`
        <h1>afs jakfhkjh fakjsh aksjh kjashkjhafskjhaskfjhkajfhskj</h1>        
        <input type="checkbox">
        `)
    container.appendChild(newNote)
})