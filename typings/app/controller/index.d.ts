// This file is created by egg-ts-helper@1.25.6
// Do not modify this file!!!!!!!!!

import 'egg';
import ExportHome = require('../../../app/controller/home');
import ExportAdminLogin = require('../../../app/controller/admin/login');
import ExportDefaultHome = require('../../../app/controller/default/home');

declare module 'egg' {
  interface IController {
    home: ExportHome;
    admin: {
      login: ExportAdminLogin;
    }
    default: {
      home: ExportDefaultHome;
    }
  }
}
