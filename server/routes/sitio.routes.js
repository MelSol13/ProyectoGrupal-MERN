const SitioController = require("../controllers/sitio.controller")
const UserController = require ("../controllers/user.controllers");

const {authenticate} = require("../config/jwt.config");

module.exports = (app) => {
    app.get("/api/sitios/", authenticate, SitioController.ver_todos);

    app.get("/api/sitios/:id", authenticate, SitioController.ver_sitio);

    app.post("/api/sitios/", authenticate, SitioController.crear_sitio);

    app.put("/api/sitios/:id", authenticate, SitioController.editar_sitio);

    app.delete("/api/sitios/:id", authenticate, SitioController.borrar_sitio);

    app.post("/api/register", UserController.register);

    app.post("/api/login", UserController.login);

    app.get("/api/logout", UserController.logout);
}