function get(http, {id, slug}) {
  if (id && slug) {
    throw new Error(`wf.places.get: can't supply both an id and slug`);
  }
  if (!id && !slug) {
    throw new Error(`wf.places.get: requires an id or slug`);
  }

  return http(`/places/${id || slug}`);
}

function search(http, {query, limit = 20}) {
  if (!query) {
    throw new Error('wf.places.search: requires a query');
  }

  return http(`/places/name/${query}`, {
    queryParams: {
      rpp: limit
    }
  });
}

function nearCoordinates(http, {lat, long}) {

}

function nearPostalCode(http, {postalCode}) {

}

export {get, search, nearCoordinates, nearPostalCode};
