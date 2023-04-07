import * as React from "react";

import { Pagination } from "@mui/material";
import { PaginationParams } from "../../../models";

export interface ICustomPaginationProps {
  paginate: PaginationParams;
  handlePageChange: (value: number) => any;
}

export function CustomPagination({
  paginate,
  handlePageChange,
}: ICustomPaginationProps) {
  const handleChangePage = (
    event: React.ChangeEvent<unknown>,
    value: number
  ) => {
    handlePageChange(value);
  };

  return (
    <>
      <Pagination count={paginate.totalPages} onChange={handleChangePage} />
    </>
  );
}
