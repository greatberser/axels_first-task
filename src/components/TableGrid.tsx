import { useState } from 'react';
import { DataGrid, GridColDef } from '@mui/x-data-grid';

import type { Expense } from '../store/ducks/expenses';

import { TableGridDiv } from '../styled/TableGrid';

type TableGridProps = {
  expense: Expense[];
};

const columns: GridColDef[] = [
  { field: 'date', headerName: 'Date', width: 200 },
  { field: 'category', headerName: 'Category', width: 1020 },
  { field: 'amount', headerName: 'Amount', width: 200, type: 'number' },
];

export const TableGrid: React.FC<TableGridProps> = ({ expense }) => {
  const [paginationModel, setPaginationModel] = useState({
    pageSize: 5,
    page: 0,
  });
  return (
    <TableGridDiv>
      <DataGrid
        rows={expense}
        columns={columns}
        pagination
        paginationModel={paginationModel}
        onPaginationModelChange={setPaginationModel}
        disableRowSelectionOnClick
        disableColumnMenu
        disableColumnSorting
        disableColumnResize
        getRowId={(row) => row.id.toString()}
      />
    </TableGridDiv>
  );
};

export default TableGrid;
