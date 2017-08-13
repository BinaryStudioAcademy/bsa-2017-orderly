import { contextMenuService } from './contextMenuService';

function callApi(baseId) {
  console.log('function context-menu callApi is called!')
  const url = '';

  return contextMenuService.fetchBase();
}

export const fetchBase = baseId => callApi(baseId);