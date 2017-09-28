export function passJSON(newData, tableId, viewId, viewType) {
  return {
    type: 'CSV_PARSED',
    newData,
    tableId,
    viewId,
    viewType
  }
}