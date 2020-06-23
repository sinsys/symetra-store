// Product Listing component
// Core imports
import React, { useContext, useState } from 'react';

// Types
import { Product, Coupon, Purchase } from 'types/types.d';

// Services / APIs
import ApiService from 'services/ApiService';

// Contexts
import { AppContext } from 'contexts/AppContext';

// Styles
import './ProductListing.scss';

type ProductListingProps = {
  product: Product;
};

const ProductListing = (props: ProductListingProps) => {

  const { state, dispatch } = useContext(AppContext);
  const [useCoupon, setUseCoupon] = useState(false);

  const product: Product = props.product;

  const handleBuyProduct = (useCoupon?: boolean) => {
    if ( useCoupon ) {
      const ourCoupon: Coupon = {code: state.currentUser.couponCode};
      ApiService.makePurchase(product.id, state.currentUser.id, ourCoupon)
        .then(response => response.json())
        .then(responseJSON => {

          dispatch({
            type: 'make-purchase',
            payload: responseJSON.value.purchase as Purchase
          })

          if ( responseJSON.value.purchase.couponApplied === true ) {
            dispatch({
              type: 'consume-coupon',
              payload: state.currentUser
            });
            setUseCoupon(false);
          }

          if ( responseJSON.value.coupon === true ) {
            dispatch({
              type: 'set-coupon',
              payload: {
                userId: responseJSON.value.purchase.userId,
                coupon: true
              }
            })
          }
        })
        .catch(e => {
          console.log(e);
        })
    } else {
      ApiService.makePurchase(product.id, state.currentUser.id)
        .then(response => response.json())
        .then(responseJSON => {

          dispatch({
            type: 'make-purchase',
            payload: responseJSON.value.purchase as Purchase
          })

          if ( responseJSON.value.coupon === true ) {
            dispatch({
              type: 'set-coupon',
              payload: {
                userId: responseJSON.value.purchase.userId,
                coupon: true
              }
            })
          }
        })
        .catch(e => {
          console.log(e);
        })
    }
    

  }

  const handleApplyCoupon = () => {
    setUseCoupon(!useCoupon);
  }

  const renderCouponButton = () => {
    return ApiService.validateCoupon(state.currentUser.couponCode, state.couponCode)
      ? <button 
          className={useCoupon ? 'active': ''}
          onClick={e => handleApplyCoupon()}
        >
          {!useCoupon ? `Use coupon ${state.couponCode}` : `Remove coupon ${state.couponCode}`}
        </button>
      : <></>;
  };

  return (
    <div className="ProductListing">
      <h2 className="title">{product.name}</h2>
      <p className="price">${product.price.toFixed(2)}</p>
      <p className="details">{product.details}</p>
      <button onClick={(e) => handleBuyProduct(useCoupon)}>Buy Me</button>
      {renderCouponButton()}
    </div>
  );
}

export default ProductListing;