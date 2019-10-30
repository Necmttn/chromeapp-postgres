'use strict';
/**
 * Copyright (c) 2010-2017 Brian Carlson (brian.m.carlson@gmail.com)
 * All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * README.md file in the root directory of this source tree.
 */

var util = require('util');
var Client = require('./client');
var defaults = require('./defaults');
var Connection = require('./connection');
// var Pool = require('pg-pool');
//
// const poolFactory = Client => {
//   var BoundPool = function(options) {
//     var config = Object.assign({ Client: Client }, options);
//     return new Pool(config);
//   };
//
//   util.inherits(BoundPool, Pool);
//
//   return BoundPool;
// };

var PG = function(clientConstructor) {
  this.defaults = defaults;
  this.Client = clientConstructor;
  this.Query = this.Client.Query;
  // this.Pool = poolFactory(this.Client);
  // this._pools = [];
  this.Connection = Connection;
  this.types = require('pg-types');
};

module.exports = new PG(Client);

const Duplex = require('./stream/Duplex');

setTimeout(async () => {
  const pg = new PG(Client);
  const client = new pg.Client({
    connectionString: 'http://defteradmin:ak2na9axsn2eqds034@127.0.0.1/coredata',
  });

  console.log(client);
  await client.connect();

  console.log(await client.query('SELECT NOW()'));
}, 2000);
