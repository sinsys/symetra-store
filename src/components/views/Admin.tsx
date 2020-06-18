// Admin view component
// Core imports
import React, { useContext, useState } from 'react';

// Types
import { Purchase } from 'types/types.d';

// Contexts
import { AppContext } from 'contexts/AppContext';

// APIs / Services
import ApiService from 'services/ApiService';

// Styles
import './Admin.scss';

const Admin = () => {

  const { state, dispatch } = useContext(AppContext);

  // Mimicking how the data could be acquired
  const purchases: Purchase[] = ApiService.getAllPurchases(state.purchases);

  const [couponInterval, setCouponInterval] = useState(state.couponInterval);
  const [couponCode, setCouponCode] = useState(state.couponCode);

  // Handling controlled form inputs
  const onChangeCouponInterval = (val: number) => {
    setCouponInterval(val);
  }

  const onChangeCouponCode = (val: string) => {
    setCouponCode(val);
  }

  // Updating the coupon interval
  const submitCouponInterval = (e: any) => {
    e.preventDefault();
    dispatch({
      type: 'set-coupon-interval',
      payload: couponInterval
    })
  }

  // Updating the coupon code
  const submitCouponCode = (e: any) => {
    e.preventDefault();
    dispatch({
      type: 'set-coupon-code',
      payload: couponCode
    })
  }

  // Generates one of two reports that download to the client in json format.
  const generateReport = (type: string) => {
    switch(type) {
      case 'all':
        return "data:text/json;charset=utf-8," + encodeURIComponent(JSON.stringify(purchases));
      case 'coupon':
        return "data:text/json;charset=utf-8," + encodeURIComponent(JSON.stringify(ApiService.getCouponPurchases(state.purchases)));
      default:
        return "/admin";
    }
  };

  // This is way too much content for one component, but in the interest of time I wrote it inline for now
  return (
    <div className="Admin">
      <section>
        <h2>Edit Coupon Settings</h2>
        <form id="interval_form" onSubmit={submitCouponInterval}>
          <div>
            <label htmlFor="coupon_interval">Coupon Interval:</label>
            <input type="number" id="coupon_interval" defaultValue={couponInterval} onChange={e => onChangeCouponInterval(parseInt(e.currentTarget.value))} />
            <button>Set coupon interval</button>
          </div>
        </form>
        <form id="code_form" onSubmit={submitCouponCode}>
          <div>
            <label htmlFor="coupon_code">Coupon Code:</label>
            <input type="text" id="coupon_code" defaultValue={couponCode} onChange={e => onChangeCouponCode(e.currentTarget.value)} />
            <button>Set coupon code</button>
          </div>
        </form>
      </section>

      <section>
        <h2>Reports</h2>
        <div className="Reports">
          <a href={generateReport('all')} download={"report.json"}>Download All Purchases</a>
          <a href={generateReport('coupon')} download={"coupon-report.json"}>Download Coupon Purchases</a>
        </div>
      </section>

      <section>
        <h2>All Purchases</h2>
        <div className="PurchasesList">
          <table className="PurchasesTable">
            <thead>
              <tr>
                <th>Purchase ID</th>
                <th>Coupon Used</th>
                <th>Coupon Code</th>
                <th>Product ID</th>
                <th>User ID</th>
                <th>Purchase Date</th>
              </tr>
            </thead>
            <tbody>
              {purchases.map(purchase => {
                return (
                  <tr className="Purchase" key={purchase.id}>
                    <td>{purchase.id}</td>
                    <td>{purchase.couponApplied ? "True" : "False"}</td>
                    <td>{purchase.couponCode}</td>
                    <td>{purchase.productId}</td>
                    <td>{purchase.userId}</td>
                    <td>{purchase.datePurchased.toLocaleString()}</td>
                  </tr>
                )
              })}
            </tbody>

          </table>

        </div>
      </section>

    </div>
  );
}

export default Admin;