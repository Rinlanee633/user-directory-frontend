import {User} from '../../models/User'
// User Table Columns
export const userColumns: { key: keyof User; label: string }[] = [
    { key: 'id', label: 'ID' },
    { key: 'username', label: 'Username' },
    { key: 'name', label: 'Name' },
    { key: 'email', label: 'Email' },
    { key: 'phone', label: 'Phone' },
    // { key: 'address', label: 'Address' },
    { key: 'role', label: 'Role' },
    { key: 'joinDate', label: 'Join Date' },
    { key: 'status', label: 'Status' },
];