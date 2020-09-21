/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./start.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./commons/exec-util.js":
/*!******************************!*\
  !*** ./commons/exec-util.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var exec = __webpack_require__(/*! child_process */ \"child_process\").exec;\n\nfunction runShell(shell) {\n  return new Promise(function (resolve, reject) {\n    exec(shell, function (error, stdout, stderr) {\n      if (error) {\n        reject(error);\n        return;\n      }\n\n      resolve({\n        error: error,\n        stdout: stdout,\n        stderr: stderr\n      });\n    });\n  });\n}\n\nfunction getServerList(text) {\n  if (text.indexOf('┤') === -1) return [];\n  var start = '┤';\n  var end = '└─';\n  var str = text.substring(text.indexOf(start) + 1, text.indexOf(end));\n  var list = str.split('│');\n  list.splice(0, 1);\n  list.splice(list.length - 1, 1); // console.log('打开这个调试可以查看pm2 list的最新表格列数，str是',str, '\\n查出列表是', list)\n\n  var tempArray = [];\n  var tempIndex = 0;\n\n  for (var i = 0; i < list.length; i++) {\n    if (list[i] === '\\n') {\n      tempIndex++;\n      continue;\n    } else {\n      if (tempArray[tempIndex] === undefined) {\n        tempArray[tempIndex] = [];\n      }\n\n      tempArray[tempIndex].push(list[i].replace(/^\\s+|\\s+$/g, ''));\n    }\n  }\n\n  return tempArray;\n}\n\nexports.runShell = runShell;\nexports.getServerList = getServerList;\n\n//# sourceURL=webpack:///./commons/exec-util.js?");

/***/ }),

/***/ "./config/data-source.js":
/*!*******************************!*\
  !*** ./config/data-source.js ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = {\n  // postgresql onemind数据库\n  onemind_postgresql: {\n    type: 'postgresql',\n    data: {\n      user: 'postgres',\n      database: 'onemind',\n      password: 'wxhcj1314520',\n      host: 'localhost',\n      port: '5432',\n      poolSize: 5,\n      poolIdleTimeout: 30000,\n      reapIntervalMillis: 10000\n    }\n  }\n};\n\n//# sourceURL=webpack:///./config/data-source.js?");

/***/ }),

/***/ "./config/projects-config.js":
/*!***********************************!*\
  !*** ./config/projects-config.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = [{\n  name: '千模项目',\n  filename: 'thousandGirls-deplay',\n  serverName: 'thousangirls'\n}, {\n  name: '自动化部署',\n  filename: '',\n  serverName: 'autoDeplayClient'\n}];\n\n//# sourceURL=webpack:///./config/projects-config.js?");

/***/ }),

/***/ "./controller/AppDelayController.js":
/*!******************************************!*\
  !*** ./controller/AppDelayController.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("/* WEBPACK VAR INJECTION */(function(__dirname) {var ProjectVo = __webpack_require__(/*! ../vo/ProjectVo */ \"./vo/ProjectVo.js\");\n\nvar ExecUtil = __webpack_require__(/*! ../commons/exec-util */ \"./commons/exec-util.js\");\n\nvar _require = __webpack_require__(/*! exmd */ \"exmd\"),\n    renderRequestType = _require.renderRequestType,\n    ResultVo = _require.ResultVo;\n\nfunction startServe(req, res) {\n  var _ProjectVo = ProjectVo(req.body),\n      filename = _ProjectVo.filename;\n\n  var shell = \"cd projects/\".concat(filename, \" && git pull && sh run.sh\");\n  ExecUtil.runShell(shell).then(function () {\n    res.send(ResultVo({\n      status: 0,\n      data: null\n    }));\n  })[\"catch\"](function (res) {\n    console.info('>>>>>>>>', res + '');\n  });\n}\n\nfunction stopServe(req, res) {\n  var _ProjectVo2 = ProjectVo(req.body),\n      filename = _ProjectVo2.filename;\n\n  var shell = \"cd projects/\".concat(filename, \" && git pull && sh stop.sh\");\n  ExecUtil.runShell(shell).then(function () {\n    res.send(ResultVo({\n      status: 0,\n      data: null\n    }));\n  })[\"catch\"](function (res) {\n    console.info('>>>>>>>>', res);\n  });\n}\n\nfunction restartServe(req, res) {\n  var _ProjectVo3 = ProjectVo(req.body),\n      filename = _ProjectVo3.filename;\n\n  var stopShell = \"cd \".concat(__dirname.replace('/controller', ''), \"/projects/\").concat(filename, \" && git pull && set -e sh stop.sh\");\n  var startShell = \"cd projects/\".concat(filename, \" && git pull && sh run.sh\");\n  ExecUtil.runShell(stopShell).then(function () {\n    ExecUtil.runShell(startShell).then(function () {\n      res.send(ResultVo({\n        status: 0,\n        data: null\n      }));\n    });\n  });\n} // 配置接口文档\n\n\nexports.startServe = renderRequestType(startServe, 'POST', ProjectVo, ProjectVo, '启动项目');\nexports.stopServe = renderRequestType(stopServe, 'POST', ProjectVo, ProjectVo, '停止项目');\nexports.restartServe = renderRequestType(restartServe, 'POST', ProjectVo, ProjectVo, '重启项目');\nexports.name = 'AppDelayController';\nexports.description = '项目部署';\n/* WEBPACK VAR INJECTION */}.call(this, \"controller\"))\n\n//# sourceURL=webpack:///./controller/AppDelayController.js?");

/***/ }),

/***/ "./controller/AppListController.js":
/*!*****************************************!*\
  !*** ./controller/AppListController.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }\n\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }\n\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\nvar AppListVo = __webpack_require__(/*! ../vo/AppListVo */ \"./vo/AppListVo.js\");\n\nvar ExecUtil = __webpack_require__(/*! ../commons/exec-util */ \"./commons/exec-util.js\");\n\nvar ProjectsListConfig = __webpack_require__(/*! ../config/projects-config */ \"./config/projects-config.js\");\n\nvar _require = __webpack_require__(/*! exmd */ \"exmd\"),\n    renderRequestType = _require.renderRequestType,\n    handleClientAdapter = _require.handleClientAdapter,\n    ResultVo = _require.ResultVo;\n\nvar test = __webpack_require__(/*! exmd */ \"exmd\");\n\nvar _require2 = __webpack_require__(/*! ../models */ \"./models/index.js\"),\n    omuser = _require2.omuser; // const AppItemsController = require('./AppItemsController')\n// const aic = new AppItemsController()\n// console.info('AppItemsController =====>>>>', aic)\n\n\nfunction getStatus(item, serverList) {\n  // 这里配置不同状态\n  var statusMap = {\n    online: '运行中',\n    stopped: '已停止'\n  };\n  var result = {\n    status: 'offline',\n    statusName: '未启动'\n  };\n  if (serverList.length <= 0) return result;\n\n  for (var i = 0; i < serverList.length; i++) {\n    var list = serverList[i];\n    if (list.length !== 13) continue;\n\n    if (item.serverName === list[1]) {\n      result = {\n        status: list[8],\n        statusName: statusMap[list[8]]\n      };\n      break;\n    }\n  }\n\n  return result;\n}\n\nfunction getAppList(req, res, ogisticServiceData) {\n  var client = handleClientAdapter(ogisticServiceData, 'onemind_postgresql'); // 拿到某个数据源对应的连接池\n\n  var omu = new omuser(client);\n  omu.query().then(function (res) {\n    console.info('查询结果', res.rows);\n  });\n  var shell = \"pm2 list\";\n  ExecUtil.runShell(shell).then(function (result) {\n    var serverList = ExecUtil.getServerList(result.stdout);\n    res.send(ResultVo({\n      status: 0,\n      data: AppListVo({\n        serverList: serverList,\n        projectList: ProjectsListConfig.map(function (item) {\n          return _objectSpread(_objectSpread({}, item), {}, {\n            serverStatus: getStatus(item, serverList)\n          });\n        })\n      })\n    }));\n  });\n} // 配置接口文档\n\n\nexports.getAppList = renderRequestType(getAppList, 'POST', null, AppListVo, '获得管理项目列表');\nexports.name = 'AppListController';\nexports.description = '项目管理';\n\n//# sourceURL=webpack:///./controller/AppListController.js?");

/***/ }),

/***/ "./controller/TestController.js":
/*!**************************************!*\
  !*** ./controller/TestController.js ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var _require = __webpack_require__(/*! exmd */ \"exmd\"),\n    ResultVo = _require.ResultVo,\n    renderRequestType = _require.renderRequestType;\n\nfunction testGetServe(req, res) {\n  res.send(ResultVo({\n    status: 0,\n    data: null\n  }));\n}\n\nfunction testPutServe(req, res) {\n  res.send(ResultVo({\n    status: 0,\n    data: null\n  }));\n}\n\nfunction testDeleteServe(req, res) {\n  res.send(ResultVo({\n    status: 0,\n    data: null\n  }));\n}\n\nexports.testGetServe = renderRequestType(testGetServe, 'GET');\nexports.testPutServe = renderRequestType(testPutServe, 'PUT');\nexports.testDeleteServe = renderRequestType(testDeleteServe, 'DELETE');\nexports.name = 'TestController';\nexports.description = \"测试其他\";\n\n//# sourceURL=webpack:///./controller/TestController.js?");

/***/ }),

/***/ "./models/index.js":
/*!*************************!*\
  !*** ./models/index.js ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var omuser = __webpack_require__(/*! ./omuser */ \"./models/omuser.js\");\n\nvar test = __webpack_require__(/*! ./test */ \"./models/test.js\");\n\nmodule.exports = {\n  omuser: omuser,\n  test: test\n};\n\n//# sourceURL=webpack:///./models/index.js?");

/***/ }),

/***/ "./models/omuser.js":
/*!**************************!*\
  !*** ./models/omuser.js ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var _require = __webpack_require__(/*! exmd */ \"exmd\"),\n    BaseModel = _require.BaseModel;\n\nvar fieldsMap = {\n  id: {\n    type: 'uuid',\n    length: 16,\n    lengthvar: -1,\n    notnull: true,\n    comment: null\n  },\n  username: {\n    type: 'text',\n    length: -1,\n    lengthvar: -1,\n    notnull: true,\n    comment: null\n  },\n  password: {\n    type: 'text',\n    length: -1,\n    lengthvar: -1,\n    notnull: true,\n    comment: null\n  },\n  isactive: {\n    type: 'int4',\n    length: 4,\n    lengthvar: -1,\n    notnull: true,\n    comment: null\n  },\n  realname: {\n    type: 'text',\n    length: -1,\n    lengthvar: -1,\n    notnull: false,\n    comment: null\n  }\n};\n\nfunction omuser() {\n  var vm = this;\n  BaseModel.apply(vm, arguments);\n  vm.fields = fieldsMap;\n  vm.tableName = 'omuser';\n}\n\n;\n\n(function () {\n  var TempFun = function TempFun() {};\n\n  TempFun.prototype = BaseModel.prototype;\n  omuser.prototype = new TempFun();\n})();\n\nmodule.exports = omuser;\n\n//# sourceURL=webpack:///./models/omuser.js?");

/***/ }),

/***/ "./models/test.js":
/*!************************!*\
  !*** ./models/test.js ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var _require = __webpack_require__(/*! exmd */ \"exmd\"),\n    BaseModel = _require.BaseModel;\n\nvar fieldsMap = {\n  id: {\n    type: 'uuid',\n    length: 16,\n    lengthvar: -1,\n    notnull: true,\n    comment: null\n  },\n  name: {\n    type: 'text',\n    length: -1,\n    lengthvar: -1,\n    notnull: false,\n    comment: null\n  },\n  password: {\n    type: 'text',\n    length: -1,\n    lengthvar: -1,\n    notnull: false,\n    comment: null\n  },\n  realname: {\n    type: 'text',\n    length: -1,\n    lengthvar: -1,\n    notnull: false,\n    comment: null\n  }\n};\n\nfunction test() {\n  var vm = this;\n  BaseModel.apply(vm, arguments);\n  vm.fields = fieldsMap;\n  vm.tableName = 'test';\n}\n\n;\n\n(function () {\n  var TempFun = function TempFun() {};\n\n  TempFun.prototype = BaseModel.prototype;\n  test.prototype = new TempFun();\n})();\n\nmodule.exports = test;\n\n//# sourceURL=webpack:///./models/test.js?");

/***/ }),

/***/ "./router/index.js":
/*!*************************!*\
  !*** ./router/index.js ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var AppDelayController = __webpack_require__(/*! ../controller/AppDelayController */ \"./controller/AppDelayController.js\");\n\nvar AppListController = __webpack_require__(/*! ../controller/AppListController */ \"./controller/AppListController.js\");\n\nvar TestController = __webpack_require__(/*! ../controller/TestController */ \"./controller/TestController.js\");\n\nvar router = [{\n  url: '/auto-deplay/',\n  controller: AppDelayController\n}, {\n  url: '/auto-deplay/',\n  controller: AppListController\n}, {\n  url: '/auto-deplay/',\n  controller: TestController\n}];\nmodule.exports = router;\n\n//# sourceURL=webpack:///./router/index.js?");

/***/ }),

/***/ "./start.js":
/*!******************!*\
  !*** ./start.js ***!
  \******************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var _require = __webpack_require__(/*! exmd */ \"exmd\"),\n    startProject = _require.startProject;\n\nvar router = __webpack_require__(/*! ./router */ \"./router/index.js\");\n\nvar Datasource = __webpack_require__(/*! ./config/data-source */ \"./config/data-source.js\");\n\nstartProject({\n  router: router,\n  Datasource: Datasource\n});\n\n//# sourceURL=webpack:///./start.js?");

/***/ }),

/***/ "./vo/AppListVo.js":
/*!*************************!*\
  !*** ./vo/AppListVo.js ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("/**\n * 项目实体\n * @param {*} params\n */\nfunction AppListVo(params) {\n  var serverList = params.serverList,\n      projectList = params.projectList;\n  return {\n    serverList: serverList,\n    projectList: projectList\n  };\n}\n\nAppListVo.prototype.swaggerDescription = {\n  serverList: [['1', 'autoDeplayClient', 'default', '0.1.0', 'fork', '12036', '3h', '0', 'online', '0%', '604.0kb', 'wujianf…', 'disabled'], ['10', 'thousangirls', 'default', '1.0.0', 'fork', '15595', '30m', '0', 'online', '0%', '604.0kb', 'wujianf…', 'disabled']],\n  projectList: [{\n    \"name\": \"项目名称\",\n    \"filename\": \"映射到projects目录下的文件名称\",\n    \"serverName\": \"服务名称\",\n    \"serverStatus\": {\n      \"status\": \"服务状态 online运行中 offline未运行 stopped已停止\",\n      \"statusName\": \"服务名称: 运行中/未运行/已停止\"\n    }\n  }]\n};\nmodule.exports = AppListVo;\n\n//# sourceURL=webpack:///./vo/AppListVo.js?");

/***/ }),

/***/ "./vo/ProjectVo.js":
/*!*************************!*\
  !*** ./vo/ProjectVo.js ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("/**\n * 项目实体\n * @param {*} params \n */\nfunction ProjectVo(params) {\n  var filename = params.filename;\n  return {\n    filename: filename\n  };\n}\n\nProjectVo.prototype.swaggerDescription = {\n  filename: '项目文件名'\n};\nmodule.exports = ProjectVo;\n\n//# sourceURL=webpack:///./vo/ProjectVo.js?");

/***/ }),

/***/ "child_process":
/*!********************************!*\
  !*** external "child_process" ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"child_process\");\n\n//# sourceURL=webpack:///external_%22child_process%22?");

/***/ }),

/***/ "exmd":
/*!***********************!*\
  !*** external "exmd" ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"exmd\");\n\n//# sourceURL=webpack:///external_%22exmd%22?");

/***/ })

/******/ });