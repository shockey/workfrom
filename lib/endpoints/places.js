function get(http, {id, slug}) {
  if (id && slug) {
    throw new Error(`wf.places.get: can't supply both an id and slug`);
  }
  if (!id && !slug) {
    throw new Error(`wf.places.get: requires an id or slug`);
  }

  return http(`/places/${id || slug}`);
}

function search(http, {name, limit = 20, page = 1}) {
  if (!name) {
    throw new Error('wf.places.search: requires a query');
  }

  return http(`/places/name/${name}`, {
    queryParams: {
      rpp: limit,
      page
    }
  });
}

function near(http, {lat, long, postalCode, radius = 5, limit, page}) {
  // high-level function that actually uses two different endpoints!
  // hence the if statements.
  // a bit complex for us, but more intuitive for end users!
  if (postalCode) {
    return http(`/places/postal/${postalCode}`, {
      queryParams: {
        limit: limit || 20,
        page: page || 1
      }
    });
  } else if (lat && long && (page || limit)) {
    // valid lat & long, but also with settings not used by /places/ll/
    throw new Error(`wf.places.near: can't use limit or page params with lat/long`);
  } else if (lat && long) {
    return http(`/places/ll/${lat},${long}`, {
      queryParams: {
        radius
      }
    });
  } else {
    throw new Error('wf.places.near: requires either a postalCode, or lat and long pair');
  }
}

export {get, search, near};
