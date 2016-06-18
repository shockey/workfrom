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

function nearCoordinates(http, {lat, long}) {

}

function nearPostalCode(http, {postalCode}) {

}

export {get, search, nearCoordinates, nearPostalCode};
