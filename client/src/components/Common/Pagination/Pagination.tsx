import * as React from "react";

import { Pagination } from "@mui/material";
import { PaginationParams } from "../../../models";

export interface ICustomPaginationProps {
  paginate: PaginationParams;
  handlePageChange: (value: number) => any;
  style?: React.CSSProperties;
}

export function CustomPagination({
  paginate,
  handlePageChange,
  style,
}: ICustomPaginationProps) {
  const handleChangePage = (
    event: React.ChangeEvent<unknown>,
    value: number
  ) => {
    handlePageChange(value);
  };

  return (
    <div style={style}>
      <Pagination count={paginate.totalPages} onChange={handleChangePage} />
    </div>
  );
}
