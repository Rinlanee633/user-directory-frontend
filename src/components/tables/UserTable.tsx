import React, { useState } from "react";
import styled from "styled-components";
import { generateUsers } from "../../mocks/generateUsers";
import { User } from "../../models/User";
import { userColumns } from "./tableColumns";
import UserDetailModal from "./UserDetailModal";

const FilterContainer = styled.div`
  margin: 10px;
`;

const TableContainer = styled.div`
  margin: 10px;
  max-height: 500px;
  overflow-y: auto; /* scroll bar */
  border: 1px solid #ccc;
  border-radius: 4px;
`;

const SearchInput = styled.input`
  padding: 10px;
  margin-bottom: 20px;
  margin-right: 20px;
  border: 1px solid #ccc;
  border-radius: 4px;
  width: 30%;
`;

const SelectStatus = styled.select`
  padding: 10px;
  margin-bottom: 20px;
  border: 1px solid #ccc;
  border-radius: 4px;
  width: 20%;
`;

const Table = styled.table`
  width: 100%;
  border-collapse: collapse;

  th,
  td {
    padding: 10px;
    text-align: left;
    border-bottom: 1px solid #ddd;
  }

  th {
    background-color: #2a36b1;
    color: white;
    cursor: default;
  }

  tr {
    cursor: pointer;
  }

  tr:hover {
    background-color: #afbfff;
  }
`;

const UserTable = () => {
  const [users, setUsers] = useState<User[]>(generateUsers(30));
  const [selectedUser, setSelectedUser] = useState<User | null>(null);
  const [searchTerm, setSearchTerm] = useState("");
  const [statusFilter, setStatusFilter] = useState("All");

  const filteredUsers = users.filter((user) => {
    const matchesUsername = user.username
      .toLowerCase()
      .includes(searchTerm.toLowerCase());
    const matchesStatus =
      statusFilter === "All" || user.status === statusFilter;
    return matchesUsername && matchesStatus;
  });

  const handleRowClick = (user: User) => {
    setSelectedUser(user); // แสดง Modal เมื่อคลิกที่แถว
  };

  const handleCloseModal = () => {
    setSelectedUser(null); // ปิด Modal
  };

  return (
    <>
      <FilterContainer>
        <SearchInput
          type="text"
          placeholder="Search by username"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <SelectStatus
          value={statusFilter}
          onChange={(e) => setStatusFilter(e.target.value)} // อัปเดตสถานะฟิลเตอร์
        >
          <option value="All">All</option>
          <option value="Active">Active</option>
          <option value="Inactive">Inactive</option>
        </SelectStatus>
      </FilterContainer>

      <TableContainer>
        <Table>
          <thead>
            <tr>
              {userColumns.map((column) => (
                <th key={column.key}>{column.label}</th>
              ))}
            </tr>
          </thead>

          <tbody>
            {filteredUsers.map((user: User) => (
              <tr key={user.id} onClick={() => handleRowClick(user)}>
                {userColumns.map((column) => (
                  <td key={column.key}>
                    {column.key && column.key === "joinDate"
                      ? (user[column.key] as Date).toDateString()
                      : user[column.key]}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </Table>
        {/* Modal */}
        {selectedUser && (
          <UserDetailModal user={selectedUser} onClose={handleCloseModal} />
        )}
      </TableContainer>
    </>
  );
};

export default UserTable;
