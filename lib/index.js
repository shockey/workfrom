/* eslint-disable no-prototype-builtins */

import requireDir from 'require-dir';
import {mapValues} from 'lodash';
import http from 'request-promise';
import qs from 'querystring';

function makeHttpDefaults({appid} = {}) {
  // returns a convenience wrapper around our http instance- helps keep things
  // loosely coupled
  if (!appid || !appid.length || appid.length !== 16) {
    console.warn(`Warning: you didn't supply an appid. Things may not work correctly.`)
    console.warn(`         Contact api@workfrom.co to get an appid.`)
  }
  return function (path, {method, queryParams} = {}) {
    return http(`http://api.workfrom.co${path}${queryParams ? '?' + qs.stringify(queryParams) : ''}`, {
      method: method || 'GET',
      headers: {
        appid
      },
      json: true
    }).catch(err => {throw new Error(err)})
  };
}

export default function ({appid} = {}) {
  // constructs and returns a workfrom interface instance
  let httpWithDefaults = makeHttpDefaults({appid});
  let endpoints = requireDir('./endpoints');

  // bind our http wrapper to endpoint methods
  endpoints = mapValues(endpoints, endpoint => {
    return mapValues(endpoint, method => method.bind(null, httpWithDefaults));
  });
  return endpoints;
}
