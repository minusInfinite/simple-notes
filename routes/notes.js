const notes = require("express").Router()
const { readDB, writeDB, updateDB } = require("../utils/filesys")
const { v4: uuidv4 } = require("uuid")

notes.get("/", (req, res) => {
    readDB("./db/db.json").then((data) => res.json(JSON.parse(data)))
})

notes.post("/", (req, res) => {
    const { title, text } = req.body

    if (req.body) {
        const newNote = {
            id: uuidv4(),
            title,
            text,
        }
        updateDB("./db/db.json", newNote)
        res.sendStatus(200)
    } else {
        res.sendStatus(400)
    }
})

notes.delete("/:note_id", (req, res) => {
    if (req.params.note_id) {
        const noteId = req.params.note_id
        const content = readDB("./db/db.json")
            .then((data) => {
                return JSON.parse(data)
            })
            .catch((err) => console.log(err))

        const deleteNote = async () => {
            const cx = await content
            const newCx = cx.filter((el) => {
                return el.id !== noteId
            })

            console.log(newCx)

            writeDB("./db/db.json", newCx)
        }

        deleteNote()
        res.sendStatus(200)
    } else {
        res.sendStatus(400)
    }
})

module.exports = notes
