import { Link, Route, Routes } from 'react-router-dom'
import './App.css'
import TestPage from './TestPages/TestPage'
import TestHome from './TestPages/TestHome'
function App() {
  

  return (
    <>
      <div>
        <Link to="/">홈으로</Link>
        <Link to="/testpage">테스트 페이지로</Link>
        <Routes>
          <Route path="/" element={<TestHome/>}></Route>
          <Route path="/testpage" element={<TestPage/>}></Route>
        </Routes>
      </div>
    </>
  )
}

export default App
