'use strict';

const Controller = require('egg').Controller;

class LoginController extends Controller {
  async index(parmas) {
    const { ctx } = this;
    console.log(ctx.request)
    const  user = await ctx.service.admin.login.handlerLogin(parmas.request)
    this.ctx.body = user;
  }
}

module.exports = LoginController;






