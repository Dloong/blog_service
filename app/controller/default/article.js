'use strict'

const Controller = require("egg").Controller;

class ArticleController extends Controller {
    async getArticleDetail() {
        const {ctx} = this
        const result = await ctx.service.default.article.getArticleDetail(ctx.request)
        this.ctx.body = result;
    }
}

module.exports = ArticleController