import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

import App from './App.jsx'
import './index.css'
import { store } from "./app/store.js"
import { Provider } from "react-redux"
import { fetchPosts } from './features/posts/postsSlice.js'
import { fetchUsers } from './features/users/usersSlice.js'

store.dispatch(fetchUsers())
store.dispatch(fetchPosts())

createRoot(document.getElementById('root')).render(
  // <h1>Hiya</h1>
  // <StrictMode>
    <Provider store={store}>
      <Router>
        <Routes>
          <Route path='/*' element={<App />} />
        </Routes>
      </Router>
    </Provider>
  // </StrictMode>
)
