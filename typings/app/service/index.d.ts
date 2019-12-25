// This file is created by egg-ts-helper@1.25.6
// Do not modify this file!!!!!!!!!

import 'egg';
import ExportAdminArticle = require('../../../app/service/admin/article');
import ExportAdminLogin = require('../../../app/service/admin/login');
import ExportDefaultArticle = require('../../../app/service/default/article');

declare module 'egg' {
  interface IService {
    admin: {
      article: ExportAdminArticle;
      login: ExportAdminLogin;
    }
    default: {
      article: ExportDefaultArticle;
    }
  }
}
