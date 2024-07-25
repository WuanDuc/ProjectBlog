import React, { useState } from 'react';
import './AddFriend.css';

const UserList = () => {
  const [users] = useState([
    { id: 1, name: 'Alice', avatar: 'https://via.placeholder.com/50', isFriend: false },
    { id: 2, name: 'Bob', avatar: 'https://via.placeholder.com/50', isFriend: false },
    { id: 3, name: 'Charlie', avatar: 'https://via.placeholder.com/50', isFriend: false },
    { id: 4, name: 'David', avatar: 'https://via.placeholder.com/50', isFriend: false },
    { id: 5, name: 'Eva', avatar: 'https://via.placeholder.com/50', isFriend: false },
  ]);

  const [searchTerm, setSearchTerm] = useState('');
  const [userList, setUserList] = useState(users);

  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
    const filteredUsers = users.filter(user => user.name.toLowerCase().includes(e.target.value.toLowerCase()));
    setUserList(filteredUsers);
  };

  const addFriend = (id) => {
    const updatedUsers = userList.map(user => {
      if (user.id === id) {
        return { ...user, isFriend: true };
      }
      return user;
    });
    setUserList(updatedUsers);
  };

  return (
    <div className="user-list-page">
      <div className="search-bar">
        <input 
          type="text"
          placeholder="Search by name..."
          value={searchTerm}
          onChange={handleSearch}
        />
      </div>
      <div className="user-list">
        {userList.map((user) => (
          <div key={user.id} className="user-card">
            <img src={user.avatar} alt={user.name} className="avatar" />
            <div className="user-info">
              <h3>{user.name}</h3>
              <button 
                onClick={() => addFriend(user.id)}
                disabled={user.isFriend}
              >
                {user.isFriend ? 'Friend' : 'Add Friend'}
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default UserList;
