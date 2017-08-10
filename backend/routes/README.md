# Table


### POST /api/tables
Creates a table with properties provided in the body.
* 200 with the new table in response when it is succeeded
* 400 when an error occurred

### GET /api/tables/:id
Returns a table with the given id.
* 200 with the table in response when it is succeeded
* 400 when an error occurred

### GET /api/tables
Returns all tables.
* 200 with the tables in response when it is succeeded
* 400 when an error occurred

### DELETE /api/tables/:id
Removes a table with the given id.
* 204 when it is succeeded
* 400 when an error occurred

## Table - Records

### POST /api/tables/:id/records
Creates a record with properties, provided in the body, in a table with the given id.
* 200 with the updated table in response when it is succeeded
* 400 when an error occurred

### GET /api/tables/records/:id
Returns a record with the given id.
* 200 with the record in response when it is succeeded
* 400 when an error occurred

### GET /api/tables/:id/records
Returns all records.
* 200 with all records in response when it is succeeded
* 400 when an error occurred

### DELETE /api/tables/:tableId/records/:recordId
Removes a record with the given id.
* 204 when it is succeeded
* 400 when an error occurred

## Table - Records - Comments

### POST /api/tables/:tableId/records/:recordId/comments
Creates a comment with properties, provided in the body, in a record with the given id.
* 200 with the updated record in response when it is succeeded
* 400 when an error occurred

### DELETE /api/tables/:tableId/records/:recordId/comments/:commentId
Removes a comment with the given id.
* 204 when it is succeeded
* 400 when an error occurred

## Table - Fields

### POST /api/tables/:id/fields
Creates a field with properties, provided in the body, in a table with the given id.
* 200 with the updated table in response when it is succeeded
* 400 when an error occurred

### PUT /api/tables/fields/:fieldId
Updates field with the given id.
* 200 with the updated field in response when it is succeeded
* 400 when an error occurred

### GET /api/tables/fields/:id
Returns a field with the given id.
* 200 with the record in response when it is succeeded
* 400 when an error occurred

### GET /api/tables/:id/fields
Returns all fields.
* 200 with all fields in response when it is succeeded
* 400 when an error occurred

### DELETE /api/tables/:tableId/fields/:fieldId
Removes a record with the given id.
* 204 when it is succeeded
* 400 when an error occurred

## Table - View

### PUT /api/tables/:tableId/views/:viewId
Links a view with the given id to a table with the given id.
* 200 when it is succeeded
* 400 when an error occurred

### DELETE /api/tables/:tableId/views/:viewId
Removes a link between a view with the given id and a table with the given id.
* 204 when it is succeeded
* 400 when an error occurred
