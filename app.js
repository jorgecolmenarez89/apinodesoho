const express = require('express'); // dependencia express
const bodyParser = require('body-parser'); // dependencia para content-type json en las peticiones

const app = express();

// configuracion de  body-parser
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

app.set('port', process.env.PORT || 4000);
// con figuracion de las CORS
app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
    next();
});

// Routes
var proyectoRoutes = require('./routes/proyectos');
app.use('/proyectos', proyectoRoutes);

// corrrer la aplicacion
app.listen(app.get('port'), () => {
    console.log(`Server on port ${app.get('port')}`);
});