
const Controller = require('../Controllers/panoController');

const panoRouter = ((req,res) => {

    if(req.method === 'GET' && req.url.match(/\/panoramaTours\/\?hotel=\w+&appType=\w+&appId=\w+/)) {
        console.log('httpGetPanoramaScene from router');
        Controller.httpGetPanoramaScene(req, res);
    }else {
        res.writeHead(404, {'Content-Type': 'application/json'});
        res.end(JSON.stringify({message: 'Route not found'}));
    }
});

module.exports = panoRouter;
