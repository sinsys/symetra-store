// Context for products, users, and purchases - This will be used as a pseudo database
import React, {
  createContext,
  useReducer
} from 'react';

// Types
import { Product, User, Purchase } from 'types/types.d';

// Setup explicit interfaces for our Context
interface AppContextProps {
  state: AppContextState;
  dispatch: any
}

interface AppContextState {
  currentUser: User,
  products: Product[];
  users: User[];
  purchases: Purchase[];
  couponCode: string;
  couponInterval: number;
}

// Setup initial User - Generally we would have an authentication provide this via JWT or other authentication method
const initialUser: User = {
  id: "",
  name: "",
  hasCoupon: false,
  purchases: [] as Purchase[],
  couponCode: null
}

// Setup initial State
const initialState: AppContextState = {
  currentUser: initialUser,
  products: [] as Product[],
  users: [initialUser],
  purchases: [] as Purchase[],
  couponCode: "", // This is just hardcoded in for now. This option would generally be fetched from the server
  couponInterval: 0 // This is just hardcoded in for now. This would generally be fetched from the server
};

// Initialize Context
const AppContext = createContext({} as AppContextProps);

const reducer = (state: AppContextState, action: any) => {
  let payload = action.payload;
  switch (action.type) {

    // Setting core data
    case 'set-products':
      return {
        ...state,
        products: payload as Product[]
      };
    case 'set-users':
      return {
        ...state,
        users: payload as User[]
      };
    case 'set-purchases':
      return {
        ...state,
        purchases: payload as Purchase[]
      }
    case 'set-current-user':
      return {
        ...state,
        currentUser: payload as User
      };

    // Purchases related
    case 'make-purchase':
      return {
        ...state,
        purchases: [...state.purchases, payload as Purchase]
      }

    case 'consume-coupon':
      const couponUserIndex = state.users.findIndex(user => user.id === payload.id);
      state.users[couponUserIndex].hasCoupon = false;
      state.users[couponUserIndex].couponCode = null;
      return {
        ...state,
        currentUser: state.users[couponUserIndex],
        users: state.users
      }
    
    case 'set-coupon':
      const userIndex = state.users.findIndex(user => user.id === payload.userId);
      if (payload.coupon) {
        state.users[userIndex].hasCoupon = true;
        state.users[userIndex].couponCode = state.couponCode;
      }
      return {
        ...state,
        users: state.users,
        currentUser: state.users[userIndex]
      }

    // Admin behavior
    case 'set-coupon-interval':
      return {
        ...state,
        couponInterval: payload
      };

    case 'set-coupon-code':
      return {
        ...state,
        couponCode: payload
      };

    default: return initialState;
  };
};

const AppContextProvider = (props: any) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const value = { state, dispatch };
  return (
    <AppContext.Provider value={value}>
      {props.children}
    </AppContext.Provider>
  );
};

const AppContextConsumer = AppContext.Consumer;

export { AppContext, AppContextProvider, AppContextConsumer };