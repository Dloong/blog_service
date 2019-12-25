'use strict'
const Controller = require('egg').Controller;

class ArticleController extends Controller {
    async addArticle() {
        const { ctx } = this;
        const type = await ctx.service.admin.article.addArticle(ctx.request);
        this.ctx.body = type;
    }
}
module.exports = ArticleController;