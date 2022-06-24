import '../styles/index.css'
import { Context, reducer, initialState } from '../lib/context'
import { useReducer } from 'react'
function MyApp({ Component, pageProps }) {
  const [state, dispatch] = useReducer(reducer, initialState)
  return (
    <Context.Provider value={{ state, dispatch }}>
      <Component {...pageProps} />
    </Context.Provider>
  )
}

export default MyApp
