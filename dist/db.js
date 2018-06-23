'use strict';

var database = {};

var users = [{ id: "1", password: '123', username: 'yacov' }, { id: "2", password: '345', username: 'shaked' }];

database.getUser = function (id) {
    var user = void 0;
    for (var index in users) {
        if (users[index].id == id) {
            user = users[index];
            break;
        }
    }
    return user;"";
};
database.signin = function (_ref) {
    var username = _ref.username,
        password = _ref.password;

    var user = void 0;
    for (var index in users) {
        if (users[index].username == username && users[index].password == password) {
            user = users[index];
            break;
        }
    }
    return user;
};

module.exports = database;