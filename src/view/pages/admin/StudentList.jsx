import React from "react";
import LayoutResolver from "../../layouts/LayoutResolver";
import { useSelector } from "react-redux";
import { listOfStd } from "../../../core/constants";
import Table from "../../components/charts/Table";

const StudentList = () => {
  const users = useSelector((state) => state.user.users);
  const students = users.filter((user) => user.role === "student");
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
    {
      name: "Operations",
      selector: (row) => row.code,
    },
  ];
  return (
    <LayoutResolver>
      <div className="m-10">
        {users  && (
          <Table
            title={"List of all students"}
            data={students}
            columns={columns}
          />
        )}
      </div>
    </LayoutResolver>
  );
};

export default StudentList;
