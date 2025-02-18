export interface PaginationTypes {
	count: number;
	page: number;
	rowsPerPage: number;
	onChangePage: (newPage: number) => void;
	onChangeRowsPerPage: (newRowsPerPage: number) => void;
}