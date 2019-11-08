'use strict'

const Service = require('egg').Service;


class LoginService extends Service{
    async handlerLogin(reuqest) {
        const user_name= reuqest.body.username;
        const user_pwd= reuqest.body.password;
        const user = await this.app.mysql.get('user_info', {user_name});
        console.log(user)
        return user
    }
}
module.exports = LoginService;