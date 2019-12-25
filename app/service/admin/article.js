'use strict'

const Service = require('egg').Service;

class ArticleServe extends Service {
    async addArticle(request) {
        const result = await this.app.mysql.insert("article",request.body)
        console.log(result,"mysql insert")
        return {
            data: "添加成功",
            code: 200
        }

    }

}

module.exports = ArticleServe;