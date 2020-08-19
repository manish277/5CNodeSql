const db = require("../models");
const User = db.user;
const axios = require('axios');
const CircularJSON = require('circular-json');

// Create and Save a new user
exports.create = async (req, res) => {
    const payloadUrl = req.body.url;
    let data = await axios.get(payloadUrl);
    str = CircularJSON.stringify(data);
    const parshedData = JSON.parse(str);
    const mainData = parshedData.data;
    mainData.forEach(element => {
        const user = {
            id: element.id,
            html_url: element.html_url,
            description: element.description,
            created_at: element.created_at,
            open_issues: element.open_issues,
            watchers: element.watchers,
            owner: {
                id: element.owner.id,
                avatar_url: element.owner.avatar_url,
                html_url: element.owner.html_url,
                type: element.owner.type,
                site_admin: element.owner.site_admin
            }
        };

        User.create(user)
            .then(data => {
                console.log('user created');
            })
            .catch(err => {

            });
    });
    res.send({message:'Data saved successflly'}) ;
};



// Find a single User with an id
exports.findOne = (req, res) => {
    const id = req.params.id;
    User.findByPk(id)
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message: "Error retrieving User with id=" + id
            });
        });
};


