// Admin view component
// Core imports
import React from 'react';

// Styles
import './Admin.scss';

const Admin = () => {
  return (
    <div className="Admin">
      Admin view
      <form>

        <label htmlFor="coupon_interval">Coupon Interval:</label>
        <input type="number" id="coupon_interval" />
        <button>Set coupon interval</button>

        <label htmlFor="coupon_code">Coupon Code:</label>
        <input type="text" id="coupon_code" />
        <button>Set coupon code</button>

      </form>

    </div>
  );
}

export default Admin;