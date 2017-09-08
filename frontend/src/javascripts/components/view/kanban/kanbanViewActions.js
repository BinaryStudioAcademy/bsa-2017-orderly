export const updateKanbanView = (kanbanView, tableId) => ({
	type: 'UPDATE_KANBAN_VIEW',
	kanban: kanbanView,
	tableId: tableId
})