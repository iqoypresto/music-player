import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home/Home'
import Dashboard from './pages/Dashboard/Dashboard'
import Layout from './pages/Layout/Layout'
import Search from './pages/Search/Search'

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<Home />} />
        <Route path='/' element={<Layout />}>
          <Route path='dashboard' element={<Dashboard />} />
          <Route path='search/' element={<Search />}>
            <Route path='tracks' />
            <Route path='albums' />
            <Route path='playlists' />
            <Route path='artists' />
            <Route path='episodes' />
            <Route path='podcasts' />
            <Route path='profiles' />
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
