const zod = require('zod');

const createNote = zod.object({
    title: zod.string(),
    description: zod.string()
})

module.exports = {
    createNote: createNote
}