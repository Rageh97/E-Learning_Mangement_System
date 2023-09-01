import React from "react";
import LayoutResolver from "../../layouts/LayoutResolver";
import { useSelector } from "react-redux";

const ProfList = () => {
  const users = useSelector((state) => state.user.users);
  return (
    <LayoutResolver>
      <div className="m-10">
      <h1 className="mb-2 text-lg fw-bold text-center">List of <span className="text-blue-700">professors</span> </h1>
        <table className="border-separate border-spacing-1  w-full ">
          <thead>
            <tr className="bg-teal-500">
              <th className="p-2">Email</th>
              <th className="p-2">Name</th>
              <th className="p-2">Code</th>
              <th className="p-2">Role</th>
            
            </tr>
          </thead>
          {users?.map((user, i) => {
            return (
              <>
                {user.role === "professors" && (
                  <tbody key={i}>
                    <tr className="bg-teal-200">
                      <td className="p-1">{user.email}</td>
                      <td className="p-1">{user.name}</td>
                      <td className="p-1">{user.code}</td>
                      <td className="p-1">{user.role}</td>
                     
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

export default ProfList;
