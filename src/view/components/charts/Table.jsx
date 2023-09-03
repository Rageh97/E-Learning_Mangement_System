import React from "react";
import DataTable from "react-data-table-component";

const Table = ({data , title , columns}) => {
  const customStyles = {
    rows: {
      style: {
        backgroundColor: "#F1F1F1", // override the row height
      },
    },
    headCells: {
      style: {
        backgroundColor: "#A5D8DD",
      },
    },
  };

  
 

  return (
    <DataTable
    className="shadow-md"
      title={title}
      columns={columns}
      data={data}
      theme="default"
      selectableRows
      pagination
      customStyles={customStyles}
    />
  );
};

export default Table;
