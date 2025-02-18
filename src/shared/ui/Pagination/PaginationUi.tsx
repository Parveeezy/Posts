import { ChangeEvent, MouseEvent } from "react";
import { TablePagination } from "@mui/material";
import { PaginationTypes } from "../../../app/types/uiTypes/Pagination-types.ts"



export const PaginationUi = ({
															 count,
															 page,
															 rowsPerPage,
															 onChangePage,
															 onChangeRowsPerPage,
														 }: PaginationTypes) => {
	const handleChangePage = (
		event: MouseEvent<HTMLButtonElement> | null,
		newPage: number,
	) => {
		onChangePage(newPage);
	};

	const handleChangeRowsPerPage = (
		event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
	) => {
		onChangeRowsPerPage(parseInt(event.target.value, 10));
	};

	return (
		<TablePagination
			component="div"
			count={count}
			page={page}
			onPageChange={handleChangePage}
			rowsPerPage={rowsPerPage}
			onRowsPerPageChange={handleChangeRowsPerPage}
			rowsPerPageOptions={[10, 20, 50]}
		/>
	);
};
