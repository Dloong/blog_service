'use strict'

const Service = require('egg').Service;


class LoginService extends Service{
    async handlerLogin(reuqest) {
        const user_name= reuqest.body.userName;
        const user_pwd= reuqest.body.password;
        const user = await this.app.mysql.get('user_info', {user_name});

        if(user) {
            return {
                data: "",
                msg: "Login Successful",
                code:200
            }
        } else {
            return {
                data: "",
                msg: "Login Error",
                code:1002
            }
        }
    }
}
module.exports = LoginService;