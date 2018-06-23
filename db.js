const database = {};

const users = [
    {id:"1",password:'123',username:'yacov'},
    {id:"2",password:'345',username:'shaked'},
]

database.getUser = (id) =>{
    let user;
    for (let index in users){
        if (users[index].id == id ){
            user = users[index];
            break;
        }
    }
    return user;""
}
database.signin = ({username,password}) =>{
    let user;
    for (let index in users){
        if (users[index].username == username && users[index].password == password){
            user = users[index];
            break;
        }
    }
    return user;
}

module.exports = database;