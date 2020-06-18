// Product Listing component
// Core imports
import React, { useContext } from 'react';

// Types
import { User } from 'types/types.d';

// Contexts
import { AppContext } from 'contexts/AppContext';

// Styles
import './CurrentUserDisplay.scss';

const CurrentUserDisplay = () => {

  const { state, dispatch } = useContext(AppContext);
  const user: User = state.currentUser;

  const handleChangeUser = () => {
    dispatch({
      type: 'set-random-user'
    })
  };

  return (
    <div className="CurrentUserDisplay">
      <p className="name">{user.name}</p>
      <p className="coupon-code">Coupon: {user.couponCode || "None"}</p>
      <button onClick={e => handleChangeUser()}>Pick Random User</button>
    </div>
  );
}

export default CurrentUserDisplay;