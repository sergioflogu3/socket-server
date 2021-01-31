import Server from "./clases/server";
import router  from "./rutas/router";
import bodyParser from "body-parser";
import cors from "cors";


const server = new Server();
//Congfiguracion de entradas
server.app.use(bodyParser.urlencoded({extended: true}));
server.app.use(bodyParser.json());

//configuracion del CORS
server.app.use(cors({
    origin: true,
    credentials: true
}));

//Rutas de servicios
server.app.use('/', router)

server.start(() => {
    console.log("El servidor esta inicilizado: " + server.port);
});