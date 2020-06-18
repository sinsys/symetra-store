// Admin view component
// Core imports
import React, { useContext } from 'react';

// Contexts
import { AppContext } from 'contexts/AppContext';

// Styles
import './Admin.scss';

const Admin = () => {

  const { state } = useContext(AppContext);
  
  return (
    <div className="Admin">
      Admin view
      <form>

        <label htmlFor="coupon_interval">Coupon Interval:</label>
        <input type="number" id="coupon_interval" defaultValue={state.couponInterval} />
        <button>Set coupon interval</button>

        <label htmlFor="coupon_code">Coupon Code:</label>
        <input type="text" id="coupon_code" defaultValue={state.couponCode} />
        <button>Set coupon code</button>

      </form>

    </div>
  );
}

export default Admin;