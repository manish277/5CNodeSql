module.exports = (sequelize, Sequelize) => {
    const User = sequelize.define("user", {
        id: {
            type: Sequelize.STRING,
            primaryKey: true
        },
        name: {
            type: Sequelize.STRING
        },
        html_url: {
            type: Sequelize.STRING
        },
        description: {
            type: Sequelize.STRING
        },
        created_at: {
            type: Sequelize.STRING
        },
        open_issues: {
            type: Sequelize.STRING
        },
        watchers: {
            type: Sequelize.STRING
        },
        owner: {
            type: Sequelize.STRING,
            get: function () {
                return JSON.parse(this.getDataValue("owner"));
            },
            set: function (value) {
                return this.setDataValue("owner", JSON.stringify(value));
            }

        }
    });

    return User;
};