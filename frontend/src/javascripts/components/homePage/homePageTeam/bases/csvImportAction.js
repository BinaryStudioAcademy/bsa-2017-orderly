export function passJSON(table, teamId, base) {
  return {
    type: 'CSV_PARSED_SPREADSHEET',
    teamId: teamId,
    table: table,
    base: base
  }
}