'use strict'

const Service = require('egg').Service;

class Article extends Service {
    async getArticleList(reuqest) {
      const res = await this.app.mysql.query("select * from article")
      return res
    }
    async getArticleDetail(request) {
        const res = await this.app.mysql.get('article',{id: this.ctx.query.id})
        return {
            code: 200,
            data: res
        }
    }
}
module.exports = Article