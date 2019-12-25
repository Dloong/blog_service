// This file is created by egg-ts-helper@1.25.6
// Do not modify this file!!!!!!!!!

import 'egg';
import ExportHome = require('../../../app/controller/home');
import ExportAdminArticle = require('../../../app/controller/admin/article');
import ExportAdminLogin = require('../../../app/controller/admin/login');
import ExportDefaultArticle = require('../../../app/controller/default/article');
import ExportDefaultHome = require('../../../app/controller/default/home');

declare module 'egg' {
  interface IController {
    home: ExportHome;
    admin: {
      article: ExportAdminArticle;
      login: ExportAdminLogin;
    }
    default: {
      article: ExportDefaultArticle;
      home: ExportDefaultHome;
    }
  }
}
