// Product Listing component
// Core imports
import React, { useContext } from 'react';

// Types
import { User } from 'types/types.d';

// Contexts
import { AppContext } from 'contexts/AppContext';

// Styles
import './CurrentUserDisplay.scss';
import ApiService from 'services/ApiService';

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
      <p className="coupon-validity">Coupon is {ApiService.validateCoupon(user.couponCode, state.couponCode) ? "Valid" : "Invalid"}</p>
      {/* This is a button that will log you into a random user so you can see that the coupon persists and does not apply to other users */}
      <button onClick={e => handleChangeUser()}>Pick Random User</button>
    </div>
  );
}

export default CurrentUserDisplay;