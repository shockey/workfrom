function get(http, {id, slug}) {
  console.log(arguments)
  if (id && slug) {
    throw new Error(`wf.places.get: can't supply both an id and slug`);
  }
  if (!id && !slug) {
    throw new Error(`wf.places.get: requires an id or slug`);
  }

  return http(`/places/${id || slug}`, {
    method: 'GET'
  })
}

function search(http, {query}) {

}

function nearCoordinates(http, {lat, long}) {

}

function nearPostalCode(http, {postalCode}) {

}

export {get, search, nearCoordinates, nearPostalCode};
