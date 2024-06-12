
const PanoramaModel = require('../Models/panoModel.js');

async function httpGetPanoramaScene(req, res) {
    

     const hotel = req.url.split('/')[3].split('?')[1].split('&')[0].split('=')[1];
     const appType = req.url.split('/')[3].split('?')[1].split('&')[1].split('=')[1];
     const appId = req.url.split('/')[3].split('?')[1].split('&')[2].split('=')[1];

    try {
        console.log('getPanoramaScene');
        const panoramaScene = await PanoramaModel.getPanoramaScene(hotel, appType, appId);
        res.writeHead(200, { 'Content-Type': 'application/json' });
        res.end(JSON.stringify(panoramaScene));
    } catch (error) {
        if (error.message === 'Scene not found') {
            res.writeHead(404, { 'Content-Type': 'application/json' });
            res.end(JSON.stringify({ message: 'Scene not found' }));
        }
        else {
            console.log(error);
            res.writeHead(500, { 'Content-Type': 'application/json' });
            res.end(JSON.stringify({ message: 'Internal Server Error' }));
        }
    }
}

module.exports = {
    httpGetPanoramaScene
};