import { DataGrid, GridColDef } from '@mui/x-data-grid';
import { TableGridDiv } from '../styled/TableGrid';

type Expense = {
  id: number;
  date: string;
  category: string;
  amount: number;
};

type TableGridProps = {
  expenses: Expense[];
};

const columns: GridColDef[] = [
  { field: 'date', headerName: 'Date', width: 200 },
  { field: 'category', headerName: 'Category', width: 1020 },
  { field: 'amount', headerName: 'Amount', width: 200, type: 'number' },
];

const TableGrid: React.FC<TableGridProps> = ({ expenses }) => (
  <TableGridDiv>
    <DataGrid
      rows={expenses}
      columns={columns}
      pageSizeOptions={[5, 10, 20]}
      disableRowSelectionOnClick
      disableColumnMenu
      disableColumnSorting
      disableColumnResize
      getRowId={(row) => row.id.toString()}
    />
  </TableGridDiv>
);

export default TableGrid;
