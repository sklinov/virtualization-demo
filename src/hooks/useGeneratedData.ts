import { useMemo } from "react";
import randomWord from "random-words";

const MAX_COLUMNS = 10;
const MAX_ROWS = 100;

export interface GeneratedDataProps {
  maxColumns: number;
  maxRows: number;
}

export enum DataType {
  number = "number",
  string = "string",
  datetime = "datetime",
}

export interface ColumnItem {
  id: string;
  type: DataType;
}

export interface RowItem {
  [k: string]: {
    type: DataType;
    data: string | number | Date;
  };
}

export interface TableData {
  columns: ColumnItem[];
  rows: RowItem[];
}

export const useGeneratedData = ({
  maxColumns,
  maxRows,
}: GeneratedDataProps) => {
  const columns = useMemo(() => {
    return Array.from(Array(maxColumns).keys(), (i) => ({
      id: `column-${i}`,
      type: Object.values(DataType)[
        Math.floor(Math.random() * Object.values(DataType).length)
      ],
    }));
  }, [maxColumns]);

  const getDataByType = (type: DataType) => {
    switch (type) {
      case DataType.number:
        return Math.random() * 1000;
      case DataType.string:
        return randomWord();
      case DataType.datetime:
        return new Date(Math.random() * Date.now());
    }
  };

  const rows = useMemo(() => {
    return Array.from(Array(maxRows).keys(), (i) => {
      return Object.fromEntries(
        columns.map((column) => [
          column.id,
          {
            type: column.type,
            data: getDataByType(column.type),
          },
        ])
      );
    });
  }, [maxRows, columns]);

  return { columns, rows };
};
