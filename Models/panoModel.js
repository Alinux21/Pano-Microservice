const fs = require('fs');
const path = require('path');


async function getPanoramaScene(hotel, roomType, roomId) {

    console.log("Hotel: ", hotel);
    console.log("Room Type: ", roomType);
    console.log("Room ID: ", roomId);

    let jsonArray = [];
    let dir = null;

    
    dir = "Hotels/".concat(hotel).concat("/").concat(roomType).concat("/").concat(roomId);
    
    async function readDirRecursive(currentPath) {
        const entries = await fs.promises.readdir(currentPath, { withFileTypes: true });

        for (const entry of entries) {
            const entryPath = path.join(currentPath, entry.name);

            if (entry.isDirectory()) {
                await readDirRecursive(entryPath);
            } else if (entry.isFile() && path.extname(entry.name) === '.json') {
                const fileContents = await fs.promises.readFile(entryPath, 'utf-8');
                try {
                    const json = JSON.parse(fileContents);
                    jsonArray.push(json);
                } catch (error) {
                    console.error(`Error parsing JSON from file ${entryPath}: ${error.message}`);
                }
            }
        }
    
    }

    await readDirRecursive(dir);

    return jsonArray;
}

module.exports = {
    getPanoramaScene
};