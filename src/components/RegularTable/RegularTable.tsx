import { Table, Typography } from "antd";
import { ColumnType } from "antd/lib/table";
import { useMemo } from "react";
import { DataType, RowItem, TableData } from "../../hooks/useGeneratedData";

const {Text} = Typography

export const RegularTable = ({ columns, rows }: TableData) => {
  const antColumns: ColumnType<RowItem>[] = useMemo(() => {
    return columns.map((column) => ({
      title: column.id,
      align: column.type === DataType.number ? "right" : "left",
      dataIndex: column.id,
      render: (text) => <Text>{`${(text.data)}`}</Text>,
    }));  
  }, [columns]);

  return (
    <>
      <h1>Regular page</h1>
      <Table columns={antColumns} dataSource={rows} pagination={false}/>
    </>
  );
};
