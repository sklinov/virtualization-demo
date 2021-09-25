import { useCallback } from "react";
import { ColumnItem, RowItem, TableData } from "../../hooks/useGeneratedData"
import BaseTable, { Column, AutoResizer, ColumnShape } from "react-base-table";
import "react-base-table/styles.css";

const MIN_COLUMN_WIDTH = 150;

export const VirtualizedTable = ({columns, rows}: TableData) => {

  const cellRenderer = useCallback((props: {
    cellData: any;
    columns: ColumnShape<ColumnItem>[];
    column: ColumnShape<ColumnItem>;
    columnIndex: number;
    rowData: RowItem;
    rowIndex: number;
    container: BaseTable<unknown>;
    isScrolling?: boolean | undefined;
  }) => {
    const { rowData, column, rowIndex, columnIndex } = props;
    return <span key={`${rowIndex}-${columnIndex}`}>{`${rowData[column.key].data}`}</span>;
  }, [])

  return (
    <>
    <h1>
      Virtual table
    </h1>
    <div style={{height: '80vh'}}>
    <AutoResizer>
        {({ width, height }) => (
          <BaseTable
            fixed
            data={rows}
            width={width}
            height={height}
            rowKey="id"
          >
            {columns.map((column) => {
              return (
                <Column
                  key={column.id}
                  title={column.id}
                  width={200}
                  cellRenderer={cellRenderer}
                />
              );
            })}
          </BaseTable>
        )}
      </AutoResizer>
      </div>
    </>
  )
}