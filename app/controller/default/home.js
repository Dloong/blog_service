'use strict';

const Controller = require('egg').Controller;

class HomeController extends Controller {
  async index() {
    const result = await this.app.mysql.get('article', {});
    console.log(result);
    this.ctx.body = result;
  }
}

module.exports = HomeController;