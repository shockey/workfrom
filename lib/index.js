/* eslint-disable no-prototype-builtins */

import requireDir from 'require-dir';
import {mapValues} from 'lodash';
import http from 'request-promise';
import qs from 'querystring';

function makeHttpDefaults({appid}) {
  // returns a convenience wrapper around our http instance- helps keep things
  // loosely coupled
  if (appid.length && appid.length !== 16) {
    throw new Error('Please supply a valid appid');
  }
  return function (path, {method, queryParams} = {}) {
    return http(`http://api.workfrom.co${path}${queryParams ? '?' + qs.stringify(queryParams) : ''}`, {
      method: method || 'GET',
      headers: {
        appid
      },
      json: true
    });
  };
}

export default function ({appid}) {
  // constructs and returns a workfrom interface instance
  let httpWithDefaults = makeHttpDefaults({appid});
  let endpoints = requireDir('./endpoints');

  // bind our http wrapper to endpoint methods
  endpoints = mapValues(endpoints, endpoint => {
    return mapValues(endpoint, method => method.bind(null, httpWithDefaults));
  });
  return endpoints;
}
