export interface User {
    id: number;
    username: string;
    password: string;
    fullName: string;
    profilePicture: string;
  }
  
  export const users: User[] = [
    {
      id: 1,
      username: 'admin1',
      password: '1234',
      fullName: 'Rinlanee W',
      profilePicture: 'https://randomuser.me/api/portraits/women/75.jpg',
    },
    {
      id: 2,
      username: 'admin2',
      password: '5678',
      fullName: 'Harry P',
      profilePicture: 'https://randomuser.me/api/portraits/men/1.jpg',
    },
  ];