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
  products: Product[];
  users: User[];
  purchases: Purchase[];
}

const initialState: AppContextState = {
  products: [] as Product[],
  users: [] as User[],
  purchases: [] as Purchase[]
};

// Initialize Context
const AppContext = createContext({} as AppContextProps);

const reducer = (state: AppContextState, action: any) => {
  let payload = action.payload;
  switch (action.type) {
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
    case 'add-purchase':
      return {
        ...state,
        purchases: [...state.purchases, payload]
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