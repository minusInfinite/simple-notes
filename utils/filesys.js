const fs = require("fs/promises")

/** exports an alias for the fs.readFile */
const readDB = fs.readFile

/**
 * A function to save an Object to a file
 * @param {String} fileLocation
 * @param {Object} content
 */
const writeDB = (saleFile, content) => {
    fs.writeFile(saleFile, JSON.stringify(content, null, 4))
        .then(() => console.info(`\nData saved to file: ${saleFile}`))
        .catch((err) => console.error(err))
}

/**
 * A function to append Object data to a file
 * @param {String} file
 * @param {Object} content
 */
const updateDB = (file, content) => {
    fs.readFile(file, "utf-8")
        .then((data) => {
            const parseContent = JSON.parse(data)
            parseContent.push(content)
            writeDB(file, parseContent)
        })
        .catch((err) => console.error(err))
}

module.exports = { readDB, writeDB, updateDB }
