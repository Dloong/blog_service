'use strict';

const Controller = require('egg').Controller;

class HomeController extends Controller {
  async getArticleList() {
    const {ctx} = this
    const result = await ctx.service.default.article.getArticleList(ctx.request)
    this.ctx.body = {
      code: 200,
      data: result,
      msg: "successful"
    };
  }
}

module.exports = HomeController;
