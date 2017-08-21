	 	 	
## General View API
- Get all table views common data

GET: ```/tables/<table id>/views/```

Response data: [{id, type, name, ...}]

## Common API for all views
- Get view by id

GET: ```/views/<form || grid || kanban || gallery>/<view id>```

Response data: {<view data>}

- Create view

POST: ```/tables/<table id>/views/<form || grid || kanban || gallery>```

Request data (optional): {view}

Response data: {view}

- Change view property (name, description, ...) of the view

PUT: 	```/views/<form || grid || kanban || gallery>/<view id>```

Request data: {name: <nameValue>, description: <descriptionValue>, ... }

Response data: {<updated properties>}

- Delete view

DELETE ```/tables/<table id>/views/<form || grid || kanban || gallery>/<view id>```

### Form & Grid View specific API

- Add new view fields_config item

POST: ```/views/<form || grid>/<view id>/fields```

Request data: {name, position, included}

Response data: {<fields data>}

- Change view fields_config item

PUT: ```/views/<form || grid>/<view id>/fields/<field id>```

Request data: {...}

Response data: {<...>}

- Delete view fields_config item

DELETE: ```/views/<form || grid>/<view id>/fields/<field id>```

### Kanban View specific API

- Add new view columns_config item

POST: ```/views/kanban/<view id>/columns```

Request data: {hidden}

Response data: {<columns data>}

- Change view columns_config item

PUT: ```/views/kanban/<view id>/columns/<column id>```

Request data: {...}

Response data: {<...>}

- Delete view columns_config item

DELETE: ```/views/kanban/<view id>/columns/<column id>```

### Gallery View specific API

- Add new view records_config item

POST: ```views/gallery/<view id>/records```

Request data: {position, included_fields: []}

Response data: {<records data>}

- Change view records_config item

PUT: ```/views/gallery/<view id>/records/<record id>```

Request data: {...}

Response data: {<...>}

- Delete view records_config item

DELETE: ```/views/gallery/<view id>/records/<record id>```

