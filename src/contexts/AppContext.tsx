// Context for products, users, and purchases - This will be used as a pseudo database
import React, {
  createContext,
  useReducer
} from 'react';

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
  fetched: boolean;
}

const initialUser: User = {
  id: "",
  name: "",
  hasCoupon: false,
  purchases: [] as Purchase[],
  couponCode: null
}

const initialState: AppContextState = {
  currentUser: initialUser,
  products: [] as Product[],
  users: [initialUser] as User[],
  purchases: [] as Purchase[],
  couponCode: "ABC123",
  couponInterval: 3,
  fetched: false
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
    case 'set-current-user':
      return {
        ...state,
        currentUser: payload as User
      };
    case 'set-fetched':
      return {
        ...state,
        fetched: payload
      };
    // Change to a random user
    case 'set-random-user':
      return {
        ...state,
        currentUser: state.users[Math.floor(Math.random() * state.users.length)]
      }

    // Purchases related
    case 'make-purchase':
      return {
        ...state,
        purchases: [...state.purchases, payload as Purchase]
      }
    case 'set-coupon':
      const userIndex = state.users.findIndex(user => user.id === payload.id);
      const newUsers = state.users;
      newUsers[userIndex].hasCoupon = true;
      console.log(newUsers[userIndex]);
      return {
        ...state,
        users: newUsers
      }

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