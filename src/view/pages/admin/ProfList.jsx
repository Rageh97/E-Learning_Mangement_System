import React from "react";
import LayoutResolver from "../../layouts/LayoutResolver";
import { useSelector } from "react-redux";
import Table from "../../components/charts/Table";

const ProfList = () => {
  const users = useSelector((state) => state.user.users);
  const professors = users.filter((user) => user.role === "professors");
  const columns = [
    {
      name: "Name",
      selector: (row) => row.name,
    },
    {
      name: "Email",
      selector: (row) => row.email,
    },
    {
      name: "Role",
      selector: (row) => row.role,
    },
    {
      name: "Code",
      selector: (row) => row.code,
    },
  ];
  return (
    <LayoutResolver>
      <div className="m-10">
        {users &&
        (
          <Table
            data={professors}
            title={"List of all professors"}
            columns={columns}
          />
        )}
      </div>
    </LayoutResolver>
  );
};

export default ProfList;
