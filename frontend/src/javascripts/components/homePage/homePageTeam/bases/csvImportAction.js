export function passJSON(table, teamId) {
  return {
    type: 'CSV_PARSED_SPREADSHEET',
    table: table,
    teamId: teamId
  }
}