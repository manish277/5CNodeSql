module.exports = app => {
    const user = require("../controller/user.controller.js");
    var router = require("express").Router();

    // Create a new user
    router.post("/github", user.create);

    // Retrieve a single user with id
    router.get("/github/:id", user.findOne);


    app.use('/', router);
};