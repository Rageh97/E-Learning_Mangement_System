import React from "react";
import LayoutResolver from "../../layouts/LayoutResolver";
import { useSelector } from "react-redux";
const StudentList = () => {
  const users = useSelector((state) => state.user.users);

  return (
    <LayoutResolver>
      <div className="m-10">
        <table class="table-auto w-full">
          <thead>
            <tr>
              <th>Name</th>
              <th>Email</th>
              <th>Code</th>
              <th>Role</th>
              <th>Study_level</th>
            </tr>
          </thead>
 
          {users?.map((user, i) => {
            return (
              <>
                {user.role === "student" && (
                  <tbody>
                    <tr>
                      <td>{user.email}</td>
                      <td>{user.name}</td>
                      <td>{user.code}</td>
                      <td>{user.role}</td>
                      <td>{user.level}</td>
                    </tr>
                  </tbody>
                )}
              </>
            );
          })}
        </table>
      </div>
    </LayoutResolver>
  );
};

export default StudentList;
