'use strict';

module.exports = app => {
  const {
    router,
    controller,
  } = app;
  router.get('/default/getArticleList', controller.default.home.getArticleList);
  router.get('/default/getArticleDetail', controller.default.article.getArticleDetail);
};
