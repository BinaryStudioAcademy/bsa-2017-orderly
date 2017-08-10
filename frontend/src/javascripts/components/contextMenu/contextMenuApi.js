import { contextMenuService } from './contextMenuService';

function callApi(baseId) {
  console.log('function context-menu callApi is called!')
  const url = '';

  // return fetch(url)
  //  .then(response =>
  //    response.json().then(json => ({ json, response }))
  //  ).then(({ json, response }) => {
  //    ...
  //  })
  //  .then(
  //    response => ({response}),
  //    error => ({error: error.message})
  //  )
  return contextMenuService.fetchBase();
}

export const fetchBase = baseId => callApi(baseId);