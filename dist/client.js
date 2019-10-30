/******/ (function(modules) { // webpackBootstrap
/******/ 	// install a JSONP callback for chunk loading
/******/ 	function webpackJsonpCallback(data) {
/******/ 		var chunkIds = data[0];
/******/ 		var moreModules = data[1];
/******/ 		var executeModules = data[2];
/******/
/******/ 		// add "moreModules" to the modules object,
/******/ 		// then flag all "chunkIds" as loaded and fire callback
/******/ 		var moduleId, chunkId, i = 0, resolves = [];
/******/ 		for(;i < chunkIds.length; i++) {
/******/ 			chunkId = chunkIds[i];
/******/ 			if(Object.prototype.hasOwnProperty.call(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 				resolves.push(installedChunks[chunkId][0]);
/******/ 			}
/******/ 			installedChunks[chunkId] = 0;
/******/ 		}
/******/ 		for(moduleId in moreModules) {
/******/ 			if(Object.prototype.hasOwnProperty.call(moreModules, moduleId)) {
/******/ 				modules[moduleId] = moreModules[moduleId];
/******/ 			}
/******/ 		}
/******/ 		if(parentJsonpFunction) parentJsonpFunction(data);
/******/
/******/ 		while(resolves.length) {
/******/ 			resolves.shift()();
/******/ 		}
/******/
/******/ 		// add entry modules from loaded chunk to deferred list
/******/ 		deferredModules.push.apply(deferredModules, executeModules || []);
/******/
/******/ 		// run deferred modules when all chunks ready
/******/ 		return checkDeferredModules();
/******/ 	};
/******/ 	function checkDeferredModules() {
/******/ 		var result;
/******/ 		for(var i = 0; i < deferredModules.length; i++) {
/******/ 			var deferredModule = deferredModules[i];
/******/ 			var fulfilled = true;
/******/ 			for(var j = 1; j < deferredModule.length; j++) {
/******/ 				var depId = deferredModule[j];
/******/ 				if(installedChunks[depId] !== 0) fulfilled = false;
/******/ 			}
/******/ 			if(fulfilled) {
/******/ 				deferredModules.splice(i--, 1);
/******/ 				result = __webpack_require__(__webpack_require__.s = deferredModule[0]);
/******/ 			}
/******/ 		}
/******/
/******/ 		return result;
/******/ 	}
/******/
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// object to store loaded and loading chunks
/******/ 	// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 	// Promise = chunk loading, 0 = chunk loaded
/******/ 	var installedChunks = {
/******/ 		"client": 0
/******/ 	};
/******/
/******/ 	var deferredModules = [];
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
/******/ 	__webpack_require__.p = "/";
/******/
/******/ 	var jsonpArray = (typeof self !== 'undefined' ? self : this)["webpackJsonp"] = (typeof self !== 'undefined' ? self : this)["webpackJsonp"] || [];
/******/ 	var oldJsonpFunction = jsonpArray.push.bind(jsonpArray);
/******/ 	jsonpArray.push = webpackJsonpCallback;
/******/ 	jsonpArray = jsonpArray.slice();
/******/ 	for(var i = 0; i < jsonpArray.length; i++) webpackJsonpCallback(jsonpArray[i]);
/******/ 	var parentJsonpFunction = oldJsonpFunction;
/******/
/******/
/******/ 	// add entry module to deferred list
/******/ 	deferredModules.push(["./lib/index.js","vendor"]);
/******/ 	// run deferred modules when ready
/******/ 	return checkDeferredModules();
/******/ })
/************************************************************************/
/******/ ({

/***/ "./lib/client.js":
/*!***********************!*\
  !*** ./lib/client.js ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(global, process) {
/**
 * Copyright (c) 2010-2017 Brian Carlson (brian.m.carlson@gmail.com)
 * All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * README.md file in the root directory of this source tree.
 */

var EventEmitter = __webpack_require__(/*! events */ "./node_modules/events/events.js").EventEmitter;
var util = __webpack_require__(/*! util */ "./node_modules/util/util.js");
// var pgPass = require("pgpass");

var utils = __webpack_require__(/*! ./utils */ "./lib/utils.js");
var sasl = __webpack_require__(/*! ./sasl */ "./lib/sasl.js");
var TypeOverrides = __webpack_require__(/*! ./type-overrides */ "./lib/type-overrides.js");

var ConnectionParameters = __webpack_require__(/*! ./connection-parameters */ "./lib/connection-parameters.js");
var Query = __webpack_require__(/*! ./query */ "./lib/query.js");
var defaults = __webpack_require__(/*! ./defaults */ "./lib/defaults.js");
var Connection = __webpack_require__(/*! ./connection */ "./lib/connection.js");

var Client = function(config) {
  EventEmitter.call(this);

  this.connectionParameters = new ConnectionParameters(config);
  this.user = this.connectionParameters.user;
  this.database = this.connectionParameters.database;
  this.port = this.connectionParameters.port;
  this.host = this.connectionParameters.host;
  this.password = this.connectionParameters.password;
  this.replication = this.connectionParameters.replication;

  var c = config || {};

  this._Promise = c.Promise || global.Promise;
  this._types = new TypeOverrides(c.types);
  this._ending = false;
  this._connecting = false;
  this._connected = false;
  this._connectionError = false;
  this._queryable = true;

  this.connection =
    c.connection ||
    new Connection({
      stream: c.stream,
      ssl: this.connectionParameters.ssl,
      keepAlive: c.keepAlive || false,
      keepAliveInitialDelayMillis: c.keepAliveInitialDelayMillis || 0,
      encoding: this.connectionParameters.client_encoding || "utf8"
    });
  this.queryQueue = [];
  this.binary = c.binary || defaults.binary;
  this.processID = null;
  this.secretKey = null;
  this.ssl = this.connectionParameters.ssl || false;
  this._connectionTimeoutMillis = c.connectionTimeoutMillis || 0;
};

util.inherits(Client, EventEmitter);

Client.prototype._errorAllQueries = function(err) {
  const enqueueError = query => {
    process.nextTick(() => {
      query.handleError(err, this.connection);
    });
  };

  if (this.activeQuery) {
    enqueueError(this.activeQuery);
    this.activeQuery = null;
  }

  this.queryQueue.forEach(enqueueError);
  this.queryQueue.length = 0;
};

Client.prototype._connect = function(callback) {
  var self = this;
  var con = this.connection;
  if (this._connecting || this._connected) {
    const err = new Error(
      "Client has already been connected. You cannot reuse a client."
    );
    process.nextTick(() => {
      callback(err);
    });
    return;
  }
  this._connecting = true;

  var connectionTimeoutHandle;
  if (this._connectionTimeoutMillis > 0) {
    connectionTimeoutHandle = setTimeout(() => {
      con._ending = true;
      con.stream.destroy(new Error("timeout expired"));
    }, this._connectionTimeoutMillis);
  }

  if (this.host && this.host.indexOf("/") === 0) {
    con.connect(this.host + "/.s.PGSQL." + this.port);
  } else {
    con.connect(this.port, this.host);
  }

  // once connection is established send startup message
  con.on("connect", function() {
    if (self.ssl) {
      con.requestSsl();
    } else {
      con.startup(self.getStartupConf());
    }
  });

  con.on("sslconnect", function() {
    con.startup(self.getStartupConf());
  });

  function checkPgPass(cb) {
    return function(msg) {
      if (typeof self.password === "function") {
        self._Promise
          .resolve()
          .then(() => self.password())
          .then(pass => {
            if (pass !== undefined) {
              if (typeof pass !== "string") {
                con.emit("error", new TypeError("Password must be a string"));
                return;
              }
              self.connectionParameters.password = self.password = pass;
            } else {
              self.connectionParameters.password = self.password = null;
            }
            cb(msg);
          })
          .catch(err => {
            con.emit("error", err);
          });
      } else if (self.password !== null) {
        cb(msg);
      } else {
        throw new Error("pgpass is not implemented");
        pgPass(self.connectionParameters, function(pass) {
          if (undefined !== pass) {
            self.connectionParameters.password = self.password = pass;
          }
          cb(msg);
        });
      }
    };
  }

  // password request handling
  con.on(
    "authenticationCleartextPassword",
    checkPgPass(function() {
      con.password(self.password);
    })
  );

  // password request handling
  con.on(
    "authenticationMD5Password",
    checkPgPass(function(msg) {
      con.password(
        utils.postgresMd5PasswordHash(self.user, self.password, msg.salt)
      );
    })
  );

  // password request handling (SASL)
  var saslSession;
  con.on(
    "authenticationSASL",
    checkPgPass(function(msg) {
      saslSession = sasl.startSession(msg.mechanisms);

      con.sendSASLInitialResponseMessage(
        saslSession.mechanism,
        saslSession.response
      );
    })
  );

  // password request handling (SASL)
  con.on("authenticationSASLContinue", function(msg) {
    sasl.continueSession(saslSession, self.password, msg.data);

    con.sendSCRAMClientFinalMessage(saslSession.response);
  });

  // password request handling (SASL)
  con.on("authenticationSASLFinal", function(msg) {
    sasl.finalizeSession(saslSession, msg.data);

    saslSession = null;
  });

  con.once("backendKeyData", function(msg) {
    self.processID = msg.processID;
    self.secretKey = msg.secretKey;
  });

  const connectingErrorHandler = err => {
    if (this._connectionError) {
      return;
    }
    this._connectionError = true;
    clearTimeout(connectionTimeoutHandle);
    if (callback) {
      return callback(err);
    }
    this.emit("error", err);
  };

  const connectedErrorHandler = err => {
    this._queryable = false;
    this._errorAllQueries(err);
    this.emit("error", err);
  };

  const connectedErrorMessageHandler = msg => {
    const activeQuery = this.activeQuery;

    if (!activeQuery) {
      connectedErrorHandler(msg);
      return;
    }

    this.activeQuery = null;
    activeQuery.handleError(msg, con);
  };

  con.on("error", connectingErrorHandler);
  con.on("errorMessage", connectingErrorHandler);

  // hook up query handling events to connection
  // after the connection initially becomes ready for queries
  con.once("readyForQuery", function() {
    self._connecting = false;
    self._connected = true;
    self._attachListeners(con);
    con.removeListener("error", connectingErrorHandler);
    con.removeListener("errorMessage", connectingErrorHandler);
    con.on("error", connectedErrorHandler);
    con.on("errorMessage", connectedErrorMessageHandler);
    clearTimeout(connectionTimeoutHandle);

    // process possible callback argument to Client#connect
    if (callback) {
      callback(null, self);
      // remove callback for proper error handling
      // after the connect event
      callback = null;
    }
    self.emit("connect");
  });

  con.on("readyForQuery", function() {
    var activeQuery = self.activeQuery;
    self.activeQuery = null;
    self.readyForQuery = true;
    if (activeQuery) {
      activeQuery.handleReadyForQuery(con);
    }
    self._pulseQueryQueue();
  });

  con.once("end", () => {
    const error = this._ending
      ? new Error("Connection terminated")
      : new Error("Connection terminated unexpectedly");

    this._errorAllQueries(error);

    if (!this._ending) {
      // if the connection is ended without us calling .end()
      // on this client then we have an unexpected disconnection
      // treat this as an error unless we've already emitted an error
      // during connection.
      if (this._connecting && !this._connectionError) {
        if (callback) {
          callback(error);
        } else {
          connectedErrorHandler(error);
        }
      } else if (!this._connectionError) {
        connectedErrorHandler(error);
      }
    }

    process.nextTick(() => {
      this.emit("end");
    });
  });

  con.on("notice", function(msg) {
    self.emit("notice", msg);
  });
};

Client.prototype.connect = function(callback) {
  if (callback) {
    this._connect(callback);
    return;
  }

  return new this._Promise((resolve, reject) => {
    this._connect(error => {
      if (error) {
        reject(error);
      } else {
        resolve();
      }
    });
  });
};

Client.prototype._attachListeners = function(con) {
  const self = this;
  // delegate rowDescription to active query
  con.on("rowDescription", function(msg) {
    self.activeQuery.handleRowDescription(msg);
  });

  // delegate dataRow to active query
  con.on("dataRow", function(msg) {
    self.activeQuery.handleDataRow(msg);
  });

  // delegate portalSuspended to active query
  // eslint-disable-next-line no-unused-vars
  con.on("portalSuspended", function(msg) {
    self.activeQuery.handlePortalSuspended(con);
  });

  // delegate emptyQuery to active query
  // eslint-disable-next-line no-unused-vars
  con.on("emptyQuery", function(msg) {
    self.activeQuery.handleEmptyQuery(con);
  });

  // delegate commandComplete to active query
  con.on("commandComplete", function(msg) {
    self.activeQuery.handleCommandComplete(msg, con);
  });

  // if a prepared statement has a name and properly parses
  // we track that its already been executed so we don't parse
  // it again on the same client
  // eslint-disable-next-line no-unused-vars
  con.on("parseComplete", function(msg) {
    if (self.activeQuery.name) {
      con.parsedStatements[self.activeQuery.name] = self.activeQuery.text;
    }
  });

  // eslint-disable-next-line no-unused-vars
  con.on("copyInResponse", function(msg) {
    self.activeQuery.handleCopyInResponse(self.connection);
  });

  con.on("copyData", function(msg) {
    self.activeQuery.handleCopyData(msg, self.connection);
  });

  con.on("notification", function(msg) {
    self.emit("notification", msg);
  });
};

Client.prototype.getStartupConf = function() {
  var params = this.connectionParameters;

  var data = {
    user: params.user,
    database: params.database
  };

  var appName = params.application_name || params.fallback_application_name;
  if (appName) {
    data.application_name = appName;
  }
  if (params.replication) {
    data.replication = "" + params.replication;
  }
  if (params.statement_timeout) {
    data.statement_timeout = String(parseInt(params.statement_timeout, 10));
  }

  return data;
};

Client.prototype.cancel = function(client, query) {
  if (client.activeQuery === query) {
    var con = this.connection;

    if (this.host && this.host.indexOf("/") === 0) {
      con.connect(this.host + "/.s.PGSQL." + this.port);
    } else {
      con.connect(this.port, this.host);
    }

    // once connection is established send cancel message
    con.on("connect", function() {
      con.cancel(client.processID, client.secretKey);
    });
  } else if (client.queryQueue.indexOf(query) !== -1) {
    client.queryQueue.splice(client.queryQueue.indexOf(query), 1);
  }
};

Client.prototype.setTypeParser = function(oid, format, parseFn) {
  return this._types.setTypeParser(oid, format, parseFn);
};

Client.prototype.getTypeParser = function(oid, format) {
  return this._types.getTypeParser(oid, format);
};

// Ported from PostgreSQL 9.2.4 source code in src/interfaces/libpq/fe-exec.c
Client.prototype.escapeIdentifier = function(str) {
  return '"' + str.replace(/"/g, '""') + '"';
};

// Ported from PostgreSQL 9.2.4 source code in src/interfaces/libpq/fe-exec.c
Client.prototype.escapeLiteral = function(str) {
  var hasBackslash = false;
  var escaped = "'";

  for (var i = 0; i < str.length; i++) {
    var c = str[i];
    if (c === "'") {
      escaped += c + c;
    } else if (c === "\\") {
      escaped += c + c;
      hasBackslash = true;
    } else {
      escaped += c;
    }
  }

  escaped += "'";

  if (hasBackslash === true) {
    escaped = " E" + escaped;
  }

  return escaped;
};

Client.prototype._pulseQueryQueue = function() {
  if (this.readyForQuery === true) {
    this.activeQuery = this.queryQueue.shift();
    if (this.activeQuery) {
      this.readyForQuery = false;
      this.hasExecuted = true;

      const queryError = this.activeQuery.submit(this.connection);
      if (queryError) {
        process.nextTick(() => {
          this.activeQuery.handleError(queryError, this.connection);
          this.readyForQuery = true;
          this._pulseQueryQueue();
        });
      }
    } else if (this.hasExecuted) {
      this.activeQuery = null;
      this.emit("drain");
    }
  }
};

Client.prototype.query = function(config, values, callback) {
  // can take in strings, config object or query object
  var query;
  var result;
  var readTimeout;
  var readTimeoutTimer;
  var queryCallback;

  if (config === null || config === undefined) {
    throw new TypeError("Client was passed a null or undefined query");
  } else if (typeof config.submit === "function") {
    readTimeout =
      config.query_timeout || this.connectionParameters.query_timeout;
    result = query = config;
    if (typeof values === "function") {
      query.callback = query.callback || values;
    }
  } else {
    readTimeout = this.connectionParameters.query_timeout;
    query = new Query(config, values, callback);
    if (!query.callback) {
      result = new this._Promise((resolve, reject) => {
        query.callback = (err, res) => (err ? reject(err) : resolve(res));
      });
    }
  }

  if (readTimeout) {
    queryCallback = query.callback;

    readTimeoutTimer = setTimeout(() => {
      var error = new Error("Query read timeout");

      process.nextTick(() => {
        query.handleError(error, this.connection);
      });

      queryCallback(error);

      // we already returned an error,
      // just do nothing if query completes
      query.callback = () => {};

      // Remove from queue
      var index = this.queryQueue.indexOf(query);
      if (index > -1) {
        this.queryQueue.splice(index, 1);
      }

      this._pulseQueryQueue();
    }, readTimeout);

    query.callback = (err, res) => {
      clearTimeout(readTimeoutTimer);
      queryCallback(err, res);
    };
  }

  if (this.binary && !query.binary) {
    query.binary = true;
  }

  if (query._result && !query._result._types) {
    query._result._types = this._types;
  }

  if (!this._queryable) {
    process.nextTick(() => {
      query.handleError(
        new Error(
          "Client has encountered a connection error and is not queryable"
        ),
        this.connection
      );
    });
    return result;
  }

  if (this._ending) {
    process.nextTick(() => {
      query.handleError(
        new Error("Client was closed and is not queryable"),
        this.connection
      );
    });
    return result;
  }

  this.queryQueue.push(query);
  this._pulseQueryQueue();
  return result;
};

Client.prototype.end = function(cb) {
  this._ending = true;

  if (this.activeQuery) {
    // if we have an active query we need to force a disconnect
    // on the socket - otherwise a hung query could block end forever
    this.connection.stream.destroy();
  } else {
    this.connection.end();
  }

  if (cb) {
    this.connection.once("end", cb);
  } else {
    return new this._Promise(resolve => {
      this.connection.once("end", resolve);
    });
  }
};

// expose a Query constructor
Client.Query = Query;

module.exports = Client;

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/global.js */ "./node_modules/webpack/buildin/global.js"), __webpack_require__(/*! ./../node_modules/process/browser.js */ "./node_modules/process/browser.js")))

/***/ }),

/***/ "./lib/connection-parameters.js":
/*!**************************************!*\
  !*** ./lib/connection-parameters.js ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(process) {
/**
 * Copyright (c) 2010-2017 Brian Carlson (brian.m.carlson@gmail.com)
 * All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * README.md file in the root directory of this source tree.
 */

var dns = __webpack_require__(/*! chrome-dns */ "./node_modules/chrome-dns/index.js");

var defaults = __webpack_require__(/*! ./defaults */ "./lib/defaults.js");

var parse = __webpack_require__(/*! pg-connection-string */ "./node_modules/pg-connection-string/index.js").parse; // parses a connection string

var val = function(key, config, envVar) {
  if (envVar === undefined) {
    envVar = process.env["PG" + key.toUpperCase()];
  } else if (envVar === false) {
    // do nothing ... use false
  } else {
    envVar = process.env[envVar];
  }

  return config[key] || envVar || defaults[key];
};

var useSsl = function() {
  switch (process.env.PGSSLMODE) {
    case "disable":
      return false;
    case "prefer":
    case "require":
    case "verify-ca":
    case "verify-full":
      return true;
  }
  return defaults.ssl;
};

var ConnectionParameters = function(config) {
  // if a string is passed, it is a raw connection string so we parse it into a config
  config = typeof config === "string" ? parse(config) : config || {};

  // if the config has a connectionString defined, parse IT into the config we use
  // this will override other default values with what is stored in connectionString
  if (config.connectionString) {
    config = Object.assign({}, config, parse(config.connectionString));
  }

  this.user = val("user", config);
  this.database = val("database", config);
  this.port = parseInt(val("port", config), 10);
  this.host = val("host", config);
  this.password = val("password", config);
  this.binary = val("binary", config);
  this.ssl = typeof config.ssl === "undefined" ? useSsl() : config.ssl;
  this.client_encoding = val("client_encoding", config);
  this.replication = val("replication", config);
  // a domain socket begins with '/'
  this.isDomainSocket = !(this.host || "").indexOf("/");

  this.application_name = val("application_name", config, "PGAPPNAME");
  this.fallback_application_name = val(
    "fallback_application_name",
    config,
    false
  );
  this.statement_timeout = val("statement_timeout", config, false);
  this.query_timeout = val("query_timeout", config, false);

  if (config.connectionTimeoutMillis === undefined) {
    this.connect_timeout = process.env.PGCONNECT_TIMEOUT || 0;
  } else {
    this.connect_timeout = Math.floor(config.connectionTimeoutMillis / 1000);
  }

  if (config.keepAlive === false) {
    this.keepalives = 0;
  } else if (config.keepAlive === true) {
    this.keepalives = 1;
  }

  if (typeof config.keepAliveInitialDelayMillis === "number") {
    this.keepalives_idle = Math.floor(
      config.keepAliveInitialDelayMillis / 1000
    );
  }
};

// Convert arg to a string, surround in single quotes, and escape single quotes and backslashes
var quoteParamValue = function(value) {
  return "'" + ("" + value).replace(/\\/g, "\\\\").replace(/'/g, "\\'") + "'";
};

var add = function(params, config, paramName) {
  var value = config[paramName];
  if (value !== undefined && value !== null) {
    params.push(paramName + "=" + quoteParamValue(value));
  }
};

ConnectionParameters.prototype.getLibpqConnectionString = function(cb) {
  var params = [];
  add(params, this, "user");
  add(params, this, "password");
  add(params, this, "port");
  add(params, this, "application_name");
  add(params, this, "fallback_application_name");
  add(params, this, "connect_timeout");

  var ssl =
    typeof this.ssl === "object"
      ? this.ssl
      : this.ssl
      ? { sslmode: this.ssl }
      : {};
  add(params, ssl, "sslmode");
  add(params, ssl, "sslca");
  add(params, ssl, "sslkey");
  add(params, ssl, "sslcert");
  add(params, ssl, "sslrootcert");

  if (this.database) {
    params.push("dbname=" + quoteParamValue(this.database));
  }
  if (this.replication) {
    params.push("replication=" + quoteParamValue(this.replication));
  }
  if (this.host) {
    params.push("host=" + quoteParamValue(this.host));
  }
  if (this.isDomainSocket) {
    return cb(null, params.join(" "));
  }
  if (this.client_encoding) {
    params.push("client_encoding=" + quoteParamValue(this.client_encoding));
  }
  dns.lookup(this.host, function(err, address) {
    if (err) return cb(err, null);
    params.push("hostaddr=" + quoteParamValue(address));
    return cb(null, params.join(" "));
  });
};

module.exports = ConnectionParameters;

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/process/browser.js */ "./node_modules/process/browser.js")))

/***/ }),

/***/ "./lib/connection.js":
/*!***************************!*\
  !*** ./lib/connection.js ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(Buffer) {
/**
 * Copyright (c) 2010-2017 Brian Carlson (brian.m.carlson@gmail.com)
 * All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * README.md file in the root directory of this source tree.
 */

var net = __webpack_require__(/*! chrome-net */ "./node_modules/chrome-net/index.js");
var EventEmitter = __webpack_require__(/*! events */ "./node_modules/events/events.js").EventEmitter;
var util = __webpack_require__(/*! util */ "./node_modules/util/util.js");

var Writer = __webpack_require__(/*! buffer-writer */ "./node_modules/buffer-writer/index.js");
var Reader = __webpack_require__(/*! packet-reader */ "./node_modules/packet-reader/index.js");

var TEXT_MODE = 0;
var BINARY_MODE = 1;
var Connection = function(config) {
  EventEmitter.call(this);
  config = config || {};
  this.stream = config.stream || new net.Socket();
  this._keepAlive = config.keepAlive;
  this._keepAliveInitialDelayMillis = config.keepAliveInitialDelayMillis;
  this.lastBuffer = false;
  this.lastOffset = 0;
  this.buffer = null;
  this.offset = null;
  this.encoding = config.encoding || "utf8";
  this.parsedStatements = {};
  this.writer = new Writer();
  this.ssl = config.ssl || false;
  this._ending = false;
  this._mode = TEXT_MODE;
  this._emitMessage = false;
  this._reader = new Reader({
    headerSize: 1,
    lengthPadding: -4
  });
  var self = this;
  this.on("newListener", function(eventName) {
    if (eventName === "message") {
      self._emitMessage = true;
    }
  });
};

util.inherits(Connection, EventEmitter);

Connection.prototype.connect = function(port, host) {
  var self = this;

  if (this.stream.readyState === "closed") {
    this.stream.connect(port, host);
  } else if (this.stream.readyState === "open") {
    this.emit("connect");
  }

  this.stream.on("connect", function() {
    if (self._keepAlive) {
      self.stream.setKeepAlive(true, self._keepAliveInitialDelayMillis);
    }
    self.emit("connect");
  });

  const reportStreamError = function(error) {
    // don't raise ECONNRESET errors - they can & should be ignored
    // during disconnect
    if (self._ending && error.code === "ECONNRESET") {
      return;
    }
    self.emit("error", error);
  };
  this.stream.on("error", reportStreamError);

  this.stream.on("close", function() {
    self.emit("end");
  });

  if (!this.ssl) {
    return this.attachListeners(this.stream);
  }

  this.stream.once("data", function(buffer) {
    var responseCode = buffer.toString("utf8");
    switch (responseCode) {
      case "N": // Server does not support SSL connections
        return self.emit(
          "error",
          new Error("The server does not support SSL connections")
        );
      case "S": // Server supports SSL connections, continue with a secure connection
        break;
      default:
        // Any other response byte, including 'E' (ErrorResponse) indicating a server error
        return self.emit(
          "error",
          new Error("There was an error establishing an SSL connection")
        );
    }
    var tls = __webpack_require__(/*! node-forge */ "./node_modules/node-forge/lib/index.js");
    self.stream = tls.connect({
      socket: self.stream,
      servername: host,
      checkServerIdentity:
        self.ssl.checkServerIdentity || tls.checkServerIdentity,
      rejectUnauthorized: self.ssl.rejectUnauthorized,
      ca: self.ssl.ca,
      pfx: self.ssl.pfx,
      key: self.ssl.key,
      passphrase: self.ssl.passphrase,
      cert: self.ssl.cert,
      secureOptions: self.ssl.secureOptions,
      NPNProtocols: self.ssl.NPNProtocols
    });
    self.attachListeners(self.stream);
    self.stream.on("error", reportStreamError);

    self.emit("sslconnect");
  });
};

Connection.prototype.attachListeners = function(stream) {
  var self = this;
  stream.on("data", function(buff) {
    self._reader.addChunk(buff);
    var packet = self._reader.read();
    while (packet) {
      var msg = self.parseMessage(packet);
      var eventName = msg.name === "error" ? "errorMessage" : msg.name;
      if (self._emitMessage) {
        self.emit("message", msg);
      }
      self.emit(eventName, msg);
      packet = self._reader.read();
    }
  });
  stream.on("end", function() {
    self.emit("end");
  });
};

Connection.prototype.requestSsl = function() {
  var bodyBuffer = this.writer
    .addInt16(0x04d2)
    .addInt16(0x162f)
    .flush();

  var length = bodyBuffer.length + 4;

  var buffer = new Writer()
    .addInt32(length)
    .add(bodyBuffer)
    .join();
  this.stream.write(buffer);
};

Connection.prototype.startup = function(config) {
  var writer = this.writer.addInt16(3).addInt16(0);

  Object.keys(config).forEach(function(key) {
    var val = config[key];
    writer.addCString(key).addCString(val);
  });

  writer.addCString("client_encoding").addCString("'utf-8'");

  var bodyBuffer = writer.addCString("").flush();
  // this message is sent without a code

  var length = bodyBuffer.length + 4;

  var buffer = new Writer()
    .addInt32(length)
    .add(bodyBuffer)
    .join();
  this.stream.write(buffer);
};

Connection.prototype.cancel = function(processID, secretKey) {
  var bodyBuffer = this.writer
    .addInt16(1234)
    .addInt16(5678)
    .addInt32(processID)
    .addInt32(secretKey)
    .flush();

  var length = bodyBuffer.length + 4;

  var buffer = new Writer()
    .addInt32(length)
    .add(bodyBuffer)
    .join();
  this.stream.write(buffer);
};

Connection.prototype.password = function(password) {
  // 0x70 = 'p'
  this._send(0x70, this.writer.addCString(password));
};

Connection.prototype.sendSASLInitialResponseMessage = function(
  mechanism,
  initialResponse
) {
  // 0x70 = 'p'
  this.writer
    .addCString(mechanism)
    .addInt32(Buffer.byteLength(initialResponse))
    .addString(initialResponse);

  this._send(0x70);
};

Connection.prototype.sendSCRAMClientFinalMessage = function(additionalData) {
  // 0x70 = 'p'
  this.writer.addString(additionalData);

  this._send(0x70);
};

Connection.prototype._send = function(code, more) {
  if (!this.stream.writable) {
    return false;
  }
  if (more === true) {
    this.writer.addHeader(code);
  } else {
    return this.stream.write(this.writer.flush(code));
  }
};

Connection.prototype.query = function(text) {
  // 0x51 = Q
  this.stream.write(this.writer.addCString(text).flush(0x51));
};

// send parse message
// "more" === true to buffer the message until flush() is called
Connection.prototype.parse = function(query, more) {
  // expect something like this:
  // { name: 'queryName',
  //   text: 'select * from blah',
  //   types: ['int8', 'bool'] }

  // normalize missing query names to allow for null
  query.name = query.name || "";
  if (query.name.length > 63) {
    /* eslint-disable no-console */
    console.error(
      "Warning! Postgres only supports 63 characters for query names."
    );
    console.error("You supplied %s (%s)", query.name, query.name.length);
    console.error(
      "This can cause conflicts and silent errors executing queries"
    );
    /* eslint-enable no-console */
  }
  // normalize null type array
  query.types = query.types || [];
  var len = query.types.length;
  var buffer = this.writer
    .addCString(query.name) // name of query
    .addCString(query.text) // actual query text
    .addInt16(len);
  for (var i = 0; i < len; i++) {
    buffer.addInt32(query.types[i]);
  }

  var code = 0x50;
  this._send(code, more);
};

// send bind message
// "more" === true to buffer the message until flush() is called
Connection.prototype.bind = function(config, more) {
  // normalize config
  config = config || {};
  config.portal = config.portal || "";
  config.statement = config.statement || "";
  config.binary = config.binary || false;
  var values = config.values || [];
  var len = values.length;
  var useBinary = false;
  for (var j = 0; j < len; j++) {
    useBinary |= values[j] instanceof Buffer;
  }
  var buffer = this.writer
    .addCString(config.portal)
    .addCString(config.statement);
  if (!useBinary) {
    buffer.addInt16(0);
  } else {
    buffer.addInt16(len);
    for (j = 0; j < len; j++) {
      buffer.addInt16(values[j] instanceof Buffer);
    }
  }
  buffer.addInt16(len);
  for (var i = 0; i < len; i++) {
    var val = values[i];
    if (val === null || typeof val === "undefined") {
      buffer.addInt32(-1);
    } else if (val instanceof Buffer) {
      buffer.addInt32(val.length);
      buffer.add(val);
    } else {
      buffer.addInt32(Buffer.byteLength(val));
      buffer.addString(val);
    }
  }

  if (config.binary) {
    buffer.addInt16(1); // format codes to use binary
    buffer.addInt16(1);
  } else {
    buffer.addInt16(0); // format codes to use text
  }
  // 0x42 = 'B'
  this._send(0x42, more);
};

// send execute message
// "more" === true to buffer the message until flush() is called
Connection.prototype.execute = function(config, more) {
  config = config || {};
  config.portal = config.portal || "";
  config.rows = config.rows || "";
  this.writer.addCString(config.portal).addInt32(config.rows);

  // 0x45 = 'E'
  this._send(0x45, more);
};

var emptyBuffer = Buffer.alloc(0);

Connection.prototype.flush = function() {
  // 0x48 = 'H'
  this.writer.add(emptyBuffer);
  this._send(0x48);
};

Connection.prototype.sync = function() {
  // clear out any pending data in the writer
  this.writer.flush(0);

  this.writer.add(emptyBuffer);
  this._ending = true;
  this._send(0x53);
};

const END_BUFFER = Buffer.from([0x58, 0x00, 0x00, 0x00, 0x04]);

Connection.prototype.end = function() {
  // 0x58 = 'X'
  this.writer.add(emptyBuffer);
  this._ending = true;
  return this.stream.write(END_BUFFER, () => {
    this.stream.end();
  });
};

Connection.prototype.close = function(msg, more) {
  this.writer.addCString(msg.type + (msg.name || ""));
  this._send(0x43, more);
};

Connection.prototype.describe = function(msg, more) {
  this.writer.addCString(msg.type + (msg.name || ""));
  this._send(0x44, more);
};

Connection.prototype.sendCopyFromChunk = function(chunk) {
  this.stream.write(this.writer.add(chunk).flush(0x64));
};

Connection.prototype.endCopyFrom = function() {
  this.stream.write(this.writer.add(emptyBuffer).flush(0x63));
};

Connection.prototype.sendCopyFail = function(msg) {
  // this.stream.write(this.writer.add(emptyBuffer).flush(0x66));
  this.writer.addCString(msg);
  this._send(0x66);
};

var Message = function(name, length) {
  this.name = name;
  this.length = length;
};

Connection.prototype.parseMessage = function(buffer) {
  this.offset = 0;
  var length = buffer.length + 4;
  switch (this._reader.header) {
    case 0x52: // R
      return this.parseR(buffer, length);

    case 0x53: // S
      return this.parseS(buffer, length);

    case 0x4b: // K
      return this.parseK(buffer, length);

    case 0x43: // C
      return this.parseC(buffer, length);

    case 0x5a: // Z
      return this.parseZ(buffer, length);

    case 0x54: // T
      return this.parseT(buffer, length);

    case 0x44: // D
      return this.parseD(buffer, length);

    case 0x45: // E
      return this.parseE(buffer, length);

    case 0x4e: // N
      return this.parseN(buffer, length);

    case 0x31: // 1
      return new Message("parseComplete", length);

    case 0x32: // 2
      return new Message("bindComplete", length);

    case 0x33: // 3
      return new Message("closeComplete", length);

    case 0x41: // A
      return this.parseA(buffer, length);

    case 0x6e: // n
      return new Message("noData", length);

    case 0x49: // I
      return new Message("emptyQuery", length);

    case 0x73: // s
      return new Message("portalSuspended", length);

    case 0x47: // G
      return this.parseG(buffer, length);

    case 0x48: // H
      return this.parseH(buffer, length);

    case 0x57: // W
      return new Message("replicationStart", length);

    case 0x63: // c
      return new Message("copyDone", length);

    case 0x64: // d
      return this.parsed(buffer, length);
  }
};

Connection.prototype.parseR = function(buffer, length) {
  var code = this.parseInt32(buffer);

  var msg = new Message("authenticationOk", length);

  switch (code) {
    case 0: // AuthenticationOk
      return msg;
    case 3: // AuthenticationCleartextPassword
      if (msg.length === 8) {
        msg.name = "authenticationCleartextPassword";
        return msg;
      }
      break;
    case 5: // AuthenticationMD5Password
      if (msg.length === 12) {
        msg.name = "authenticationMD5Password";
        msg.salt = Buffer.alloc(4);
        buffer.copy(msg.salt, 0, this.offset, this.offset + 4);
        this.offset += 4;
        return msg;
      }

      break;
    case 10: // AuthenticationSASL
      msg.name = "authenticationSASL";
      msg.mechanisms = [];
      do {
        var mechanism = this.parseCString(buffer);

        if (mechanism) {
          msg.mechanisms.push(mechanism);
        }
      } while (mechanism);

      return msg;
    case 11: // AuthenticationSASLContinue
      msg.name = "authenticationSASLContinue";
      msg.data = this.readString(buffer, length - 4);

      return msg;
    case 12: // AuthenticationSASLFinal
      msg.name = "authenticationSASLFinal";
      msg.data = this.readString(buffer, length - 4);

      return msg;
  }

  throw new Error("Unknown authenticationOk message type" + util.inspect(msg));
};

Connection.prototype.parseS = function(buffer, length) {
  var msg = new Message("parameterStatus", length);
  msg.parameterName = this.parseCString(buffer);
  msg.parameterValue = this.parseCString(buffer);
  return msg;
};

Connection.prototype.parseK = function(buffer, length) {
  var msg = new Message("backendKeyData", length);
  msg.processID = this.parseInt32(buffer);
  msg.secretKey = this.parseInt32(buffer);
  return msg;
};

Connection.prototype.parseC = function(buffer, length) {
  var msg = new Message("commandComplete", length);
  msg.text = this.parseCString(buffer);
  return msg;
};

Connection.prototype.parseZ = function(buffer, length) {
  var msg = new Message("readyForQuery", length);
  msg.name = "readyForQuery";
  msg.status = this.readString(buffer, 1);
  return msg;
};

var ROW_DESCRIPTION = "rowDescription";
Connection.prototype.parseT = function(buffer, length) {
  var msg = new Message(ROW_DESCRIPTION, length);
  msg.fieldCount = this.parseInt16(buffer);
  var fields = [];
  for (var i = 0; i < msg.fieldCount; i++) {
    fields.push(this.parseField(buffer));
  }
  msg.fields = fields;
  return msg;
};

var Field = function() {
  this.name = null;
  this.tableID = null;
  this.columnID = null;
  this.dataTypeID = null;
  this.dataTypeSize = null;
  this.dataTypeModifier = null;
  this.format = null;
};

var FORMAT_TEXT = "text";
var FORMAT_BINARY = "binary";
Connection.prototype.parseField = function(buffer) {
  var field = new Field();
  field.name = this.parseCString(buffer);
  field.tableID = this.parseInt32(buffer);
  field.columnID = this.parseInt16(buffer);
  field.dataTypeID = this.parseInt32(buffer);
  field.dataTypeSize = this.parseInt16(buffer);
  field.dataTypeModifier = this.parseInt32(buffer);
  if (this.parseInt16(buffer) === TEXT_MODE) {
    this._mode = TEXT_MODE;
    field.format = FORMAT_TEXT;
  } else {
    this._mode = BINARY_MODE;
    field.format = FORMAT_BINARY;
  }
  return field;
};

var DATA_ROW = "dataRow";
var DataRowMessage = function(length, fieldCount) {
  this.name = DATA_ROW;
  this.length = length;
  this.fieldCount = fieldCount;
  this.fields = [];
};

// extremely hot-path code
Connection.prototype.parseD = function(buffer, length) {
  var fieldCount = this.parseInt16(buffer);
  var msg = new DataRowMessage(length, fieldCount);
  for (var i = 0; i < fieldCount; i++) {
    msg.fields.push(this._readValue(buffer));
  }
  return msg;
};

// extremely hot-path code
Connection.prototype._readValue = function(buffer) {
  var length = this.parseInt32(buffer);
  if (length === -1) return null;
  if (this._mode === TEXT_MODE) {
    return this.readString(buffer, length);
  }
  return this.readBytes(buffer, length);
};

// parses error
Connection.prototype.parseE = function(buffer, length) {
  var fields = {};
  var msg, item;
  var input = new Message("error", length);
  var fieldType = this.readString(buffer, 1);
  while (fieldType !== "\0") {
    fields[fieldType] = this.parseCString(buffer);
    fieldType = this.readString(buffer, 1);
  }
  if (input.name === "error") {
    // the msg is an Error instance
    msg = new Error(fields.M);
    for (item in input) {
      // copy input properties to the error
      if (Object.prototype.hasOwnProperty.call(input, item)) {
        msg[item] = input[item];
      }
    }
  } else {
    // the msg is an object literal
    msg = input;
    msg.message = fields.M;
  }
  msg.severity = fields.S;
  msg.code = fields.C;
  msg.detail = fields.D;
  msg.hint = fields.H;
  msg.position = fields.P;
  msg.internalPosition = fields.p;
  msg.internalQuery = fields.q;
  msg.where = fields.W;
  msg.schema = fields.s;
  msg.table = fields.t;
  msg.column = fields.c;
  msg.dataType = fields.d;
  msg.constraint = fields.n;
  msg.file = fields.F;
  msg.line = fields.L;
  msg.routine = fields.R;
  return msg;
};

// same thing, different name
Connection.prototype.parseN = function(buffer, length) {
  var msg = this.parseE(buffer, length);
  msg.name = "notice";
  return msg;
};

Connection.prototype.parseA = function(buffer, length) {
  var msg = new Message("notification", length);
  msg.processId = this.parseInt32(buffer);
  msg.channel = this.parseCString(buffer);
  msg.payload = this.parseCString(buffer);
  return msg;
};

Connection.prototype.parseG = function(buffer, length) {
  var msg = new Message("copyInResponse", length);
  return this.parseGH(buffer, msg);
};

Connection.prototype.parseH = function(buffer, length) {
  var msg = new Message("copyOutResponse", length);
  return this.parseGH(buffer, msg);
};

Connection.prototype.parseGH = function(buffer, msg) {
  var isBinary = buffer[this.offset] !== 0;
  this.offset++;
  msg.binary = isBinary;
  var columnCount = this.parseInt16(buffer);
  msg.columnTypes = [];
  for (var i = 0; i < columnCount; i++) {
    msg.columnTypes.push(this.parseInt16(buffer));
  }
  return msg;
};

Connection.prototype.parsed = function(buffer, length) {
  var msg = new Message("copyData", length);
  msg.chunk = this.readBytes(buffer, msg.length - 4);
  return msg;
};

Connection.prototype.parseInt32 = function(buffer) {
  var value = buffer.readInt32BE(this.offset);
  this.offset += 4;
  return value;
};

Connection.prototype.parseInt16 = function(buffer) {
  var value = buffer.readInt16BE(this.offset);
  this.offset += 2;
  return value;
};

Connection.prototype.readString = function(buffer, length) {
  return buffer.toString(this.encoding, this.offset, (this.offset += length));
};

Connection.prototype.readBytes = function(buffer, length) {
  return buffer.slice(this.offset, (this.offset += length));
};

Connection.prototype.parseCString = function(buffer) {
  var start = this.offset;
  var end = buffer.indexOf(0, start);
  this.offset = end + 1;
  return buffer.toString(this.encoding, start, end);
};
// end parsing methods
module.exports = Connection;

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/buffer/index.js */ "./node_modules/buffer/index.js").Buffer))

/***/ }),

/***/ "./lib/defaults.js":
/*!*************************!*\
  !*** ./lib/defaults.js ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(process) {
/**
 * Copyright (c) 2010-2017 Brian Carlson (brian.m.carlson@gmail.com)
 * All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * README.md file in the root directory of this source tree.
 */

module.exports = {
  // database host. defaults to localhost
  host: 'localhost',

  // database user's name
  user: process.platform === 'win32' ? process.env.USERNAME : process.env.USER,

  // name of database to connect
  database: process.platform === 'win32' ? process.env.USERNAME : process.env.USER,

  // database user's password
  password: null,

  // a Postgres connection string to be used instead of setting individual connection items
  // NOTE:  Setting this value will cause it to override any other value (such as database or user) defined
  // in the defaults object.
  connectionString: undefined,

  // database port
  port: 5432,

  // number of rows to return at a time from a prepared statement's
  // portal. 0 will return all rows at once
  rows: 0,

  // binary result mode
  binary: false,

  // Connection pool options - see https://github.com/brianc/node-pg-pool

  // number of connections to use in connection pool
  // 0 will disable connection pooling
  max: 10,

  // max milliseconds a client can go unused before it is removed
  // from the pool and destroyed
  idleTimeoutMillis: 30000,

  client_encoding: '',

  ssl: false,

  application_name: undefined,

  fallback_application_name: undefined,

  parseInputDatesAsUTC: false,

  // max milliseconds any query using this connection will execute for before timing out in error.
  // false=unlimited
  statement_timeout: false,

  // max milliseconds to wait for query to complete (client side)
  query_timeout: false,

  connect_timeout: 0,

  keepalives: 1,

  keepalives_idle: 0
}

var pgTypes = __webpack_require__(/*! pg-types */ "./node_modules/pg-types/index.js")
// save default parsers
var parseBigInteger = pgTypes.getTypeParser(20, 'text')
var parseBigIntegerArray = pgTypes.getTypeParser(1016, 'text')

// parse int8 so you can get your count values as actual numbers
module.exports.__defineSetter__('parseInt8', function (val) {
  pgTypes.setTypeParser(20, 'text', val ? pgTypes.getTypeParser(23, 'text') : parseBigInteger)
  pgTypes.setTypeParser(1016, 'text', val ? pgTypes.getTypeParser(1007, 'text') : parseBigIntegerArray)
})

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/process/browser.js */ "./node_modules/process/browser.js")))

/***/ }),

/***/ "./lib/index.js":
/*!**********************!*\
  !*** ./lib/index.js ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/**
 * Copyright (c) 2010-2017 Brian Carlson (brian.m.carlson@gmail.com)
 * All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * README.md file in the root directory of this source tree.
 */

var util = __webpack_require__(/*! util */ "./node_modules/util/util.js");
var Client = __webpack_require__(/*! ./client */ "./lib/client.js");
var defaults = __webpack_require__(/*! ./defaults */ "./lib/defaults.js");
var Connection = __webpack_require__(/*! ./connection */ "./lib/connection.js");
var Pool = __webpack_require__(/*! ./pool */ "./lib/pool.js");

const poolFactory = Client => {
  var BoundPool = function(options) {
    var config = Object.assign({ Client: Client }, options);
    return new Pool(config);
  };

  util.inherits(BoundPool, Pool);

  return BoundPool;
};

var PG = function(clientConstructor) {
  this.defaults = defaults;
  this.Client = clientConstructor;
  this.Query = this.Client.Query;
  this.Pool = poolFactory(this.Client);
  this._pools = [];
  this.Connection = Connection;
  this.types = __webpack_require__(/*! pg-types */ "./node_modules/pg-types/index.js");
};

module.exports = new PG(Client);


/***/ }),

/***/ "./lib/pool.js":
/*!*********************!*\
  !*** ./lib/pool.js ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(global, process, setImmediate) {
const EventEmitter = __webpack_require__(/*! events */ "./node_modules/events/events.js").EventEmitter;

const NOOP = function() {};

const removeWhere = (list, predicate) => {
  const i = list.findIndex(predicate);

  return i === -1 ? undefined : list.splice(i, 1)[0];
};

class IdleItem {
  constructor(client, idleListener, timeoutId) {
    this.client = client;
    this.idleListener = idleListener;
    this.timeoutId = timeoutId;
  }
}

class PendingItem {
  constructor(callback) {
    this.callback = callback;
  }
}

function promisify(Promise, callback) {
  if (callback) {
    return { callback: callback, result: undefined };
  }
  let rej;
  let res;
  const cb = function(err, client) {
    err ? rej(err) : res(client);
  };
  const result = new Promise(function(resolve, reject) {
    res = resolve;
    rej = reject;
  });
  return { callback: cb, result: result };
}

function makeIdleListener(pool, client) {
  return function idleListener(err) {
    err.client = client;

    client.removeListener("error", idleListener);
    client.on("error", () => {
      pool.log("additional client error after disconnection due to error", err);
    });
    pool._remove(client);
    // TODO - document that once the pool emits an error
    // the client has already been closed & purged and is unusable
    pool.emit("error", err, client);
  };
}

class Pool extends EventEmitter {
  constructor(options, Client) {
    super();
    this.options = Object.assign({}, options);
    this.options.max = this.options.max || this.options.poolSize || 10;
    this.log = this.options.log || function() {};
    this.Client = this.options.Client || Client || __webpack_require__(/*! ./client */ "./lib/client.js");
    this.Promise = this.options.Promise || global.Promise;

    if (typeof this.options.idleTimeoutMillis === "undefined") {
      this.options.idleTimeoutMillis = 10000;
    }

    this._clients = [];
    this._idle = [];
    this._pendingQueue = [];
    this._endCallback = undefined;
    this.ending = false;
    this.ended = false;
  }

  _isFull() {
    return this._clients.length >= this.options.max;
  }

  _pulseQueue() {
    this.log("pulse queue");
    if (this.ended) {
      this.log("pulse queue ended");
      return;
    }
    if (this.ending) {
      this.log("pulse queue on ending");
      if (this._idle.length) {
        this._idle.slice().map(item => {
          this._remove(item.client);
        });
      }
      if (!this._clients.length) {
        this.ended = true;
        this._endCallback();
      }
      return;
    }
    // if we don't have any waiting, do nothing
    if (!this._pendingQueue.length) {
      this.log("no queued requests");
      return;
    }
    // if we don't have any idle clients and we have no more room do nothing
    if (!this._idle.length && this._isFull()) {
      return;
    }
    const pendingItem = this._pendingQueue.shift();
    if (this._idle.length) {
      const idleItem = this._idle.pop();
      clearTimeout(idleItem.timeoutId);
      const client = idleItem.client;
      const idleListener = idleItem.idleListener;

      return this._acquireClient(client, pendingItem, idleListener, false);
    }
    if (!this._isFull()) {
      return this.newClient(pendingItem);
    }
    throw new Error("unexpected condition");
  }

  _remove(client) {
    const removed = removeWhere(this._idle, item => item.client === client);

    if (removed !== undefined) {
      clearTimeout(removed.timeoutId);
    }

    this._clients = this._clients.filter(c => c !== client);
    client.end();
    this.emit("remove", client);
  }

  connect(cb) {
    if (this.ending) {
      const err = new Error("Cannot use a pool after calling end on the pool");
      return cb ? cb(err) : this.Promise.reject(err);
    }

    const response = promisify(this.Promise, cb);
    const result = response.result;

    // if we don't have to connect a new client, don't do so
    if (this._clients.length >= this.options.max || this._idle.length) {
      // if we have idle clients schedule a pulse immediately
      if (this._idle.length) {
        process.nextTick(() => this._pulseQueue());
      }

      if (!this.options.connectionTimeoutMillis) {
        this._pendingQueue.push(new PendingItem(response.callback));
        return result;
      }

      const queueCallback = (err, res, done) => {
        clearTimeout(tid);
        response.callback(err, res, done);
      };

      const pendingItem = new PendingItem(queueCallback);

      // set connection timeout on checking out an existing client
      const tid = setTimeout(() => {
        // remove the callback from pending waiters because
        // we're going to call it with a timeout error
        removeWhere(this._pendingQueue, i => i.callback === queueCallback);
        pendingItem.timedOut = true;
        response.callback(new Error("timeout exceeded when trying to connect"));
      }, this.options.connectionTimeoutMillis);

      this._pendingQueue.push(pendingItem);
      return result;
    }

    this.newClient(new PendingItem(response.callback));

    return result;
  }

  newClient(pendingItem) {
    const client = new this.Client(this.options);
    this._clients.push(client);
    const idleListener = makeIdleListener(this, client);

    this.log("checking client timeout");

    // connection timeout logic
    let tid;
    let timeoutHit = false;
    if (this.options.connectionTimeoutMillis) {
      tid = setTimeout(() => {
        this.log("ending client due to timeout");
        timeoutHit = true;
        // force kill the node driver, and let libpq do its teardown
        client.connection ? client.connection.stream.destroy() : client.end();
      }, this.options.connectionTimeoutMillis);
    }

    this.log("connecting new client");
    client.connect(err => {
      if (tid) {
        clearTimeout(tid);
      }
      client.on("error", idleListener);
      if (err) {
        this.log("client failed to connect", err);
        // remove the dead client from our list of clients
        this._clients = this._clients.filter(c => c !== client);
        if (timeoutHit) {
          err.message = "Connection terminated due to connection timeout";
        }

        // this client won’t be released, so move on immediately
        this._pulseQueue();

        if (!pendingItem.timedOut) {
          pendingItem.callback(err, undefined, NOOP);
        }
      } else {
        this.log("new client connected");

        return this._acquireClient(client, pendingItem, idleListener, true);
      }
    });
  }

  // acquire a client for a pending work item
  _acquireClient(client, pendingItem, idleListener, isNew) {
    if (isNew) {
      this.emit("connect", client);
    }

    this.emit("acquire", client);

    let released = false;

    client.release = err => {
      if (released) {
        throw new Error(
          "Release called on client which has already been released to the pool."
        );
      }

      released = true;
      this._release(client, idleListener, err);
    };

    client.removeListener("error", idleListener);

    if (!pendingItem.timedOut) {
      if (isNew && this.options.verify) {
        this.options.verify(client, err => {
          if (err) {
            client.release(err);
            return pendingItem.callback(err, undefined, NOOP);
          }

          pendingItem.callback(undefined, client, client.release);
        });
      } else {
        pendingItem.callback(undefined, client, client.release);
      }
    } else {
      if (isNew && this.options.verify) {
        this.options.verify(client, client.release);
      } else {
        client.release();
      }
    }
  }

  // release a client back to the poll, include an error
  // to remove it from the pool
  _release(client, idleListener, err) {
    client.on("error", idleListener);

    if (err || this.ending) {
      this._remove(client);
      this._pulseQueue();
      return;
    }

    // idle timeout
    let tid;
    if (this.options.idleTimeoutMillis) {
      tid = setTimeout(() => {
        this.log("remove idle client");
        this._remove(client);
      }, this.options.idleTimeoutMillis);
    }

    this._idle.push(new IdleItem(client, idleListener, tid));
    this._pulseQueue();
  }

  query(text, values, cb) {
    // guard clause against passing a function as the first parameter
    if (typeof text === "function") {
      const response = promisify(this.Promise, text);
      setImmediate(function() {
        return response.callback(
          new Error(
            "Passing a function as the first parameter to pool.query is not supported"
          )
        );
      });
      return response.result;
    }

    // allow plain text query without values
    if (typeof values === "function") {
      cb = values;
      values = undefined;
    }
    const response = promisify(this.Promise, cb);
    cb = response.callback;
    this.connect((err, client) => {
      if (err) {
        return cb(err);
      }
      this.log("dispatching query");
      client.query(text, values, (err, res) => {
        this.log("query dispatched");
        client.release(err);
        if (err) {
          return cb(err);
        } else {
          return cb(undefined, res);
        }
      });
    });
    return response.result;
  }

  end(cb) {
    this.log("ending");
    if (this.ending) {
      const err = new Error("Called end on pool more than once");
      return cb ? cb(err) : this.Promise.reject(err);
    }
    this.ending = true;
    const promised = promisify(this.Promise, cb);
    this._endCallback = promised.callback;
    this._pulseQueue();
    return promised.result;
  }

  get waitingCount() {
    return this._pendingQueue.length;
  }

  get idleCount() {
    return this._idle.length;
  }

  get totalCount() {
    return this._clients.length;
  }
}
module.exports = Pool;

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/global.js */ "./node_modules/webpack/buildin/global.js"), __webpack_require__(/*! ./../node_modules/process/browser.js */ "./node_modules/process/browser.js"), __webpack_require__(/*! ./../node_modules/timers-browserify/main.js */ "./node_modules/timers-browserify/main.js").setImmediate))

/***/ }),

/***/ "./lib/query.js":
/*!**********************!*\
  !*** ./lib/query.js ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(process) {
/**
 * Copyright (c) 2010-2017 Brian Carlson (brian.m.carlson@gmail.com)
 * All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * README.md file in the root directory of this source tree.
 */

var EventEmitter = __webpack_require__(/*! events */ "./node_modules/events/events.js").EventEmitter
var util = __webpack_require__(/*! util */ "./node_modules/util/util.js")

var Result = __webpack_require__(/*! ./result */ "./lib/result.js")
var utils = __webpack_require__(/*! ./utils */ "./lib/utils.js")

var Query = function (config, values, callback) {
  // use of "new" optional
  if (!(this instanceof Query)) { return new Query(config, values, callback) }

  config = utils.normalizeQueryConfig(config, values, callback)

  this.text = config.text
  this.values = config.values
  this.rows = config.rows
  this.types = config.types
  this.name = config.name
  this.binary = config.binary
  // use unique portal name each time
  this.portal = config.portal || ''
  this.callback = config.callback
  this._rowMode = config.rowMode
  if (process.domain && config.callback) {
    this.callback = process.domain.bind(config.callback)
  }
  this._result = new Result(this._rowMode, this.types)

  // potential for multiple results
  this._results = this._result
  this.isPreparedStatement = false
  this._canceledDueToError = false
  this._promise = null
  EventEmitter.call(this)
}

util.inherits(Query, EventEmitter)

Query.prototype.requiresPreparation = function () {
  // named queries must always be prepared
  if (this.name) { return true }
  // always prepare if there are max number of rows expected per
  // portal execution
  if (this.rows) { return true }
  // don't prepare empty text queries
  if (!this.text) { return false }
  // prepare if there are values
  if (!this.values) { return false }
  return this.values.length > 0
}

Query.prototype._checkForMultirow = function () {
  // if we already have a result with a command property
  // then we've already executed one query in a multi-statement simple query
  // turn our results into an array of results
  if (this._result.command) {
    if (!Array.isArray(this._results)) {
      this._results = [this._result]
    }
    this._result = new Result(this._rowMode, this.types)
    this._results.push(this._result)
  }
}

// associates row metadata from the supplied
// message with this query object
// metadata used when parsing row results
Query.prototype.handleRowDescription = function (msg) {
  this._checkForMultirow()
  this._result.addFields(msg.fields)
  this._accumulateRows = this.callback || !this.listeners('row').length
}

Query.prototype.handleDataRow = function (msg) {
  var row

  if (this._canceledDueToError) {
    return
  }

  try {
    row = this._result.parseRow(msg.fields)
  } catch (err) {
    this._canceledDueToError = err
    return
  }

  this.emit('row', row, this._result)
  if (this._accumulateRows) {
    this._result.addRow(row)
  }
}

Query.prototype.handleCommandComplete = function (msg, con) {
  this._checkForMultirow()
  this._result.addCommandComplete(msg)
  // need to sync after each command complete of a prepared statement
  if (this.isPreparedStatement) {
    con.sync()
  }
}

// if a named prepared statement is created with empty query text
// the backend will send an emptyQuery message but *not* a command complete message
// execution on the connection will hang until the backend receives a sync message
Query.prototype.handleEmptyQuery = function (con) {
  if (this.isPreparedStatement) {
    con.sync()
  }
}

Query.prototype.handleReadyForQuery = function (con) {
  if (this._canceledDueToError) {
    return this.handleError(this._canceledDueToError, con)
  }
  if (this.callback) {
    this.callback(null, this._results)
  }
  this.emit('end', this._results)
}

Query.prototype.handleError = function (err, connection) {
  // need to sync after error during a prepared statement
  if (this.isPreparedStatement) {
    connection.sync()
  }
  if (this._canceledDueToError) {
    err = this._canceledDueToError
    this._canceledDueToError = false
  }
  // if callback supplied do not emit error event as uncaught error
  // events will bubble up to node process
  if (this.callback) {
    return this.callback(err)
  }
  this.emit('error', err)
}

Query.prototype.submit = function (connection) {
  if (typeof this.text !== 'string' && typeof this.name !== 'string') {
    return new Error('A query must have either text or a name. Supplying neither is unsupported.')
  }
  const previous = connection.parsedStatements[this.name]
  if (this.text && previous && this.text !== previous) {
    return new Error(`Prepared statements must be unique - '${this.name}' was used for a different statement`)
  }
  if (this.values && !Array.isArray(this.values)) {
    return new Error('Query values must be an array')
  }
  if (this.requiresPreparation()) {
    this.prepare(connection)
  } else {
    connection.query(this.text)
  }
  return null
}

Query.prototype.hasBeenParsed = function (connection) {
  return this.name && connection.parsedStatements[this.name]
}

Query.prototype.handlePortalSuspended = function (connection) {
  this._getRows(connection, this.rows)
}

Query.prototype._getRows = function (connection, rows) {
  connection.execute({
    portal: this.portal,
    rows: rows
  }, true)
  connection.flush()
}

Query.prototype.prepare = function (connection) {
  var self = this
  // prepared statements need sync to be called after each command
  // complete or when an error is encountered
  this.isPreparedStatement = true
  // TODO refactor this poor encapsulation
  if (!this.hasBeenParsed(connection)) {
    connection.parse({
      text: self.text,
      name: self.name,
      types: self.types
    }, true)
  }

  if (self.values) {
    try {
      self.values = self.values.map(utils.prepareValue)
    } catch (err) {
      this.handleError(err, connection)
      return
    }
  }

  // http://developer.postgresql.org/pgdocs/postgres/protocol-flow.html#PROTOCOL-FLOW-EXT-QUERY
  connection.bind({
    portal: self.portal,
    statement: self.name,
    values: self.values,
    binary: self.binary
  }, true)

  connection.describe({
    type: 'P',
    name: self.portal || ''
  }, true)

  this._getRows(connection, this.rows)
}

Query.prototype.handleCopyInResponse = function (connection) {
  connection.sendCopyFail('No source stream defined')
}

// eslint-disable-next-line no-unused-vars
Query.prototype.handleCopyData = function (msg, connection) {
  // noop
}
module.exports = Query

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/process/browser.js */ "./node_modules/process/browser.js")))

/***/ }),

/***/ "./lib/result.js":
/*!***********************!*\
  !*** ./lib/result.js ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/**
 * Copyright (c) 2010-2017 Brian Carlson (brian.m.carlson@gmail.com)
 * All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * README.md file in the root directory of this source tree.
 */

var types = __webpack_require__(/*! pg-types */ "./node_modules/pg-types/index.js")

// result object returned from query
// in the 'end' event and also
// passed as second argument to provided callback
var Result = function (rowMode, types) {
  this.command = null
  this.rowCount = null
  this.oid = null
  this.rows = []
  this.fields = []
  this._parsers = []
  this._types = types
  this.RowCtor = null
  this.rowAsArray = rowMode === 'array'
  if (this.rowAsArray) {
    this.parseRow = this._parseRowAsArray
  }
}

var matchRegexp = /^([A-Za-z]+)(?: (\d+))?(?: (\d+))?/

// adds a command complete message
Result.prototype.addCommandComplete = function (msg) {
  var match
  if (msg.text) {
    // pure javascript
    match = matchRegexp.exec(msg.text)
  } else {
    // native bindings
    match = matchRegexp.exec(msg.command)
  }
  if (match) {
    this.command = match[1]
    if (match[3]) {
      // COMMMAND OID ROWS
      this.oid = parseInt(match[2], 10)
      this.rowCount = parseInt(match[3], 10)
    } else if (match[2]) {
      // COMMAND ROWS
      this.rowCount = parseInt(match[2], 10)
    }
  }
}

Result.prototype._parseRowAsArray = function (rowData) {
  var row = []
  for (var i = 0, len = rowData.length; i < len; i++) {
    var rawValue = rowData[i]
    if (rawValue !== null) {
      row.push(this._parsers[i](rawValue))
    } else {
      row.push(null)
    }
  }
  return row
}

Result.prototype.parseRow = function (rowData) {
  var row = {}
  for (var i = 0, len = rowData.length; i < len; i++) {
    var rawValue = rowData[i]
    var field = this.fields[i].name
    if (rawValue !== null) {
      row[field] = this._parsers[i](rawValue)
    } else {
      row[field] = null
    }
  }
  return row
}

Result.prototype.addRow = function (row) {
  this.rows.push(row)
}

Result.prototype.addFields = function (fieldDescriptions) {
  // clears field definitions
  // multiple query statements in 1 action can result in multiple sets
  // of rowDescriptions...eg: 'select NOW(); select 1::int;'
  // you need to reset the fields
  if (this.fields.length) {
    this.fields = []
    this._parsers = []
  }
  for (var i = 0; i < fieldDescriptions.length; i++) {
    var desc = fieldDescriptions[i]
    this.fields.push(desc)
    var parser = (this._types || types).getTypeParser(desc.dataTypeID, desc.format || 'text')
    this._parsers.push(parser)
  }
}

module.exports = Result


/***/ }),

/***/ "./lib/sasl.js":
/*!*********************!*\
  !*** ./lib/sasl.js ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(Buffer) {
const crypto = __webpack_require__(/*! crypto */ "./node_modules/crypto-browserify/index.js")

function startSession (mechanisms) {
  if (mechanisms.indexOf('SCRAM-SHA-256') === -1) {
    throw new Error('SASL: Only mechanism SCRAM-SHA-256 is currently supported')
  }

  const clientNonce = crypto.randomBytes(18).toString('base64')

  return {
    mechanism: 'SCRAM-SHA-256',
    clientNonce,
    response: 'n,,n=*,r=' + clientNonce,
    message: 'SASLInitialResponse'
  }
}

function continueSession (session, password, serverData) {
  if (session.message !== 'SASLInitialResponse') {
    throw new Error('SASL: Last message was not SASLInitialResponse')
  }

  const sv = extractVariablesFromFirstServerMessage(serverData)

  if (!sv.nonce.startsWith(session.clientNonce)) {
    throw new Error('SASL: SCRAM-SERVER-FIRST-MESSAGE: server nonce does not start with client nonce')
  }

  var saltBytes = Buffer.from(sv.salt, 'base64')

  var saltedPassword = Hi(password, saltBytes, sv.iteration)

  var clientKey = createHMAC(saltedPassword, 'Client Key')
  var storedKey = crypto.createHash('sha256').update(clientKey).digest()

  var clientFirstMessageBare = 'n=*,r=' + session.clientNonce
  var serverFirstMessage = 'r=' + sv.nonce + ',s=' + sv.salt + ',i=' + sv.iteration

  var clientFinalMessageWithoutProof = 'c=biws,r=' + sv.nonce

  var authMessage = clientFirstMessageBare + ',' + serverFirstMessage + ',' + clientFinalMessageWithoutProof

  var clientSignature = createHMAC(storedKey, authMessage)
  var clientProofBytes = xorBuffers(clientKey, clientSignature)
  var clientProof = clientProofBytes.toString('base64')

  var serverKey = createHMAC(saltedPassword, 'Server Key')
  var serverSignatureBytes = createHMAC(serverKey, authMessage)

  session.message = 'SASLResponse'
  session.serverSignature = serverSignatureBytes.toString('base64')
  session.response = clientFinalMessageWithoutProof + ',p=' + clientProof
}

function finalizeSession (session, serverData) {
  if (session.message !== 'SASLResponse') {
    throw new Error('SASL: Last message was not SASLResponse')
  }

  var serverSignature

  String(serverData).split(',').forEach(function (part) {
    switch (part[0]) {
      case 'v':
        serverSignature = part.substr(2)
        break
    }
  })

  if (serverSignature !== session.serverSignature) {
    throw new Error('SASL: SCRAM-SERVER-FINAL-MESSAGE: server signature does not match')
  }
}

function extractVariablesFromFirstServerMessage (data) {
  var nonce, salt, iteration

  String(data).split(',').forEach(function (part) {
    switch (part[0]) {
      case 'r':
        nonce = part.substr(2)
        break
      case 's':
        salt = part.substr(2)
        break
      case 'i':
        iteration = parseInt(part.substr(2), 10)
        break
    }
  })

  if (!nonce) {
    throw new Error('SASL: SCRAM-SERVER-FIRST-MESSAGE: nonce missing')
  }

  if (!salt) {
    throw new Error('SASL: SCRAM-SERVER-FIRST-MESSAGE: salt missing')
  }

  if (!iteration) {
    throw new Error('SASL: SCRAM-SERVER-FIRST-MESSAGE: iteration missing')
  }

  return {
    nonce,
    salt,
    iteration
  }
}

function xorBuffers (a, b) {
  if (!Buffer.isBuffer(a)) a = Buffer.from(a)
  if (!Buffer.isBuffer(b)) b = Buffer.from(b)
  var res = []
  if (a.length > b.length) {
    for (var i = 0; i < b.length; i++) {
      res.push(a[i] ^ b[i])
    }
  } else {
    for (var j = 0; j < a.length; j++) {
      res.push(a[j] ^ b[j])
    }
  }
  return Buffer.from(res)
}

function createHMAC (key, msg) {
  return crypto.createHmac('sha256', key).update(msg).digest()
}

function Hi (password, saltBytes, iterations) {
  var ui1 = createHMAC(password, Buffer.concat([saltBytes, Buffer.from([0, 0, 0, 1])]))
  var ui = ui1
  for (var i = 0; i < iterations - 1; i++) {
    ui1 = createHMAC(password, ui1)
    ui = xorBuffers(ui, ui1)
  }

  return ui
}

module.exports = {
  startSession,
  continueSession,
  finalizeSession
}

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/buffer/index.js */ "./node_modules/buffer/index.js").Buffer))

/***/ }),

/***/ "./lib/type-overrides.js":
/*!*******************************!*\
  !*** ./lib/type-overrides.js ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/**
 * Copyright (c) 2010-2017 Brian Carlson (brian.m.carlson@gmail.com)
 * All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * README.md file in the root directory of this source tree.
 */

var types = __webpack_require__(/*! pg-types */ "./node_modules/pg-types/index.js")

function TypeOverrides (userTypes) {
  this._types = userTypes || types
  this.text = {}
  this.binary = {}
}

TypeOverrides.prototype.getOverrides = function (format) {
  switch (format) {
    case 'text': return this.text
    case 'binary': return this.binary
    default: return {}
  }
}

TypeOverrides.prototype.setTypeParser = function (oid, format, parseFn) {
  if (typeof format === 'function') {
    parseFn = format
    format = 'text'
  }
  this.getOverrides(format)[oid] = parseFn
}

TypeOverrides.prototype.getTypeParser = function (oid, format) {
  format = format || 'text'
  return this.getOverrides(format)[oid] || this._types.getTypeParser(oid, format)
}

module.exports = TypeOverrides


/***/ }),

/***/ "./lib/utils.js":
/*!**********************!*\
  !*** ./lib/utils.js ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(Buffer) {
/**
 * Copyright (c) 2010-2017 Brian Carlson (brian.m.carlson@gmail.com)
 * All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * README.md file in the root directory of this source tree.
 */

const crypto = __webpack_require__(/*! crypto */ "./node_modules/crypto-browserify/index.js")

const defaults = __webpack_require__(/*! ./defaults */ "./lib/defaults.js")

function escapeElement (elementRepresentation) {
  var escaped = elementRepresentation
    .replace(/\\/g, '\\\\')
    .replace(/"/g, '\\"')

  return '"' + escaped + '"'
}

// convert a JS array to a postgres array literal
// uses comma separator so won't work for types like box that use
// a different array separator.
function arrayString (val) {
  var result = '{'
  for (var i = 0; i < val.length; i++) {
    if (i > 0) {
      result = result + ','
    }
    if (val[i] === null || typeof val[i] === 'undefined') {
      result = result + 'NULL'
    } else if (Array.isArray(val[i])) {
      result = result + arrayString(val[i])
    } else if (val[i] instanceof Buffer) {
      result += '\\\\x' + val[i].toString('hex')
    } else {
      result += escapeElement(prepareValue(val[i]))
    }
  }
  result = result + '}'
  return result
}

// converts values from javascript types
// to their 'raw' counterparts for use as a postgres parameter
// note: you can override this function to provide your own conversion mechanism
// for complex types, etc...
var prepareValue = function (val, seen) {
  if (val instanceof Buffer) {
    return val
  }
  if (ArrayBuffer.isView(val)) {
    var buf = Buffer.from(val.buffer, val.byteOffset, val.byteLength)
    if (buf.length === val.byteLength) {
      return buf
    }
    return buf.slice(val.byteOffset, val.byteOffset + val.byteLength) // Node.js v4 does not support those Buffer.from params
  }
  if (val instanceof Date) {
    if (defaults.parseInputDatesAsUTC) {
      return dateToStringUTC(val)
    } else {
      return dateToString(val)
    }
  }
  if (Array.isArray(val)) {
    return arrayString(val)
  }
  if (val === null || typeof val === 'undefined') {
    return null
  }
  if (typeof val === 'object') {
    return prepareObject(val, seen)
  }
  return val.toString()
}

function prepareObject (val, seen) {
  if (val && typeof val.toPostgres === 'function') {
    seen = seen || []
    if (seen.indexOf(val) !== -1) {
      throw new Error('circular reference detected while preparing "' + val + '" for query')
    }
    seen.push(val)

    return prepareValue(val.toPostgres(prepareValue), seen)
  }
  return JSON.stringify(val)
}

function pad (number, digits) {
  number = '' + number
  while (number.length < digits) { number = '0' + number }
  return number
}

function dateToString (date) {
  var offset = -date.getTimezoneOffset()

  var year = date.getFullYear()
  var isBCYear = year < 1
  if (isBCYear) year = Math.abs(year) + 1 // negative years are 1 off their BC representation

  var ret = pad(year, 4) + '-' +
    pad(date.getMonth() + 1, 2) + '-' +
    pad(date.getDate(), 2) + 'T' +
    pad(date.getHours(), 2) + ':' +
    pad(date.getMinutes(), 2) + ':' +
    pad(date.getSeconds(), 2) + '.' +
    pad(date.getMilliseconds(), 3)

  if (offset < 0) {
    ret += '-'
    offset *= -1
  } else { ret += '+' }

  ret += pad(Math.floor(offset / 60), 2) + ':' + pad(offset % 60, 2)
  if (isBCYear) ret += ' BC'
  return ret
}

function dateToStringUTC (date) {
  var year = date.getUTCFullYear()
  var isBCYear = year < 1
  if (isBCYear) year = Math.abs(year) + 1 // negative years are 1 off their BC representation

  var ret = pad(year, 4) + '-' +
    pad(date.getUTCMonth() + 1, 2) + '-' +
    pad(date.getUTCDate(), 2) + 'T' +
    pad(date.getUTCHours(), 2) + ':' +
    pad(date.getUTCMinutes(), 2) + ':' +
    pad(date.getUTCSeconds(), 2) + '.' +
    pad(date.getUTCMilliseconds(), 3)

  ret += '+00:00'
  if (isBCYear) ret += ' BC'
  return ret
}

function normalizeQueryConfig (config, values, callback) {
  // can take in strings or config objects
  config = (typeof (config) === 'string') ? { text: config } : config
  if (values) {
    if (typeof values === 'function') {
      config.callback = values
    } else {
      config.values = values
    }
  }
  if (callback) {
    config.callback = callback
  }
  return config
}

const md5 = function (string) {
  return crypto.createHash('md5').update(string, 'utf-8').digest('hex')
}

// See AuthenticationMD5Password at https://www.postgresql.org/docs/current/static/protocol-flow.html
const postgresMd5PasswordHash = function (user, password, salt) {
  var inner = md5(password + user)
  var outer = md5(Buffer.concat([Buffer.from(inner), salt]))
  return 'md5' + outer
}

module.exports = {
  prepareValue: function prepareValueWrapper (value) {
    // this ensures that extra arguments do not get passed into prepareValue
    // by accident, eg: from calling values.map(utils.prepareValue)
    return prepareValue(value)
  },
  normalizeQueryConfig,
  postgresMd5PasswordHash,
  md5
}

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/buffer/index.js */ "./node_modules/buffer/index.js").Buffer))

/***/ }),

/***/ 0:
/*!**********************!*\
  !*** util (ignored) ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 1:
/*!**********************!*\
  !*** util (ignored) ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 2:
/*!************************!*\
  !*** buffer (ignored) ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 3:
/*!************************!*\
  !*** crypto (ignored) ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 4:
/*!************************!*\
  !*** crypto (ignored) ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

/* (ignored) */

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vbGliL2NsaWVudC5qcyIsIndlYnBhY2s6Ly8vLi9saWIvY29ubmVjdGlvbi1wYXJhbWV0ZXJzLmpzIiwid2VicGFjazovLy8uL2xpYi9jb25uZWN0aW9uLmpzIiwid2VicGFjazovLy8uL2xpYi9kZWZhdWx0cy5qcyIsIndlYnBhY2s6Ly8vLi9saWIvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vbGliL3Bvb2wuanMiLCJ3ZWJwYWNrOi8vLy4vbGliL3F1ZXJ5LmpzIiwid2VicGFjazovLy8uL2xpYi9yZXN1bHQuanMiLCJ3ZWJwYWNrOi8vLy4vbGliL3Nhc2wuanMiLCJ3ZWJwYWNrOi8vLy4vbGliL3R5cGUtb3ZlcnJpZGVzLmpzIiwid2VicGFjazovLy8uL2xpYi91dGlscy5qcyIsIndlYnBhY2s6Ly8vdXRpbCAoaWdub3JlZCkiLCJ3ZWJwYWNrOi8vL3V0aWwgKGlnbm9yZWQpPzU1OWMiLCJ3ZWJwYWNrOi8vL2J1ZmZlciAoaWdub3JlZCkiLCJ3ZWJwYWNrOi8vL2NyeXB0byAoaWdub3JlZCkiLCJ3ZWJwYWNrOi8vL2NyeXB0byAoaWdub3JlZCk/OTRlYiJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO1FBQUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSxRQUFRLG9CQUFvQjtRQUM1QjtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLGlCQUFpQiw0QkFBNEI7UUFDN0M7UUFDQTtRQUNBLGtCQUFrQiwyQkFBMkI7UUFDN0M7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTs7O1FBR0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDBDQUEwQyxnQ0FBZ0M7UUFDMUU7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSx3REFBd0Qsa0JBQWtCO1FBQzFFO1FBQ0EsaURBQWlELGNBQWM7UUFDL0Q7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLHlDQUF5QyxpQ0FBaUM7UUFDMUUsZ0hBQWdILG1CQUFtQixFQUFFO1FBQ3JJO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMkJBQTJCLDBCQUEwQixFQUFFO1FBQ3ZELGlDQUFpQyxlQUFlO1FBQ2hEO1FBQ0E7UUFDQTs7UUFFQTtRQUNBLHNEQUFzRCwrREFBK0Q7O1FBRXJIO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQSxnQkFBZ0IsdUJBQXVCO1FBQ3ZDOzs7UUFHQTtRQUNBO1FBQ0E7UUFDQTs7Ozs7Ozs7Ozs7OztBQ3ZKQSx1REFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLG1CQUFtQixtQkFBTyxDQUFDLCtDQUFRO0FBQ25DLFdBQVcsbUJBQU8sQ0FBQyx5Q0FBTTtBQUN6Qjs7QUFFQSxZQUFZLG1CQUFPLENBQUMsK0JBQVM7QUFDN0IsV0FBVyxtQkFBTyxDQUFDLDZCQUFRO0FBQzNCLG9CQUFvQixtQkFBTyxDQUFDLGlEQUFrQjs7QUFFOUMsMkJBQTJCLG1CQUFPLENBQUMsK0RBQXlCO0FBQzVELFlBQVksbUJBQU8sQ0FBQywrQkFBUztBQUM3QixlQUFlLG1CQUFPLENBQUMscUNBQVk7QUFDbkMsaUJBQWlCLG1CQUFPLENBQUMseUNBQWM7O0FBRXZDO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMOztBQUVBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0EsR0FBRzs7QUFFSDtBQUNBO0FBQ0EsR0FBRzs7QUFFSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQSxXQUFXO0FBQ1g7QUFDQTtBQUNBLFdBQVc7QUFDWCxPQUFPO0FBQ1A7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxHQUFHOztBQUVIO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLEdBQUc7O0FBRUg7QUFDQTtBQUNBO0FBQ0EsR0FBRzs7QUFFSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHOztBQUVIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHOztBQUVIO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLEtBQUs7QUFDTCxHQUFHOztBQUVIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0EsS0FBSztBQUNMLEdBQUc7QUFDSDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRzs7QUFFSDtBQUNBO0FBQ0E7QUFDQSxHQUFHOztBQUVIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRzs7QUFFSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7O0FBRUg7QUFDQTtBQUNBO0FBQ0EsR0FBRzs7QUFFSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRzs7QUFFSDtBQUNBO0FBQ0E7QUFDQSxHQUFHOztBQUVIO0FBQ0E7QUFDQSxHQUFHOztBQUVIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMLEdBQUc7QUFDSDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxpQkFBaUIsZ0JBQWdCO0FBQ2pDO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsT0FBTzs7QUFFUDs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLEtBQUs7O0FBRUw7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7Ozs7Ozs7Ozs7Ozs7QUMva0JBLCtDQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsVUFBVSxtQkFBTyxDQUFDLHNEQUFZOztBQUU5QixlQUFlLG1CQUFPLENBQUMscUNBQVk7O0FBRW5DLFlBQVksbUJBQU8sQ0FBQywwRUFBc0IsUUFBUTs7QUFFbEQ7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0EsR0FBRztBQUNIO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLDZCQUE2QjtBQUM3Qjs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBOztBQUVBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIOztBQUVBOzs7Ozs7Ozs7Ozs7OztBQ2pKQSw4Q0FBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLFVBQVUsbUJBQU8sQ0FBQyxzREFBWTtBQUM5QixtQkFBbUIsbUJBQU8sQ0FBQywrQ0FBUTtBQUNuQyxXQUFXLG1CQUFPLENBQUMseUNBQU07O0FBRXpCLGFBQWEsbUJBQU8sQ0FBQyw0REFBZTtBQUNwQyxhQUFhLG1CQUFPLENBQUMsNERBQWU7O0FBRXBDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7O0FBRUg7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxHQUFHOztBQUVIO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsY0FBYyxtQkFBTyxDQUFDLDBEQUFZO0FBQ2xDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7O0FBRUE7QUFDQSxHQUFHO0FBQ0g7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsR0FBRzs7QUFFSDs7QUFFQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQkFBaUIsU0FBUztBQUMxQjtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUJBQWlCLFNBQVM7QUFDMUI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQSxlQUFlLFNBQVM7QUFDeEI7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQkFBaUIsU0FBUztBQUMxQjtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLHVCQUF1QjtBQUN2QjtBQUNBLEdBQUc7QUFDSCx1QkFBdUI7QUFDdkI7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxPQUFPOztBQUVQO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQkFBaUIsb0JBQW9CO0FBQ3JDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQkFBaUIsZ0JBQWdCO0FBQ2pDO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUJBQWlCLGlCQUFpQjtBQUNsQztBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7O0FDanRCQSwrQ0FBWTtBQUNaO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQSxjQUFjLG1CQUFPLENBQUMsa0RBQVU7QUFDaEM7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQzs7Ozs7Ozs7Ozs7Ozs7QUNoRlk7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxXQUFXLG1CQUFPLENBQUMseUNBQU07QUFDekIsYUFBYSxtQkFBTyxDQUFDLGlDQUFVO0FBQy9CLGVBQWUsbUJBQU8sQ0FBQyxxQ0FBWTtBQUNuQyxpQkFBaUIsbUJBQU8sQ0FBQyx5Q0FBYztBQUN2QyxXQUFXLG1CQUFPLENBQUMsNkJBQVE7O0FBRTNCO0FBQ0E7QUFDQSxnQ0FBZ0MsaUJBQWlCO0FBQ2pEO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGVBQWUsbUJBQU8sQ0FBQyxrREFBVTtBQUNqQzs7QUFFQTs7Ozs7Ozs7Ozs7OztBQ3BDQSxxRUFBYTtBQUNiLHFCQUFxQixtQkFBTyxDQUFDLCtDQUFROztBQUVyQzs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsWUFBWTtBQUNaO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSCxVQUFVO0FBQ1Y7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsbUNBQW1DO0FBQ25DO0FBQ0E7QUFDQSxtREFBbUQsbUJBQU8sQ0FBQyxpQ0FBVTtBQUNyRTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87O0FBRVA7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQOztBQUVBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsU0FBUztBQUNULE9BQU87QUFDUDtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0EsT0FBTztBQUNQLEtBQUs7QUFDTDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7O0FDMVdBLCtDQUFZO0FBQ1o7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsbUJBQW1CLG1CQUFPLENBQUMsK0NBQVE7QUFDbkMsV0FBVyxtQkFBTyxDQUFDLHlDQUFNOztBQUV6QixhQUFhLG1CQUFPLENBQUMsaUNBQVU7QUFDL0IsWUFBWSxtQkFBTyxDQUFDLCtCQUFTOztBQUU3QjtBQUNBO0FBQ0EsaUNBQWlDOztBQUVqQzs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQSxrQkFBa0I7QUFDbEI7QUFDQTtBQUNBLGtCQUFrQjtBQUNsQjtBQUNBLG1CQUFtQjtBQUNuQjtBQUNBLHFCQUFxQjtBQUNyQjtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw4REFBOEQsVUFBVTtBQUN4RTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7O0FBRUg7QUFDQTtBQUNBO0FBQ0EsR0FBRzs7QUFFSDtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7OztBQ3BPWTtBQUNaO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLFlBQVksbUJBQU8sQ0FBQyxrREFBVTs7QUFFOUI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLHVDQUF1QyxTQUFTO0FBQ2hEO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSx1Q0FBdUMsU0FBUztBQUNoRDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSw0Q0FBNEMsZUFBZTtBQUMzRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUJBQWlCLDhCQUE4QjtBQUMvQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7Ozs7Ozs7Ozs7Ozs7QUN0R0EsOENBQVk7QUFDWixlQUFlLG1CQUFPLENBQUMseURBQVE7O0FBRS9CO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRzs7QUFFSDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7O0FBRUg7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxtQkFBbUIsY0FBYztBQUNqQztBQUNBO0FBQ0EsR0FBRztBQUNILG1CQUFtQixjQUFjO0FBQ2pDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQixvQkFBb0I7QUFDckM7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7QUNsSlk7QUFDWjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxZQUFZLG1CQUFPLENBQUMsa0RBQVU7O0FBRTlCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7Ozs7Ozs7Ozs7Ozs7QUN0Q0EsOENBQVk7QUFDWjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxlQUFlLG1CQUFPLENBQUMseURBQVE7O0FBRS9CLGlCQUFpQixtQkFBTyxDQUFDLHFDQUFZOztBQUVyQztBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUJBQWlCO0FBQ2pCLGlCQUFpQixnQkFBZ0I7QUFDakM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBLEtBQUs7QUFDTDtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQSxzQkFBc0I7QUFDdEI7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0Esa0NBQWtDO0FBQ2xDO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsR0FBRyxPQUFPOztBQUVWO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSw2Q0FBNkMsZUFBZTtBQUM1RDtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7QUNoTEEsZTs7Ozs7Ozs7Ozs7QUNBQSxlOzs7Ozs7Ozs7OztBQ0FBLGU7Ozs7Ozs7Ozs7O0FDQUEsZTs7Ozs7Ozs7Ozs7QUNBQSxlIiwiZmlsZSI6ImNsaWVudC5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIGluc3RhbGwgYSBKU09OUCBjYWxsYmFjayBmb3IgY2h1bmsgbG9hZGluZ1xuIFx0ZnVuY3Rpb24gd2VicGFja0pzb25wQ2FsbGJhY2soZGF0YSkge1xuIFx0XHR2YXIgY2h1bmtJZHMgPSBkYXRhWzBdO1xuIFx0XHR2YXIgbW9yZU1vZHVsZXMgPSBkYXRhWzFdO1xuIFx0XHR2YXIgZXhlY3V0ZU1vZHVsZXMgPSBkYXRhWzJdO1xuXG4gXHRcdC8vIGFkZCBcIm1vcmVNb2R1bGVzXCIgdG8gdGhlIG1vZHVsZXMgb2JqZWN0LFxuIFx0XHQvLyB0aGVuIGZsYWcgYWxsIFwiY2h1bmtJZHNcIiBhcyBsb2FkZWQgYW5kIGZpcmUgY2FsbGJhY2tcbiBcdFx0dmFyIG1vZHVsZUlkLCBjaHVua0lkLCBpID0gMCwgcmVzb2x2ZXMgPSBbXTtcbiBcdFx0Zm9yKDtpIDwgY2h1bmtJZHMubGVuZ3RoOyBpKyspIHtcbiBcdFx0XHRjaHVua0lkID0gY2h1bmtJZHNbaV07XG4gXHRcdFx0aWYoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKGluc3RhbGxlZENodW5rcywgY2h1bmtJZCkgJiYgaW5zdGFsbGVkQ2h1bmtzW2NodW5rSWRdKSB7XG4gXHRcdFx0XHRyZXNvbHZlcy5wdXNoKGluc3RhbGxlZENodW5rc1tjaHVua0lkXVswXSk7XG4gXHRcdFx0fVxuIFx0XHRcdGluc3RhbGxlZENodW5rc1tjaHVua0lkXSA9IDA7XG4gXHRcdH1cbiBcdFx0Zm9yKG1vZHVsZUlkIGluIG1vcmVNb2R1bGVzKSB7XG4gXHRcdFx0aWYoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG1vcmVNb2R1bGVzLCBtb2R1bGVJZCkpIHtcbiBcdFx0XHRcdG1vZHVsZXNbbW9kdWxlSWRdID0gbW9yZU1vZHVsZXNbbW9kdWxlSWRdO1xuIFx0XHRcdH1cbiBcdFx0fVxuIFx0XHRpZihwYXJlbnRKc29ucEZ1bmN0aW9uKSBwYXJlbnRKc29ucEZ1bmN0aW9uKGRhdGEpO1xuXG4gXHRcdHdoaWxlKHJlc29sdmVzLmxlbmd0aCkge1xuIFx0XHRcdHJlc29sdmVzLnNoaWZ0KCkoKTtcbiBcdFx0fVxuXG4gXHRcdC8vIGFkZCBlbnRyeSBtb2R1bGVzIGZyb20gbG9hZGVkIGNodW5rIHRvIGRlZmVycmVkIGxpc3RcbiBcdFx0ZGVmZXJyZWRNb2R1bGVzLnB1c2guYXBwbHkoZGVmZXJyZWRNb2R1bGVzLCBleGVjdXRlTW9kdWxlcyB8fCBbXSk7XG5cbiBcdFx0Ly8gcnVuIGRlZmVycmVkIG1vZHVsZXMgd2hlbiBhbGwgY2h1bmtzIHJlYWR5XG4gXHRcdHJldHVybiBjaGVja0RlZmVycmVkTW9kdWxlcygpO1xuIFx0fTtcbiBcdGZ1bmN0aW9uIGNoZWNrRGVmZXJyZWRNb2R1bGVzKCkge1xuIFx0XHR2YXIgcmVzdWx0O1xuIFx0XHRmb3IodmFyIGkgPSAwOyBpIDwgZGVmZXJyZWRNb2R1bGVzLmxlbmd0aDsgaSsrKSB7XG4gXHRcdFx0dmFyIGRlZmVycmVkTW9kdWxlID0gZGVmZXJyZWRNb2R1bGVzW2ldO1xuIFx0XHRcdHZhciBmdWxmaWxsZWQgPSB0cnVlO1xuIFx0XHRcdGZvcih2YXIgaiA9IDE7IGogPCBkZWZlcnJlZE1vZHVsZS5sZW5ndGg7IGorKykge1xuIFx0XHRcdFx0dmFyIGRlcElkID0gZGVmZXJyZWRNb2R1bGVbal07XG4gXHRcdFx0XHRpZihpbnN0YWxsZWRDaHVua3NbZGVwSWRdICE9PSAwKSBmdWxmaWxsZWQgPSBmYWxzZTtcbiBcdFx0XHR9XG4gXHRcdFx0aWYoZnVsZmlsbGVkKSB7XG4gXHRcdFx0XHRkZWZlcnJlZE1vZHVsZXMuc3BsaWNlKGktLSwgMSk7XG4gXHRcdFx0XHRyZXN1bHQgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IGRlZmVycmVkTW9kdWxlWzBdKTtcbiBcdFx0XHR9XG4gXHRcdH1cblxuIFx0XHRyZXR1cm4gcmVzdWx0O1xuIFx0fVxuXG4gXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBvYmplY3QgdG8gc3RvcmUgbG9hZGVkIGFuZCBsb2FkaW5nIGNodW5rc1xuIFx0Ly8gdW5kZWZpbmVkID0gY2h1bmsgbm90IGxvYWRlZCwgbnVsbCA9IGNodW5rIHByZWxvYWRlZC9wcmVmZXRjaGVkXG4gXHQvLyBQcm9taXNlID0gY2h1bmsgbG9hZGluZywgMCA9IGNodW5rIGxvYWRlZFxuIFx0dmFyIGluc3RhbGxlZENodW5rcyA9IHtcbiBcdFx0XCJjbGllbnRcIjogMFxuIFx0fTtcblxuIFx0dmFyIGRlZmVycmVkTW9kdWxlcyA9IFtdO1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIi9cIjtcblxuIFx0dmFyIGpzb25wQXJyYXkgPSAodHlwZW9mIHNlbGYgIT09ICd1bmRlZmluZWQnID8gc2VsZiA6IHRoaXMpW1wid2VicGFja0pzb25wXCJdID0gKHR5cGVvZiBzZWxmICE9PSAndW5kZWZpbmVkJyA/IHNlbGYgOiB0aGlzKVtcIndlYnBhY2tKc29ucFwiXSB8fCBbXTtcbiBcdHZhciBvbGRKc29ucEZ1bmN0aW9uID0ganNvbnBBcnJheS5wdXNoLmJpbmQoanNvbnBBcnJheSk7XG4gXHRqc29ucEFycmF5LnB1c2ggPSB3ZWJwYWNrSnNvbnBDYWxsYmFjaztcbiBcdGpzb25wQXJyYXkgPSBqc29ucEFycmF5LnNsaWNlKCk7XG4gXHRmb3IodmFyIGkgPSAwOyBpIDwganNvbnBBcnJheS5sZW5ndGg7IGkrKykgd2VicGFja0pzb25wQ2FsbGJhY2soanNvbnBBcnJheVtpXSk7XG4gXHR2YXIgcGFyZW50SnNvbnBGdW5jdGlvbiA9IG9sZEpzb25wRnVuY3Rpb247XG5cblxuIFx0Ly8gYWRkIGVudHJ5IG1vZHVsZSB0byBkZWZlcnJlZCBsaXN0XG4gXHRkZWZlcnJlZE1vZHVsZXMucHVzaChbXCIuL2xpYi9pbmRleC5qc1wiLFwidmVuZG9yXCJdKTtcbiBcdC8vIHJ1biBkZWZlcnJlZCBtb2R1bGVzIHdoZW4gcmVhZHlcbiBcdHJldHVybiBjaGVja0RlZmVycmVkTW9kdWxlcygpO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG4vKipcbiAqIENvcHlyaWdodCAoYykgMjAxMC0yMDE3IEJyaWFuIENhcmxzb24gKGJyaWFuLm0uY2FybHNvbkBnbWFpbC5jb20pXG4gKiBBbGwgcmlnaHRzIHJlc2VydmVkLlxuICpcbiAqIFRoaXMgc291cmNlIGNvZGUgaXMgbGljZW5zZWQgdW5kZXIgdGhlIE1JVCBsaWNlbnNlIGZvdW5kIGluIHRoZVxuICogUkVBRE1FLm1kIGZpbGUgaW4gdGhlIHJvb3QgZGlyZWN0b3J5IG9mIHRoaXMgc291cmNlIHRyZWUuXG4gKi9cblxudmFyIEV2ZW50RW1pdHRlciA9IHJlcXVpcmUoXCJldmVudHNcIikuRXZlbnRFbWl0dGVyO1xudmFyIHV0aWwgPSByZXF1aXJlKFwidXRpbFwiKTtcbi8vIHZhciBwZ1Bhc3MgPSByZXF1aXJlKFwicGdwYXNzXCIpO1xuXG52YXIgdXRpbHMgPSByZXF1aXJlKFwiLi91dGlsc1wiKTtcbnZhciBzYXNsID0gcmVxdWlyZShcIi4vc2FzbFwiKTtcbnZhciBUeXBlT3ZlcnJpZGVzID0gcmVxdWlyZShcIi4vdHlwZS1vdmVycmlkZXNcIik7XG5cbnZhciBDb25uZWN0aW9uUGFyYW1ldGVycyA9IHJlcXVpcmUoXCIuL2Nvbm5lY3Rpb24tcGFyYW1ldGVyc1wiKTtcbnZhciBRdWVyeSA9IHJlcXVpcmUoXCIuL3F1ZXJ5XCIpO1xudmFyIGRlZmF1bHRzID0gcmVxdWlyZShcIi4vZGVmYXVsdHNcIik7XG52YXIgQ29ubmVjdGlvbiA9IHJlcXVpcmUoXCIuL2Nvbm5lY3Rpb25cIik7XG5cbnZhciBDbGllbnQgPSBmdW5jdGlvbihjb25maWcpIHtcbiAgRXZlbnRFbWl0dGVyLmNhbGwodGhpcyk7XG5cbiAgdGhpcy5jb25uZWN0aW9uUGFyYW1ldGVycyA9IG5ldyBDb25uZWN0aW9uUGFyYW1ldGVycyhjb25maWcpO1xuICB0aGlzLnVzZXIgPSB0aGlzLmNvbm5lY3Rpb25QYXJhbWV0ZXJzLnVzZXI7XG4gIHRoaXMuZGF0YWJhc2UgPSB0aGlzLmNvbm5lY3Rpb25QYXJhbWV0ZXJzLmRhdGFiYXNlO1xuICB0aGlzLnBvcnQgPSB0aGlzLmNvbm5lY3Rpb25QYXJhbWV0ZXJzLnBvcnQ7XG4gIHRoaXMuaG9zdCA9IHRoaXMuY29ubmVjdGlvblBhcmFtZXRlcnMuaG9zdDtcbiAgdGhpcy5wYXNzd29yZCA9IHRoaXMuY29ubmVjdGlvblBhcmFtZXRlcnMucGFzc3dvcmQ7XG4gIHRoaXMucmVwbGljYXRpb24gPSB0aGlzLmNvbm5lY3Rpb25QYXJhbWV0ZXJzLnJlcGxpY2F0aW9uO1xuXG4gIHZhciBjID0gY29uZmlnIHx8IHt9O1xuXG4gIHRoaXMuX1Byb21pc2UgPSBjLlByb21pc2UgfHwgZ2xvYmFsLlByb21pc2U7XG4gIHRoaXMuX3R5cGVzID0gbmV3IFR5cGVPdmVycmlkZXMoYy50eXBlcyk7XG4gIHRoaXMuX2VuZGluZyA9IGZhbHNlO1xuICB0aGlzLl9jb25uZWN0aW5nID0gZmFsc2U7XG4gIHRoaXMuX2Nvbm5lY3RlZCA9IGZhbHNlO1xuICB0aGlzLl9jb25uZWN0aW9uRXJyb3IgPSBmYWxzZTtcbiAgdGhpcy5fcXVlcnlhYmxlID0gdHJ1ZTtcblxuICB0aGlzLmNvbm5lY3Rpb24gPVxuICAgIGMuY29ubmVjdGlvbiB8fFxuICAgIG5ldyBDb25uZWN0aW9uKHtcbiAgICAgIHN0cmVhbTogYy5zdHJlYW0sXG4gICAgICBzc2w6IHRoaXMuY29ubmVjdGlvblBhcmFtZXRlcnMuc3NsLFxuICAgICAga2VlcEFsaXZlOiBjLmtlZXBBbGl2ZSB8fCBmYWxzZSxcbiAgICAgIGtlZXBBbGl2ZUluaXRpYWxEZWxheU1pbGxpczogYy5rZWVwQWxpdmVJbml0aWFsRGVsYXlNaWxsaXMgfHwgMCxcbiAgICAgIGVuY29kaW5nOiB0aGlzLmNvbm5lY3Rpb25QYXJhbWV0ZXJzLmNsaWVudF9lbmNvZGluZyB8fCBcInV0ZjhcIlxuICAgIH0pO1xuICB0aGlzLnF1ZXJ5UXVldWUgPSBbXTtcbiAgdGhpcy5iaW5hcnkgPSBjLmJpbmFyeSB8fCBkZWZhdWx0cy5iaW5hcnk7XG4gIHRoaXMucHJvY2Vzc0lEID0gbnVsbDtcbiAgdGhpcy5zZWNyZXRLZXkgPSBudWxsO1xuICB0aGlzLnNzbCA9IHRoaXMuY29ubmVjdGlvblBhcmFtZXRlcnMuc3NsIHx8IGZhbHNlO1xuICB0aGlzLl9jb25uZWN0aW9uVGltZW91dE1pbGxpcyA9IGMuY29ubmVjdGlvblRpbWVvdXRNaWxsaXMgfHwgMDtcbn07XG5cbnV0aWwuaW5oZXJpdHMoQ2xpZW50LCBFdmVudEVtaXR0ZXIpO1xuXG5DbGllbnQucHJvdG90eXBlLl9lcnJvckFsbFF1ZXJpZXMgPSBmdW5jdGlvbihlcnIpIHtcbiAgY29uc3QgZW5xdWV1ZUVycm9yID0gcXVlcnkgPT4ge1xuICAgIHByb2Nlc3MubmV4dFRpY2soKCkgPT4ge1xuICAgICAgcXVlcnkuaGFuZGxlRXJyb3IoZXJyLCB0aGlzLmNvbm5lY3Rpb24pO1xuICAgIH0pO1xuICB9O1xuXG4gIGlmICh0aGlzLmFjdGl2ZVF1ZXJ5KSB7XG4gICAgZW5xdWV1ZUVycm9yKHRoaXMuYWN0aXZlUXVlcnkpO1xuICAgIHRoaXMuYWN0aXZlUXVlcnkgPSBudWxsO1xuICB9XG5cbiAgdGhpcy5xdWVyeVF1ZXVlLmZvckVhY2goZW5xdWV1ZUVycm9yKTtcbiAgdGhpcy5xdWVyeVF1ZXVlLmxlbmd0aCA9IDA7XG59O1xuXG5DbGllbnQucHJvdG90eXBlLl9jb25uZWN0ID0gZnVuY3Rpb24oY2FsbGJhY2spIHtcbiAgdmFyIHNlbGYgPSB0aGlzO1xuICB2YXIgY29uID0gdGhpcy5jb25uZWN0aW9uO1xuICBpZiAodGhpcy5fY29ubmVjdGluZyB8fCB0aGlzLl9jb25uZWN0ZWQpIHtcbiAgICBjb25zdCBlcnIgPSBuZXcgRXJyb3IoXG4gICAgICBcIkNsaWVudCBoYXMgYWxyZWFkeSBiZWVuIGNvbm5lY3RlZC4gWW91IGNhbm5vdCByZXVzZSBhIGNsaWVudC5cIlxuICAgICk7XG4gICAgcHJvY2Vzcy5uZXh0VGljaygoKSA9PiB7XG4gICAgICBjYWxsYmFjayhlcnIpO1xuICAgIH0pO1xuICAgIHJldHVybjtcbiAgfVxuICB0aGlzLl9jb25uZWN0aW5nID0gdHJ1ZTtcblxuICB2YXIgY29ubmVjdGlvblRpbWVvdXRIYW5kbGU7XG4gIGlmICh0aGlzLl9jb25uZWN0aW9uVGltZW91dE1pbGxpcyA+IDApIHtcbiAgICBjb25uZWN0aW9uVGltZW91dEhhbmRsZSA9IHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgY29uLl9lbmRpbmcgPSB0cnVlO1xuICAgICAgY29uLnN0cmVhbS5kZXN0cm95KG5ldyBFcnJvcihcInRpbWVvdXQgZXhwaXJlZFwiKSk7XG4gICAgfSwgdGhpcy5fY29ubmVjdGlvblRpbWVvdXRNaWxsaXMpO1xuICB9XG5cbiAgaWYgKHRoaXMuaG9zdCAmJiB0aGlzLmhvc3QuaW5kZXhPZihcIi9cIikgPT09IDApIHtcbiAgICBjb24uY29ubmVjdCh0aGlzLmhvc3QgKyBcIi8ucy5QR1NRTC5cIiArIHRoaXMucG9ydCk7XG4gIH0gZWxzZSB7XG4gICAgY29uLmNvbm5lY3QodGhpcy5wb3J0LCB0aGlzLmhvc3QpO1xuICB9XG5cbiAgLy8gb25jZSBjb25uZWN0aW9uIGlzIGVzdGFibGlzaGVkIHNlbmQgc3RhcnR1cCBtZXNzYWdlXG4gIGNvbi5vbihcImNvbm5lY3RcIiwgZnVuY3Rpb24oKSB7XG4gICAgaWYgKHNlbGYuc3NsKSB7XG4gICAgICBjb24ucmVxdWVzdFNzbCgpO1xuICAgIH0gZWxzZSB7XG4gICAgICBjb24uc3RhcnR1cChzZWxmLmdldFN0YXJ0dXBDb25mKCkpO1xuICAgIH1cbiAgfSk7XG5cbiAgY29uLm9uKFwic3NsY29ubmVjdFwiLCBmdW5jdGlvbigpIHtcbiAgICBjb24uc3RhcnR1cChzZWxmLmdldFN0YXJ0dXBDb25mKCkpO1xuICB9KTtcblxuICBmdW5jdGlvbiBjaGVja1BnUGFzcyhjYikge1xuICAgIHJldHVybiBmdW5jdGlvbihtc2cpIHtcbiAgICAgIGlmICh0eXBlb2Ygc2VsZi5wYXNzd29yZCA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgICAgIHNlbGYuX1Byb21pc2VcbiAgICAgICAgICAucmVzb2x2ZSgpXG4gICAgICAgICAgLnRoZW4oKCkgPT4gc2VsZi5wYXNzd29yZCgpKVxuICAgICAgICAgIC50aGVuKHBhc3MgPT4ge1xuICAgICAgICAgICAgaWYgKHBhc3MgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgICBpZiAodHlwZW9mIHBhc3MgIT09IFwic3RyaW5nXCIpIHtcbiAgICAgICAgICAgICAgICBjb24uZW1pdChcImVycm9yXCIsIG5ldyBUeXBlRXJyb3IoXCJQYXNzd29yZCBtdXN0IGJlIGEgc3RyaW5nXCIpKTtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgc2VsZi5jb25uZWN0aW9uUGFyYW1ldGVycy5wYXNzd29yZCA9IHNlbGYucGFzc3dvcmQgPSBwYXNzO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgc2VsZi5jb25uZWN0aW9uUGFyYW1ldGVycy5wYXNzd29yZCA9IHNlbGYucGFzc3dvcmQgPSBudWxsO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY2IobXNnKTtcbiAgICAgICAgICB9KVxuICAgICAgICAgIC5jYXRjaChlcnIgPT4ge1xuICAgICAgICAgICAgY29uLmVtaXQoXCJlcnJvclwiLCBlcnIpO1xuICAgICAgICAgIH0pO1xuICAgICAgfSBlbHNlIGlmIChzZWxmLnBhc3N3b3JkICE9PSBudWxsKSB7XG4gICAgICAgIGNiKG1zZyk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJwZ3Bhc3MgaXMgbm90IGltcGxlbWVudGVkXCIpO1xuICAgICAgICBwZ1Bhc3Moc2VsZi5jb25uZWN0aW9uUGFyYW1ldGVycywgZnVuY3Rpb24ocGFzcykge1xuICAgICAgICAgIGlmICh1bmRlZmluZWQgIT09IHBhc3MpIHtcbiAgICAgICAgICAgIHNlbGYuY29ubmVjdGlvblBhcmFtZXRlcnMucGFzc3dvcmQgPSBzZWxmLnBhc3N3b3JkID0gcGFzcztcbiAgICAgICAgICB9XG4gICAgICAgICAgY2IobXNnKTtcbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgfTtcbiAgfVxuXG4gIC8vIHBhc3N3b3JkIHJlcXVlc3QgaGFuZGxpbmdcbiAgY29uLm9uKFxuICAgIFwiYXV0aGVudGljYXRpb25DbGVhcnRleHRQYXNzd29yZFwiLFxuICAgIGNoZWNrUGdQYXNzKGZ1bmN0aW9uKCkge1xuICAgICAgY29uLnBhc3N3b3JkKHNlbGYucGFzc3dvcmQpO1xuICAgIH0pXG4gICk7XG5cbiAgLy8gcGFzc3dvcmQgcmVxdWVzdCBoYW5kbGluZ1xuICBjb24ub24oXG4gICAgXCJhdXRoZW50aWNhdGlvbk1ENVBhc3N3b3JkXCIsXG4gICAgY2hlY2tQZ1Bhc3MoZnVuY3Rpb24obXNnKSB7XG4gICAgICBjb24ucGFzc3dvcmQoXG4gICAgICAgIHV0aWxzLnBvc3RncmVzTWQ1UGFzc3dvcmRIYXNoKHNlbGYudXNlciwgc2VsZi5wYXNzd29yZCwgbXNnLnNhbHQpXG4gICAgICApO1xuICAgIH0pXG4gICk7XG5cbiAgLy8gcGFzc3dvcmQgcmVxdWVzdCBoYW5kbGluZyAoU0FTTClcbiAgdmFyIHNhc2xTZXNzaW9uO1xuICBjb24ub24oXG4gICAgXCJhdXRoZW50aWNhdGlvblNBU0xcIixcbiAgICBjaGVja1BnUGFzcyhmdW5jdGlvbihtc2cpIHtcbiAgICAgIHNhc2xTZXNzaW9uID0gc2FzbC5zdGFydFNlc3Npb24obXNnLm1lY2hhbmlzbXMpO1xuXG4gICAgICBjb24uc2VuZFNBU0xJbml0aWFsUmVzcG9uc2VNZXNzYWdlKFxuICAgICAgICBzYXNsU2Vzc2lvbi5tZWNoYW5pc20sXG4gICAgICAgIHNhc2xTZXNzaW9uLnJlc3BvbnNlXG4gICAgICApO1xuICAgIH0pXG4gICk7XG5cbiAgLy8gcGFzc3dvcmQgcmVxdWVzdCBoYW5kbGluZyAoU0FTTClcbiAgY29uLm9uKFwiYXV0aGVudGljYXRpb25TQVNMQ29udGludWVcIiwgZnVuY3Rpb24obXNnKSB7XG4gICAgc2FzbC5jb250aW51ZVNlc3Npb24oc2FzbFNlc3Npb24sIHNlbGYucGFzc3dvcmQsIG1zZy5kYXRhKTtcblxuICAgIGNvbi5zZW5kU0NSQU1DbGllbnRGaW5hbE1lc3NhZ2Uoc2FzbFNlc3Npb24ucmVzcG9uc2UpO1xuICB9KTtcblxuICAvLyBwYXNzd29yZCByZXF1ZXN0IGhhbmRsaW5nIChTQVNMKVxuICBjb24ub24oXCJhdXRoZW50aWNhdGlvblNBU0xGaW5hbFwiLCBmdW5jdGlvbihtc2cpIHtcbiAgICBzYXNsLmZpbmFsaXplU2Vzc2lvbihzYXNsU2Vzc2lvbiwgbXNnLmRhdGEpO1xuXG4gICAgc2FzbFNlc3Npb24gPSBudWxsO1xuICB9KTtcblxuICBjb24ub25jZShcImJhY2tlbmRLZXlEYXRhXCIsIGZ1bmN0aW9uKG1zZykge1xuICAgIHNlbGYucHJvY2Vzc0lEID0gbXNnLnByb2Nlc3NJRDtcbiAgICBzZWxmLnNlY3JldEtleSA9IG1zZy5zZWNyZXRLZXk7XG4gIH0pO1xuXG4gIGNvbnN0IGNvbm5lY3RpbmdFcnJvckhhbmRsZXIgPSBlcnIgPT4ge1xuICAgIGlmICh0aGlzLl9jb25uZWN0aW9uRXJyb3IpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgdGhpcy5fY29ubmVjdGlvbkVycm9yID0gdHJ1ZTtcbiAgICBjbGVhclRpbWVvdXQoY29ubmVjdGlvblRpbWVvdXRIYW5kbGUpO1xuICAgIGlmIChjYWxsYmFjaykge1xuICAgICAgcmV0dXJuIGNhbGxiYWNrKGVycik7XG4gICAgfVxuICAgIHRoaXMuZW1pdChcImVycm9yXCIsIGVycik7XG4gIH07XG5cbiAgY29uc3QgY29ubmVjdGVkRXJyb3JIYW5kbGVyID0gZXJyID0+IHtcbiAgICB0aGlzLl9xdWVyeWFibGUgPSBmYWxzZTtcbiAgICB0aGlzLl9lcnJvckFsbFF1ZXJpZXMoZXJyKTtcbiAgICB0aGlzLmVtaXQoXCJlcnJvclwiLCBlcnIpO1xuICB9O1xuXG4gIGNvbnN0IGNvbm5lY3RlZEVycm9yTWVzc2FnZUhhbmRsZXIgPSBtc2cgPT4ge1xuICAgIGNvbnN0IGFjdGl2ZVF1ZXJ5ID0gdGhpcy5hY3RpdmVRdWVyeTtcblxuICAgIGlmICghYWN0aXZlUXVlcnkpIHtcbiAgICAgIGNvbm5lY3RlZEVycm9ySGFuZGxlcihtc2cpO1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIHRoaXMuYWN0aXZlUXVlcnkgPSBudWxsO1xuICAgIGFjdGl2ZVF1ZXJ5LmhhbmRsZUVycm9yKG1zZywgY29uKTtcbiAgfTtcblxuICBjb24ub24oXCJlcnJvclwiLCBjb25uZWN0aW5nRXJyb3JIYW5kbGVyKTtcbiAgY29uLm9uKFwiZXJyb3JNZXNzYWdlXCIsIGNvbm5lY3RpbmdFcnJvckhhbmRsZXIpO1xuXG4gIC8vIGhvb2sgdXAgcXVlcnkgaGFuZGxpbmcgZXZlbnRzIHRvIGNvbm5lY3Rpb25cbiAgLy8gYWZ0ZXIgdGhlIGNvbm5lY3Rpb24gaW5pdGlhbGx5IGJlY29tZXMgcmVhZHkgZm9yIHF1ZXJpZXNcbiAgY29uLm9uY2UoXCJyZWFkeUZvclF1ZXJ5XCIsIGZ1bmN0aW9uKCkge1xuICAgIHNlbGYuX2Nvbm5lY3RpbmcgPSBmYWxzZTtcbiAgICBzZWxmLl9jb25uZWN0ZWQgPSB0cnVlO1xuICAgIHNlbGYuX2F0dGFjaExpc3RlbmVycyhjb24pO1xuICAgIGNvbi5yZW1vdmVMaXN0ZW5lcihcImVycm9yXCIsIGNvbm5lY3RpbmdFcnJvckhhbmRsZXIpO1xuICAgIGNvbi5yZW1vdmVMaXN0ZW5lcihcImVycm9yTWVzc2FnZVwiLCBjb25uZWN0aW5nRXJyb3JIYW5kbGVyKTtcbiAgICBjb24ub24oXCJlcnJvclwiLCBjb25uZWN0ZWRFcnJvckhhbmRsZXIpO1xuICAgIGNvbi5vbihcImVycm9yTWVzc2FnZVwiLCBjb25uZWN0ZWRFcnJvck1lc3NhZ2VIYW5kbGVyKTtcbiAgICBjbGVhclRpbWVvdXQoY29ubmVjdGlvblRpbWVvdXRIYW5kbGUpO1xuXG4gICAgLy8gcHJvY2VzcyBwb3NzaWJsZSBjYWxsYmFjayBhcmd1bWVudCB0byBDbGllbnQjY29ubmVjdFxuICAgIGlmIChjYWxsYmFjaykge1xuICAgICAgY2FsbGJhY2sobnVsbCwgc2VsZik7XG4gICAgICAvLyByZW1vdmUgY2FsbGJhY2sgZm9yIHByb3BlciBlcnJvciBoYW5kbGluZ1xuICAgICAgLy8gYWZ0ZXIgdGhlIGNvbm5lY3QgZXZlbnRcbiAgICAgIGNhbGxiYWNrID0gbnVsbDtcbiAgICB9XG4gICAgc2VsZi5lbWl0KFwiY29ubmVjdFwiKTtcbiAgfSk7XG5cbiAgY29uLm9uKFwicmVhZHlGb3JRdWVyeVwiLCBmdW5jdGlvbigpIHtcbiAgICB2YXIgYWN0aXZlUXVlcnkgPSBzZWxmLmFjdGl2ZVF1ZXJ5O1xuICAgIHNlbGYuYWN0aXZlUXVlcnkgPSBudWxsO1xuICAgIHNlbGYucmVhZHlGb3JRdWVyeSA9IHRydWU7XG4gICAgaWYgKGFjdGl2ZVF1ZXJ5KSB7XG4gICAgICBhY3RpdmVRdWVyeS5oYW5kbGVSZWFkeUZvclF1ZXJ5KGNvbik7XG4gICAgfVxuICAgIHNlbGYuX3B1bHNlUXVlcnlRdWV1ZSgpO1xuICB9KTtcblxuICBjb24ub25jZShcImVuZFwiLCAoKSA9PiB7XG4gICAgY29uc3QgZXJyb3IgPSB0aGlzLl9lbmRpbmdcbiAgICAgID8gbmV3IEVycm9yKFwiQ29ubmVjdGlvbiB0ZXJtaW5hdGVkXCIpXG4gICAgICA6IG5ldyBFcnJvcihcIkNvbm5lY3Rpb24gdGVybWluYXRlZCB1bmV4cGVjdGVkbHlcIik7XG5cbiAgICB0aGlzLl9lcnJvckFsbFF1ZXJpZXMoZXJyb3IpO1xuXG4gICAgaWYgKCF0aGlzLl9lbmRpbmcpIHtcbiAgICAgIC8vIGlmIHRoZSBjb25uZWN0aW9uIGlzIGVuZGVkIHdpdGhvdXQgdXMgY2FsbGluZyAuZW5kKClcbiAgICAgIC8vIG9uIHRoaXMgY2xpZW50IHRoZW4gd2UgaGF2ZSBhbiB1bmV4cGVjdGVkIGRpc2Nvbm5lY3Rpb25cbiAgICAgIC8vIHRyZWF0IHRoaXMgYXMgYW4gZXJyb3IgdW5sZXNzIHdlJ3ZlIGFscmVhZHkgZW1pdHRlZCBhbiBlcnJvclxuICAgICAgLy8gZHVyaW5nIGNvbm5lY3Rpb24uXG4gICAgICBpZiAodGhpcy5fY29ubmVjdGluZyAmJiAhdGhpcy5fY29ubmVjdGlvbkVycm9yKSB7XG4gICAgICAgIGlmIChjYWxsYmFjaykge1xuICAgICAgICAgIGNhbGxiYWNrKGVycm9yKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBjb25uZWN0ZWRFcnJvckhhbmRsZXIoZXJyb3IpO1xuICAgICAgICB9XG4gICAgICB9IGVsc2UgaWYgKCF0aGlzLl9jb25uZWN0aW9uRXJyb3IpIHtcbiAgICAgICAgY29ubmVjdGVkRXJyb3JIYW5kbGVyKGVycm9yKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBwcm9jZXNzLm5leHRUaWNrKCgpID0+IHtcbiAgICAgIHRoaXMuZW1pdChcImVuZFwiKTtcbiAgICB9KTtcbiAgfSk7XG5cbiAgY29uLm9uKFwibm90aWNlXCIsIGZ1bmN0aW9uKG1zZykge1xuICAgIHNlbGYuZW1pdChcIm5vdGljZVwiLCBtc2cpO1xuICB9KTtcbn07XG5cbkNsaWVudC5wcm90b3R5cGUuY29ubmVjdCA9IGZ1bmN0aW9uKGNhbGxiYWNrKSB7XG4gIGlmIChjYWxsYmFjaykge1xuICAgIHRoaXMuX2Nvbm5lY3QoY2FsbGJhY2spO1xuICAgIHJldHVybjtcbiAgfVxuXG4gIHJldHVybiBuZXcgdGhpcy5fUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgdGhpcy5fY29ubmVjdChlcnJvciA9PiB7XG4gICAgICBpZiAoZXJyb3IpIHtcbiAgICAgICAgcmVqZWN0KGVycm9yKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHJlc29sdmUoKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfSk7XG59O1xuXG5DbGllbnQucHJvdG90eXBlLl9hdHRhY2hMaXN0ZW5lcnMgPSBmdW5jdGlvbihjb24pIHtcbiAgY29uc3Qgc2VsZiA9IHRoaXM7XG4gIC8vIGRlbGVnYXRlIHJvd0Rlc2NyaXB0aW9uIHRvIGFjdGl2ZSBxdWVyeVxuICBjb24ub24oXCJyb3dEZXNjcmlwdGlvblwiLCBmdW5jdGlvbihtc2cpIHtcbiAgICBzZWxmLmFjdGl2ZVF1ZXJ5LmhhbmRsZVJvd0Rlc2NyaXB0aW9uKG1zZyk7XG4gIH0pO1xuXG4gIC8vIGRlbGVnYXRlIGRhdGFSb3cgdG8gYWN0aXZlIHF1ZXJ5XG4gIGNvbi5vbihcImRhdGFSb3dcIiwgZnVuY3Rpb24obXNnKSB7XG4gICAgc2VsZi5hY3RpdmVRdWVyeS5oYW5kbGVEYXRhUm93KG1zZyk7XG4gIH0pO1xuXG4gIC8vIGRlbGVnYXRlIHBvcnRhbFN1c3BlbmRlZCB0byBhY3RpdmUgcXVlcnlcbiAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXVudXNlZC12YXJzXG4gIGNvbi5vbihcInBvcnRhbFN1c3BlbmRlZFwiLCBmdW5jdGlvbihtc2cpIHtcbiAgICBzZWxmLmFjdGl2ZVF1ZXJ5LmhhbmRsZVBvcnRhbFN1c3BlbmRlZChjb24pO1xuICB9KTtcblxuICAvLyBkZWxlZ2F0ZSBlbXB0eVF1ZXJ5IHRvIGFjdGl2ZSBxdWVyeVxuICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tdW51c2VkLXZhcnNcbiAgY29uLm9uKFwiZW1wdHlRdWVyeVwiLCBmdW5jdGlvbihtc2cpIHtcbiAgICBzZWxmLmFjdGl2ZVF1ZXJ5LmhhbmRsZUVtcHR5UXVlcnkoY29uKTtcbiAgfSk7XG5cbiAgLy8gZGVsZWdhdGUgY29tbWFuZENvbXBsZXRlIHRvIGFjdGl2ZSBxdWVyeVxuICBjb24ub24oXCJjb21tYW5kQ29tcGxldGVcIiwgZnVuY3Rpb24obXNnKSB7XG4gICAgc2VsZi5hY3RpdmVRdWVyeS5oYW5kbGVDb21tYW5kQ29tcGxldGUobXNnLCBjb24pO1xuICB9KTtcblxuICAvLyBpZiBhIHByZXBhcmVkIHN0YXRlbWVudCBoYXMgYSBuYW1lIGFuZCBwcm9wZXJseSBwYXJzZXNcbiAgLy8gd2UgdHJhY2sgdGhhdCBpdHMgYWxyZWFkeSBiZWVuIGV4ZWN1dGVkIHNvIHdlIGRvbid0IHBhcnNlXG4gIC8vIGl0IGFnYWluIG9uIHRoZSBzYW1lIGNsaWVudFxuICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tdW51c2VkLXZhcnNcbiAgY29uLm9uKFwicGFyc2VDb21wbGV0ZVwiLCBmdW5jdGlvbihtc2cpIHtcbiAgICBpZiAoc2VsZi5hY3RpdmVRdWVyeS5uYW1lKSB7XG4gICAgICBjb24ucGFyc2VkU3RhdGVtZW50c1tzZWxmLmFjdGl2ZVF1ZXJ5Lm5hbWVdID0gc2VsZi5hY3RpdmVRdWVyeS50ZXh0O1xuICAgIH1cbiAgfSk7XG5cbiAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXVudXNlZC12YXJzXG4gIGNvbi5vbihcImNvcHlJblJlc3BvbnNlXCIsIGZ1bmN0aW9uKG1zZykge1xuICAgIHNlbGYuYWN0aXZlUXVlcnkuaGFuZGxlQ29weUluUmVzcG9uc2Uoc2VsZi5jb25uZWN0aW9uKTtcbiAgfSk7XG5cbiAgY29uLm9uKFwiY29weURhdGFcIiwgZnVuY3Rpb24obXNnKSB7XG4gICAgc2VsZi5hY3RpdmVRdWVyeS5oYW5kbGVDb3B5RGF0YShtc2csIHNlbGYuY29ubmVjdGlvbik7XG4gIH0pO1xuXG4gIGNvbi5vbihcIm5vdGlmaWNhdGlvblwiLCBmdW5jdGlvbihtc2cpIHtcbiAgICBzZWxmLmVtaXQoXCJub3RpZmljYXRpb25cIiwgbXNnKTtcbiAgfSk7XG59O1xuXG5DbGllbnQucHJvdG90eXBlLmdldFN0YXJ0dXBDb25mID0gZnVuY3Rpb24oKSB7XG4gIHZhciBwYXJhbXMgPSB0aGlzLmNvbm5lY3Rpb25QYXJhbWV0ZXJzO1xuXG4gIHZhciBkYXRhID0ge1xuICAgIHVzZXI6IHBhcmFtcy51c2VyLFxuICAgIGRhdGFiYXNlOiBwYXJhbXMuZGF0YWJhc2VcbiAgfTtcblxuICB2YXIgYXBwTmFtZSA9IHBhcmFtcy5hcHBsaWNhdGlvbl9uYW1lIHx8IHBhcmFtcy5mYWxsYmFja19hcHBsaWNhdGlvbl9uYW1lO1xuICBpZiAoYXBwTmFtZSkge1xuICAgIGRhdGEuYXBwbGljYXRpb25fbmFtZSA9IGFwcE5hbWU7XG4gIH1cbiAgaWYgKHBhcmFtcy5yZXBsaWNhdGlvbikge1xuICAgIGRhdGEucmVwbGljYXRpb24gPSBcIlwiICsgcGFyYW1zLnJlcGxpY2F0aW9uO1xuICB9XG4gIGlmIChwYXJhbXMuc3RhdGVtZW50X3RpbWVvdXQpIHtcbiAgICBkYXRhLnN0YXRlbWVudF90aW1lb3V0ID0gU3RyaW5nKHBhcnNlSW50KHBhcmFtcy5zdGF0ZW1lbnRfdGltZW91dCwgMTApKTtcbiAgfVxuXG4gIHJldHVybiBkYXRhO1xufTtcblxuQ2xpZW50LnByb3RvdHlwZS5jYW5jZWwgPSBmdW5jdGlvbihjbGllbnQsIHF1ZXJ5KSB7XG4gIGlmIChjbGllbnQuYWN0aXZlUXVlcnkgPT09IHF1ZXJ5KSB7XG4gICAgdmFyIGNvbiA9IHRoaXMuY29ubmVjdGlvbjtcblxuICAgIGlmICh0aGlzLmhvc3QgJiYgdGhpcy5ob3N0LmluZGV4T2YoXCIvXCIpID09PSAwKSB7XG4gICAgICBjb24uY29ubmVjdCh0aGlzLmhvc3QgKyBcIi8ucy5QR1NRTC5cIiArIHRoaXMucG9ydCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGNvbi5jb25uZWN0KHRoaXMucG9ydCwgdGhpcy5ob3N0KTtcbiAgICB9XG5cbiAgICAvLyBvbmNlIGNvbm5lY3Rpb24gaXMgZXN0YWJsaXNoZWQgc2VuZCBjYW5jZWwgbWVzc2FnZVxuICAgIGNvbi5vbihcImNvbm5lY3RcIiwgZnVuY3Rpb24oKSB7XG4gICAgICBjb24uY2FuY2VsKGNsaWVudC5wcm9jZXNzSUQsIGNsaWVudC5zZWNyZXRLZXkpO1xuICAgIH0pO1xuICB9IGVsc2UgaWYgKGNsaWVudC5xdWVyeVF1ZXVlLmluZGV4T2YocXVlcnkpICE9PSAtMSkge1xuICAgIGNsaWVudC5xdWVyeVF1ZXVlLnNwbGljZShjbGllbnQucXVlcnlRdWV1ZS5pbmRleE9mKHF1ZXJ5KSwgMSk7XG4gIH1cbn07XG5cbkNsaWVudC5wcm90b3R5cGUuc2V0VHlwZVBhcnNlciA9IGZ1bmN0aW9uKG9pZCwgZm9ybWF0LCBwYXJzZUZuKSB7XG4gIHJldHVybiB0aGlzLl90eXBlcy5zZXRUeXBlUGFyc2VyKG9pZCwgZm9ybWF0LCBwYXJzZUZuKTtcbn07XG5cbkNsaWVudC5wcm90b3R5cGUuZ2V0VHlwZVBhcnNlciA9IGZ1bmN0aW9uKG9pZCwgZm9ybWF0KSB7XG4gIHJldHVybiB0aGlzLl90eXBlcy5nZXRUeXBlUGFyc2VyKG9pZCwgZm9ybWF0KTtcbn07XG5cbi8vIFBvcnRlZCBmcm9tIFBvc3RncmVTUUwgOS4yLjQgc291cmNlIGNvZGUgaW4gc3JjL2ludGVyZmFjZXMvbGlicHEvZmUtZXhlYy5jXG5DbGllbnQucHJvdG90eXBlLmVzY2FwZUlkZW50aWZpZXIgPSBmdW5jdGlvbihzdHIpIHtcbiAgcmV0dXJuICdcIicgKyBzdHIucmVwbGFjZSgvXCIvZywgJ1wiXCInKSArICdcIic7XG59O1xuXG4vLyBQb3J0ZWQgZnJvbSBQb3N0Z3JlU1FMIDkuMi40IHNvdXJjZSBjb2RlIGluIHNyYy9pbnRlcmZhY2VzL2xpYnBxL2ZlLWV4ZWMuY1xuQ2xpZW50LnByb3RvdHlwZS5lc2NhcGVMaXRlcmFsID0gZnVuY3Rpb24oc3RyKSB7XG4gIHZhciBoYXNCYWNrc2xhc2ggPSBmYWxzZTtcbiAgdmFyIGVzY2FwZWQgPSBcIidcIjtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0ci5sZW5ndGg7IGkrKykge1xuICAgIHZhciBjID0gc3RyW2ldO1xuICAgIGlmIChjID09PSBcIidcIikge1xuICAgICAgZXNjYXBlZCArPSBjICsgYztcbiAgICB9IGVsc2UgaWYgKGMgPT09IFwiXFxcXFwiKSB7XG4gICAgICBlc2NhcGVkICs9IGMgKyBjO1xuICAgICAgaGFzQmFja3NsYXNoID0gdHJ1ZTtcbiAgICB9IGVsc2Uge1xuICAgICAgZXNjYXBlZCArPSBjO1xuICAgIH1cbiAgfVxuXG4gIGVzY2FwZWQgKz0gXCInXCI7XG5cbiAgaWYgKGhhc0JhY2tzbGFzaCA9PT0gdHJ1ZSkge1xuICAgIGVzY2FwZWQgPSBcIiBFXCIgKyBlc2NhcGVkO1xuICB9XG5cbiAgcmV0dXJuIGVzY2FwZWQ7XG59O1xuXG5DbGllbnQucHJvdG90eXBlLl9wdWxzZVF1ZXJ5UXVldWUgPSBmdW5jdGlvbigpIHtcbiAgaWYgKHRoaXMucmVhZHlGb3JRdWVyeSA9PT0gdHJ1ZSkge1xuICAgIHRoaXMuYWN0aXZlUXVlcnkgPSB0aGlzLnF1ZXJ5UXVldWUuc2hpZnQoKTtcbiAgICBpZiAodGhpcy5hY3RpdmVRdWVyeSkge1xuICAgICAgdGhpcy5yZWFkeUZvclF1ZXJ5ID0gZmFsc2U7XG4gICAgICB0aGlzLmhhc0V4ZWN1dGVkID0gdHJ1ZTtcblxuICAgICAgY29uc3QgcXVlcnlFcnJvciA9IHRoaXMuYWN0aXZlUXVlcnkuc3VibWl0KHRoaXMuY29ubmVjdGlvbik7XG4gICAgICBpZiAocXVlcnlFcnJvcikge1xuICAgICAgICBwcm9jZXNzLm5leHRUaWNrKCgpID0+IHtcbiAgICAgICAgICB0aGlzLmFjdGl2ZVF1ZXJ5LmhhbmRsZUVycm9yKHF1ZXJ5RXJyb3IsIHRoaXMuY29ubmVjdGlvbik7XG4gICAgICAgICAgdGhpcy5yZWFkeUZvclF1ZXJ5ID0gdHJ1ZTtcbiAgICAgICAgICB0aGlzLl9wdWxzZVF1ZXJ5UXVldWUoKTtcbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgfSBlbHNlIGlmICh0aGlzLmhhc0V4ZWN1dGVkKSB7XG4gICAgICB0aGlzLmFjdGl2ZVF1ZXJ5ID0gbnVsbDtcbiAgICAgIHRoaXMuZW1pdChcImRyYWluXCIpO1xuICAgIH1cbiAgfVxufTtcblxuQ2xpZW50LnByb3RvdHlwZS5xdWVyeSA9IGZ1bmN0aW9uKGNvbmZpZywgdmFsdWVzLCBjYWxsYmFjaykge1xuICAvLyBjYW4gdGFrZSBpbiBzdHJpbmdzLCBjb25maWcgb2JqZWN0IG9yIHF1ZXJ5IG9iamVjdFxuICB2YXIgcXVlcnk7XG4gIHZhciByZXN1bHQ7XG4gIHZhciByZWFkVGltZW91dDtcbiAgdmFyIHJlYWRUaW1lb3V0VGltZXI7XG4gIHZhciBxdWVyeUNhbGxiYWNrO1xuXG4gIGlmIChjb25maWcgPT09IG51bGwgfHwgY29uZmlnID09PSB1bmRlZmluZWQpIHtcbiAgICB0aHJvdyBuZXcgVHlwZUVycm9yKFwiQ2xpZW50IHdhcyBwYXNzZWQgYSBudWxsIG9yIHVuZGVmaW5lZCBxdWVyeVwiKTtcbiAgfSBlbHNlIGlmICh0eXBlb2YgY29uZmlnLnN1Ym1pdCA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgcmVhZFRpbWVvdXQgPVxuICAgICAgY29uZmlnLnF1ZXJ5X3RpbWVvdXQgfHwgdGhpcy5jb25uZWN0aW9uUGFyYW1ldGVycy5xdWVyeV90aW1lb3V0O1xuICAgIHJlc3VsdCA9IHF1ZXJ5ID0gY29uZmlnO1xuICAgIGlmICh0eXBlb2YgdmFsdWVzID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICAgIHF1ZXJ5LmNhbGxiYWNrID0gcXVlcnkuY2FsbGJhY2sgfHwgdmFsdWVzO1xuICAgIH1cbiAgfSBlbHNlIHtcbiAgICByZWFkVGltZW91dCA9IHRoaXMuY29ubmVjdGlvblBhcmFtZXRlcnMucXVlcnlfdGltZW91dDtcbiAgICBxdWVyeSA9IG5ldyBRdWVyeShjb25maWcsIHZhbHVlcywgY2FsbGJhY2spO1xuICAgIGlmICghcXVlcnkuY2FsbGJhY2spIHtcbiAgICAgIHJlc3VsdCA9IG5ldyB0aGlzLl9Qcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICAgICAgcXVlcnkuY2FsbGJhY2sgPSAoZXJyLCByZXMpID0+IChlcnIgPyByZWplY3QoZXJyKSA6IHJlc29sdmUocmVzKSk7XG4gICAgICB9KTtcbiAgICB9XG4gIH1cblxuICBpZiAocmVhZFRpbWVvdXQpIHtcbiAgICBxdWVyeUNhbGxiYWNrID0gcXVlcnkuY2FsbGJhY2s7XG5cbiAgICByZWFkVGltZW91dFRpbWVyID0gc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICB2YXIgZXJyb3IgPSBuZXcgRXJyb3IoXCJRdWVyeSByZWFkIHRpbWVvdXRcIik7XG5cbiAgICAgIHByb2Nlc3MubmV4dFRpY2soKCkgPT4ge1xuICAgICAgICBxdWVyeS5oYW5kbGVFcnJvcihlcnJvciwgdGhpcy5jb25uZWN0aW9uKTtcbiAgICAgIH0pO1xuXG4gICAgICBxdWVyeUNhbGxiYWNrKGVycm9yKTtcblxuICAgICAgLy8gd2UgYWxyZWFkeSByZXR1cm5lZCBhbiBlcnJvcixcbiAgICAgIC8vIGp1c3QgZG8gbm90aGluZyBpZiBxdWVyeSBjb21wbGV0ZXNcbiAgICAgIHF1ZXJ5LmNhbGxiYWNrID0gKCkgPT4ge307XG5cbiAgICAgIC8vIFJlbW92ZSBmcm9tIHF1ZXVlXG4gICAgICB2YXIgaW5kZXggPSB0aGlzLnF1ZXJ5UXVldWUuaW5kZXhPZihxdWVyeSk7XG4gICAgICBpZiAoaW5kZXggPiAtMSkge1xuICAgICAgICB0aGlzLnF1ZXJ5UXVldWUuc3BsaWNlKGluZGV4LCAxKTtcbiAgICAgIH1cblxuICAgICAgdGhpcy5fcHVsc2VRdWVyeVF1ZXVlKCk7XG4gICAgfSwgcmVhZFRpbWVvdXQpO1xuXG4gICAgcXVlcnkuY2FsbGJhY2sgPSAoZXJyLCByZXMpID0+IHtcbiAgICAgIGNsZWFyVGltZW91dChyZWFkVGltZW91dFRpbWVyKTtcbiAgICAgIHF1ZXJ5Q2FsbGJhY2soZXJyLCByZXMpO1xuICAgIH07XG4gIH1cblxuICBpZiAodGhpcy5iaW5hcnkgJiYgIXF1ZXJ5LmJpbmFyeSkge1xuICAgIHF1ZXJ5LmJpbmFyeSA9IHRydWU7XG4gIH1cblxuICBpZiAocXVlcnkuX3Jlc3VsdCAmJiAhcXVlcnkuX3Jlc3VsdC5fdHlwZXMpIHtcbiAgICBxdWVyeS5fcmVzdWx0Ll90eXBlcyA9IHRoaXMuX3R5cGVzO1xuICB9XG5cbiAgaWYgKCF0aGlzLl9xdWVyeWFibGUpIHtcbiAgICBwcm9jZXNzLm5leHRUaWNrKCgpID0+IHtcbiAgICAgIHF1ZXJ5LmhhbmRsZUVycm9yKFxuICAgICAgICBuZXcgRXJyb3IoXG4gICAgICAgICAgXCJDbGllbnQgaGFzIGVuY291bnRlcmVkIGEgY29ubmVjdGlvbiBlcnJvciBhbmQgaXMgbm90IHF1ZXJ5YWJsZVwiXG4gICAgICAgICksXG4gICAgICAgIHRoaXMuY29ubmVjdGlvblxuICAgICAgKTtcbiAgICB9KTtcbiAgICByZXR1cm4gcmVzdWx0O1xuICB9XG5cbiAgaWYgKHRoaXMuX2VuZGluZykge1xuICAgIHByb2Nlc3MubmV4dFRpY2soKCkgPT4ge1xuICAgICAgcXVlcnkuaGFuZGxlRXJyb3IoXG4gICAgICAgIG5ldyBFcnJvcihcIkNsaWVudCB3YXMgY2xvc2VkIGFuZCBpcyBub3QgcXVlcnlhYmxlXCIpLFxuICAgICAgICB0aGlzLmNvbm5lY3Rpb25cbiAgICAgICk7XG4gICAgfSk7XG4gICAgcmV0dXJuIHJlc3VsdDtcbiAgfVxuXG4gIHRoaXMucXVlcnlRdWV1ZS5wdXNoKHF1ZXJ5KTtcbiAgdGhpcy5fcHVsc2VRdWVyeVF1ZXVlKCk7XG4gIHJldHVybiByZXN1bHQ7XG59O1xuXG5DbGllbnQucHJvdG90eXBlLmVuZCA9IGZ1bmN0aW9uKGNiKSB7XG4gIHRoaXMuX2VuZGluZyA9IHRydWU7XG5cbiAgaWYgKHRoaXMuYWN0aXZlUXVlcnkpIHtcbiAgICAvLyBpZiB3ZSBoYXZlIGFuIGFjdGl2ZSBxdWVyeSB3ZSBuZWVkIHRvIGZvcmNlIGEgZGlzY29ubmVjdFxuICAgIC8vIG9uIHRoZSBzb2NrZXQgLSBvdGhlcndpc2UgYSBodW5nIHF1ZXJ5IGNvdWxkIGJsb2NrIGVuZCBmb3JldmVyXG4gICAgdGhpcy5jb25uZWN0aW9uLnN0cmVhbS5kZXN0cm95KCk7XG4gIH0gZWxzZSB7XG4gICAgdGhpcy5jb25uZWN0aW9uLmVuZCgpO1xuICB9XG5cbiAgaWYgKGNiKSB7XG4gICAgdGhpcy5jb25uZWN0aW9uLm9uY2UoXCJlbmRcIiwgY2IpO1xuICB9IGVsc2Uge1xuICAgIHJldHVybiBuZXcgdGhpcy5fUHJvbWlzZShyZXNvbHZlID0+IHtcbiAgICAgIHRoaXMuY29ubmVjdGlvbi5vbmNlKFwiZW5kXCIsIHJlc29sdmUpO1xuICAgIH0pO1xuICB9XG59O1xuXG4vLyBleHBvc2UgYSBRdWVyeSBjb25zdHJ1Y3RvclxuQ2xpZW50LlF1ZXJ5ID0gUXVlcnk7XG5cbm1vZHVsZS5leHBvcnRzID0gQ2xpZW50O1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG4vKipcbiAqIENvcHlyaWdodCAoYykgMjAxMC0yMDE3IEJyaWFuIENhcmxzb24gKGJyaWFuLm0uY2FybHNvbkBnbWFpbC5jb20pXG4gKiBBbGwgcmlnaHRzIHJlc2VydmVkLlxuICpcbiAqIFRoaXMgc291cmNlIGNvZGUgaXMgbGljZW5zZWQgdW5kZXIgdGhlIE1JVCBsaWNlbnNlIGZvdW5kIGluIHRoZVxuICogUkVBRE1FLm1kIGZpbGUgaW4gdGhlIHJvb3QgZGlyZWN0b3J5IG9mIHRoaXMgc291cmNlIHRyZWUuXG4gKi9cblxudmFyIGRucyA9IHJlcXVpcmUoXCJjaHJvbWUtZG5zXCIpO1xuXG52YXIgZGVmYXVsdHMgPSByZXF1aXJlKFwiLi9kZWZhdWx0c1wiKTtcblxudmFyIHBhcnNlID0gcmVxdWlyZShcInBnLWNvbm5lY3Rpb24tc3RyaW5nXCIpLnBhcnNlOyAvLyBwYXJzZXMgYSBjb25uZWN0aW9uIHN0cmluZ1xuXG52YXIgdmFsID0gZnVuY3Rpb24oa2V5LCBjb25maWcsIGVudlZhcikge1xuICBpZiAoZW52VmFyID09PSB1bmRlZmluZWQpIHtcbiAgICBlbnZWYXIgPSBwcm9jZXNzLmVudltcIlBHXCIgKyBrZXkudG9VcHBlckNhc2UoKV07XG4gIH0gZWxzZSBpZiAoZW52VmFyID09PSBmYWxzZSkge1xuICAgIC8vIGRvIG5vdGhpbmcgLi4uIHVzZSBmYWxzZVxuICB9IGVsc2Uge1xuICAgIGVudlZhciA9IHByb2Nlc3MuZW52W2VudlZhcl07XG4gIH1cblxuICByZXR1cm4gY29uZmlnW2tleV0gfHwgZW52VmFyIHx8IGRlZmF1bHRzW2tleV07XG59O1xuXG52YXIgdXNlU3NsID0gZnVuY3Rpb24oKSB7XG4gIHN3aXRjaCAocHJvY2Vzcy5lbnYuUEdTU0xNT0RFKSB7XG4gICAgY2FzZSBcImRpc2FibGVcIjpcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICBjYXNlIFwicHJlZmVyXCI6XG4gICAgY2FzZSBcInJlcXVpcmVcIjpcbiAgICBjYXNlIFwidmVyaWZ5LWNhXCI6XG4gICAgY2FzZSBcInZlcmlmeS1mdWxsXCI6XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgfVxuICByZXR1cm4gZGVmYXVsdHMuc3NsO1xufTtcblxudmFyIENvbm5lY3Rpb25QYXJhbWV0ZXJzID0gZnVuY3Rpb24oY29uZmlnKSB7XG4gIC8vIGlmIGEgc3RyaW5nIGlzIHBhc3NlZCwgaXQgaXMgYSByYXcgY29ubmVjdGlvbiBzdHJpbmcgc28gd2UgcGFyc2UgaXQgaW50byBhIGNvbmZpZ1xuICBjb25maWcgPSB0eXBlb2YgY29uZmlnID09PSBcInN0cmluZ1wiID8gcGFyc2UoY29uZmlnKSA6IGNvbmZpZyB8fCB7fTtcblxuICAvLyBpZiB0aGUgY29uZmlnIGhhcyBhIGNvbm5lY3Rpb25TdHJpbmcgZGVmaW5lZCwgcGFyc2UgSVQgaW50byB0aGUgY29uZmlnIHdlIHVzZVxuICAvLyB0aGlzIHdpbGwgb3ZlcnJpZGUgb3RoZXIgZGVmYXVsdCB2YWx1ZXMgd2l0aCB3aGF0IGlzIHN0b3JlZCBpbiBjb25uZWN0aW9uU3RyaW5nXG4gIGlmIChjb25maWcuY29ubmVjdGlvblN0cmluZykge1xuICAgIGNvbmZpZyA9IE9iamVjdC5hc3NpZ24oe30sIGNvbmZpZywgcGFyc2UoY29uZmlnLmNvbm5lY3Rpb25TdHJpbmcpKTtcbiAgfVxuXG4gIHRoaXMudXNlciA9IHZhbChcInVzZXJcIiwgY29uZmlnKTtcbiAgdGhpcy5kYXRhYmFzZSA9IHZhbChcImRhdGFiYXNlXCIsIGNvbmZpZyk7XG4gIHRoaXMucG9ydCA9IHBhcnNlSW50KHZhbChcInBvcnRcIiwgY29uZmlnKSwgMTApO1xuICB0aGlzLmhvc3QgPSB2YWwoXCJob3N0XCIsIGNvbmZpZyk7XG4gIHRoaXMucGFzc3dvcmQgPSB2YWwoXCJwYXNzd29yZFwiLCBjb25maWcpO1xuICB0aGlzLmJpbmFyeSA9IHZhbChcImJpbmFyeVwiLCBjb25maWcpO1xuICB0aGlzLnNzbCA9IHR5cGVvZiBjb25maWcuc3NsID09PSBcInVuZGVmaW5lZFwiID8gdXNlU3NsKCkgOiBjb25maWcuc3NsO1xuICB0aGlzLmNsaWVudF9lbmNvZGluZyA9IHZhbChcImNsaWVudF9lbmNvZGluZ1wiLCBjb25maWcpO1xuICB0aGlzLnJlcGxpY2F0aW9uID0gdmFsKFwicmVwbGljYXRpb25cIiwgY29uZmlnKTtcbiAgLy8gYSBkb21haW4gc29ja2V0IGJlZ2lucyB3aXRoICcvJ1xuICB0aGlzLmlzRG9tYWluU29ja2V0ID0gISh0aGlzLmhvc3QgfHwgXCJcIikuaW5kZXhPZihcIi9cIik7XG5cbiAgdGhpcy5hcHBsaWNhdGlvbl9uYW1lID0gdmFsKFwiYXBwbGljYXRpb25fbmFtZVwiLCBjb25maWcsIFwiUEdBUFBOQU1FXCIpO1xuICB0aGlzLmZhbGxiYWNrX2FwcGxpY2F0aW9uX25hbWUgPSB2YWwoXG4gICAgXCJmYWxsYmFja19hcHBsaWNhdGlvbl9uYW1lXCIsXG4gICAgY29uZmlnLFxuICAgIGZhbHNlXG4gICk7XG4gIHRoaXMuc3RhdGVtZW50X3RpbWVvdXQgPSB2YWwoXCJzdGF0ZW1lbnRfdGltZW91dFwiLCBjb25maWcsIGZhbHNlKTtcbiAgdGhpcy5xdWVyeV90aW1lb3V0ID0gdmFsKFwicXVlcnlfdGltZW91dFwiLCBjb25maWcsIGZhbHNlKTtcblxuICBpZiAoY29uZmlnLmNvbm5lY3Rpb25UaW1lb3V0TWlsbGlzID09PSB1bmRlZmluZWQpIHtcbiAgICB0aGlzLmNvbm5lY3RfdGltZW91dCA9IHByb2Nlc3MuZW52LlBHQ09OTkVDVF9USU1FT1VUIHx8IDA7XG4gIH0gZWxzZSB7XG4gICAgdGhpcy5jb25uZWN0X3RpbWVvdXQgPSBNYXRoLmZsb29yKGNvbmZpZy5jb25uZWN0aW9uVGltZW91dE1pbGxpcyAvIDEwMDApO1xuICB9XG5cbiAgaWYgKGNvbmZpZy5rZWVwQWxpdmUgPT09IGZhbHNlKSB7XG4gICAgdGhpcy5rZWVwYWxpdmVzID0gMDtcbiAgfSBlbHNlIGlmIChjb25maWcua2VlcEFsaXZlID09PSB0cnVlKSB7XG4gICAgdGhpcy5rZWVwYWxpdmVzID0gMTtcbiAgfVxuXG4gIGlmICh0eXBlb2YgY29uZmlnLmtlZXBBbGl2ZUluaXRpYWxEZWxheU1pbGxpcyA9PT0gXCJudW1iZXJcIikge1xuICAgIHRoaXMua2VlcGFsaXZlc19pZGxlID0gTWF0aC5mbG9vcihcbiAgICAgIGNvbmZpZy5rZWVwQWxpdmVJbml0aWFsRGVsYXlNaWxsaXMgLyAxMDAwXG4gICAgKTtcbiAgfVxufTtcblxuLy8gQ29udmVydCBhcmcgdG8gYSBzdHJpbmcsIHN1cnJvdW5kIGluIHNpbmdsZSBxdW90ZXMsIGFuZCBlc2NhcGUgc2luZ2xlIHF1b3RlcyBhbmQgYmFja3NsYXNoZXNcbnZhciBxdW90ZVBhcmFtVmFsdWUgPSBmdW5jdGlvbih2YWx1ZSkge1xuICByZXR1cm4gXCInXCIgKyAoXCJcIiArIHZhbHVlKS5yZXBsYWNlKC9cXFxcL2csIFwiXFxcXFxcXFxcIikucmVwbGFjZSgvJy9nLCBcIlxcXFwnXCIpICsgXCInXCI7XG59O1xuXG52YXIgYWRkID0gZnVuY3Rpb24ocGFyYW1zLCBjb25maWcsIHBhcmFtTmFtZSkge1xuICB2YXIgdmFsdWUgPSBjb25maWdbcGFyYW1OYW1lXTtcbiAgaWYgKHZhbHVlICE9PSB1bmRlZmluZWQgJiYgdmFsdWUgIT09IG51bGwpIHtcbiAgICBwYXJhbXMucHVzaChwYXJhbU5hbWUgKyBcIj1cIiArIHF1b3RlUGFyYW1WYWx1ZSh2YWx1ZSkpO1xuICB9XG59O1xuXG5Db25uZWN0aW9uUGFyYW1ldGVycy5wcm90b3R5cGUuZ2V0TGlicHFDb25uZWN0aW9uU3RyaW5nID0gZnVuY3Rpb24oY2IpIHtcbiAgdmFyIHBhcmFtcyA9IFtdO1xuICBhZGQocGFyYW1zLCB0aGlzLCBcInVzZXJcIik7XG4gIGFkZChwYXJhbXMsIHRoaXMsIFwicGFzc3dvcmRcIik7XG4gIGFkZChwYXJhbXMsIHRoaXMsIFwicG9ydFwiKTtcbiAgYWRkKHBhcmFtcywgdGhpcywgXCJhcHBsaWNhdGlvbl9uYW1lXCIpO1xuICBhZGQocGFyYW1zLCB0aGlzLCBcImZhbGxiYWNrX2FwcGxpY2F0aW9uX25hbWVcIik7XG4gIGFkZChwYXJhbXMsIHRoaXMsIFwiY29ubmVjdF90aW1lb3V0XCIpO1xuXG4gIHZhciBzc2wgPVxuICAgIHR5cGVvZiB0aGlzLnNzbCA9PT0gXCJvYmplY3RcIlxuICAgICAgPyB0aGlzLnNzbFxuICAgICAgOiB0aGlzLnNzbFxuICAgICAgPyB7IHNzbG1vZGU6IHRoaXMuc3NsIH1cbiAgICAgIDoge307XG4gIGFkZChwYXJhbXMsIHNzbCwgXCJzc2xtb2RlXCIpO1xuICBhZGQocGFyYW1zLCBzc2wsIFwic3NsY2FcIik7XG4gIGFkZChwYXJhbXMsIHNzbCwgXCJzc2xrZXlcIik7XG4gIGFkZChwYXJhbXMsIHNzbCwgXCJzc2xjZXJ0XCIpO1xuICBhZGQocGFyYW1zLCBzc2wsIFwic3Nscm9vdGNlcnRcIik7XG5cbiAgaWYgKHRoaXMuZGF0YWJhc2UpIHtcbiAgICBwYXJhbXMucHVzaChcImRibmFtZT1cIiArIHF1b3RlUGFyYW1WYWx1ZSh0aGlzLmRhdGFiYXNlKSk7XG4gIH1cbiAgaWYgKHRoaXMucmVwbGljYXRpb24pIHtcbiAgICBwYXJhbXMucHVzaChcInJlcGxpY2F0aW9uPVwiICsgcXVvdGVQYXJhbVZhbHVlKHRoaXMucmVwbGljYXRpb24pKTtcbiAgfVxuICBpZiAodGhpcy5ob3N0KSB7XG4gICAgcGFyYW1zLnB1c2goXCJob3N0PVwiICsgcXVvdGVQYXJhbVZhbHVlKHRoaXMuaG9zdCkpO1xuICB9XG4gIGlmICh0aGlzLmlzRG9tYWluU29ja2V0KSB7XG4gICAgcmV0dXJuIGNiKG51bGwsIHBhcmFtcy5qb2luKFwiIFwiKSk7XG4gIH1cbiAgaWYgKHRoaXMuY2xpZW50X2VuY29kaW5nKSB7XG4gICAgcGFyYW1zLnB1c2goXCJjbGllbnRfZW5jb2Rpbmc9XCIgKyBxdW90ZVBhcmFtVmFsdWUodGhpcy5jbGllbnRfZW5jb2RpbmcpKTtcbiAgfVxuICBkbnMubG9va3VwKHRoaXMuaG9zdCwgZnVuY3Rpb24oZXJyLCBhZGRyZXNzKSB7XG4gICAgaWYgKGVycikgcmV0dXJuIGNiKGVyciwgbnVsbCk7XG4gICAgcGFyYW1zLnB1c2goXCJob3N0YWRkcj1cIiArIHF1b3RlUGFyYW1WYWx1ZShhZGRyZXNzKSk7XG4gICAgcmV0dXJuIGNiKG51bGwsIHBhcmFtcy5qb2luKFwiIFwiKSk7XG4gIH0pO1xufTtcblxubW9kdWxlLmV4cG9ydHMgPSBDb25uZWN0aW9uUGFyYW1ldGVycztcbiIsIlwidXNlIHN0cmljdFwiO1xuLyoqXG4gKiBDb3B5cmlnaHQgKGMpIDIwMTAtMjAxNyBCcmlhbiBDYXJsc29uIChicmlhbi5tLmNhcmxzb25AZ21haWwuY29tKVxuICogQWxsIHJpZ2h0cyByZXNlcnZlZC5cbiAqXG4gKiBUaGlzIHNvdXJjZSBjb2RlIGlzIGxpY2Vuc2VkIHVuZGVyIHRoZSBNSVQgbGljZW5zZSBmb3VuZCBpbiB0aGVcbiAqIFJFQURNRS5tZCBmaWxlIGluIHRoZSByb290IGRpcmVjdG9yeSBvZiB0aGlzIHNvdXJjZSB0cmVlLlxuICovXG5cbnZhciBuZXQgPSByZXF1aXJlKFwiY2hyb21lLW5ldFwiKTtcbnZhciBFdmVudEVtaXR0ZXIgPSByZXF1aXJlKFwiZXZlbnRzXCIpLkV2ZW50RW1pdHRlcjtcbnZhciB1dGlsID0gcmVxdWlyZShcInV0aWxcIik7XG5cbnZhciBXcml0ZXIgPSByZXF1aXJlKFwiYnVmZmVyLXdyaXRlclwiKTtcbnZhciBSZWFkZXIgPSByZXF1aXJlKFwicGFja2V0LXJlYWRlclwiKTtcblxudmFyIFRFWFRfTU9ERSA9IDA7XG52YXIgQklOQVJZX01PREUgPSAxO1xudmFyIENvbm5lY3Rpb24gPSBmdW5jdGlvbihjb25maWcpIHtcbiAgRXZlbnRFbWl0dGVyLmNhbGwodGhpcyk7XG4gIGNvbmZpZyA9IGNvbmZpZyB8fCB7fTtcbiAgdGhpcy5zdHJlYW0gPSBjb25maWcuc3RyZWFtIHx8IG5ldyBuZXQuU29ja2V0KCk7XG4gIHRoaXMuX2tlZXBBbGl2ZSA9IGNvbmZpZy5rZWVwQWxpdmU7XG4gIHRoaXMuX2tlZXBBbGl2ZUluaXRpYWxEZWxheU1pbGxpcyA9IGNvbmZpZy5rZWVwQWxpdmVJbml0aWFsRGVsYXlNaWxsaXM7XG4gIHRoaXMubGFzdEJ1ZmZlciA9IGZhbHNlO1xuICB0aGlzLmxhc3RPZmZzZXQgPSAwO1xuICB0aGlzLmJ1ZmZlciA9IG51bGw7XG4gIHRoaXMub2Zmc2V0ID0gbnVsbDtcbiAgdGhpcy5lbmNvZGluZyA9IGNvbmZpZy5lbmNvZGluZyB8fCBcInV0ZjhcIjtcbiAgdGhpcy5wYXJzZWRTdGF0ZW1lbnRzID0ge307XG4gIHRoaXMud3JpdGVyID0gbmV3IFdyaXRlcigpO1xuICB0aGlzLnNzbCA9IGNvbmZpZy5zc2wgfHwgZmFsc2U7XG4gIHRoaXMuX2VuZGluZyA9IGZhbHNlO1xuICB0aGlzLl9tb2RlID0gVEVYVF9NT0RFO1xuICB0aGlzLl9lbWl0TWVzc2FnZSA9IGZhbHNlO1xuICB0aGlzLl9yZWFkZXIgPSBuZXcgUmVhZGVyKHtcbiAgICBoZWFkZXJTaXplOiAxLFxuICAgIGxlbmd0aFBhZGRpbmc6IC00XG4gIH0pO1xuICB2YXIgc2VsZiA9IHRoaXM7XG4gIHRoaXMub24oXCJuZXdMaXN0ZW5lclwiLCBmdW5jdGlvbihldmVudE5hbWUpIHtcbiAgICBpZiAoZXZlbnROYW1lID09PSBcIm1lc3NhZ2VcIikge1xuICAgICAgc2VsZi5fZW1pdE1lc3NhZ2UgPSB0cnVlO1xuICAgIH1cbiAgfSk7XG59O1xuXG51dGlsLmluaGVyaXRzKENvbm5lY3Rpb24sIEV2ZW50RW1pdHRlcik7XG5cbkNvbm5lY3Rpb24ucHJvdG90eXBlLmNvbm5lY3QgPSBmdW5jdGlvbihwb3J0LCBob3N0KSB7XG4gIHZhciBzZWxmID0gdGhpcztcblxuICBpZiAodGhpcy5zdHJlYW0ucmVhZHlTdGF0ZSA9PT0gXCJjbG9zZWRcIikge1xuICAgIHRoaXMuc3RyZWFtLmNvbm5lY3QocG9ydCwgaG9zdCk7XG4gIH0gZWxzZSBpZiAodGhpcy5zdHJlYW0ucmVhZHlTdGF0ZSA9PT0gXCJvcGVuXCIpIHtcbiAgICB0aGlzLmVtaXQoXCJjb25uZWN0XCIpO1xuICB9XG5cbiAgdGhpcy5zdHJlYW0ub24oXCJjb25uZWN0XCIsIGZ1bmN0aW9uKCkge1xuICAgIGlmIChzZWxmLl9rZWVwQWxpdmUpIHtcbiAgICAgIHNlbGYuc3RyZWFtLnNldEtlZXBBbGl2ZSh0cnVlLCBzZWxmLl9rZWVwQWxpdmVJbml0aWFsRGVsYXlNaWxsaXMpO1xuICAgIH1cbiAgICBzZWxmLmVtaXQoXCJjb25uZWN0XCIpO1xuICB9KTtcblxuICBjb25zdCByZXBvcnRTdHJlYW1FcnJvciA9IGZ1bmN0aW9uKGVycm9yKSB7XG4gICAgLy8gZG9uJ3QgcmFpc2UgRUNPTk5SRVNFVCBlcnJvcnMgLSB0aGV5IGNhbiAmIHNob3VsZCBiZSBpZ25vcmVkXG4gICAgLy8gZHVyaW5nIGRpc2Nvbm5lY3RcbiAgICBpZiAoc2VsZi5fZW5kaW5nICYmIGVycm9yLmNvZGUgPT09IFwiRUNPTk5SRVNFVFwiKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIHNlbGYuZW1pdChcImVycm9yXCIsIGVycm9yKTtcbiAgfTtcbiAgdGhpcy5zdHJlYW0ub24oXCJlcnJvclwiLCByZXBvcnRTdHJlYW1FcnJvcik7XG5cbiAgdGhpcy5zdHJlYW0ub24oXCJjbG9zZVwiLCBmdW5jdGlvbigpIHtcbiAgICBzZWxmLmVtaXQoXCJlbmRcIik7XG4gIH0pO1xuXG4gIGlmICghdGhpcy5zc2wpIHtcbiAgICByZXR1cm4gdGhpcy5hdHRhY2hMaXN0ZW5lcnModGhpcy5zdHJlYW0pO1xuICB9XG5cbiAgdGhpcy5zdHJlYW0ub25jZShcImRhdGFcIiwgZnVuY3Rpb24oYnVmZmVyKSB7XG4gICAgdmFyIHJlc3BvbnNlQ29kZSA9IGJ1ZmZlci50b1N0cmluZyhcInV0ZjhcIik7XG4gICAgc3dpdGNoIChyZXNwb25zZUNvZGUpIHtcbiAgICAgIGNhc2UgXCJOXCI6IC8vIFNlcnZlciBkb2VzIG5vdCBzdXBwb3J0IFNTTCBjb25uZWN0aW9uc1xuICAgICAgICByZXR1cm4gc2VsZi5lbWl0KFxuICAgICAgICAgIFwiZXJyb3JcIixcbiAgICAgICAgICBuZXcgRXJyb3IoXCJUaGUgc2VydmVyIGRvZXMgbm90IHN1cHBvcnQgU1NMIGNvbm5lY3Rpb25zXCIpXG4gICAgICAgICk7XG4gICAgICBjYXNlIFwiU1wiOiAvLyBTZXJ2ZXIgc3VwcG9ydHMgU1NMIGNvbm5lY3Rpb25zLCBjb250aW51ZSB3aXRoIGEgc2VjdXJlIGNvbm5lY3Rpb25cbiAgICAgICAgYnJlYWs7XG4gICAgICBkZWZhdWx0OlxuICAgICAgICAvLyBBbnkgb3RoZXIgcmVzcG9uc2UgYnl0ZSwgaW5jbHVkaW5nICdFJyAoRXJyb3JSZXNwb25zZSkgaW5kaWNhdGluZyBhIHNlcnZlciBlcnJvclxuICAgICAgICByZXR1cm4gc2VsZi5lbWl0KFxuICAgICAgICAgIFwiZXJyb3JcIixcbiAgICAgICAgICBuZXcgRXJyb3IoXCJUaGVyZSB3YXMgYW4gZXJyb3IgZXN0YWJsaXNoaW5nIGFuIFNTTCBjb25uZWN0aW9uXCIpXG4gICAgICAgICk7XG4gICAgfVxuICAgIHZhciB0bHMgPSByZXF1aXJlKFwibm9kZS1mb3JnZVwiKTtcbiAgICBzZWxmLnN0cmVhbSA9IHRscy5jb25uZWN0KHtcbiAgICAgIHNvY2tldDogc2VsZi5zdHJlYW0sXG4gICAgICBzZXJ2ZXJuYW1lOiBob3N0LFxuICAgICAgY2hlY2tTZXJ2ZXJJZGVudGl0eTpcbiAgICAgICAgc2VsZi5zc2wuY2hlY2tTZXJ2ZXJJZGVudGl0eSB8fCB0bHMuY2hlY2tTZXJ2ZXJJZGVudGl0eSxcbiAgICAgIHJlamVjdFVuYXV0aG9yaXplZDogc2VsZi5zc2wucmVqZWN0VW5hdXRob3JpemVkLFxuICAgICAgY2E6IHNlbGYuc3NsLmNhLFxuICAgICAgcGZ4OiBzZWxmLnNzbC5wZngsXG4gICAgICBrZXk6IHNlbGYuc3NsLmtleSxcbiAgICAgIHBhc3NwaHJhc2U6IHNlbGYuc3NsLnBhc3NwaHJhc2UsXG4gICAgICBjZXJ0OiBzZWxmLnNzbC5jZXJ0LFxuICAgICAgc2VjdXJlT3B0aW9uczogc2VsZi5zc2wuc2VjdXJlT3B0aW9ucyxcbiAgICAgIE5QTlByb3RvY29sczogc2VsZi5zc2wuTlBOUHJvdG9jb2xzXG4gICAgfSk7XG4gICAgc2VsZi5hdHRhY2hMaXN0ZW5lcnMoc2VsZi5zdHJlYW0pO1xuICAgIHNlbGYuc3RyZWFtLm9uKFwiZXJyb3JcIiwgcmVwb3J0U3RyZWFtRXJyb3IpO1xuXG4gICAgc2VsZi5lbWl0KFwic3NsY29ubmVjdFwiKTtcbiAgfSk7XG59O1xuXG5Db25uZWN0aW9uLnByb3RvdHlwZS5hdHRhY2hMaXN0ZW5lcnMgPSBmdW5jdGlvbihzdHJlYW0pIHtcbiAgdmFyIHNlbGYgPSB0aGlzO1xuICBzdHJlYW0ub24oXCJkYXRhXCIsIGZ1bmN0aW9uKGJ1ZmYpIHtcbiAgICBzZWxmLl9yZWFkZXIuYWRkQ2h1bmsoYnVmZik7XG4gICAgdmFyIHBhY2tldCA9IHNlbGYuX3JlYWRlci5yZWFkKCk7XG4gICAgd2hpbGUgKHBhY2tldCkge1xuICAgICAgdmFyIG1zZyA9IHNlbGYucGFyc2VNZXNzYWdlKHBhY2tldCk7XG4gICAgICB2YXIgZXZlbnROYW1lID0gbXNnLm5hbWUgPT09IFwiZXJyb3JcIiA/IFwiZXJyb3JNZXNzYWdlXCIgOiBtc2cubmFtZTtcbiAgICAgIGlmIChzZWxmLl9lbWl0TWVzc2FnZSkge1xuICAgICAgICBzZWxmLmVtaXQoXCJtZXNzYWdlXCIsIG1zZyk7XG4gICAgICB9XG4gICAgICBzZWxmLmVtaXQoZXZlbnROYW1lLCBtc2cpO1xuICAgICAgcGFja2V0ID0gc2VsZi5fcmVhZGVyLnJlYWQoKTtcbiAgICB9XG4gIH0pO1xuICBzdHJlYW0ub24oXCJlbmRcIiwgZnVuY3Rpb24oKSB7XG4gICAgc2VsZi5lbWl0KFwiZW5kXCIpO1xuICB9KTtcbn07XG5cbkNvbm5lY3Rpb24ucHJvdG90eXBlLnJlcXVlc3RTc2wgPSBmdW5jdGlvbigpIHtcbiAgdmFyIGJvZHlCdWZmZXIgPSB0aGlzLndyaXRlclxuICAgIC5hZGRJbnQxNigweDA0ZDIpXG4gICAgLmFkZEludDE2KDB4MTYyZilcbiAgICAuZmx1c2goKTtcblxuICB2YXIgbGVuZ3RoID0gYm9keUJ1ZmZlci5sZW5ndGggKyA0O1xuXG4gIHZhciBidWZmZXIgPSBuZXcgV3JpdGVyKClcbiAgICAuYWRkSW50MzIobGVuZ3RoKVxuICAgIC5hZGQoYm9keUJ1ZmZlcilcbiAgICAuam9pbigpO1xuICB0aGlzLnN0cmVhbS53cml0ZShidWZmZXIpO1xufTtcblxuQ29ubmVjdGlvbi5wcm90b3R5cGUuc3RhcnR1cCA9IGZ1bmN0aW9uKGNvbmZpZykge1xuICB2YXIgd3JpdGVyID0gdGhpcy53cml0ZXIuYWRkSW50MTYoMykuYWRkSW50MTYoMCk7XG5cbiAgT2JqZWN0LmtleXMoY29uZmlnKS5mb3JFYWNoKGZ1bmN0aW9uKGtleSkge1xuICAgIHZhciB2YWwgPSBjb25maWdba2V5XTtcbiAgICB3cml0ZXIuYWRkQ1N0cmluZyhrZXkpLmFkZENTdHJpbmcodmFsKTtcbiAgfSk7XG5cbiAgd3JpdGVyLmFkZENTdHJpbmcoXCJjbGllbnRfZW5jb2RpbmdcIikuYWRkQ1N0cmluZyhcIid1dGYtOCdcIik7XG5cbiAgdmFyIGJvZHlCdWZmZXIgPSB3cml0ZXIuYWRkQ1N0cmluZyhcIlwiKS5mbHVzaCgpO1xuICAvLyB0aGlzIG1lc3NhZ2UgaXMgc2VudCB3aXRob3V0IGEgY29kZVxuXG4gIHZhciBsZW5ndGggPSBib2R5QnVmZmVyLmxlbmd0aCArIDQ7XG5cbiAgdmFyIGJ1ZmZlciA9IG5ldyBXcml0ZXIoKVxuICAgIC5hZGRJbnQzMihsZW5ndGgpXG4gICAgLmFkZChib2R5QnVmZmVyKVxuICAgIC5qb2luKCk7XG4gIHRoaXMuc3RyZWFtLndyaXRlKGJ1ZmZlcik7XG59O1xuXG5Db25uZWN0aW9uLnByb3RvdHlwZS5jYW5jZWwgPSBmdW5jdGlvbihwcm9jZXNzSUQsIHNlY3JldEtleSkge1xuICB2YXIgYm9keUJ1ZmZlciA9IHRoaXMud3JpdGVyXG4gICAgLmFkZEludDE2KDEyMzQpXG4gICAgLmFkZEludDE2KDU2NzgpXG4gICAgLmFkZEludDMyKHByb2Nlc3NJRClcbiAgICAuYWRkSW50MzIoc2VjcmV0S2V5KVxuICAgIC5mbHVzaCgpO1xuXG4gIHZhciBsZW5ndGggPSBib2R5QnVmZmVyLmxlbmd0aCArIDQ7XG5cbiAgdmFyIGJ1ZmZlciA9IG5ldyBXcml0ZXIoKVxuICAgIC5hZGRJbnQzMihsZW5ndGgpXG4gICAgLmFkZChib2R5QnVmZmVyKVxuICAgIC5qb2luKCk7XG4gIHRoaXMuc3RyZWFtLndyaXRlKGJ1ZmZlcik7XG59O1xuXG5Db25uZWN0aW9uLnByb3RvdHlwZS5wYXNzd29yZCA9IGZ1bmN0aW9uKHBhc3N3b3JkKSB7XG4gIC8vIDB4NzAgPSAncCdcbiAgdGhpcy5fc2VuZCgweDcwLCB0aGlzLndyaXRlci5hZGRDU3RyaW5nKHBhc3N3b3JkKSk7XG59O1xuXG5Db25uZWN0aW9uLnByb3RvdHlwZS5zZW5kU0FTTEluaXRpYWxSZXNwb25zZU1lc3NhZ2UgPSBmdW5jdGlvbihcbiAgbWVjaGFuaXNtLFxuICBpbml0aWFsUmVzcG9uc2Vcbikge1xuICAvLyAweDcwID0gJ3AnXG4gIHRoaXMud3JpdGVyXG4gICAgLmFkZENTdHJpbmcobWVjaGFuaXNtKVxuICAgIC5hZGRJbnQzMihCdWZmZXIuYnl0ZUxlbmd0aChpbml0aWFsUmVzcG9uc2UpKVxuICAgIC5hZGRTdHJpbmcoaW5pdGlhbFJlc3BvbnNlKTtcblxuICB0aGlzLl9zZW5kKDB4NzApO1xufTtcblxuQ29ubmVjdGlvbi5wcm90b3R5cGUuc2VuZFNDUkFNQ2xpZW50RmluYWxNZXNzYWdlID0gZnVuY3Rpb24oYWRkaXRpb25hbERhdGEpIHtcbiAgLy8gMHg3MCA9ICdwJ1xuICB0aGlzLndyaXRlci5hZGRTdHJpbmcoYWRkaXRpb25hbERhdGEpO1xuXG4gIHRoaXMuX3NlbmQoMHg3MCk7XG59O1xuXG5Db25uZWN0aW9uLnByb3RvdHlwZS5fc2VuZCA9IGZ1bmN0aW9uKGNvZGUsIG1vcmUpIHtcbiAgaWYgKCF0aGlzLnN0cmVhbS53cml0YWJsZSkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICBpZiAobW9yZSA9PT0gdHJ1ZSkge1xuICAgIHRoaXMud3JpdGVyLmFkZEhlYWRlcihjb2RlKTtcbiAgfSBlbHNlIHtcbiAgICByZXR1cm4gdGhpcy5zdHJlYW0ud3JpdGUodGhpcy53cml0ZXIuZmx1c2goY29kZSkpO1xuICB9XG59O1xuXG5Db25uZWN0aW9uLnByb3RvdHlwZS5xdWVyeSA9IGZ1bmN0aW9uKHRleHQpIHtcbiAgLy8gMHg1MSA9IFFcbiAgdGhpcy5zdHJlYW0ud3JpdGUodGhpcy53cml0ZXIuYWRkQ1N0cmluZyh0ZXh0KS5mbHVzaCgweDUxKSk7XG59O1xuXG4vLyBzZW5kIHBhcnNlIG1lc3NhZ2Vcbi8vIFwibW9yZVwiID09PSB0cnVlIHRvIGJ1ZmZlciB0aGUgbWVzc2FnZSB1bnRpbCBmbHVzaCgpIGlzIGNhbGxlZFxuQ29ubmVjdGlvbi5wcm90b3R5cGUucGFyc2UgPSBmdW5jdGlvbihxdWVyeSwgbW9yZSkge1xuICAvLyBleHBlY3Qgc29tZXRoaW5nIGxpa2UgdGhpczpcbiAgLy8geyBuYW1lOiAncXVlcnlOYW1lJyxcbiAgLy8gICB0ZXh0OiAnc2VsZWN0ICogZnJvbSBibGFoJyxcbiAgLy8gICB0eXBlczogWydpbnQ4JywgJ2Jvb2wnXSB9XG5cbiAgLy8gbm9ybWFsaXplIG1pc3NpbmcgcXVlcnkgbmFtZXMgdG8gYWxsb3cgZm9yIG51bGxcbiAgcXVlcnkubmFtZSA9IHF1ZXJ5Lm5hbWUgfHwgXCJcIjtcbiAgaWYgKHF1ZXJ5Lm5hbWUubGVuZ3RoID4gNjMpIHtcbiAgICAvKiBlc2xpbnQtZGlzYWJsZSBuby1jb25zb2xlICovXG4gICAgY29uc29sZS5lcnJvcihcbiAgICAgIFwiV2FybmluZyEgUG9zdGdyZXMgb25seSBzdXBwb3J0cyA2MyBjaGFyYWN0ZXJzIGZvciBxdWVyeSBuYW1lcy5cIlxuICAgICk7XG4gICAgY29uc29sZS5lcnJvcihcIllvdSBzdXBwbGllZCAlcyAoJXMpXCIsIHF1ZXJ5Lm5hbWUsIHF1ZXJ5Lm5hbWUubGVuZ3RoKTtcbiAgICBjb25zb2xlLmVycm9yKFxuICAgICAgXCJUaGlzIGNhbiBjYXVzZSBjb25mbGljdHMgYW5kIHNpbGVudCBlcnJvcnMgZXhlY3V0aW5nIHF1ZXJpZXNcIlxuICAgICk7XG4gICAgLyogZXNsaW50LWVuYWJsZSBuby1jb25zb2xlICovXG4gIH1cbiAgLy8gbm9ybWFsaXplIG51bGwgdHlwZSBhcnJheVxuICBxdWVyeS50eXBlcyA9IHF1ZXJ5LnR5cGVzIHx8IFtdO1xuICB2YXIgbGVuID0gcXVlcnkudHlwZXMubGVuZ3RoO1xuICB2YXIgYnVmZmVyID0gdGhpcy53cml0ZXJcbiAgICAuYWRkQ1N0cmluZyhxdWVyeS5uYW1lKSAvLyBuYW1lIG9mIHF1ZXJ5XG4gICAgLmFkZENTdHJpbmcocXVlcnkudGV4dCkgLy8gYWN0dWFsIHF1ZXJ5IHRleHRcbiAgICAuYWRkSW50MTYobGVuKTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsZW47IGkrKykge1xuICAgIGJ1ZmZlci5hZGRJbnQzMihxdWVyeS50eXBlc1tpXSk7XG4gIH1cblxuICB2YXIgY29kZSA9IDB4NTA7XG4gIHRoaXMuX3NlbmQoY29kZSwgbW9yZSk7XG59O1xuXG4vLyBzZW5kIGJpbmQgbWVzc2FnZVxuLy8gXCJtb3JlXCIgPT09IHRydWUgdG8gYnVmZmVyIHRoZSBtZXNzYWdlIHVudGlsIGZsdXNoKCkgaXMgY2FsbGVkXG5Db25uZWN0aW9uLnByb3RvdHlwZS5iaW5kID0gZnVuY3Rpb24oY29uZmlnLCBtb3JlKSB7XG4gIC8vIG5vcm1hbGl6ZSBjb25maWdcbiAgY29uZmlnID0gY29uZmlnIHx8IHt9O1xuICBjb25maWcucG9ydGFsID0gY29uZmlnLnBvcnRhbCB8fCBcIlwiO1xuICBjb25maWcuc3RhdGVtZW50ID0gY29uZmlnLnN0YXRlbWVudCB8fCBcIlwiO1xuICBjb25maWcuYmluYXJ5ID0gY29uZmlnLmJpbmFyeSB8fCBmYWxzZTtcbiAgdmFyIHZhbHVlcyA9IGNvbmZpZy52YWx1ZXMgfHwgW107XG4gIHZhciBsZW4gPSB2YWx1ZXMubGVuZ3RoO1xuICB2YXIgdXNlQmluYXJ5ID0gZmFsc2U7XG4gIGZvciAodmFyIGogPSAwOyBqIDwgbGVuOyBqKyspIHtcbiAgICB1c2VCaW5hcnkgfD0gdmFsdWVzW2pdIGluc3RhbmNlb2YgQnVmZmVyO1xuICB9XG4gIHZhciBidWZmZXIgPSB0aGlzLndyaXRlclxuICAgIC5hZGRDU3RyaW5nKGNvbmZpZy5wb3J0YWwpXG4gICAgLmFkZENTdHJpbmcoY29uZmlnLnN0YXRlbWVudCk7XG4gIGlmICghdXNlQmluYXJ5KSB7XG4gICAgYnVmZmVyLmFkZEludDE2KDApO1xuICB9IGVsc2Uge1xuICAgIGJ1ZmZlci5hZGRJbnQxNihsZW4pO1xuICAgIGZvciAoaiA9IDA7IGogPCBsZW47IGorKykge1xuICAgICAgYnVmZmVyLmFkZEludDE2KHZhbHVlc1tqXSBpbnN0YW5jZW9mIEJ1ZmZlcik7XG4gICAgfVxuICB9XG4gIGJ1ZmZlci5hZGRJbnQxNihsZW4pO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IGxlbjsgaSsrKSB7XG4gICAgdmFyIHZhbCA9IHZhbHVlc1tpXTtcbiAgICBpZiAodmFsID09PSBudWxsIHx8IHR5cGVvZiB2YWwgPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgIGJ1ZmZlci5hZGRJbnQzMigtMSk7XG4gICAgfSBlbHNlIGlmICh2YWwgaW5zdGFuY2VvZiBCdWZmZXIpIHtcbiAgICAgIGJ1ZmZlci5hZGRJbnQzMih2YWwubGVuZ3RoKTtcbiAgICAgIGJ1ZmZlci5hZGQodmFsKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYnVmZmVyLmFkZEludDMyKEJ1ZmZlci5ieXRlTGVuZ3RoKHZhbCkpO1xuICAgICAgYnVmZmVyLmFkZFN0cmluZyh2YWwpO1xuICAgIH1cbiAgfVxuXG4gIGlmIChjb25maWcuYmluYXJ5KSB7XG4gICAgYnVmZmVyLmFkZEludDE2KDEpOyAvLyBmb3JtYXQgY29kZXMgdG8gdXNlIGJpbmFyeVxuICAgIGJ1ZmZlci5hZGRJbnQxNigxKTtcbiAgfSBlbHNlIHtcbiAgICBidWZmZXIuYWRkSW50MTYoMCk7IC8vIGZvcm1hdCBjb2RlcyB0byB1c2UgdGV4dFxuICB9XG4gIC8vIDB4NDIgPSAnQidcbiAgdGhpcy5fc2VuZCgweDQyLCBtb3JlKTtcbn07XG5cbi8vIHNlbmQgZXhlY3V0ZSBtZXNzYWdlXG4vLyBcIm1vcmVcIiA9PT0gdHJ1ZSB0byBidWZmZXIgdGhlIG1lc3NhZ2UgdW50aWwgZmx1c2goKSBpcyBjYWxsZWRcbkNvbm5lY3Rpb24ucHJvdG90eXBlLmV4ZWN1dGUgPSBmdW5jdGlvbihjb25maWcsIG1vcmUpIHtcbiAgY29uZmlnID0gY29uZmlnIHx8IHt9O1xuICBjb25maWcucG9ydGFsID0gY29uZmlnLnBvcnRhbCB8fCBcIlwiO1xuICBjb25maWcucm93cyA9IGNvbmZpZy5yb3dzIHx8IFwiXCI7XG4gIHRoaXMud3JpdGVyLmFkZENTdHJpbmcoY29uZmlnLnBvcnRhbCkuYWRkSW50MzIoY29uZmlnLnJvd3MpO1xuXG4gIC8vIDB4NDUgPSAnRSdcbiAgdGhpcy5fc2VuZCgweDQ1LCBtb3JlKTtcbn07XG5cbnZhciBlbXB0eUJ1ZmZlciA9IEJ1ZmZlci5hbGxvYygwKTtcblxuQ29ubmVjdGlvbi5wcm90b3R5cGUuZmx1c2ggPSBmdW5jdGlvbigpIHtcbiAgLy8gMHg0OCA9ICdIJ1xuICB0aGlzLndyaXRlci5hZGQoZW1wdHlCdWZmZXIpO1xuICB0aGlzLl9zZW5kKDB4NDgpO1xufTtcblxuQ29ubmVjdGlvbi5wcm90b3R5cGUuc3luYyA9IGZ1bmN0aW9uKCkge1xuICAvLyBjbGVhciBvdXQgYW55IHBlbmRpbmcgZGF0YSBpbiB0aGUgd3JpdGVyXG4gIHRoaXMud3JpdGVyLmZsdXNoKDApO1xuXG4gIHRoaXMud3JpdGVyLmFkZChlbXB0eUJ1ZmZlcik7XG4gIHRoaXMuX2VuZGluZyA9IHRydWU7XG4gIHRoaXMuX3NlbmQoMHg1Myk7XG59O1xuXG5jb25zdCBFTkRfQlVGRkVSID0gQnVmZmVyLmZyb20oWzB4NTgsIDB4MDAsIDB4MDAsIDB4MDAsIDB4MDRdKTtcblxuQ29ubmVjdGlvbi5wcm90b3R5cGUuZW5kID0gZnVuY3Rpb24oKSB7XG4gIC8vIDB4NTggPSAnWCdcbiAgdGhpcy53cml0ZXIuYWRkKGVtcHR5QnVmZmVyKTtcbiAgdGhpcy5fZW5kaW5nID0gdHJ1ZTtcbiAgcmV0dXJuIHRoaXMuc3RyZWFtLndyaXRlKEVORF9CVUZGRVIsICgpID0+IHtcbiAgICB0aGlzLnN0cmVhbS5lbmQoKTtcbiAgfSk7XG59O1xuXG5Db25uZWN0aW9uLnByb3RvdHlwZS5jbG9zZSA9IGZ1bmN0aW9uKG1zZywgbW9yZSkge1xuICB0aGlzLndyaXRlci5hZGRDU3RyaW5nKG1zZy50eXBlICsgKG1zZy5uYW1lIHx8IFwiXCIpKTtcbiAgdGhpcy5fc2VuZCgweDQzLCBtb3JlKTtcbn07XG5cbkNvbm5lY3Rpb24ucHJvdG90eXBlLmRlc2NyaWJlID0gZnVuY3Rpb24obXNnLCBtb3JlKSB7XG4gIHRoaXMud3JpdGVyLmFkZENTdHJpbmcobXNnLnR5cGUgKyAobXNnLm5hbWUgfHwgXCJcIikpO1xuICB0aGlzLl9zZW5kKDB4NDQsIG1vcmUpO1xufTtcblxuQ29ubmVjdGlvbi5wcm90b3R5cGUuc2VuZENvcHlGcm9tQ2h1bmsgPSBmdW5jdGlvbihjaHVuaykge1xuICB0aGlzLnN0cmVhbS53cml0ZSh0aGlzLndyaXRlci5hZGQoY2h1bmspLmZsdXNoKDB4NjQpKTtcbn07XG5cbkNvbm5lY3Rpb24ucHJvdG90eXBlLmVuZENvcHlGcm9tID0gZnVuY3Rpb24oKSB7XG4gIHRoaXMuc3RyZWFtLndyaXRlKHRoaXMud3JpdGVyLmFkZChlbXB0eUJ1ZmZlcikuZmx1c2goMHg2MykpO1xufTtcblxuQ29ubmVjdGlvbi5wcm90b3R5cGUuc2VuZENvcHlGYWlsID0gZnVuY3Rpb24obXNnKSB7XG4gIC8vIHRoaXMuc3RyZWFtLndyaXRlKHRoaXMud3JpdGVyLmFkZChlbXB0eUJ1ZmZlcikuZmx1c2goMHg2NikpO1xuICB0aGlzLndyaXRlci5hZGRDU3RyaW5nKG1zZyk7XG4gIHRoaXMuX3NlbmQoMHg2Nik7XG59O1xuXG52YXIgTWVzc2FnZSA9IGZ1bmN0aW9uKG5hbWUsIGxlbmd0aCkge1xuICB0aGlzLm5hbWUgPSBuYW1lO1xuICB0aGlzLmxlbmd0aCA9IGxlbmd0aDtcbn07XG5cbkNvbm5lY3Rpb24ucHJvdG90eXBlLnBhcnNlTWVzc2FnZSA9IGZ1bmN0aW9uKGJ1ZmZlcikge1xuICB0aGlzLm9mZnNldCA9IDA7XG4gIHZhciBsZW5ndGggPSBidWZmZXIubGVuZ3RoICsgNDtcbiAgc3dpdGNoICh0aGlzLl9yZWFkZXIuaGVhZGVyKSB7XG4gICAgY2FzZSAweDUyOiAvLyBSXG4gICAgICByZXR1cm4gdGhpcy5wYXJzZVIoYnVmZmVyLCBsZW5ndGgpO1xuXG4gICAgY2FzZSAweDUzOiAvLyBTXG4gICAgICByZXR1cm4gdGhpcy5wYXJzZVMoYnVmZmVyLCBsZW5ndGgpO1xuXG4gICAgY2FzZSAweDRiOiAvLyBLXG4gICAgICByZXR1cm4gdGhpcy5wYXJzZUsoYnVmZmVyLCBsZW5ndGgpO1xuXG4gICAgY2FzZSAweDQzOiAvLyBDXG4gICAgICByZXR1cm4gdGhpcy5wYXJzZUMoYnVmZmVyLCBsZW5ndGgpO1xuXG4gICAgY2FzZSAweDVhOiAvLyBaXG4gICAgICByZXR1cm4gdGhpcy5wYXJzZVooYnVmZmVyLCBsZW5ndGgpO1xuXG4gICAgY2FzZSAweDU0OiAvLyBUXG4gICAgICByZXR1cm4gdGhpcy5wYXJzZVQoYnVmZmVyLCBsZW5ndGgpO1xuXG4gICAgY2FzZSAweDQ0OiAvLyBEXG4gICAgICByZXR1cm4gdGhpcy5wYXJzZUQoYnVmZmVyLCBsZW5ndGgpO1xuXG4gICAgY2FzZSAweDQ1OiAvLyBFXG4gICAgICByZXR1cm4gdGhpcy5wYXJzZUUoYnVmZmVyLCBsZW5ndGgpO1xuXG4gICAgY2FzZSAweDRlOiAvLyBOXG4gICAgICByZXR1cm4gdGhpcy5wYXJzZU4oYnVmZmVyLCBsZW5ndGgpO1xuXG4gICAgY2FzZSAweDMxOiAvLyAxXG4gICAgICByZXR1cm4gbmV3IE1lc3NhZ2UoXCJwYXJzZUNvbXBsZXRlXCIsIGxlbmd0aCk7XG5cbiAgICBjYXNlIDB4MzI6IC8vIDJcbiAgICAgIHJldHVybiBuZXcgTWVzc2FnZShcImJpbmRDb21wbGV0ZVwiLCBsZW5ndGgpO1xuXG4gICAgY2FzZSAweDMzOiAvLyAzXG4gICAgICByZXR1cm4gbmV3IE1lc3NhZ2UoXCJjbG9zZUNvbXBsZXRlXCIsIGxlbmd0aCk7XG5cbiAgICBjYXNlIDB4NDE6IC8vIEFcbiAgICAgIHJldHVybiB0aGlzLnBhcnNlQShidWZmZXIsIGxlbmd0aCk7XG5cbiAgICBjYXNlIDB4NmU6IC8vIG5cbiAgICAgIHJldHVybiBuZXcgTWVzc2FnZShcIm5vRGF0YVwiLCBsZW5ndGgpO1xuXG4gICAgY2FzZSAweDQ5OiAvLyBJXG4gICAgICByZXR1cm4gbmV3IE1lc3NhZ2UoXCJlbXB0eVF1ZXJ5XCIsIGxlbmd0aCk7XG5cbiAgICBjYXNlIDB4NzM6IC8vIHNcbiAgICAgIHJldHVybiBuZXcgTWVzc2FnZShcInBvcnRhbFN1c3BlbmRlZFwiLCBsZW5ndGgpO1xuXG4gICAgY2FzZSAweDQ3OiAvLyBHXG4gICAgICByZXR1cm4gdGhpcy5wYXJzZUcoYnVmZmVyLCBsZW5ndGgpO1xuXG4gICAgY2FzZSAweDQ4OiAvLyBIXG4gICAgICByZXR1cm4gdGhpcy5wYXJzZUgoYnVmZmVyLCBsZW5ndGgpO1xuXG4gICAgY2FzZSAweDU3OiAvLyBXXG4gICAgICByZXR1cm4gbmV3IE1lc3NhZ2UoXCJyZXBsaWNhdGlvblN0YXJ0XCIsIGxlbmd0aCk7XG5cbiAgICBjYXNlIDB4NjM6IC8vIGNcbiAgICAgIHJldHVybiBuZXcgTWVzc2FnZShcImNvcHlEb25lXCIsIGxlbmd0aCk7XG5cbiAgICBjYXNlIDB4NjQ6IC8vIGRcbiAgICAgIHJldHVybiB0aGlzLnBhcnNlZChidWZmZXIsIGxlbmd0aCk7XG4gIH1cbn07XG5cbkNvbm5lY3Rpb24ucHJvdG90eXBlLnBhcnNlUiA9IGZ1bmN0aW9uKGJ1ZmZlciwgbGVuZ3RoKSB7XG4gIHZhciBjb2RlID0gdGhpcy5wYXJzZUludDMyKGJ1ZmZlcik7XG5cbiAgdmFyIG1zZyA9IG5ldyBNZXNzYWdlKFwiYXV0aGVudGljYXRpb25Pa1wiLCBsZW5ndGgpO1xuXG4gIHN3aXRjaCAoY29kZSkge1xuICAgIGNhc2UgMDogLy8gQXV0aGVudGljYXRpb25Pa1xuICAgICAgcmV0dXJuIG1zZztcbiAgICBjYXNlIDM6IC8vIEF1dGhlbnRpY2F0aW9uQ2xlYXJ0ZXh0UGFzc3dvcmRcbiAgICAgIGlmIChtc2cubGVuZ3RoID09PSA4KSB7XG4gICAgICAgIG1zZy5uYW1lID0gXCJhdXRoZW50aWNhdGlvbkNsZWFydGV4dFBhc3N3b3JkXCI7XG4gICAgICAgIHJldHVybiBtc2c7XG4gICAgICB9XG4gICAgICBicmVhaztcbiAgICBjYXNlIDU6IC8vIEF1dGhlbnRpY2F0aW9uTUQ1UGFzc3dvcmRcbiAgICAgIGlmIChtc2cubGVuZ3RoID09PSAxMikge1xuICAgICAgICBtc2cubmFtZSA9IFwiYXV0aGVudGljYXRpb25NRDVQYXNzd29yZFwiO1xuICAgICAgICBtc2cuc2FsdCA9IEJ1ZmZlci5hbGxvYyg0KTtcbiAgICAgICAgYnVmZmVyLmNvcHkobXNnLnNhbHQsIDAsIHRoaXMub2Zmc2V0LCB0aGlzLm9mZnNldCArIDQpO1xuICAgICAgICB0aGlzLm9mZnNldCArPSA0O1xuICAgICAgICByZXR1cm4gbXNnO1xuICAgICAgfVxuXG4gICAgICBicmVhaztcbiAgICBjYXNlIDEwOiAvLyBBdXRoZW50aWNhdGlvblNBU0xcbiAgICAgIG1zZy5uYW1lID0gXCJhdXRoZW50aWNhdGlvblNBU0xcIjtcbiAgICAgIG1zZy5tZWNoYW5pc21zID0gW107XG4gICAgICBkbyB7XG4gICAgICAgIHZhciBtZWNoYW5pc20gPSB0aGlzLnBhcnNlQ1N0cmluZyhidWZmZXIpO1xuXG4gICAgICAgIGlmIChtZWNoYW5pc20pIHtcbiAgICAgICAgICBtc2cubWVjaGFuaXNtcy5wdXNoKG1lY2hhbmlzbSk7XG4gICAgICAgIH1cbiAgICAgIH0gd2hpbGUgKG1lY2hhbmlzbSk7XG5cbiAgICAgIHJldHVybiBtc2c7XG4gICAgY2FzZSAxMTogLy8gQXV0aGVudGljYXRpb25TQVNMQ29udGludWVcbiAgICAgIG1zZy5uYW1lID0gXCJhdXRoZW50aWNhdGlvblNBU0xDb250aW51ZVwiO1xuICAgICAgbXNnLmRhdGEgPSB0aGlzLnJlYWRTdHJpbmcoYnVmZmVyLCBsZW5ndGggLSA0KTtcblxuICAgICAgcmV0dXJuIG1zZztcbiAgICBjYXNlIDEyOiAvLyBBdXRoZW50aWNhdGlvblNBU0xGaW5hbFxuICAgICAgbXNnLm5hbWUgPSBcImF1dGhlbnRpY2F0aW9uU0FTTEZpbmFsXCI7XG4gICAgICBtc2cuZGF0YSA9IHRoaXMucmVhZFN0cmluZyhidWZmZXIsIGxlbmd0aCAtIDQpO1xuXG4gICAgICByZXR1cm4gbXNnO1xuICB9XG5cbiAgdGhyb3cgbmV3IEVycm9yKFwiVW5rbm93biBhdXRoZW50aWNhdGlvbk9rIG1lc3NhZ2UgdHlwZVwiICsgdXRpbC5pbnNwZWN0KG1zZykpO1xufTtcblxuQ29ubmVjdGlvbi5wcm90b3R5cGUucGFyc2VTID0gZnVuY3Rpb24oYnVmZmVyLCBsZW5ndGgpIHtcbiAgdmFyIG1zZyA9IG5ldyBNZXNzYWdlKFwicGFyYW1ldGVyU3RhdHVzXCIsIGxlbmd0aCk7XG4gIG1zZy5wYXJhbWV0ZXJOYW1lID0gdGhpcy5wYXJzZUNTdHJpbmcoYnVmZmVyKTtcbiAgbXNnLnBhcmFtZXRlclZhbHVlID0gdGhpcy5wYXJzZUNTdHJpbmcoYnVmZmVyKTtcbiAgcmV0dXJuIG1zZztcbn07XG5cbkNvbm5lY3Rpb24ucHJvdG90eXBlLnBhcnNlSyA9IGZ1bmN0aW9uKGJ1ZmZlciwgbGVuZ3RoKSB7XG4gIHZhciBtc2cgPSBuZXcgTWVzc2FnZShcImJhY2tlbmRLZXlEYXRhXCIsIGxlbmd0aCk7XG4gIG1zZy5wcm9jZXNzSUQgPSB0aGlzLnBhcnNlSW50MzIoYnVmZmVyKTtcbiAgbXNnLnNlY3JldEtleSA9IHRoaXMucGFyc2VJbnQzMihidWZmZXIpO1xuICByZXR1cm4gbXNnO1xufTtcblxuQ29ubmVjdGlvbi5wcm90b3R5cGUucGFyc2VDID0gZnVuY3Rpb24oYnVmZmVyLCBsZW5ndGgpIHtcbiAgdmFyIG1zZyA9IG5ldyBNZXNzYWdlKFwiY29tbWFuZENvbXBsZXRlXCIsIGxlbmd0aCk7XG4gIG1zZy50ZXh0ID0gdGhpcy5wYXJzZUNTdHJpbmcoYnVmZmVyKTtcbiAgcmV0dXJuIG1zZztcbn07XG5cbkNvbm5lY3Rpb24ucHJvdG90eXBlLnBhcnNlWiA9IGZ1bmN0aW9uKGJ1ZmZlciwgbGVuZ3RoKSB7XG4gIHZhciBtc2cgPSBuZXcgTWVzc2FnZShcInJlYWR5Rm9yUXVlcnlcIiwgbGVuZ3RoKTtcbiAgbXNnLm5hbWUgPSBcInJlYWR5Rm9yUXVlcnlcIjtcbiAgbXNnLnN0YXR1cyA9IHRoaXMucmVhZFN0cmluZyhidWZmZXIsIDEpO1xuICByZXR1cm4gbXNnO1xufTtcblxudmFyIFJPV19ERVNDUklQVElPTiA9IFwicm93RGVzY3JpcHRpb25cIjtcbkNvbm5lY3Rpb24ucHJvdG90eXBlLnBhcnNlVCA9IGZ1bmN0aW9uKGJ1ZmZlciwgbGVuZ3RoKSB7XG4gIHZhciBtc2cgPSBuZXcgTWVzc2FnZShST1dfREVTQ1JJUFRJT04sIGxlbmd0aCk7XG4gIG1zZy5maWVsZENvdW50ID0gdGhpcy5wYXJzZUludDE2KGJ1ZmZlcik7XG4gIHZhciBmaWVsZHMgPSBbXTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBtc2cuZmllbGRDb3VudDsgaSsrKSB7XG4gICAgZmllbGRzLnB1c2godGhpcy5wYXJzZUZpZWxkKGJ1ZmZlcikpO1xuICB9XG4gIG1zZy5maWVsZHMgPSBmaWVsZHM7XG4gIHJldHVybiBtc2c7XG59O1xuXG52YXIgRmllbGQgPSBmdW5jdGlvbigpIHtcbiAgdGhpcy5uYW1lID0gbnVsbDtcbiAgdGhpcy50YWJsZUlEID0gbnVsbDtcbiAgdGhpcy5jb2x1bW5JRCA9IG51bGw7XG4gIHRoaXMuZGF0YVR5cGVJRCA9IG51bGw7XG4gIHRoaXMuZGF0YVR5cGVTaXplID0gbnVsbDtcbiAgdGhpcy5kYXRhVHlwZU1vZGlmaWVyID0gbnVsbDtcbiAgdGhpcy5mb3JtYXQgPSBudWxsO1xufTtcblxudmFyIEZPUk1BVF9URVhUID0gXCJ0ZXh0XCI7XG52YXIgRk9STUFUX0JJTkFSWSA9IFwiYmluYXJ5XCI7XG5Db25uZWN0aW9uLnByb3RvdHlwZS5wYXJzZUZpZWxkID0gZnVuY3Rpb24oYnVmZmVyKSB7XG4gIHZhciBmaWVsZCA9IG5ldyBGaWVsZCgpO1xuICBmaWVsZC5uYW1lID0gdGhpcy5wYXJzZUNTdHJpbmcoYnVmZmVyKTtcbiAgZmllbGQudGFibGVJRCA9IHRoaXMucGFyc2VJbnQzMihidWZmZXIpO1xuICBmaWVsZC5jb2x1bW5JRCA9IHRoaXMucGFyc2VJbnQxNihidWZmZXIpO1xuICBmaWVsZC5kYXRhVHlwZUlEID0gdGhpcy5wYXJzZUludDMyKGJ1ZmZlcik7XG4gIGZpZWxkLmRhdGFUeXBlU2l6ZSA9IHRoaXMucGFyc2VJbnQxNihidWZmZXIpO1xuICBmaWVsZC5kYXRhVHlwZU1vZGlmaWVyID0gdGhpcy5wYXJzZUludDMyKGJ1ZmZlcik7XG4gIGlmICh0aGlzLnBhcnNlSW50MTYoYnVmZmVyKSA9PT0gVEVYVF9NT0RFKSB7XG4gICAgdGhpcy5fbW9kZSA9IFRFWFRfTU9ERTtcbiAgICBmaWVsZC5mb3JtYXQgPSBGT1JNQVRfVEVYVDtcbiAgfSBlbHNlIHtcbiAgICB0aGlzLl9tb2RlID0gQklOQVJZX01PREU7XG4gICAgZmllbGQuZm9ybWF0ID0gRk9STUFUX0JJTkFSWTtcbiAgfVxuICByZXR1cm4gZmllbGQ7XG59O1xuXG52YXIgREFUQV9ST1cgPSBcImRhdGFSb3dcIjtcbnZhciBEYXRhUm93TWVzc2FnZSA9IGZ1bmN0aW9uKGxlbmd0aCwgZmllbGRDb3VudCkge1xuICB0aGlzLm5hbWUgPSBEQVRBX1JPVztcbiAgdGhpcy5sZW5ndGggPSBsZW5ndGg7XG4gIHRoaXMuZmllbGRDb3VudCA9IGZpZWxkQ291bnQ7XG4gIHRoaXMuZmllbGRzID0gW107XG59O1xuXG4vLyBleHRyZW1lbHkgaG90LXBhdGggY29kZVxuQ29ubmVjdGlvbi5wcm90b3R5cGUucGFyc2VEID0gZnVuY3Rpb24oYnVmZmVyLCBsZW5ndGgpIHtcbiAgdmFyIGZpZWxkQ291bnQgPSB0aGlzLnBhcnNlSW50MTYoYnVmZmVyKTtcbiAgdmFyIG1zZyA9IG5ldyBEYXRhUm93TWVzc2FnZShsZW5ndGgsIGZpZWxkQ291bnQpO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IGZpZWxkQ291bnQ7IGkrKykge1xuICAgIG1zZy5maWVsZHMucHVzaCh0aGlzLl9yZWFkVmFsdWUoYnVmZmVyKSk7XG4gIH1cbiAgcmV0dXJuIG1zZztcbn07XG5cbi8vIGV4dHJlbWVseSBob3QtcGF0aCBjb2RlXG5Db25uZWN0aW9uLnByb3RvdHlwZS5fcmVhZFZhbHVlID0gZnVuY3Rpb24oYnVmZmVyKSB7XG4gIHZhciBsZW5ndGggPSB0aGlzLnBhcnNlSW50MzIoYnVmZmVyKTtcbiAgaWYgKGxlbmd0aCA9PT0gLTEpIHJldHVybiBudWxsO1xuICBpZiAodGhpcy5fbW9kZSA9PT0gVEVYVF9NT0RFKSB7XG4gICAgcmV0dXJuIHRoaXMucmVhZFN0cmluZyhidWZmZXIsIGxlbmd0aCk7XG4gIH1cbiAgcmV0dXJuIHRoaXMucmVhZEJ5dGVzKGJ1ZmZlciwgbGVuZ3RoKTtcbn07XG5cbi8vIHBhcnNlcyBlcnJvclxuQ29ubmVjdGlvbi5wcm90b3R5cGUucGFyc2VFID0gZnVuY3Rpb24oYnVmZmVyLCBsZW5ndGgpIHtcbiAgdmFyIGZpZWxkcyA9IHt9O1xuICB2YXIgbXNnLCBpdGVtO1xuICB2YXIgaW5wdXQgPSBuZXcgTWVzc2FnZShcImVycm9yXCIsIGxlbmd0aCk7XG4gIHZhciBmaWVsZFR5cGUgPSB0aGlzLnJlYWRTdHJpbmcoYnVmZmVyLCAxKTtcbiAgd2hpbGUgKGZpZWxkVHlwZSAhPT0gXCJcXDBcIikge1xuICAgIGZpZWxkc1tmaWVsZFR5cGVdID0gdGhpcy5wYXJzZUNTdHJpbmcoYnVmZmVyKTtcbiAgICBmaWVsZFR5cGUgPSB0aGlzLnJlYWRTdHJpbmcoYnVmZmVyLCAxKTtcbiAgfVxuICBpZiAoaW5wdXQubmFtZSA9PT0gXCJlcnJvclwiKSB7XG4gICAgLy8gdGhlIG1zZyBpcyBhbiBFcnJvciBpbnN0YW5jZVxuICAgIG1zZyA9IG5ldyBFcnJvcihmaWVsZHMuTSk7XG4gICAgZm9yIChpdGVtIGluIGlucHV0KSB7XG4gICAgICAvLyBjb3B5IGlucHV0IHByb3BlcnRpZXMgdG8gdGhlIGVycm9yXG4gICAgICBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKGlucHV0LCBpdGVtKSkge1xuICAgICAgICBtc2dbaXRlbV0gPSBpbnB1dFtpdGVtXTtcbiAgICAgIH1cbiAgICB9XG4gIH0gZWxzZSB7XG4gICAgLy8gdGhlIG1zZyBpcyBhbiBvYmplY3QgbGl0ZXJhbFxuICAgIG1zZyA9IGlucHV0O1xuICAgIG1zZy5tZXNzYWdlID0gZmllbGRzLk07XG4gIH1cbiAgbXNnLnNldmVyaXR5ID0gZmllbGRzLlM7XG4gIG1zZy5jb2RlID0gZmllbGRzLkM7XG4gIG1zZy5kZXRhaWwgPSBmaWVsZHMuRDtcbiAgbXNnLmhpbnQgPSBmaWVsZHMuSDtcbiAgbXNnLnBvc2l0aW9uID0gZmllbGRzLlA7XG4gIG1zZy5pbnRlcm5hbFBvc2l0aW9uID0gZmllbGRzLnA7XG4gIG1zZy5pbnRlcm5hbFF1ZXJ5ID0gZmllbGRzLnE7XG4gIG1zZy53aGVyZSA9IGZpZWxkcy5XO1xuICBtc2cuc2NoZW1hID0gZmllbGRzLnM7XG4gIG1zZy50YWJsZSA9IGZpZWxkcy50O1xuICBtc2cuY29sdW1uID0gZmllbGRzLmM7XG4gIG1zZy5kYXRhVHlwZSA9IGZpZWxkcy5kO1xuICBtc2cuY29uc3RyYWludCA9IGZpZWxkcy5uO1xuICBtc2cuZmlsZSA9IGZpZWxkcy5GO1xuICBtc2cubGluZSA9IGZpZWxkcy5MO1xuICBtc2cucm91dGluZSA9IGZpZWxkcy5SO1xuICByZXR1cm4gbXNnO1xufTtcblxuLy8gc2FtZSB0aGluZywgZGlmZmVyZW50IG5hbWVcbkNvbm5lY3Rpb24ucHJvdG90eXBlLnBhcnNlTiA9IGZ1bmN0aW9uKGJ1ZmZlciwgbGVuZ3RoKSB7XG4gIHZhciBtc2cgPSB0aGlzLnBhcnNlRShidWZmZXIsIGxlbmd0aCk7XG4gIG1zZy5uYW1lID0gXCJub3RpY2VcIjtcbiAgcmV0dXJuIG1zZztcbn07XG5cbkNvbm5lY3Rpb24ucHJvdG90eXBlLnBhcnNlQSA9IGZ1bmN0aW9uKGJ1ZmZlciwgbGVuZ3RoKSB7XG4gIHZhciBtc2cgPSBuZXcgTWVzc2FnZShcIm5vdGlmaWNhdGlvblwiLCBsZW5ndGgpO1xuICBtc2cucHJvY2Vzc0lkID0gdGhpcy5wYXJzZUludDMyKGJ1ZmZlcik7XG4gIG1zZy5jaGFubmVsID0gdGhpcy5wYXJzZUNTdHJpbmcoYnVmZmVyKTtcbiAgbXNnLnBheWxvYWQgPSB0aGlzLnBhcnNlQ1N0cmluZyhidWZmZXIpO1xuICByZXR1cm4gbXNnO1xufTtcblxuQ29ubmVjdGlvbi5wcm90b3R5cGUucGFyc2VHID0gZnVuY3Rpb24oYnVmZmVyLCBsZW5ndGgpIHtcbiAgdmFyIG1zZyA9IG5ldyBNZXNzYWdlKFwiY29weUluUmVzcG9uc2VcIiwgbGVuZ3RoKTtcbiAgcmV0dXJuIHRoaXMucGFyc2VHSChidWZmZXIsIG1zZyk7XG59O1xuXG5Db25uZWN0aW9uLnByb3RvdHlwZS5wYXJzZUggPSBmdW5jdGlvbihidWZmZXIsIGxlbmd0aCkge1xuICB2YXIgbXNnID0gbmV3IE1lc3NhZ2UoXCJjb3B5T3V0UmVzcG9uc2VcIiwgbGVuZ3RoKTtcbiAgcmV0dXJuIHRoaXMucGFyc2VHSChidWZmZXIsIG1zZyk7XG59O1xuXG5Db25uZWN0aW9uLnByb3RvdHlwZS5wYXJzZUdIID0gZnVuY3Rpb24oYnVmZmVyLCBtc2cpIHtcbiAgdmFyIGlzQmluYXJ5ID0gYnVmZmVyW3RoaXMub2Zmc2V0XSAhPT0gMDtcbiAgdGhpcy5vZmZzZXQrKztcbiAgbXNnLmJpbmFyeSA9IGlzQmluYXJ5O1xuICB2YXIgY29sdW1uQ291bnQgPSB0aGlzLnBhcnNlSW50MTYoYnVmZmVyKTtcbiAgbXNnLmNvbHVtblR5cGVzID0gW107XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgY29sdW1uQ291bnQ7IGkrKykge1xuICAgIG1zZy5jb2x1bW5UeXBlcy5wdXNoKHRoaXMucGFyc2VJbnQxNihidWZmZXIpKTtcbiAgfVxuICByZXR1cm4gbXNnO1xufTtcblxuQ29ubmVjdGlvbi5wcm90b3R5cGUucGFyc2VkID0gZnVuY3Rpb24oYnVmZmVyLCBsZW5ndGgpIHtcbiAgdmFyIG1zZyA9IG5ldyBNZXNzYWdlKFwiY29weURhdGFcIiwgbGVuZ3RoKTtcbiAgbXNnLmNodW5rID0gdGhpcy5yZWFkQnl0ZXMoYnVmZmVyLCBtc2cubGVuZ3RoIC0gNCk7XG4gIHJldHVybiBtc2c7XG59O1xuXG5Db25uZWN0aW9uLnByb3RvdHlwZS5wYXJzZUludDMyID0gZnVuY3Rpb24oYnVmZmVyKSB7XG4gIHZhciB2YWx1ZSA9IGJ1ZmZlci5yZWFkSW50MzJCRSh0aGlzLm9mZnNldCk7XG4gIHRoaXMub2Zmc2V0ICs9IDQ7XG4gIHJldHVybiB2YWx1ZTtcbn07XG5cbkNvbm5lY3Rpb24ucHJvdG90eXBlLnBhcnNlSW50MTYgPSBmdW5jdGlvbihidWZmZXIpIHtcbiAgdmFyIHZhbHVlID0gYnVmZmVyLnJlYWRJbnQxNkJFKHRoaXMub2Zmc2V0KTtcbiAgdGhpcy5vZmZzZXQgKz0gMjtcbiAgcmV0dXJuIHZhbHVlO1xufTtcblxuQ29ubmVjdGlvbi5wcm90b3R5cGUucmVhZFN0cmluZyA9IGZ1bmN0aW9uKGJ1ZmZlciwgbGVuZ3RoKSB7XG4gIHJldHVybiBidWZmZXIudG9TdHJpbmcodGhpcy5lbmNvZGluZywgdGhpcy5vZmZzZXQsICh0aGlzLm9mZnNldCArPSBsZW5ndGgpKTtcbn07XG5cbkNvbm5lY3Rpb24ucHJvdG90eXBlLnJlYWRCeXRlcyA9IGZ1bmN0aW9uKGJ1ZmZlciwgbGVuZ3RoKSB7XG4gIHJldHVybiBidWZmZXIuc2xpY2UodGhpcy5vZmZzZXQsICh0aGlzLm9mZnNldCArPSBsZW5ndGgpKTtcbn07XG5cbkNvbm5lY3Rpb24ucHJvdG90eXBlLnBhcnNlQ1N0cmluZyA9IGZ1bmN0aW9uKGJ1ZmZlcikge1xuICB2YXIgc3RhcnQgPSB0aGlzLm9mZnNldDtcbiAgdmFyIGVuZCA9IGJ1ZmZlci5pbmRleE9mKDAsIHN0YXJ0KTtcbiAgdGhpcy5vZmZzZXQgPSBlbmQgKyAxO1xuICByZXR1cm4gYnVmZmVyLnRvU3RyaW5nKHRoaXMuZW5jb2RpbmcsIHN0YXJ0LCBlbmQpO1xufTtcbi8vIGVuZCBwYXJzaW5nIG1ldGhvZHNcbm1vZHVsZS5leHBvcnRzID0gQ29ubmVjdGlvbjtcbiIsIid1c2Ugc3RyaWN0J1xuLyoqXG4gKiBDb3B5cmlnaHQgKGMpIDIwMTAtMjAxNyBCcmlhbiBDYXJsc29uIChicmlhbi5tLmNhcmxzb25AZ21haWwuY29tKVxuICogQWxsIHJpZ2h0cyByZXNlcnZlZC5cbiAqXG4gKiBUaGlzIHNvdXJjZSBjb2RlIGlzIGxpY2Vuc2VkIHVuZGVyIHRoZSBNSVQgbGljZW5zZSBmb3VuZCBpbiB0aGVcbiAqIFJFQURNRS5tZCBmaWxlIGluIHRoZSByb290IGRpcmVjdG9yeSBvZiB0aGlzIHNvdXJjZSB0cmVlLlxuICovXG5cbm1vZHVsZS5leHBvcnRzID0ge1xuICAvLyBkYXRhYmFzZSBob3N0LiBkZWZhdWx0cyB0byBsb2NhbGhvc3RcbiAgaG9zdDogJ2xvY2FsaG9zdCcsXG5cbiAgLy8gZGF0YWJhc2UgdXNlcidzIG5hbWVcbiAgdXNlcjogcHJvY2Vzcy5wbGF0Zm9ybSA9PT0gJ3dpbjMyJyA/IHByb2Nlc3MuZW52LlVTRVJOQU1FIDogcHJvY2Vzcy5lbnYuVVNFUixcblxuICAvLyBuYW1lIG9mIGRhdGFiYXNlIHRvIGNvbm5lY3RcbiAgZGF0YWJhc2U6IHByb2Nlc3MucGxhdGZvcm0gPT09ICd3aW4zMicgPyBwcm9jZXNzLmVudi5VU0VSTkFNRSA6IHByb2Nlc3MuZW52LlVTRVIsXG5cbiAgLy8gZGF0YWJhc2UgdXNlcidzIHBhc3N3b3JkXG4gIHBhc3N3b3JkOiBudWxsLFxuXG4gIC8vIGEgUG9zdGdyZXMgY29ubmVjdGlvbiBzdHJpbmcgdG8gYmUgdXNlZCBpbnN0ZWFkIG9mIHNldHRpbmcgaW5kaXZpZHVhbCBjb25uZWN0aW9uIGl0ZW1zXG4gIC8vIE5PVEU6ICBTZXR0aW5nIHRoaXMgdmFsdWUgd2lsbCBjYXVzZSBpdCB0byBvdmVycmlkZSBhbnkgb3RoZXIgdmFsdWUgKHN1Y2ggYXMgZGF0YWJhc2Ugb3IgdXNlcikgZGVmaW5lZFxuICAvLyBpbiB0aGUgZGVmYXVsdHMgb2JqZWN0LlxuICBjb25uZWN0aW9uU3RyaW5nOiB1bmRlZmluZWQsXG5cbiAgLy8gZGF0YWJhc2UgcG9ydFxuICBwb3J0OiA1NDMyLFxuXG4gIC8vIG51bWJlciBvZiByb3dzIHRvIHJldHVybiBhdCBhIHRpbWUgZnJvbSBhIHByZXBhcmVkIHN0YXRlbWVudCdzXG4gIC8vIHBvcnRhbC4gMCB3aWxsIHJldHVybiBhbGwgcm93cyBhdCBvbmNlXG4gIHJvd3M6IDAsXG5cbiAgLy8gYmluYXJ5IHJlc3VsdCBtb2RlXG4gIGJpbmFyeTogZmFsc2UsXG5cbiAgLy8gQ29ubmVjdGlvbiBwb29sIG9wdGlvbnMgLSBzZWUgaHR0cHM6Ly9naXRodWIuY29tL2JyaWFuYy9ub2RlLXBnLXBvb2xcblxuICAvLyBudW1iZXIgb2YgY29ubmVjdGlvbnMgdG8gdXNlIGluIGNvbm5lY3Rpb24gcG9vbFxuICAvLyAwIHdpbGwgZGlzYWJsZSBjb25uZWN0aW9uIHBvb2xpbmdcbiAgbWF4OiAxMCxcblxuICAvLyBtYXggbWlsbGlzZWNvbmRzIGEgY2xpZW50IGNhbiBnbyB1bnVzZWQgYmVmb3JlIGl0IGlzIHJlbW92ZWRcbiAgLy8gZnJvbSB0aGUgcG9vbCBhbmQgZGVzdHJveWVkXG4gIGlkbGVUaW1lb3V0TWlsbGlzOiAzMDAwMCxcblxuICBjbGllbnRfZW5jb2Rpbmc6ICcnLFxuXG4gIHNzbDogZmFsc2UsXG5cbiAgYXBwbGljYXRpb25fbmFtZTogdW5kZWZpbmVkLFxuXG4gIGZhbGxiYWNrX2FwcGxpY2F0aW9uX25hbWU6IHVuZGVmaW5lZCxcblxuICBwYXJzZUlucHV0RGF0ZXNBc1VUQzogZmFsc2UsXG5cbiAgLy8gbWF4IG1pbGxpc2Vjb25kcyBhbnkgcXVlcnkgdXNpbmcgdGhpcyBjb25uZWN0aW9uIHdpbGwgZXhlY3V0ZSBmb3IgYmVmb3JlIHRpbWluZyBvdXQgaW4gZXJyb3IuXG4gIC8vIGZhbHNlPXVubGltaXRlZFxuICBzdGF0ZW1lbnRfdGltZW91dDogZmFsc2UsXG5cbiAgLy8gbWF4IG1pbGxpc2Vjb25kcyB0byB3YWl0IGZvciBxdWVyeSB0byBjb21wbGV0ZSAoY2xpZW50IHNpZGUpXG4gIHF1ZXJ5X3RpbWVvdXQ6IGZhbHNlLFxuXG4gIGNvbm5lY3RfdGltZW91dDogMCxcblxuICBrZWVwYWxpdmVzOiAxLFxuXG4gIGtlZXBhbGl2ZXNfaWRsZTogMFxufVxuXG52YXIgcGdUeXBlcyA9IHJlcXVpcmUoJ3BnLXR5cGVzJylcbi8vIHNhdmUgZGVmYXVsdCBwYXJzZXJzXG52YXIgcGFyc2VCaWdJbnRlZ2VyID0gcGdUeXBlcy5nZXRUeXBlUGFyc2VyKDIwLCAndGV4dCcpXG52YXIgcGFyc2VCaWdJbnRlZ2VyQXJyYXkgPSBwZ1R5cGVzLmdldFR5cGVQYXJzZXIoMTAxNiwgJ3RleHQnKVxuXG4vLyBwYXJzZSBpbnQ4IHNvIHlvdSBjYW4gZ2V0IHlvdXIgY291bnQgdmFsdWVzIGFzIGFjdHVhbCBudW1iZXJzXG5tb2R1bGUuZXhwb3J0cy5fX2RlZmluZVNldHRlcl9fKCdwYXJzZUludDgnLCBmdW5jdGlvbiAodmFsKSB7XG4gIHBnVHlwZXMuc2V0VHlwZVBhcnNlcigyMCwgJ3RleHQnLCB2YWwgPyBwZ1R5cGVzLmdldFR5cGVQYXJzZXIoMjMsICd0ZXh0JykgOiBwYXJzZUJpZ0ludGVnZXIpXG4gIHBnVHlwZXMuc2V0VHlwZVBhcnNlcigxMDE2LCAndGV4dCcsIHZhbCA/IHBnVHlwZXMuZ2V0VHlwZVBhcnNlcigxMDA3LCAndGV4dCcpIDogcGFyc2VCaWdJbnRlZ2VyQXJyYXkpXG59KVxuIiwiXCJ1c2Ugc3RyaWN0XCI7XG4vKipcbiAqIENvcHlyaWdodCAoYykgMjAxMC0yMDE3IEJyaWFuIENhcmxzb24gKGJyaWFuLm0uY2FybHNvbkBnbWFpbC5jb20pXG4gKiBBbGwgcmlnaHRzIHJlc2VydmVkLlxuICpcbiAqIFRoaXMgc291cmNlIGNvZGUgaXMgbGljZW5zZWQgdW5kZXIgdGhlIE1JVCBsaWNlbnNlIGZvdW5kIGluIHRoZVxuICogUkVBRE1FLm1kIGZpbGUgaW4gdGhlIHJvb3QgZGlyZWN0b3J5IG9mIHRoaXMgc291cmNlIHRyZWUuXG4gKi9cblxudmFyIHV0aWwgPSByZXF1aXJlKFwidXRpbFwiKTtcbnZhciBDbGllbnQgPSByZXF1aXJlKFwiLi9jbGllbnRcIik7XG52YXIgZGVmYXVsdHMgPSByZXF1aXJlKFwiLi9kZWZhdWx0c1wiKTtcbnZhciBDb25uZWN0aW9uID0gcmVxdWlyZShcIi4vY29ubmVjdGlvblwiKTtcbnZhciBQb29sID0gcmVxdWlyZShcIi4vcG9vbFwiKTtcblxuY29uc3QgcG9vbEZhY3RvcnkgPSBDbGllbnQgPT4ge1xuICB2YXIgQm91bmRQb29sID0gZnVuY3Rpb24ob3B0aW9ucykge1xuICAgIHZhciBjb25maWcgPSBPYmplY3QuYXNzaWduKHsgQ2xpZW50OiBDbGllbnQgfSwgb3B0aW9ucyk7XG4gICAgcmV0dXJuIG5ldyBQb29sKGNvbmZpZyk7XG4gIH07XG5cbiAgdXRpbC5pbmhlcml0cyhCb3VuZFBvb2wsIFBvb2wpO1xuXG4gIHJldHVybiBCb3VuZFBvb2w7XG59O1xuXG52YXIgUEcgPSBmdW5jdGlvbihjbGllbnRDb25zdHJ1Y3Rvcikge1xuICB0aGlzLmRlZmF1bHRzID0gZGVmYXVsdHM7XG4gIHRoaXMuQ2xpZW50ID0gY2xpZW50Q29uc3RydWN0b3I7XG4gIHRoaXMuUXVlcnkgPSB0aGlzLkNsaWVudC5RdWVyeTtcbiAgdGhpcy5Qb29sID0gcG9vbEZhY3RvcnkodGhpcy5DbGllbnQpO1xuICB0aGlzLl9wb29scyA9IFtdO1xuICB0aGlzLkNvbm5lY3Rpb24gPSBDb25uZWN0aW9uO1xuICB0aGlzLnR5cGVzID0gcmVxdWlyZShcInBnLXR5cGVzXCIpO1xufTtcblxubW9kdWxlLmV4cG9ydHMgPSBuZXcgUEcoQ2xpZW50KTtcbiIsIlwidXNlIHN0cmljdFwiO1xuY29uc3QgRXZlbnRFbWl0dGVyID0gcmVxdWlyZShcImV2ZW50c1wiKS5FdmVudEVtaXR0ZXI7XG5cbmNvbnN0IE5PT1AgPSBmdW5jdGlvbigpIHt9O1xuXG5jb25zdCByZW1vdmVXaGVyZSA9IChsaXN0LCBwcmVkaWNhdGUpID0+IHtcbiAgY29uc3QgaSA9IGxpc3QuZmluZEluZGV4KHByZWRpY2F0ZSk7XG5cbiAgcmV0dXJuIGkgPT09IC0xID8gdW5kZWZpbmVkIDogbGlzdC5zcGxpY2UoaSwgMSlbMF07XG59O1xuXG5jbGFzcyBJZGxlSXRlbSB7XG4gIGNvbnN0cnVjdG9yKGNsaWVudCwgaWRsZUxpc3RlbmVyLCB0aW1lb3V0SWQpIHtcbiAgICB0aGlzLmNsaWVudCA9IGNsaWVudDtcbiAgICB0aGlzLmlkbGVMaXN0ZW5lciA9IGlkbGVMaXN0ZW5lcjtcbiAgICB0aGlzLnRpbWVvdXRJZCA9IHRpbWVvdXRJZDtcbiAgfVxufVxuXG5jbGFzcyBQZW5kaW5nSXRlbSB7XG4gIGNvbnN0cnVjdG9yKGNhbGxiYWNrKSB7XG4gICAgdGhpcy5jYWxsYmFjayA9IGNhbGxiYWNrO1xuICB9XG59XG5cbmZ1bmN0aW9uIHByb21pc2lmeShQcm9taXNlLCBjYWxsYmFjaykge1xuICBpZiAoY2FsbGJhY2spIHtcbiAgICByZXR1cm4geyBjYWxsYmFjazogY2FsbGJhY2ssIHJlc3VsdDogdW5kZWZpbmVkIH07XG4gIH1cbiAgbGV0IHJlajtcbiAgbGV0IHJlcztcbiAgY29uc3QgY2IgPSBmdW5jdGlvbihlcnIsIGNsaWVudCkge1xuICAgIGVyciA/IHJlaihlcnIpIDogcmVzKGNsaWVudCk7XG4gIH07XG4gIGNvbnN0IHJlc3VsdCA9IG5ldyBQcm9taXNlKGZ1bmN0aW9uKHJlc29sdmUsIHJlamVjdCkge1xuICAgIHJlcyA9IHJlc29sdmU7XG4gICAgcmVqID0gcmVqZWN0O1xuICB9KTtcbiAgcmV0dXJuIHsgY2FsbGJhY2s6IGNiLCByZXN1bHQ6IHJlc3VsdCB9O1xufVxuXG5mdW5jdGlvbiBtYWtlSWRsZUxpc3RlbmVyKHBvb2wsIGNsaWVudCkge1xuICByZXR1cm4gZnVuY3Rpb24gaWRsZUxpc3RlbmVyKGVycikge1xuICAgIGVyci5jbGllbnQgPSBjbGllbnQ7XG5cbiAgICBjbGllbnQucmVtb3ZlTGlzdGVuZXIoXCJlcnJvclwiLCBpZGxlTGlzdGVuZXIpO1xuICAgIGNsaWVudC5vbihcImVycm9yXCIsICgpID0+IHtcbiAgICAgIHBvb2wubG9nKFwiYWRkaXRpb25hbCBjbGllbnQgZXJyb3IgYWZ0ZXIgZGlzY29ubmVjdGlvbiBkdWUgdG8gZXJyb3JcIiwgZXJyKTtcbiAgICB9KTtcbiAgICBwb29sLl9yZW1vdmUoY2xpZW50KTtcbiAgICAvLyBUT0RPIC0gZG9jdW1lbnQgdGhhdCBvbmNlIHRoZSBwb29sIGVtaXRzIGFuIGVycm9yXG4gICAgLy8gdGhlIGNsaWVudCBoYXMgYWxyZWFkeSBiZWVuIGNsb3NlZCAmIHB1cmdlZCBhbmQgaXMgdW51c2FibGVcbiAgICBwb29sLmVtaXQoXCJlcnJvclwiLCBlcnIsIGNsaWVudCk7XG4gIH07XG59XG5cbmNsYXNzIFBvb2wgZXh0ZW5kcyBFdmVudEVtaXR0ZXIge1xuICBjb25zdHJ1Y3RvcihvcHRpb25zLCBDbGllbnQpIHtcbiAgICBzdXBlcigpO1xuICAgIHRoaXMub3B0aW9ucyA9IE9iamVjdC5hc3NpZ24oe30sIG9wdGlvbnMpO1xuICAgIHRoaXMub3B0aW9ucy5tYXggPSB0aGlzLm9wdGlvbnMubWF4IHx8IHRoaXMub3B0aW9ucy5wb29sU2l6ZSB8fCAxMDtcbiAgICB0aGlzLmxvZyA9IHRoaXMub3B0aW9ucy5sb2cgfHwgZnVuY3Rpb24oKSB7fTtcbiAgICB0aGlzLkNsaWVudCA9IHRoaXMub3B0aW9ucy5DbGllbnQgfHwgQ2xpZW50IHx8IHJlcXVpcmUoXCIuL2NsaWVudFwiKTtcbiAgICB0aGlzLlByb21pc2UgPSB0aGlzLm9wdGlvbnMuUHJvbWlzZSB8fCBnbG9iYWwuUHJvbWlzZTtcblxuICAgIGlmICh0eXBlb2YgdGhpcy5vcHRpb25zLmlkbGVUaW1lb3V0TWlsbGlzID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICB0aGlzLm9wdGlvbnMuaWRsZVRpbWVvdXRNaWxsaXMgPSAxMDAwMDtcbiAgICB9XG5cbiAgICB0aGlzLl9jbGllbnRzID0gW107XG4gICAgdGhpcy5faWRsZSA9IFtdO1xuICAgIHRoaXMuX3BlbmRpbmdRdWV1ZSA9IFtdO1xuICAgIHRoaXMuX2VuZENhbGxiYWNrID0gdW5kZWZpbmVkO1xuICAgIHRoaXMuZW5kaW5nID0gZmFsc2U7XG4gICAgdGhpcy5lbmRlZCA9IGZhbHNlO1xuICB9XG5cbiAgX2lzRnVsbCgpIHtcbiAgICByZXR1cm4gdGhpcy5fY2xpZW50cy5sZW5ndGggPj0gdGhpcy5vcHRpb25zLm1heDtcbiAgfVxuXG4gIF9wdWxzZVF1ZXVlKCkge1xuICAgIHRoaXMubG9nKFwicHVsc2UgcXVldWVcIik7XG4gICAgaWYgKHRoaXMuZW5kZWQpIHtcbiAgICAgIHRoaXMubG9nKFwicHVsc2UgcXVldWUgZW5kZWRcIik7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIGlmICh0aGlzLmVuZGluZykge1xuICAgICAgdGhpcy5sb2coXCJwdWxzZSBxdWV1ZSBvbiBlbmRpbmdcIik7XG4gICAgICBpZiAodGhpcy5faWRsZS5sZW5ndGgpIHtcbiAgICAgICAgdGhpcy5faWRsZS5zbGljZSgpLm1hcChpdGVtID0+IHtcbiAgICAgICAgICB0aGlzLl9yZW1vdmUoaXRlbS5jbGllbnQpO1xuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICAgIGlmICghdGhpcy5fY2xpZW50cy5sZW5ndGgpIHtcbiAgICAgICAgdGhpcy5lbmRlZCA9IHRydWU7XG4gICAgICAgIHRoaXMuX2VuZENhbGxiYWNrKCk7XG4gICAgICB9XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIC8vIGlmIHdlIGRvbid0IGhhdmUgYW55IHdhaXRpbmcsIGRvIG5vdGhpbmdcbiAgICBpZiAoIXRoaXMuX3BlbmRpbmdRdWV1ZS5sZW5ndGgpIHtcbiAgICAgIHRoaXMubG9nKFwibm8gcXVldWVkIHJlcXVlc3RzXCIpO1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICAvLyBpZiB3ZSBkb24ndCBoYXZlIGFueSBpZGxlIGNsaWVudHMgYW5kIHdlIGhhdmUgbm8gbW9yZSByb29tIGRvIG5vdGhpbmdcbiAgICBpZiAoIXRoaXMuX2lkbGUubGVuZ3RoICYmIHRoaXMuX2lzRnVsbCgpKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIGNvbnN0IHBlbmRpbmdJdGVtID0gdGhpcy5fcGVuZGluZ1F1ZXVlLnNoaWZ0KCk7XG4gICAgaWYgKHRoaXMuX2lkbGUubGVuZ3RoKSB7XG4gICAgICBjb25zdCBpZGxlSXRlbSA9IHRoaXMuX2lkbGUucG9wKCk7XG4gICAgICBjbGVhclRpbWVvdXQoaWRsZUl0ZW0udGltZW91dElkKTtcbiAgICAgIGNvbnN0IGNsaWVudCA9IGlkbGVJdGVtLmNsaWVudDtcbiAgICAgIGNvbnN0IGlkbGVMaXN0ZW5lciA9IGlkbGVJdGVtLmlkbGVMaXN0ZW5lcjtcblxuICAgICAgcmV0dXJuIHRoaXMuX2FjcXVpcmVDbGllbnQoY2xpZW50LCBwZW5kaW5nSXRlbSwgaWRsZUxpc3RlbmVyLCBmYWxzZSk7XG4gICAgfVxuICAgIGlmICghdGhpcy5faXNGdWxsKCkpIHtcbiAgICAgIHJldHVybiB0aGlzLm5ld0NsaWVudChwZW5kaW5nSXRlbSk7XG4gICAgfVxuICAgIHRocm93IG5ldyBFcnJvcihcInVuZXhwZWN0ZWQgY29uZGl0aW9uXCIpO1xuICB9XG5cbiAgX3JlbW92ZShjbGllbnQpIHtcbiAgICBjb25zdCByZW1vdmVkID0gcmVtb3ZlV2hlcmUodGhpcy5faWRsZSwgaXRlbSA9PiBpdGVtLmNsaWVudCA9PT0gY2xpZW50KTtcblxuICAgIGlmIChyZW1vdmVkICE9PSB1bmRlZmluZWQpIHtcbiAgICAgIGNsZWFyVGltZW91dChyZW1vdmVkLnRpbWVvdXRJZCk7XG4gICAgfVxuXG4gICAgdGhpcy5fY2xpZW50cyA9IHRoaXMuX2NsaWVudHMuZmlsdGVyKGMgPT4gYyAhPT0gY2xpZW50KTtcbiAgICBjbGllbnQuZW5kKCk7XG4gICAgdGhpcy5lbWl0KFwicmVtb3ZlXCIsIGNsaWVudCk7XG4gIH1cblxuICBjb25uZWN0KGNiKSB7XG4gICAgaWYgKHRoaXMuZW5kaW5nKSB7XG4gICAgICBjb25zdCBlcnIgPSBuZXcgRXJyb3IoXCJDYW5ub3QgdXNlIGEgcG9vbCBhZnRlciBjYWxsaW5nIGVuZCBvbiB0aGUgcG9vbFwiKTtcbiAgICAgIHJldHVybiBjYiA/IGNiKGVycikgOiB0aGlzLlByb21pc2UucmVqZWN0KGVycik7XG4gICAgfVxuXG4gICAgY29uc3QgcmVzcG9uc2UgPSBwcm9taXNpZnkodGhpcy5Qcm9taXNlLCBjYik7XG4gICAgY29uc3QgcmVzdWx0ID0gcmVzcG9uc2UucmVzdWx0O1xuXG4gICAgLy8gaWYgd2UgZG9uJ3QgaGF2ZSB0byBjb25uZWN0IGEgbmV3IGNsaWVudCwgZG9uJ3QgZG8gc29cbiAgICBpZiAodGhpcy5fY2xpZW50cy5sZW5ndGggPj0gdGhpcy5vcHRpb25zLm1heCB8fCB0aGlzLl9pZGxlLmxlbmd0aCkge1xuICAgICAgLy8gaWYgd2UgaGF2ZSBpZGxlIGNsaWVudHMgc2NoZWR1bGUgYSBwdWxzZSBpbW1lZGlhdGVseVxuICAgICAgaWYgKHRoaXMuX2lkbGUubGVuZ3RoKSB7XG4gICAgICAgIHByb2Nlc3MubmV4dFRpY2soKCkgPT4gdGhpcy5fcHVsc2VRdWV1ZSgpKTtcbiAgICAgIH1cblxuICAgICAgaWYgKCF0aGlzLm9wdGlvbnMuY29ubmVjdGlvblRpbWVvdXRNaWxsaXMpIHtcbiAgICAgICAgdGhpcy5fcGVuZGluZ1F1ZXVlLnB1c2gobmV3IFBlbmRpbmdJdGVtKHJlc3BvbnNlLmNhbGxiYWNrKSk7XG4gICAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgICB9XG5cbiAgICAgIGNvbnN0IHF1ZXVlQ2FsbGJhY2sgPSAoZXJyLCByZXMsIGRvbmUpID0+IHtcbiAgICAgICAgY2xlYXJUaW1lb3V0KHRpZCk7XG4gICAgICAgIHJlc3BvbnNlLmNhbGxiYWNrKGVyciwgcmVzLCBkb25lKTtcbiAgICAgIH07XG5cbiAgICAgIGNvbnN0IHBlbmRpbmdJdGVtID0gbmV3IFBlbmRpbmdJdGVtKHF1ZXVlQ2FsbGJhY2spO1xuXG4gICAgICAvLyBzZXQgY29ubmVjdGlvbiB0aW1lb3V0IG9uIGNoZWNraW5nIG91dCBhbiBleGlzdGluZyBjbGllbnRcbiAgICAgIGNvbnN0IHRpZCA9IHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAvLyByZW1vdmUgdGhlIGNhbGxiYWNrIGZyb20gcGVuZGluZyB3YWl0ZXJzIGJlY2F1c2VcbiAgICAgICAgLy8gd2UncmUgZ29pbmcgdG8gY2FsbCBpdCB3aXRoIGEgdGltZW91dCBlcnJvclxuICAgICAgICByZW1vdmVXaGVyZSh0aGlzLl9wZW5kaW5nUXVldWUsIGkgPT4gaS5jYWxsYmFjayA9PT0gcXVldWVDYWxsYmFjayk7XG4gICAgICAgIHBlbmRpbmdJdGVtLnRpbWVkT3V0ID0gdHJ1ZTtcbiAgICAgICAgcmVzcG9uc2UuY2FsbGJhY2sobmV3IEVycm9yKFwidGltZW91dCBleGNlZWRlZCB3aGVuIHRyeWluZyB0byBjb25uZWN0XCIpKTtcbiAgICAgIH0sIHRoaXMub3B0aW9ucy5jb25uZWN0aW9uVGltZW91dE1pbGxpcyk7XG5cbiAgICAgIHRoaXMuX3BlbmRpbmdRdWV1ZS5wdXNoKHBlbmRpbmdJdGVtKTtcbiAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgfVxuXG4gICAgdGhpcy5uZXdDbGllbnQobmV3IFBlbmRpbmdJdGVtKHJlc3BvbnNlLmNhbGxiYWNrKSk7XG5cbiAgICByZXR1cm4gcmVzdWx0O1xuICB9XG5cbiAgbmV3Q2xpZW50KHBlbmRpbmdJdGVtKSB7XG4gICAgY29uc3QgY2xpZW50ID0gbmV3IHRoaXMuQ2xpZW50KHRoaXMub3B0aW9ucyk7XG4gICAgdGhpcy5fY2xpZW50cy5wdXNoKGNsaWVudCk7XG4gICAgY29uc3QgaWRsZUxpc3RlbmVyID0gbWFrZUlkbGVMaXN0ZW5lcih0aGlzLCBjbGllbnQpO1xuXG4gICAgdGhpcy5sb2coXCJjaGVja2luZyBjbGllbnQgdGltZW91dFwiKTtcblxuICAgIC8vIGNvbm5lY3Rpb24gdGltZW91dCBsb2dpY1xuICAgIGxldCB0aWQ7XG4gICAgbGV0IHRpbWVvdXRIaXQgPSBmYWxzZTtcbiAgICBpZiAodGhpcy5vcHRpb25zLmNvbm5lY3Rpb25UaW1lb3V0TWlsbGlzKSB7XG4gICAgICB0aWQgPSBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgdGhpcy5sb2coXCJlbmRpbmcgY2xpZW50IGR1ZSB0byB0aW1lb3V0XCIpO1xuICAgICAgICB0aW1lb3V0SGl0ID0gdHJ1ZTtcbiAgICAgICAgLy8gZm9yY2Uga2lsbCB0aGUgbm9kZSBkcml2ZXIsIGFuZCBsZXQgbGlicHEgZG8gaXRzIHRlYXJkb3duXG4gICAgICAgIGNsaWVudC5jb25uZWN0aW9uID8gY2xpZW50LmNvbm5lY3Rpb24uc3RyZWFtLmRlc3Ryb3koKSA6IGNsaWVudC5lbmQoKTtcbiAgICAgIH0sIHRoaXMub3B0aW9ucy5jb25uZWN0aW9uVGltZW91dE1pbGxpcyk7XG4gICAgfVxuXG4gICAgdGhpcy5sb2coXCJjb25uZWN0aW5nIG5ldyBjbGllbnRcIik7XG4gICAgY2xpZW50LmNvbm5lY3QoZXJyID0+IHtcbiAgICAgIGlmICh0aWQpIHtcbiAgICAgICAgY2xlYXJUaW1lb3V0KHRpZCk7XG4gICAgICB9XG4gICAgICBjbGllbnQub24oXCJlcnJvclwiLCBpZGxlTGlzdGVuZXIpO1xuICAgICAgaWYgKGVycikge1xuICAgICAgICB0aGlzLmxvZyhcImNsaWVudCBmYWlsZWQgdG8gY29ubmVjdFwiLCBlcnIpO1xuICAgICAgICAvLyByZW1vdmUgdGhlIGRlYWQgY2xpZW50IGZyb20gb3VyIGxpc3Qgb2YgY2xpZW50c1xuICAgICAgICB0aGlzLl9jbGllbnRzID0gdGhpcy5fY2xpZW50cy5maWx0ZXIoYyA9PiBjICE9PSBjbGllbnQpO1xuICAgICAgICBpZiAodGltZW91dEhpdCkge1xuICAgICAgICAgIGVyci5tZXNzYWdlID0gXCJDb25uZWN0aW9uIHRlcm1pbmF0ZWQgZHVlIHRvIGNvbm5lY3Rpb24gdGltZW91dFwiO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gdGhpcyBjbGllbnQgd29u4oCZdCBiZSByZWxlYXNlZCwgc28gbW92ZSBvbiBpbW1lZGlhdGVseVxuICAgICAgICB0aGlzLl9wdWxzZVF1ZXVlKCk7XG5cbiAgICAgICAgaWYgKCFwZW5kaW5nSXRlbS50aW1lZE91dCkge1xuICAgICAgICAgIHBlbmRpbmdJdGVtLmNhbGxiYWNrKGVyciwgdW5kZWZpbmVkLCBOT09QKTtcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhpcy5sb2coXCJuZXcgY2xpZW50IGNvbm5lY3RlZFwiKTtcblxuICAgICAgICByZXR1cm4gdGhpcy5fYWNxdWlyZUNsaWVudChjbGllbnQsIHBlbmRpbmdJdGVtLCBpZGxlTGlzdGVuZXIsIHRydWUpO1xuICAgICAgfVxuICAgIH0pO1xuICB9XG5cbiAgLy8gYWNxdWlyZSBhIGNsaWVudCBmb3IgYSBwZW5kaW5nIHdvcmsgaXRlbVxuICBfYWNxdWlyZUNsaWVudChjbGllbnQsIHBlbmRpbmdJdGVtLCBpZGxlTGlzdGVuZXIsIGlzTmV3KSB7XG4gICAgaWYgKGlzTmV3KSB7XG4gICAgICB0aGlzLmVtaXQoXCJjb25uZWN0XCIsIGNsaWVudCk7XG4gICAgfVxuXG4gICAgdGhpcy5lbWl0KFwiYWNxdWlyZVwiLCBjbGllbnQpO1xuXG4gICAgbGV0IHJlbGVhc2VkID0gZmFsc2U7XG5cbiAgICBjbGllbnQucmVsZWFzZSA9IGVyciA9PiB7XG4gICAgICBpZiAocmVsZWFzZWQpIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKFxuICAgICAgICAgIFwiUmVsZWFzZSBjYWxsZWQgb24gY2xpZW50IHdoaWNoIGhhcyBhbHJlYWR5IGJlZW4gcmVsZWFzZWQgdG8gdGhlIHBvb2wuXCJcbiAgICAgICAgKTtcbiAgICAgIH1cblxuICAgICAgcmVsZWFzZWQgPSB0cnVlO1xuICAgICAgdGhpcy5fcmVsZWFzZShjbGllbnQsIGlkbGVMaXN0ZW5lciwgZXJyKTtcbiAgICB9O1xuXG4gICAgY2xpZW50LnJlbW92ZUxpc3RlbmVyKFwiZXJyb3JcIiwgaWRsZUxpc3RlbmVyKTtcblxuICAgIGlmICghcGVuZGluZ0l0ZW0udGltZWRPdXQpIHtcbiAgICAgIGlmIChpc05ldyAmJiB0aGlzLm9wdGlvbnMudmVyaWZ5KSB7XG4gICAgICAgIHRoaXMub3B0aW9ucy52ZXJpZnkoY2xpZW50LCBlcnIgPT4ge1xuICAgICAgICAgIGlmIChlcnIpIHtcbiAgICAgICAgICAgIGNsaWVudC5yZWxlYXNlKGVycik7XG4gICAgICAgICAgICByZXR1cm4gcGVuZGluZ0l0ZW0uY2FsbGJhY2soZXJyLCB1bmRlZmluZWQsIE5PT1ApO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIHBlbmRpbmdJdGVtLmNhbGxiYWNrKHVuZGVmaW5lZCwgY2xpZW50LCBjbGllbnQucmVsZWFzZSk7XG4gICAgICAgIH0pO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcGVuZGluZ0l0ZW0uY2FsbGJhY2sodW5kZWZpbmVkLCBjbGllbnQsIGNsaWVudC5yZWxlYXNlKTtcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgaWYgKGlzTmV3ICYmIHRoaXMub3B0aW9ucy52ZXJpZnkpIHtcbiAgICAgICAgdGhpcy5vcHRpb25zLnZlcmlmeShjbGllbnQsIGNsaWVudC5yZWxlYXNlKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGNsaWVudC5yZWxlYXNlKCk7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgLy8gcmVsZWFzZSBhIGNsaWVudCBiYWNrIHRvIHRoZSBwb2xsLCBpbmNsdWRlIGFuIGVycm9yXG4gIC8vIHRvIHJlbW92ZSBpdCBmcm9tIHRoZSBwb29sXG4gIF9yZWxlYXNlKGNsaWVudCwgaWRsZUxpc3RlbmVyLCBlcnIpIHtcbiAgICBjbGllbnQub24oXCJlcnJvclwiLCBpZGxlTGlzdGVuZXIpO1xuXG4gICAgaWYgKGVyciB8fCB0aGlzLmVuZGluZykge1xuICAgICAgdGhpcy5fcmVtb3ZlKGNsaWVudCk7XG4gICAgICB0aGlzLl9wdWxzZVF1ZXVlKCk7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgLy8gaWRsZSB0aW1lb3V0XG4gICAgbGV0IHRpZDtcbiAgICBpZiAodGhpcy5vcHRpb25zLmlkbGVUaW1lb3V0TWlsbGlzKSB7XG4gICAgICB0aWQgPSBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgdGhpcy5sb2coXCJyZW1vdmUgaWRsZSBjbGllbnRcIik7XG4gICAgICAgIHRoaXMuX3JlbW92ZShjbGllbnQpO1xuICAgICAgfSwgdGhpcy5vcHRpb25zLmlkbGVUaW1lb3V0TWlsbGlzKTtcbiAgICB9XG5cbiAgICB0aGlzLl9pZGxlLnB1c2gobmV3IElkbGVJdGVtKGNsaWVudCwgaWRsZUxpc3RlbmVyLCB0aWQpKTtcbiAgICB0aGlzLl9wdWxzZVF1ZXVlKCk7XG4gIH1cblxuICBxdWVyeSh0ZXh0LCB2YWx1ZXMsIGNiKSB7XG4gICAgLy8gZ3VhcmQgY2xhdXNlIGFnYWluc3QgcGFzc2luZyBhIGZ1bmN0aW9uIGFzIHRoZSBmaXJzdCBwYXJhbWV0ZXJcbiAgICBpZiAodHlwZW9mIHRleHQgPT09IFwiZnVuY3Rpb25cIikge1xuICAgICAgY29uc3QgcmVzcG9uc2UgPSBwcm9taXNpZnkodGhpcy5Qcm9taXNlLCB0ZXh0KTtcbiAgICAgIHNldEltbWVkaWF0ZShmdW5jdGlvbigpIHtcbiAgICAgICAgcmV0dXJuIHJlc3BvbnNlLmNhbGxiYWNrKFxuICAgICAgICAgIG5ldyBFcnJvcihcbiAgICAgICAgICAgIFwiUGFzc2luZyBhIGZ1bmN0aW9uIGFzIHRoZSBmaXJzdCBwYXJhbWV0ZXIgdG8gcG9vbC5xdWVyeSBpcyBub3Qgc3VwcG9ydGVkXCJcbiAgICAgICAgICApXG4gICAgICAgICk7XG4gICAgICB9KTtcbiAgICAgIHJldHVybiByZXNwb25zZS5yZXN1bHQ7XG4gICAgfVxuXG4gICAgLy8gYWxsb3cgcGxhaW4gdGV4dCBxdWVyeSB3aXRob3V0IHZhbHVlc1xuICAgIGlmICh0eXBlb2YgdmFsdWVzID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICAgIGNiID0gdmFsdWVzO1xuICAgICAgdmFsdWVzID0gdW5kZWZpbmVkO1xuICAgIH1cbiAgICBjb25zdCByZXNwb25zZSA9IHByb21pc2lmeSh0aGlzLlByb21pc2UsIGNiKTtcbiAgICBjYiA9IHJlc3BvbnNlLmNhbGxiYWNrO1xuICAgIHRoaXMuY29ubmVjdCgoZXJyLCBjbGllbnQpID0+IHtcbiAgICAgIGlmIChlcnIpIHtcbiAgICAgICAgcmV0dXJuIGNiKGVycik7XG4gICAgICB9XG4gICAgICB0aGlzLmxvZyhcImRpc3BhdGNoaW5nIHF1ZXJ5XCIpO1xuICAgICAgY2xpZW50LnF1ZXJ5KHRleHQsIHZhbHVlcywgKGVyciwgcmVzKSA9PiB7XG4gICAgICAgIHRoaXMubG9nKFwicXVlcnkgZGlzcGF0Y2hlZFwiKTtcbiAgICAgICAgY2xpZW50LnJlbGVhc2UoZXJyKTtcbiAgICAgICAgaWYgKGVycikge1xuICAgICAgICAgIHJldHVybiBjYihlcnIpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHJldHVybiBjYih1bmRlZmluZWQsIHJlcyk7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgIH0pO1xuICAgIHJldHVybiByZXNwb25zZS5yZXN1bHQ7XG4gIH1cblxuICBlbmQoY2IpIHtcbiAgICB0aGlzLmxvZyhcImVuZGluZ1wiKTtcbiAgICBpZiAodGhpcy5lbmRpbmcpIHtcbiAgICAgIGNvbnN0IGVyciA9IG5ldyBFcnJvcihcIkNhbGxlZCBlbmQgb24gcG9vbCBtb3JlIHRoYW4gb25jZVwiKTtcbiAgICAgIHJldHVybiBjYiA/IGNiKGVycikgOiB0aGlzLlByb21pc2UucmVqZWN0KGVycik7XG4gICAgfVxuICAgIHRoaXMuZW5kaW5nID0gdHJ1ZTtcbiAgICBjb25zdCBwcm9taXNlZCA9IHByb21pc2lmeSh0aGlzLlByb21pc2UsIGNiKTtcbiAgICB0aGlzLl9lbmRDYWxsYmFjayA9IHByb21pc2VkLmNhbGxiYWNrO1xuICAgIHRoaXMuX3B1bHNlUXVldWUoKTtcbiAgICByZXR1cm4gcHJvbWlzZWQucmVzdWx0O1xuICB9XG5cbiAgZ2V0IHdhaXRpbmdDb3VudCgpIHtcbiAgICByZXR1cm4gdGhpcy5fcGVuZGluZ1F1ZXVlLmxlbmd0aDtcbiAgfVxuXG4gIGdldCBpZGxlQ291bnQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2lkbGUubGVuZ3RoO1xuICB9XG5cbiAgZ2V0IHRvdGFsQ291bnQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2NsaWVudHMubGVuZ3RoO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IFBvb2w7XG4iLCIndXNlIHN0cmljdCdcbi8qKlxuICogQ29weXJpZ2h0IChjKSAyMDEwLTIwMTcgQnJpYW4gQ2FybHNvbiAoYnJpYW4ubS5jYXJsc29uQGdtYWlsLmNvbSlcbiAqIEFsbCByaWdodHMgcmVzZXJ2ZWQuXG4gKlxuICogVGhpcyBzb3VyY2UgY29kZSBpcyBsaWNlbnNlZCB1bmRlciB0aGUgTUlUIGxpY2Vuc2UgZm91bmQgaW4gdGhlXG4gKiBSRUFETUUubWQgZmlsZSBpbiB0aGUgcm9vdCBkaXJlY3Rvcnkgb2YgdGhpcyBzb3VyY2UgdHJlZS5cbiAqL1xuXG52YXIgRXZlbnRFbWl0dGVyID0gcmVxdWlyZSgnZXZlbnRzJykuRXZlbnRFbWl0dGVyXG52YXIgdXRpbCA9IHJlcXVpcmUoJ3V0aWwnKVxuXG52YXIgUmVzdWx0ID0gcmVxdWlyZSgnLi9yZXN1bHQnKVxudmFyIHV0aWxzID0gcmVxdWlyZSgnLi91dGlscycpXG5cbnZhciBRdWVyeSA9IGZ1bmN0aW9uIChjb25maWcsIHZhbHVlcywgY2FsbGJhY2spIHtcbiAgLy8gdXNlIG9mIFwibmV3XCIgb3B0aW9uYWxcbiAgaWYgKCEodGhpcyBpbnN0YW5jZW9mIFF1ZXJ5KSkgeyByZXR1cm4gbmV3IFF1ZXJ5KGNvbmZpZywgdmFsdWVzLCBjYWxsYmFjaykgfVxuXG4gIGNvbmZpZyA9IHV0aWxzLm5vcm1hbGl6ZVF1ZXJ5Q29uZmlnKGNvbmZpZywgdmFsdWVzLCBjYWxsYmFjaylcblxuICB0aGlzLnRleHQgPSBjb25maWcudGV4dFxuICB0aGlzLnZhbHVlcyA9IGNvbmZpZy52YWx1ZXNcbiAgdGhpcy5yb3dzID0gY29uZmlnLnJvd3NcbiAgdGhpcy50eXBlcyA9IGNvbmZpZy50eXBlc1xuICB0aGlzLm5hbWUgPSBjb25maWcubmFtZVxuICB0aGlzLmJpbmFyeSA9IGNvbmZpZy5iaW5hcnlcbiAgLy8gdXNlIHVuaXF1ZSBwb3J0YWwgbmFtZSBlYWNoIHRpbWVcbiAgdGhpcy5wb3J0YWwgPSBjb25maWcucG9ydGFsIHx8ICcnXG4gIHRoaXMuY2FsbGJhY2sgPSBjb25maWcuY2FsbGJhY2tcbiAgdGhpcy5fcm93TW9kZSA9IGNvbmZpZy5yb3dNb2RlXG4gIGlmIChwcm9jZXNzLmRvbWFpbiAmJiBjb25maWcuY2FsbGJhY2spIHtcbiAgICB0aGlzLmNhbGxiYWNrID0gcHJvY2Vzcy5kb21haW4uYmluZChjb25maWcuY2FsbGJhY2spXG4gIH1cbiAgdGhpcy5fcmVzdWx0ID0gbmV3IFJlc3VsdCh0aGlzLl9yb3dNb2RlLCB0aGlzLnR5cGVzKVxuXG4gIC8vIHBvdGVudGlhbCBmb3IgbXVsdGlwbGUgcmVzdWx0c1xuICB0aGlzLl9yZXN1bHRzID0gdGhpcy5fcmVzdWx0XG4gIHRoaXMuaXNQcmVwYXJlZFN0YXRlbWVudCA9IGZhbHNlXG4gIHRoaXMuX2NhbmNlbGVkRHVlVG9FcnJvciA9IGZhbHNlXG4gIHRoaXMuX3Byb21pc2UgPSBudWxsXG4gIEV2ZW50RW1pdHRlci5jYWxsKHRoaXMpXG59XG5cbnV0aWwuaW5oZXJpdHMoUXVlcnksIEV2ZW50RW1pdHRlcilcblxuUXVlcnkucHJvdG90eXBlLnJlcXVpcmVzUHJlcGFyYXRpb24gPSBmdW5jdGlvbiAoKSB7XG4gIC8vIG5hbWVkIHF1ZXJpZXMgbXVzdCBhbHdheXMgYmUgcHJlcGFyZWRcbiAgaWYgKHRoaXMubmFtZSkgeyByZXR1cm4gdHJ1ZSB9XG4gIC8vIGFsd2F5cyBwcmVwYXJlIGlmIHRoZXJlIGFyZSBtYXggbnVtYmVyIG9mIHJvd3MgZXhwZWN0ZWQgcGVyXG4gIC8vIHBvcnRhbCBleGVjdXRpb25cbiAgaWYgKHRoaXMucm93cykgeyByZXR1cm4gdHJ1ZSB9XG4gIC8vIGRvbid0IHByZXBhcmUgZW1wdHkgdGV4dCBxdWVyaWVzXG4gIGlmICghdGhpcy50ZXh0KSB7IHJldHVybiBmYWxzZSB9XG4gIC8vIHByZXBhcmUgaWYgdGhlcmUgYXJlIHZhbHVlc1xuICBpZiAoIXRoaXMudmFsdWVzKSB7IHJldHVybiBmYWxzZSB9XG4gIHJldHVybiB0aGlzLnZhbHVlcy5sZW5ndGggPiAwXG59XG5cblF1ZXJ5LnByb3RvdHlwZS5fY2hlY2tGb3JNdWx0aXJvdyA9IGZ1bmN0aW9uICgpIHtcbiAgLy8gaWYgd2UgYWxyZWFkeSBoYXZlIGEgcmVzdWx0IHdpdGggYSBjb21tYW5kIHByb3BlcnR5XG4gIC8vIHRoZW4gd2UndmUgYWxyZWFkeSBleGVjdXRlZCBvbmUgcXVlcnkgaW4gYSBtdWx0aS1zdGF0ZW1lbnQgc2ltcGxlIHF1ZXJ5XG4gIC8vIHR1cm4gb3VyIHJlc3VsdHMgaW50byBhbiBhcnJheSBvZiByZXN1bHRzXG4gIGlmICh0aGlzLl9yZXN1bHQuY29tbWFuZCkge1xuICAgIGlmICghQXJyYXkuaXNBcnJheSh0aGlzLl9yZXN1bHRzKSkge1xuICAgICAgdGhpcy5fcmVzdWx0cyA9IFt0aGlzLl9yZXN1bHRdXG4gICAgfVxuICAgIHRoaXMuX3Jlc3VsdCA9IG5ldyBSZXN1bHQodGhpcy5fcm93TW9kZSwgdGhpcy50eXBlcylcbiAgICB0aGlzLl9yZXN1bHRzLnB1c2godGhpcy5fcmVzdWx0KVxuICB9XG59XG5cbi8vIGFzc29jaWF0ZXMgcm93IG1ldGFkYXRhIGZyb20gdGhlIHN1cHBsaWVkXG4vLyBtZXNzYWdlIHdpdGggdGhpcyBxdWVyeSBvYmplY3Rcbi8vIG1ldGFkYXRhIHVzZWQgd2hlbiBwYXJzaW5nIHJvdyByZXN1bHRzXG5RdWVyeS5wcm90b3R5cGUuaGFuZGxlUm93RGVzY3JpcHRpb24gPSBmdW5jdGlvbiAobXNnKSB7XG4gIHRoaXMuX2NoZWNrRm9yTXVsdGlyb3coKVxuICB0aGlzLl9yZXN1bHQuYWRkRmllbGRzKG1zZy5maWVsZHMpXG4gIHRoaXMuX2FjY3VtdWxhdGVSb3dzID0gdGhpcy5jYWxsYmFjayB8fCAhdGhpcy5saXN0ZW5lcnMoJ3JvdycpLmxlbmd0aFxufVxuXG5RdWVyeS5wcm90b3R5cGUuaGFuZGxlRGF0YVJvdyA9IGZ1bmN0aW9uIChtc2cpIHtcbiAgdmFyIHJvd1xuXG4gIGlmICh0aGlzLl9jYW5jZWxlZER1ZVRvRXJyb3IpIHtcbiAgICByZXR1cm5cbiAgfVxuXG4gIHRyeSB7XG4gICAgcm93ID0gdGhpcy5fcmVzdWx0LnBhcnNlUm93KG1zZy5maWVsZHMpXG4gIH0gY2F0Y2ggKGVycikge1xuICAgIHRoaXMuX2NhbmNlbGVkRHVlVG9FcnJvciA9IGVyclxuICAgIHJldHVyblxuICB9XG5cbiAgdGhpcy5lbWl0KCdyb3cnLCByb3csIHRoaXMuX3Jlc3VsdClcbiAgaWYgKHRoaXMuX2FjY3VtdWxhdGVSb3dzKSB7XG4gICAgdGhpcy5fcmVzdWx0LmFkZFJvdyhyb3cpXG4gIH1cbn1cblxuUXVlcnkucHJvdG90eXBlLmhhbmRsZUNvbW1hbmRDb21wbGV0ZSA9IGZ1bmN0aW9uIChtc2csIGNvbikge1xuICB0aGlzLl9jaGVja0Zvck11bHRpcm93KClcbiAgdGhpcy5fcmVzdWx0LmFkZENvbW1hbmRDb21wbGV0ZShtc2cpXG4gIC8vIG5lZWQgdG8gc3luYyBhZnRlciBlYWNoIGNvbW1hbmQgY29tcGxldGUgb2YgYSBwcmVwYXJlZCBzdGF0ZW1lbnRcbiAgaWYgKHRoaXMuaXNQcmVwYXJlZFN0YXRlbWVudCkge1xuICAgIGNvbi5zeW5jKClcbiAgfVxufVxuXG4vLyBpZiBhIG5hbWVkIHByZXBhcmVkIHN0YXRlbWVudCBpcyBjcmVhdGVkIHdpdGggZW1wdHkgcXVlcnkgdGV4dFxuLy8gdGhlIGJhY2tlbmQgd2lsbCBzZW5kIGFuIGVtcHR5UXVlcnkgbWVzc2FnZSBidXQgKm5vdCogYSBjb21tYW5kIGNvbXBsZXRlIG1lc3NhZ2Vcbi8vIGV4ZWN1dGlvbiBvbiB0aGUgY29ubmVjdGlvbiB3aWxsIGhhbmcgdW50aWwgdGhlIGJhY2tlbmQgcmVjZWl2ZXMgYSBzeW5jIG1lc3NhZ2VcblF1ZXJ5LnByb3RvdHlwZS5oYW5kbGVFbXB0eVF1ZXJ5ID0gZnVuY3Rpb24gKGNvbikge1xuICBpZiAodGhpcy5pc1ByZXBhcmVkU3RhdGVtZW50KSB7XG4gICAgY29uLnN5bmMoKVxuICB9XG59XG5cblF1ZXJ5LnByb3RvdHlwZS5oYW5kbGVSZWFkeUZvclF1ZXJ5ID0gZnVuY3Rpb24gKGNvbikge1xuICBpZiAodGhpcy5fY2FuY2VsZWREdWVUb0Vycm9yKSB7XG4gICAgcmV0dXJuIHRoaXMuaGFuZGxlRXJyb3IodGhpcy5fY2FuY2VsZWREdWVUb0Vycm9yLCBjb24pXG4gIH1cbiAgaWYgKHRoaXMuY2FsbGJhY2spIHtcbiAgICB0aGlzLmNhbGxiYWNrKG51bGwsIHRoaXMuX3Jlc3VsdHMpXG4gIH1cbiAgdGhpcy5lbWl0KCdlbmQnLCB0aGlzLl9yZXN1bHRzKVxufVxuXG5RdWVyeS5wcm90b3R5cGUuaGFuZGxlRXJyb3IgPSBmdW5jdGlvbiAoZXJyLCBjb25uZWN0aW9uKSB7XG4gIC8vIG5lZWQgdG8gc3luYyBhZnRlciBlcnJvciBkdXJpbmcgYSBwcmVwYXJlZCBzdGF0ZW1lbnRcbiAgaWYgKHRoaXMuaXNQcmVwYXJlZFN0YXRlbWVudCkge1xuICAgIGNvbm5lY3Rpb24uc3luYygpXG4gIH1cbiAgaWYgKHRoaXMuX2NhbmNlbGVkRHVlVG9FcnJvcikge1xuICAgIGVyciA9IHRoaXMuX2NhbmNlbGVkRHVlVG9FcnJvclxuICAgIHRoaXMuX2NhbmNlbGVkRHVlVG9FcnJvciA9IGZhbHNlXG4gIH1cbiAgLy8gaWYgY2FsbGJhY2sgc3VwcGxpZWQgZG8gbm90IGVtaXQgZXJyb3IgZXZlbnQgYXMgdW5jYXVnaHQgZXJyb3JcbiAgLy8gZXZlbnRzIHdpbGwgYnViYmxlIHVwIHRvIG5vZGUgcHJvY2Vzc1xuICBpZiAodGhpcy5jYWxsYmFjaykge1xuICAgIHJldHVybiB0aGlzLmNhbGxiYWNrKGVycilcbiAgfVxuICB0aGlzLmVtaXQoJ2Vycm9yJywgZXJyKVxufVxuXG5RdWVyeS5wcm90b3R5cGUuc3VibWl0ID0gZnVuY3Rpb24gKGNvbm5lY3Rpb24pIHtcbiAgaWYgKHR5cGVvZiB0aGlzLnRleHQgIT09ICdzdHJpbmcnICYmIHR5cGVvZiB0aGlzLm5hbWUgIT09ICdzdHJpbmcnKSB7XG4gICAgcmV0dXJuIG5ldyBFcnJvcignQSBxdWVyeSBtdXN0IGhhdmUgZWl0aGVyIHRleHQgb3IgYSBuYW1lLiBTdXBwbHlpbmcgbmVpdGhlciBpcyB1bnN1cHBvcnRlZC4nKVxuICB9XG4gIGNvbnN0IHByZXZpb3VzID0gY29ubmVjdGlvbi5wYXJzZWRTdGF0ZW1lbnRzW3RoaXMubmFtZV1cbiAgaWYgKHRoaXMudGV4dCAmJiBwcmV2aW91cyAmJiB0aGlzLnRleHQgIT09IHByZXZpb3VzKSB7XG4gICAgcmV0dXJuIG5ldyBFcnJvcihgUHJlcGFyZWQgc3RhdGVtZW50cyBtdXN0IGJlIHVuaXF1ZSAtICcke3RoaXMubmFtZX0nIHdhcyB1c2VkIGZvciBhIGRpZmZlcmVudCBzdGF0ZW1lbnRgKVxuICB9XG4gIGlmICh0aGlzLnZhbHVlcyAmJiAhQXJyYXkuaXNBcnJheSh0aGlzLnZhbHVlcykpIHtcbiAgICByZXR1cm4gbmV3IEVycm9yKCdRdWVyeSB2YWx1ZXMgbXVzdCBiZSBhbiBhcnJheScpXG4gIH1cbiAgaWYgKHRoaXMucmVxdWlyZXNQcmVwYXJhdGlvbigpKSB7XG4gICAgdGhpcy5wcmVwYXJlKGNvbm5lY3Rpb24pXG4gIH0gZWxzZSB7XG4gICAgY29ubmVjdGlvbi5xdWVyeSh0aGlzLnRleHQpXG4gIH1cbiAgcmV0dXJuIG51bGxcbn1cblxuUXVlcnkucHJvdG90eXBlLmhhc0JlZW5QYXJzZWQgPSBmdW5jdGlvbiAoY29ubmVjdGlvbikge1xuICByZXR1cm4gdGhpcy5uYW1lICYmIGNvbm5lY3Rpb24ucGFyc2VkU3RhdGVtZW50c1t0aGlzLm5hbWVdXG59XG5cblF1ZXJ5LnByb3RvdHlwZS5oYW5kbGVQb3J0YWxTdXNwZW5kZWQgPSBmdW5jdGlvbiAoY29ubmVjdGlvbikge1xuICB0aGlzLl9nZXRSb3dzKGNvbm5lY3Rpb24sIHRoaXMucm93cylcbn1cblxuUXVlcnkucHJvdG90eXBlLl9nZXRSb3dzID0gZnVuY3Rpb24gKGNvbm5lY3Rpb24sIHJvd3MpIHtcbiAgY29ubmVjdGlvbi5leGVjdXRlKHtcbiAgICBwb3J0YWw6IHRoaXMucG9ydGFsLFxuICAgIHJvd3M6IHJvd3NcbiAgfSwgdHJ1ZSlcbiAgY29ubmVjdGlvbi5mbHVzaCgpXG59XG5cblF1ZXJ5LnByb3RvdHlwZS5wcmVwYXJlID0gZnVuY3Rpb24gKGNvbm5lY3Rpb24pIHtcbiAgdmFyIHNlbGYgPSB0aGlzXG4gIC8vIHByZXBhcmVkIHN0YXRlbWVudHMgbmVlZCBzeW5jIHRvIGJlIGNhbGxlZCBhZnRlciBlYWNoIGNvbW1hbmRcbiAgLy8gY29tcGxldGUgb3Igd2hlbiBhbiBlcnJvciBpcyBlbmNvdW50ZXJlZFxuICB0aGlzLmlzUHJlcGFyZWRTdGF0ZW1lbnQgPSB0cnVlXG4gIC8vIFRPRE8gcmVmYWN0b3IgdGhpcyBwb29yIGVuY2Fwc3VsYXRpb25cbiAgaWYgKCF0aGlzLmhhc0JlZW5QYXJzZWQoY29ubmVjdGlvbikpIHtcbiAgICBjb25uZWN0aW9uLnBhcnNlKHtcbiAgICAgIHRleHQ6IHNlbGYudGV4dCxcbiAgICAgIG5hbWU6IHNlbGYubmFtZSxcbiAgICAgIHR5cGVzOiBzZWxmLnR5cGVzXG4gICAgfSwgdHJ1ZSlcbiAgfVxuXG4gIGlmIChzZWxmLnZhbHVlcykge1xuICAgIHRyeSB7XG4gICAgICBzZWxmLnZhbHVlcyA9IHNlbGYudmFsdWVzLm1hcCh1dGlscy5wcmVwYXJlVmFsdWUpXG4gICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICB0aGlzLmhhbmRsZUVycm9yKGVyciwgY29ubmVjdGlvbilcbiAgICAgIHJldHVyblxuICAgIH1cbiAgfVxuXG4gIC8vIGh0dHA6Ly9kZXZlbG9wZXIucG9zdGdyZXNxbC5vcmcvcGdkb2NzL3Bvc3RncmVzL3Byb3RvY29sLWZsb3cuaHRtbCNQUk9UT0NPTC1GTE9XLUVYVC1RVUVSWVxuICBjb25uZWN0aW9uLmJpbmQoe1xuICAgIHBvcnRhbDogc2VsZi5wb3J0YWwsXG4gICAgc3RhdGVtZW50OiBzZWxmLm5hbWUsXG4gICAgdmFsdWVzOiBzZWxmLnZhbHVlcyxcbiAgICBiaW5hcnk6IHNlbGYuYmluYXJ5XG4gIH0sIHRydWUpXG5cbiAgY29ubmVjdGlvbi5kZXNjcmliZSh7XG4gICAgdHlwZTogJ1AnLFxuICAgIG5hbWU6IHNlbGYucG9ydGFsIHx8ICcnXG4gIH0sIHRydWUpXG5cbiAgdGhpcy5fZ2V0Um93cyhjb25uZWN0aW9uLCB0aGlzLnJvd3MpXG59XG5cblF1ZXJ5LnByb3RvdHlwZS5oYW5kbGVDb3B5SW5SZXNwb25zZSA9IGZ1bmN0aW9uIChjb25uZWN0aW9uKSB7XG4gIGNvbm5lY3Rpb24uc2VuZENvcHlGYWlsKCdObyBzb3VyY2Ugc3RyZWFtIGRlZmluZWQnKVxufVxuXG4vLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tdW51c2VkLXZhcnNcblF1ZXJ5LnByb3RvdHlwZS5oYW5kbGVDb3B5RGF0YSA9IGZ1bmN0aW9uIChtc2csIGNvbm5lY3Rpb24pIHtcbiAgLy8gbm9vcFxufVxubW9kdWxlLmV4cG9ydHMgPSBRdWVyeVxuIiwiJ3VzZSBzdHJpY3QnXG4vKipcbiAqIENvcHlyaWdodCAoYykgMjAxMC0yMDE3IEJyaWFuIENhcmxzb24gKGJyaWFuLm0uY2FybHNvbkBnbWFpbC5jb20pXG4gKiBBbGwgcmlnaHRzIHJlc2VydmVkLlxuICpcbiAqIFRoaXMgc291cmNlIGNvZGUgaXMgbGljZW5zZWQgdW5kZXIgdGhlIE1JVCBsaWNlbnNlIGZvdW5kIGluIHRoZVxuICogUkVBRE1FLm1kIGZpbGUgaW4gdGhlIHJvb3QgZGlyZWN0b3J5IG9mIHRoaXMgc291cmNlIHRyZWUuXG4gKi9cblxudmFyIHR5cGVzID0gcmVxdWlyZSgncGctdHlwZXMnKVxuXG4vLyByZXN1bHQgb2JqZWN0IHJldHVybmVkIGZyb20gcXVlcnlcbi8vIGluIHRoZSAnZW5kJyBldmVudCBhbmQgYWxzb1xuLy8gcGFzc2VkIGFzIHNlY29uZCBhcmd1bWVudCB0byBwcm92aWRlZCBjYWxsYmFja1xudmFyIFJlc3VsdCA9IGZ1bmN0aW9uIChyb3dNb2RlLCB0eXBlcykge1xuICB0aGlzLmNvbW1hbmQgPSBudWxsXG4gIHRoaXMucm93Q291bnQgPSBudWxsXG4gIHRoaXMub2lkID0gbnVsbFxuICB0aGlzLnJvd3MgPSBbXVxuICB0aGlzLmZpZWxkcyA9IFtdXG4gIHRoaXMuX3BhcnNlcnMgPSBbXVxuICB0aGlzLl90eXBlcyA9IHR5cGVzXG4gIHRoaXMuUm93Q3RvciA9IG51bGxcbiAgdGhpcy5yb3dBc0FycmF5ID0gcm93TW9kZSA9PT0gJ2FycmF5J1xuICBpZiAodGhpcy5yb3dBc0FycmF5KSB7XG4gICAgdGhpcy5wYXJzZVJvdyA9IHRoaXMuX3BhcnNlUm93QXNBcnJheVxuICB9XG59XG5cbnZhciBtYXRjaFJlZ2V4cCA9IC9eKFtBLVphLXpdKykoPzogKFxcZCspKT8oPzogKFxcZCspKT8vXG5cbi8vIGFkZHMgYSBjb21tYW5kIGNvbXBsZXRlIG1lc3NhZ2VcblJlc3VsdC5wcm90b3R5cGUuYWRkQ29tbWFuZENvbXBsZXRlID0gZnVuY3Rpb24gKG1zZykge1xuICB2YXIgbWF0Y2hcbiAgaWYgKG1zZy50ZXh0KSB7XG4gICAgLy8gcHVyZSBqYXZhc2NyaXB0XG4gICAgbWF0Y2ggPSBtYXRjaFJlZ2V4cC5leGVjKG1zZy50ZXh0KVxuICB9IGVsc2Uge1xuICAgIC8vIG5hdGl2ZSBiaW5kaW5nc1xuICAgIG1hdGNoID0gbWF0Y2hSZWdleHAuZXhlYyhtc2cuY29tbWFuZClcbiAgfVxuICBpZiAobWF0Y2gpIHtcbiAgICB0aGlzLmNvbW1hbmQgPSBtYXRjaFsxXVxuICAgIGlmIChtYXRjaFszXSkge1xuICAgICAgLy8gQ09NTU1BTkQgT0lEIFJPV1NcbiAgICAgIHRoaXMub2lkID0gcGFyc2VJbnQobWF0Y2hbMl0sIDEwKVxuICAgICAgdGhpcy5yb3dDb3VudCA9IHBhcnNlSW50KG1hdGNoWzNdLCAxMClcbiAgICB9IGVsc2UgaWYgKG1hdGNoWzJdKSB7XG4gICAgICAvLyBDT01NQU5EIFJPV1NcbiAgICAgIHRoaXMucm93Q291bnQgPSBwYXJzZUludChtYXRjaFsyXSwgMTApXG4gICAgfVxuICB9XG59XG5cblJlc3VsdC5wcm90b3R5cGUuX3BhcnNlUm93QXNBcnJheSA9IGZ1bmN0aW9uIChyb3dEYXRhKSB7XG4gIHZhciByb3cgPSBbXVxuICBmb3IgKHZhciBpID0gMCwgbGVuID0gcm93RGF0YS5sZW5ndGg7IGkgPCBsZW47IGkrKykge1xuICAgIHZhciByYXdWYWx1ZSA9IHJvd0RhdGFbaV1cbiAgICBpZiAocmF3VmFsdWUgIT09IG51bGwpIHtcbiAgICAgIHJvdy5wdXNoKHRoaXMuX3BhcnNlcnNbaV0ocmF3VmFsdWUpKVxuICAgIH0gZWxzZSB7XG4gICAgICByb3cucHVzaChudWxsKVxuICAgIH1cbiAgfVxuICByZXR1cm4gcm93XG59XG5cblJlc3VsdC5wcm90b3R5cGUucGFyc2VSb3cgPSBmdW5jdGlvbiAocm93RGF0YSkge1xuICB2YXIgcm93ID0ge31cbiAgZm9yICh2YXIgaSA9IDAsIGxlbiA9IHJvd0RhdGEubGVuZ3RoOyBpIDwgbGVuOyBpKyspIHtcbiAgICB2YXIgcmF3VmFsdWUgPSByb3dEYXRhW2ldXG4gICAgdmFyIGZpZWxkID0gdGhpcy5maWVsZHNbaV0ubmFtZVxuICAgIGlmIChyYXdWYWx1ZSAhPT0gbnVsbCkge1xuICAgICAgcm93W2ZpZWxkXSA9IHRoaXMuX3BhcnNlcnNbaV0ocmF3VmFsdWUpXG4gICAgfSBlbHNlIHtcbiAgICAgIHJvd1tmaWVsZF0gPSBudWxsXG4gICAgfVxuICB9XG4gIHJldHVybiByb3dcbn1cblxuUmVzdWx0LnByb3RvdHlwZS5hZGRSb3cgPSBmdW5jdGlvbiAocm93KSB7XG4gIHRoaXMucm93cy5wdXNoKHJvdylcbn1cblxuUmVzdWx0LnByb3RvdHlwZS5hZGRGaWVsZHMgPSBmdW5jdGlvbiAoZmllbGREZXNjcmlwdGlvbnMpIHtcbiAgLy8gY2xlYXJzIGZpZWxkIGRlZmluaXRpb25zXG4gIC8vIG11bHRpcGxlIHF1ZXJ5IHN0YXRlbWVudHMgaW4gMSBhY3Rpb24gY2FuIHJlc3VsdCBpbiBtdWx0aXBsZSBzZXRzXG4gIC8vIG9mIHJvd0Rlc2NyaXB0aW9ucy4uLmVnOiAnc2VsZWN0IE5PVygpOyBzZWxlY3QgMTo6aW50OydcbiAgLy8geW91IG5lZWQgdG8gcmVzZXQgdGhlIGZpZWxkc1xuICBpZiAodGhpcy5maWVsZHMubGVuZ3RoKSB7XG4gICAgdGhpcy5maWVsZHMgPSBbXVxuICAgIHRoaXMuX3BhcnNlcnMgPSBbXVxuICB9XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgZmllbGREZXNjcmlwdGlvbnMubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgZGVzYyA9IGZpZWxkRGVzY3JpcHRpb25zW2ldXG4gICAgdGhpcy5maWVsZHMucHVzaChkZXNjKVxuICAgIHZhciBwYXJzZXIgPSAodGhpcy5fdHlwZXMgfHwgdHlwZXMpLmdldFR5cGVQYXJzZXIoZGVzYy5kYXRhVHlwZUlELCBkZXNjLmZvcm1hdCB8fCAndGV4dCcpXG4gICAgdGhpcy5fcGFyc2Vycy5wdXNoKHBhcnNlcilcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IFJlc3VsdFxuIiwiJ3VzZSBzdHJpY3QnXG5jb25zdCBjcnlwdG8gPSByZXF1aXJlKCdjcnlwdG8nKVxuXG5mdW5jdGlvbiBzdGFydFNlc3Npb24gKG1lY2hhbmlzbXMpIHtcbiAgaWYgKG1lY2hhbmlzbXMuaW5kZXhPZignU0NSQU0tU0hBLTI1NicpID09PSAtMSkge1xuICAgIHRocm93IG5ldyBFcnJvcignU0FTTDogT25seSBtZWNoYW5pc20gU0NSQU0tU0hBLTI1NiBpcyBjdXJyZW50bHkgc3VwcG9ydGVkJylcbiAgfVxuXG4gIGNvbnN0IGNsaWVudE5vbmNlID0gY3J5cHRvLnJhbmRvbUJ5dGVzKDE4KS50b1N0cmluZygnYmFzZTY0JylcblxuICByZXR1cm4ge1xuICAgIG1lY2hhbmlzbTogJ1NDUkFNLVNIQS0yNTYnLFxuICAgIGNsaWVudE5vbmNlLFxuICAgIHJlc3BvbnNlOiAnbiwsbj0qLHI9JyArIGNsaWVudE5vbmNlLFxuICAgIG1lc3NhZ2U6ICdTQVNMSW5pdGlhbFJlc3BvbnNlJ1xuICB9XG59XG5cbmZ1bmN0aW9uIGNvbnRpbnVlU2Vzc2lvbiAoc2Vzc2lvbiwgcGFzc3dvcmQsIHNlcnZlckRhdGEpIHtcbiAgaWYgKHNlc3Npb24ubWVzc2FnZSAhPT0gJ1NBU0xJbml0aWFsUmVzcG9uc2UnKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKCdTQVNMOiBMYXN0IG1lc3NhZ2Ugd2FzIG5vdCBTQVNMSW5pdGlhbFJlc3BvbnNlJylcbiAgfVxuXG4gIGNvbnN0IHN2ID0gZXh0cmFjdFZhcmlhYmxlc0Zyb21GaXJzdFNlcnZlck1lc3NhZ2Uoc2VydmVyRGF0YSlcblxuICBpZiAoIXN2Lm5vbmNlLnN0YXJ0c1dpdGgoc2Vzc2lvbi5jbGllbnROb25jZSkpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ1NBU0w6IFNDUkFNLVNFUlZFUi1GSVJTVC1NRVNTQUdFOiBzZXJ2ZXIgbm9uY2UgZG9lcyBub3Qgc3RhcnQgd2l0aCBjbGllbnQgbm9uY2UnKVxuICB9XG5cbiAgdmFyIHNhbHRCeXRlcyA9IEJ1ZmZlci5mcm9tKHN2LnNhbHQsICdiYXNlNjQnKVxuXG4gIHZhciBzYWx0ZWRQYXNzd29yZCA9IEhpKHBhc3N3b3JkLCBzYWx0Qnl0ZXMsIHN2Lml0ZXJhdGlvbilcblxuICB2YXIgY2xpZW50S2V5ID0gY3JlYXRlSE1BQyhzYWx0ZWRQYXNzd29yZCwgJ0NsaWVudCBLZXknKVxuICB2YXIgc3RvcmVkS2V5ID0gY3J5cHRvLmNyZWF0ZUhhc2goJ3NoYTI1NicpLnVwZGF0ZShjbGllbnRLZXkpLmRpZ2VzdCgpXG5cbiAgdmFyIGNsaWVudEZpcnN0TWVzc2FnZUJhcmUgPSAnbj0qLHI9JyArIHNlc3Npb24uY2xpZW50Tm9uY2VcbiAgdmFyIHNlcnZlckZpcnN0TWVzc2FnZSA9ICdyPScgKyBzdi5ub25jZSArICcscz0nICsgc3Yuc2FsdCArICcsaT0nICsgc3YuaXRlcmF0aW9uXG5cbiAgdmFyIGNsaWVudEZpbmFsTWVzc2FnZVdpdGhvdXRQcm9vZiA9ICdjPWJpd3Mscj0nICsgc3Yubm9uY2VcblxuICB2YXIgYXV0aE1lc3NhZ2UgPSBjbGllbnRGaXJzdE1lc3NhZ2VCYXJlICsgJywnICsgc2VydmVyRmlyc3RNZXNzYWdlICsgJywnICsgY2xpZW50RmluYWxNZXNzYWdlV2l0aG91dFByb29mXG5cbiAgdmFyIGNsaWVudFNpZ25hdHVyZSA9IGNyZWF0ZUhNQUMoc3RvcmVkS2V5LCBhdXRoTWVzc2FnZSlcbiAgdmFyIGNsaWVudFByb29mQnl0ZXMgPSB4b3JCdWZmZXJzKGNsaWVudEtleSwgY2xpZW50U2lnbmF0dXJlKVxuICB2YXIgY2xpZW50UHJvb2YgPSBjbGllbnRQcm9vZkJ5dGVzLnRvU3RyaW5nKCdiYXNlNjQnKVxuXG4gIHZhciBzZXJ2ZXJLZXkgPSBjcmVhdGVITUFDKHNhbHRlZFBhc3N3b3JkLCAnU2VydmVyIEtleScpXG4gIHZhciBzZXJ2ZXJTaWduYXR1cmVCeXRlcyA9IGNyZWF0ZUhNQUMoc2VydmVyS2V5LCBhdXRoTWVzc2FnZSlcblxuICBzZXNzaW9uLm1lc3NhZ2UgPSAnU0FTTFJlc3BvbnNlJ1xuICBzZXNzaW9uLnNlcnZlclNpZ25hdHVyZSA9IHNlcnZlclNpZ25hdHVyZUJ5dGVzLnRvU3RyaW5nKCdiYXNlNjQnKVxuICBzZXNzaW9uLnJlc3BvbnNlID0gY2xpZW50RmluYWxNZXNzYWdlV2l0aG91dFByb29mICsgJyxwPScgKyBjbGllbnRQcm9vZlxufVxuXG5mdW5jdGlvbiBmaW5hbGl6ZVNlc3Npb24gKHNlc3Npb24sIHNlcnZlckRhdGEpIHtcbiAgaWYgKHNlc3Npb24ubWVzc2FnZSAhPT0gJ1NBU0xSZXNwb25zZScpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ1NBU0w6IExhc3QgbWVzc2FnZSB3YXMgbm90IFNBU0xSZXNwb25zZScpXG4gIH1cblxuICB2YXIgc2VydmVyU2lnbmF0dXJlXG5cbiAgU3RyaW5nKHNlcnZlckRhdGEpLnNwbGl0KCcsJykuZm9yRWFjaChmdW5jdGlvbiAocGFydCkge1xuICAgIHN3aXRjaCAocGFydFswXSkge1xuICAgICAgY2FzZSAndic6XG4gICAgICAgIHNlcnZlclNpZ25hdHVyZSA9IHBhcnQuc3Vic3RyKDIpXG4gICAgICAgIGJyZWFrXG4gICAgfVxuICB9KVxuXG4gIGlmIChzZXJ2ZXJTaWduYXR1cmUgIT09IHNlc3Npb24uc2VydmVyU2lnbmF0dXJlKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKCdTQVNMOiBTQ1JBTS1TRVJWRVItRklOQUwtTUVTU0FHRTogc2VydmVyIHNpZ25hdHVyZSBkb2VzIG5vdCBtYXRjaCcpXG4gIH1cbn1cblxuZnVuY3Rpb24gZXh0cmFjdFZhcmlhYmxlc0Zyb21GaXJzdFNlcnZlck1lc3NhZ2UgKGRhdGEpIHtcbiAgdmFyIG5vbmNlLCBzYWx0LCBpdGVyYXRpb25cblxuICBTdHJpbmcoZGF0YSkuc3BsaXQoJywnKS5mb3JFYWNoKGZ1bmN0aW9uIChwYXJ0KSB7XG4gICAgc3dpdGNoIChwYXJ0WzBdKSB7XG4gICAgICBjYXNlICdyJzpcbiAgICAgICAgbm9uY2UgPSBwYXJ0LnN1YnN0cigyKVxuICAgICAgICBicmVha1xuICAgICAgY2FzZSAncyc6XG4gICAgICAgIHNhbHQgPSBwYXJ0LnN1YnN0cigyKVxuICAgICAgICBicmVha1xuICAgICAgY2FzZSAnaSc6XG4gICAgICAgIGl0ZXJhdGlvbiA9IHBhcnNlSW50KHBhcnQuc3Vic3RyKDIpLCAxMClcbiAgICAgICAgYnJlYWtcbiAgICB9XG4gIH0pXG5cbiAgaWYgKCFub25jZSkge1xuICAgIHRocm93IG5ldyBFcnJvcignU0FTTDogU0NSQU0tU0VSVkVSLUZJUlNULU1FU1NBR0U6IG5vbmNlIG1pc3NpbmcnKVxuICB9XG5cbiAgaWYgKCFzYWx0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKCdTQVNMOiBTQ1JBTS1TRVJWRVItRklSU1QtTUVTU0FHRTogc2FsdCBtaXNzaW5nJylcbiAgfVxuXG4gIGlmICghaXRlcmF0aW9uKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKCdTQVNMOiBTQ1JBTS1TRVJWRVItRklSU1QtTUVTU0FHRTogaXRlcmF0aW9uIG1pc3NpbmcnKVxuICB9XG5cbiAgcmV0dXJuIHtcbiAgICBub25jZSxcbiAgICBzYWx0LFxuICAgIGl0ZXJhdGlvblxuICB9XG59XG5cbmZ1bmN0aW9uIHhvckJ1ZmZlcnMgKGEsIGIpIHtcbiAgaWYgKCFCdWZmZXIuaXNCdWZmZXIoYSkpIGEgPSBCdWZmZXIuZnJvbShhKVxuICBpZiAoIUJ1ZmZlci5pc0J1ZmZlcihiKSkgYiA9IEJ1ZmZlci5mcm9tKGIpXG4gIHZhciByZXMgPSBbXVxuICBpZiAoYS5sZW5ndGggPiBiLmxlbmd0aCkge1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgYi5sZW5ndGg7IGkrKykge1xuICAgICAgcmVzLnB1c2goYVtpXSBeIGJbaV0pXG4gICAgfVxuICB9IGVsc2Uge1xuICAgIGZvciAodmFyIGogPSAwOyBqIDwgYS5sZW5ndGg7IGorKykge1xuICAgICAgcmVzLnB1c2goYVtqXSBeIGJbal0pXG4gICAgfVxuICB9XG4gIHJldHVybiBCdWZmZXIuZnJvbShyZXMpXG59XG5cbmZ1bmN0aW9uIGNyZWF0ZUhNQUMgKGtleSwgbXNnKSB7XG4gIHJldHVybiBjcnlwdG8uY3JlYXRlSG1hYygnc2hhMjU2Jywga2V5KS51cGRhdGUobXNnKS5kaWdlc3QoKVxufVxuXG5mdW5jdGlvbiBIaSAocGFzc3dvcmQsIHNhbHRCeXRlcywgaXRlcmF0aW9ucykge1xuICB2YXIgdWkxID0gY3JlYXRlSE1BQyhwYXNzd29yZCwgQnVmZmVyLmNvbmNhdChbc2FsdEJ5dGVzLCBCdWZmZXIuZnJvbShbMCwgMCwgMCwgMV0pXSkpXG4gIHZhciB1aSA9IHVpMVxuICBmb3IgKHZhciBpID0gMDsgaSA8IGl0ZXJhdGlvbnMgLSAxOyBpKyspIHtcbiAgICB1aTEgPSBjcmVhdGVITUFDKHBhc3N3b3JkLCB1aTEpXG4gICAgdWkgPSB4b3JCdWZmZXJzKHVpLCB1aTEpXG4gIH1cblxuICByZXR1cm4gdWlcbn1cblxubW9kdWxlLmV4cG9ydHMgPSB7XG4gIHN0YXJ0U2Vzc2lvbixcbiAgY29udGludWVTZXNzaW9uLFxuICBmaW5hbGl6ZVNlc3Npb25cbn1cbiIsIid1c2Ugc3RyaWN0J1xuLyoqXG4gKiBDb3B5cmlnaHQgKGMpIDIwMTAtMjAxNyBCcmlhbiBDYXJsc29uIChicmlhbi5tLmNhcmxzb25AZ21haWwuY29tKVxuICogQWxsIHJpZ2h0cyByZXNlcnZlZC5cbiAqXG4gKiBUaGlzIHNvdXJjZSBjb2RlIGlzIGxpY2Vuc2VkIHVuZGVyIHRoZSBNSVQgbGljZW5zZSBmb3VuZCBpbiB0aGVcbiAqIFJFQURNRS5tZCBmaWxlIGluIHRoZSByb290IGRpcmVjdG9yeSBvZiB0aGlzIHNvdXJjZSB0cmVlLlxuICovXG5cbnZhciB0eXBlcyA9IHJlcXVpcmUoJ3BnLXR5cGVzJylcblxuZnVuY3Rpb24gVHlwZU92ZXJyaWRlcyAodXNlclR5cGVzKSB7XG4gIHRoaXMuX3R5cGVzID0gdXNlclR5cGVzIHx8IHR5cGVzXG4gIHRoaXMudGV4dCA9IHt9XG4gIHRoaXMuYmluYXJ5ID0ge31cbn1cblxuVHlwZU92ZXJyaWRlcy5wcm90b3R5cGUuZ2V0T3ZlcnJpZGVzID0gZnVuY3Rpb24gKGZvcm1hdCkge1xuICBzd2l0Y2ggKGZvcm1hdCkge1xuICAgIGNhc2UgJ3RleHQnOiByZXR1cm4gdGhpcy50ZXh0XG4gICAgY2FzZSAnYmluYXJ5JzogcmV0dXJuIHRoaXMuYmluYXJ5XG4gICAgZGVmYXVsdDogcmV0dXJuIHt9XG4gIH1cbn1cblxuVHlwZU92ZXJyaWRlcy5wcm90b3R5cGUuc2V0VHlwZVBhcnNlciA9IGZ1bmN0aW9uIChvaWQsIGZvcm1hdCwgcGFyc2VGbikge1xuICBpZiAodHlwZW9mIGZvcm1hdCA9PT0gJ2Z1bmN0aW9uJykge1xuICAgIHBhcnNlRm4gPSBmb3JtYXRcbiAgICBmb3JtYXQgPSAndGV4dCdcbiAgfVxuICB0aGlzLmdldE92ZXJyaWRlcyhmb3JtYXQpW29pZF0gPSBwYXJzZUZuXG59XG5cblR5cGVPdmVycmlkZXMucHJvdG90eXBlLmdldFR5cGVQYXJzZXIgPSBmdW5jdGlvbiAob2lkLCBmb3JtYXQpIHtcbiAgZm9ybWF0ID0gZm9ybWF0IHx8ICd0ZXh0J1xuICByZXR1cm4gdGhpcy5nZXRPdmVycmlkZXMoZm9ybWF0KVtvaWRdIHx8IHRoaXMuX3R5cGVzLmdldFR5cGVQYXJzZXIob2lkLCBmb3JtYXQpXG59XG5cbm1vZHVsZS5leHBvcnRzID0gVHlwZU92ZXJyaWRlc1xuIiwiJ3VzZSBzdHJpY3QnXG4vKipcbiAqIENvcHlyaWdodCAoYykgMjAxMC0yMDE3IEJyaWFuIENhcmxzb24gKGJyaWFuLm0uY2FybHNvbkBnbWFpbC5jb20pXG4gKiBBbGwgcmlnaHRzIHJlc2VydmVkLlxuICpcbiAqIFRoaXMgc291cmNlIGNvZGUgaXMgbGljZW5zZWQgdW5kZXIgdGhlIE1JVCBsaWNlbnNlIGZvdW5kIGluIHRoZVxuICogUkVBRE1FLm1kIGZpbGUgaW4gdGhlIHJvb3QgZGlyZWN0b3J5IG9mIHRoaXMgc291cmNlIHRyZWUuXG4gKi9cblxuY29uc3QgY3J5cHRvID0gcmVxdWlyZSgnY3J5cHRvJylcblxuY29uc3QgZGVmYXVsdHMgPSByZXF1aXJlKCcuL2RlZmF1bHRzJylcblxuZnVuY3Rpb24gZXNjYXBlRWxlbWVudCAoZWxlbWVudFJlcHJlc2VudGF0aW9uKSB7XG4gIHZhciBlc2NhcGVkID0gZWxlbWVudFJlcHJlc2VudGF0aW9uXG4gICAgLnJlcGxhY2UoL1xcXFwvZywgJ1xcXFxcXFxcJylcbiAgICAucmVwbGFjZSgvXCIvZywgJ1xcXFxcIicpXG5cbiAgcmV0dXJuICdcIicgKyBlc2NhcGVkICsgJ1wiJ1xufVxuXG4vLyBjb252ZXJ0IGEgSlMgYXJyYXkgdG8gYSBwb3N0Z3JlcyBhcnJheSBsaXRlcmFsXG4vLyB1c2VzIGNvbW1hIHNlcGFyYXRvciBzbyB3b24ndCB3b3JrIGZvciB0eXBlcyBsaWtlIGJveCB0aGF0IHVzZVxuLy8gYSBkaWZmZXJlbnQgYXJyYXkgc2VwYXJhdG9yLlxuZnVuY3Rpb24gYXJyYXlTdHJpbmcgKHZhbCkge1xuICB2YXIgcmVzdWx0ID0gJ3snXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgdmFsLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKGkgPiAwKSB7XG4gICAgICByZXN1bHQgPSByZXN1bHQgKyAnLCdcbiAgICB9XG4gICAgaWYgKHZhbFtpXSA9PT0gbnVsbCB8fCB0eXBlb2YgdmFsW2ldID09PSAndW5kZWZpbmVkJykge1xuICAgICAgcmVzdWx0ID0gcmVzdWx0ICsgJ05VTEwnXG4gICAgfSBlbHNlIGlmIChBcnJheS5pc0FycmF5KHZhbFtpXSkpIHtcbiAgICAgIHJlc3VsdCA9IHJlc3VsdCArIGFycmF5U3RyaW5nKHZhbFtpXSlcbiAgICB9IGVsc2UgaWYgKHZhbFtpXSBpbnN0YW5jZW9mIEJ1ZmZlcikge1xuICAgICAgcmVzdWx0ICs9ICdcXFxcXFxcXHgnICsgdmFsW2ldLnRvU3RyaW5nKCdoZXgnKVxuICAgIH0gZWxzZSB7XG4gICAgICByZXN1bHQgKz0gZXNjYXBlRWxlbWVudChwcmVwYXJlVmFsdWUodmFsW2ldKSlcbiAgICB9XG4gIH1cbiAgcmVzdWx0ID0gcmVzdWx0ICsgJ30nXG4gIHJldHVybiByZXN1bHRcbn1cblxuLy8gY29udmVydHMgdmFsdWVzIGZyb20gamF2YXNjcmlwdCB0eXBlc1xuLy8gdG8gdGhlaXIgJ3JhdycgY291bnRlcnBhcnRzIGZvciB1c2UgYXMgYSBwb3N0Z3JlcyBwYXJhbWV0ZXJcbi8vIG5vdGU6IHlvdSBjYW4gb3ZlcnJpZGUgdGhpcyBmdW5jdGlvbiB0byBwcm92aWRlIHlvdXIgb3duIGNvbnZlcnNpb24gbWVjaGFuaXNtXG4vLyBmb3IgY29tcGxleCB0eXBlcywgZXRjLi4uXG52YXIgcHJlcGFyZVZhbHVlID0gZnVuY3Rpb24gKHZhbCwgc2Vlbikge1xuICBpZiAodmFsIGluc3RhbmNlb2YgQnVmZmVyKSB7XG4gICAgcmV0dXJuIHZhbFxuICB9XG4gIGlmIChBcnJheUJ1ZmZlci5pc1ZpZXcodmFsKSkge1xuICAgIHZhciBidWYgPSBCdWZmZXIuZnJvbSh2YWwuYnVmZmVyLCB2YWwuYnl0ZU9mZnNldCwgdmFsLmJ5dGVMZW5ndGgpXG4gICAgaWYgKGJ1Zi5sZW5ndGggPT09IHZhbC5ieXRlTGVuZ3RoKSB7XG4gICAgICByZXR1cm4gYnVmXG4gICAgfVxuICAgIHJldHVybiBidWYuc2xpY2UodmFsLmJ5dGVPZmZzZXQsIHZhbC5ieXRlT2Zmc2V0ICsgdmFsLmJ5dGVMZW5ndGgpIC8vIE5vZGUuanMgdjQgZG9lcyBub3Qgc3VwcG9ydCB0aG9zZSBCdWZmZXIuZnJvbSBwYXJhbXNcbiAgfVxuICBpZiAodmFsIGluc3RhbmNlb2YgRGF0ZSkge1xuICAgIGlmIChkZWZhdWx0cy5wYXJzZUlucHV0RGF0ZXNBc1VUQykge1xuICAgICAgcmV0dXJuIGRhdGVUb1N0cmluZ1VUQyh2YWwpXG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiBkYXRlVG9TdHJpbmcodmFsKVxuICAgIH1cbiAgfVxuICBpZiAoQXJyYXkuaXNBcnJheSh2YWwpKSB7XG4gICAgcmV0dXJuIGFycmF5U3RyaW5nKHZhbClcbiAgfVxuICBpZiAodmFsID09PSBudWxsIHx8IHR5cGVvZiB2YWwgPT09ICd1bmRlZmluZWQnKSB7XG4gICAgcmV0dXJuIG51bGxcbiAgfVxuICBpZiAodHlwZW9mIHZhbCA9PT0gJ29iamVjdCcpIHtcbiAgICByZXR1cm4gcHJlcGFyZU9iamVjdCh2YWwsIHNlZW4pXG4gIH1cbiAgcmV0dXJuIHZhbC50b1N0cmluZygpXG59XG5cbmZ1bmN0aW9uIHByZXBhcmVPYmplY3QgKHZhbCwgc2Vlbikge1xuICBpZiAodmFsICYmIHR5cGVvZiB2YWwudG9Qb3N0Z3JlcyA9PT0gJ2Z1bmN0aW9uJykge1xuICAgIHNlZW4gPSBzZWVuIHx8IFtdXG4gICAgaWYgKHNlZW4uaW5kZXhPZih2YWwpICE9PSAtMSkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKCdjaXJjdWxhciByZWZlcmVuY2UgZGV0ZWN0ZWQgd2hpbGUgcHJlcGFyaW5nIFwiJyArIHZhbCArICdcIiBmb3IgcXVlcnknKVxuICAgIH1cbiAgICBzZWVuLnB1c2godmFsKVxuXG4gICAgcmV0dXJuIHByZXBhcmVWYWx1ZSh2YWwudG9Qb3N0Z3JlcyhwcmVwYXJlVmFsdWUpLCBzZWVuKVxuICB9XG4gIHJldHVybiBKU09OLnN0cmluZ2lmeSh2YWwpXG59XG5cbmZ1bmN0aW9uIHBhZCAobnVtYmVyLCBkaWdpdHMpIHtcbiAgbnVtYmVyID0gJycgKyBudW1iZXJcbiAgd2hpbGUgKG51bWJlci5sZW5ndGggPCBkaWdpdHMpIHsgbnVtYmVyID0gJzAnICsgbnVtYmVyIH1cbiAgcmV0dXJuIG51bWJlclxufVxuXG5mdW5jdGlvbiBkYXRlVG9TdHJpbmcgKGRhdGUpIHtcbiAgdmFyIG9mZnNldCA9IC1kYXRlLmdldFRpbWV6b25lT2Zmc2V0KClcblxuICB2YXIgeWVhciA9IGRhdGUuZ2V0RnVsbFllYXIoKVxuICB2YXIgaXNCQ1llYXIgPSB5ZWFyIDwgMVxuICBpZiAoaXNCQ1llYXIpIHllYXIgPSBNYXRoLmFicyh5ZWFyKSArIDEgLy8gbmVnYXRpdmUgeWVhcnMgYXJlIDEgb2ZmIHRoZWlyIEJDIHJlcHJlc2VudGF0aW9uXG5cbiAgdmFyIHJldCA9IHBhZCh5ZWFyLCA0KSArICctJyArXG4gICAgcGFkKGRhdGUuZ2V0TW9udGgoKSArIDEsIDIpICsgJy0nICtcbiAgICBwYWQoZGF0ZS5nZXREYXRlKCksIDIpICsgJ1QnICtcbiAgICBwYWQoZGF0ZS5nZXRIb3VycygpLCAyKSArICc6JyArXG4gICAgcGFkKGRhdGUuZ2V0TWludXRlcygpLCAyKSArICc6JyArXG4gICAgcGFkKGRhdGUuZ2V0U2Vjb25kcygpLCAyKSArICcuJyArXG4gICAgcGFkKGRhdGUuZ2V0TWlsbGlzZWNvbmRzKCksIDMpXG5cbiAgaWYgKG9mZnNldCA8IDApIHtcbiAgICByZXQgKz0gJy0nXG4gICAgb2Zmc2V0ICo9IC0xXG4gIH0gZWxzZSB7IHJldCArPSAnKycgfVxuXG4gIHJldCArPSBwYWQoTWF0aC5mbG9vcihvZmZzZXQgLyA2MCksIDIpICsgJzonICsgcGFkKG9mZnNldCAlIDYwLCAyKVxuICBpZiAoaXNCQ1llYXIpIHJldCArPSAnIEJDJ1xuICByZXR1cm4gcmV0XG59XG5cbmZ1bmN0aW9uIGRhdGVUb1N0cmluZ1VUQyAoZGF0ZSkge1xuICB2YXIgeWVhciA9IGRhdGUuZ2V0VVRDRnVsbFllYXIoKVxuICB2YXIgaXNCQ1llYXIgPSB5ZWFyIDwgMVxuICBpZiAoaXNCQ1llYXIpIHllYXIgPSBNYXRoLmFicyh5ZWFyKSArIDEgLy8gbmVnYXRpdmUgeWVhcnMgYXJlIDEgb2ZmIHRoZWlyIEJDIHJlcHJlc2VudGF0aW9uXG5cbiAgdmFyIHJldCA9IHBhZCh5ZWFyLCA0KSArICctJyArXG4gICAgcGFkKGRhdGUuZ2V0VVRDTW9udGgoKSArIDEsIDIpICsgJy0nICtcbiAgICBwYWQoZGF0ZS5nZXRVVENEYXRlKCksIDIpICsgJ1QnICtcbiAgICBwYWQoZGF0ZS5nZXRVVENIb3VycygpLCAyKSArICc6JyArXG4gICAgcGFkKGRhdGUuZ2V0VVRDTWludXRlcygpLCAyKSArICc6JyArXG4gICAgcGFkKGRhdGUuZ2V0VVRDU2Vjb25kcygpLCAyKSArICcuJyArXG4gICAgcGFkKGRhdGUuZ2V0VVRDTWlsbGlzZWNvbmRzKCksIDMpXG5cbiAgcmV0ICs9ICcrMDA6MDAnXG4gIGlmIChpc0JDWWVhcikgcmV0ICs9ICcgQkMnXG4gIHJldHVybiByZXRcbn1cblxuZnVuY3Rpb24gbm9ybWFsaXplUXVlcnlDb25maWcgKGNvbmZpZywgdmFsdWVzLCBjYWxsYmFjaykge1xuICAvLyBjYW4gdGFrZSBpbiBzdHJpbmdzIG9yIGNvbmZpZyBvYmplY3RzXG4gIGNvbmZpZyA9ICh0eXBlb2YgKGNvbmZpZykgPT09ICdzdHJpbmcnKSA/IHsgdGV4dDogY29uZmlnIH0gOiBjb25maWdcbiAgaWYgKHZhbHVlcykge1xuICAgIGlmICh0eXBlb2YgdmFsdWVzID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICBjb25maWcuY2FsbGJhY2sgPSB2YWx1ZXNcbiAgICB9IGVsc2Uge1xuICAgICAgY29uZmlnLnZhbHVlcyA9IHZhbHVlc1xuICAgIH1cbiAgfVxuICBpZiAoY2FsbGJhY2spIHtcbiAgICBjb25maWcuY2FsbGJhY2sgPSBjYWxsYmFja1xuICB9XG4gIHJldHVybiBjb25maWdcbn1cblxuY29uc3QgbWQ1ID0gZnVuY3Rpb24gKHN0cmluZykge1xuICByZXR1cm4gY3J5cHRvLmNyZWF0ZUhhc2goJ21kNScpLnVwZGF0ZShzdHJpbmcsICd1dGYtOCcpLmRpZ2VzdCgnaGV4Jylcbn1cblxuLy8gU2VlIEF1dGhlbnRpY2F0aW9uTUQ1UGFzc3dvcmQgYXQgaHR0cHM6Ly93d3cucG9zdGdyZXNxbC5vcmcvZG9jcy9jdXJyZW50L3N0YXRpYy9wcm90b2NvbC1mbG93Lmh0bWxcbmNvbnN0IHBvc3RncmVzTWQ1UGFzc3dvcmRIYXNoID0gZnVuY3Rpb24gKHVzZXIsIHBhc3N3b3JkLCBzYWx0KSB7XG4gIHZhciBpbm5lciA9IG1kNShwYXNzd29yZCArIHVzZXIpXG4gIHZhciBvdXRlciA9IG1kNShCdWZmZXIuY29uY2F0KFtCdWZmZXIuZnJvbShpbm5lciksIHNhbHRdKSlcbiAgcmV0dXJuICdtZDUnICsgb3V0ZXJcbn1cblxubW9kdWxlLmV4cG9ydHMgPSB7XG4gIHByZXBhcmVWYWx1ZTogZnVuY3Rpb24gcHJlcGFyZVZhbHVlV3JhcHBlciAodmFsdWUpIHtcbiAgICAvLyB0aGlzIGVuc3VyZXMgdGhhdCBleHRyYSBhcmd1bWVudHMgZG8gbm90IGdldCBwYXNzZWQgaW50byBwcmVwYXJlVmFsdWVcbiAgICAvLyBieSBhY2NpZGVudCwgZWc6IGZyb20gY2FsbGluZyB2YWx1ZXMubWFwKHV0aWxzLnByZXBhcmVWYWx1ZSlcbiAgICByZXR1cm4gcHJlcGFyZVZhbHVlKHZhbHVlKVxuICB9LFxuICBub3JtYWxpemVRdWVyeUNvbmZpZyxcbiAgcG9zdGdyZXNNZDVQYXNzd29yZEhhc2gsXG4gIG1kNVxufVxuIiwiLyogKGlnbm9yZWQpICovIiwiLyogKGlnbm9yZWQpICovIiwiLyogKGlnbm9yZWQpICovIiwiLyogKGlnbm9yZWQpICovIiwiLyogKGlnbm9yZWQpICovIl0sInNvdXJjZVJvb3QiOiIifQ==