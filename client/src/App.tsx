import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './pages/home'
import LoginPage from './pages/auth/login'
import Layout from './components/layouts/layout'

const App = () => {
  return (
    <>
      <Layout>
        <Router>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<LoginPage />} />
          </Routes>
        </Router>
      </Layout>
    </>
  )
}

export default App
