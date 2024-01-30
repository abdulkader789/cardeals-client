
import SectionHeader from "../utils/SectionHeader";
import SearchBar from "../utils/SearchBar";

import TableContainer from "../utils/TableContainer";

import { useState } from "react";
import { useUsers } from "../../../context/UserContext";


const UserSection = () => {
    const { usersData, setUsersData } = useUsers()
    const [filteredUsers, setFilteredUsers] = useState([]);
    const handleDelete = (deletedItemId) => {

        setUsersData(prevData => prevData.filter(item => item._id !== deletedItemId));
    };
    console.log('UserData', usersData)

    return (
        <div className="w-full flex-grow">
            <SectionHeader name="User" redirect="/dashboard/createUser" />
            <SearchBar data={usersData} setFiltered={setFilteredUsers} />
            {
                filteredUsers.length > 0 ? <TableContainer infoRoute='userdetails' onDelete={handleDelete} tableData={filteredUsers} updateRoute="updateUser" deleteRoute='auth/delete-user' />
                    : <TableContainer infoRoute='userdetails' onDelete={handleDelete} tableData={usersData} updateRoute="updateuser" deleteRoute='auth/delete-user' />
            }

        </div>
    );
};

export default UserSection;