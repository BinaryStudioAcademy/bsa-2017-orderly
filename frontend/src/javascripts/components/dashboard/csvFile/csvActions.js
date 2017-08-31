export function passJSON(newData, tableId) {
  return {
    type: 'CSV_PARSED',
    newData,
    tableId
  }
}
