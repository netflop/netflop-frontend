import React, { useState } from 'react';
import { Table } from 'antd';
import type { ColumnsType, TableProps } from 'antd/es/table';
import type { TableRowSelection } from 'antd/es/table/interface';
import tw from '@/common/utils/classUtil';
import { AnyObject } from 'antd/es/_util/type';

export interface PrimaryTableProps<RecordType> extends TableProps<RecordType> {
  columns: ColumnsType<RecordType>;
  dataSource: readonly RecordType[];
  rowClassName?: string;
  tableClassName?: string;
  rowKey?: any;
  loading?: boolean;
  handleSelectRecords?: (
    // eslint-disable-next-line no-unused-vars
    keys: React.Key[]
  ) => void;
}

const PrimaryTable = <RecordType extends AnyObject>(
  props: PrimaryTableProps<RecordType>
) => {
  const {
    dataSource,
    columns,
    rowClassName,
    tableClassName,
    rowKey,
    loading,
    handleSelectRecords,
    ...resProps
  } = props;

  const [selectedRowKeys, setSelectedRowKeys] = useState<React.Key[]>([]);

  const onSelectChange = (newSelectedRowKeys: React.Key[]) => {
    if (typeof handleSelectRecords === 'function') {
      // callback func form props
      handleSelectRecords(newSelectedRowKeys);
    }

    // set keys for rendering the list of selected records
    setSelectedRowKeys(newSelectedRowKeys);
  };

  const rowSelection: TableRowSelection<RecordType> = {
    selectedRowKeys,
    onChange: onSelectChange,
    selections: [
      Table.SELECTION_ALL,
      Table.SELECTION_INVERT,
      Table.SELECTION_NONE,
      {
        key: 'odd',
        text: 'Select Odd Row',
        onSelect: (changeableRowKeys) => {
          let newSelectedRowKeys = [];
          newSelectedRowKeys = changeableRowKeys.filter((_, index) => {
            if (index % 2 !== 0) {
              return false;
            }
            return true;
          });
          setSelectedRowKeys(newSelectedRowKeys);
        }
      },
      {
        key: 'even',
        text: 'Select Even Row',
        onSelect: (changeableRowKeys) => {
          let newSelectedRowKeys = [];
          newSelectedRowKeys = changeableRowKeys.filter((_, index) => {
            if (index % 2 !== 0) {
              return true;
            }
            return false;
          });
          setSelectedRowKeys(newSelectedRowKeys);
        }
      }
    ]
  };

  return (
    <Table
      className={tw(tableClassName)}
      rowClassName={tw(rowClassName)}
      columns={columns}
      dataSource={dataSource}
      rowSelection={!!dataSource && !!columns && rowSelection}
      rowKey={rowKey}
      loading={loading}
      {...resProps}
    />
  );
};

export default PrimaryTable;
