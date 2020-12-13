import React from 'react';

const UserCard = ({ user }) => {
  return (
    <div className='col-md-4 mt-3'>
        <div className='card' style={{ width: '18rem;' }}>
            <h5 className='card-title'>{user.name}</h5>
            <h5 className='card-title'>{user.email}</h5>
            <h5 className='card-title'>{user.phone}</h5>
          </div>
        </div>
  );
};

export default UserCard;
