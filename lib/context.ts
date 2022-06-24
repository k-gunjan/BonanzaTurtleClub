import { createContext, useContext, useReducer } from 'react'

export type StateType = {
  provider?: any
  web3Provider?: any
  address?: string
  chainId?: number
  isChainSupported?: boolean
}

export const initialState: StateType = {
  provider: null,
  web3Provider: null,
  address: undefined,
  chainId: undefined,
  isChainSupported: false
}

export type ActionType =
  | {
      type: 'SET_WEB3_PROVIDER'
      provider?: StateType['provider']
      web3Provider?: StateType['web3Provider']
      address?: StateType['address']
      chainId?: StateType['chainId']
      isChainSupported?: StateType['isChainSupported']
    }
  | {
      type: 'SET_ADDRESS'
      address?: StateType['address']
    }
  | {
      type: 'SET_CHAIN_ID'
      chainId?: StateType['chainId']
    }
  | {
      type: 'RESET_WEB3_PROVIDER'
    }

export function reducer(state: StateType, action: ActionType): StateType {
  // console.log('action=', action)
  switch (action.type) {
    case 'SET_WEB3_PROVIDER':
      return {
        ...state,
        provider: action.provider,
        web3Provider: action.web3Provider,
        address: action.address,
        chainId: action.chainId,
        isChainSupported: action.isChainSupported
      }
    case 'SET_ADDRESS':
      return {
        ...state,
        address: action.address
      }
    case 'SET_CHAIN_ID':
      return {
        ...state,
        chainId: action.chainId
      }
    case 'RESET_WEB3_PROVIDER':
      return initialState
    default:
      throw new Error()
  }
}

// export const connectp = (): JSX.Element => {

export const Context = createContext<StateType>(initialState)

export function useDappContext() {
  return useContext(Context)
}

// export function PageContextProvider({ children }) {
//   const [state, dispatch] = useReducer(reducer, initialState)
//   return (
//     <Context.Provider value={{ state, dispatch }}>{children}</Context.Provider>
//   )
// }
