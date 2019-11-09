'use strict';

const Controller = require('egg').Controller;

class LoginController extends Controller {
  async index() {
    const { ctx } = this;
    const  user = await ctx.service.admin.login.handlerLogin(ctx.request)
    this.ctx.body = user;
  }
}

module.exports = LoginController;






