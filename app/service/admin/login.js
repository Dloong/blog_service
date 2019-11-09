'use strict'

const Service = require('egg').Service;


class LoginService extends Service{
    async handlerLogin(reuqest) {
        console.log(reuqest.body)
        const user_name= reuqest.body.userName;
        const user_pwd= reuqest.body.password;
        console.log({user_name},'request')
        const user = await this.app.mysql.get('user_info', {user_name});
        console.log(user, 'response')
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