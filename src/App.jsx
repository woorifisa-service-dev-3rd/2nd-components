
import { Link, Route, Routes } from 'react-router-dom'
import './App.css'
import TestPage from './TestPages/TestPage'
import TestHome from './TestPages/TestHome'
import Menue from './components/dropdown-menue/Menue'

let icons = [
  {
    id: self.crypto.randomUUID(),
    url: "https://www.naver.com",
    src: "../images/youtube.png",
    name: "이름",
  },
  {
    id: self.crypto.randomUUID(),
    url: "https://google.com",
    src: "../images/youtube.png",
    name: "이름",
  },
  {
    id: self.crypto.randomUUID(),
    url: "https://google.com",
    src: "../images/youtube.png",
    name: "이름",
  },
  {
    id: self.crypto.randomUUID(),
    url: "https://google.com",
    src: "../images/youtube.png",
    name: "이름",
  },
  {
    id: self.crypto.randomUUID(),
    url: "https://google.com",
    src: "../images/youtube.png",
    name: "이름",
  },
  {
    id: self.crypto.randomUUID(),
    url: "https://google.com",
    src: "../images/youtube.png",
    name: "이름",
  },
  {
    id: self.crypto.randomUUID(),
    url: "https://google.com",
    src: "../images/youtube.png",
    name: "이름",
  },
  {
    id: self.crypto.randomUUID(),
    url: "https://google.com",
    src: "../images/youtube.png",
    name: "이름",
  },
  {
    id: self.crypto.randomUUID(),
    url: "https://google.com",
    src: "../images/youtube.png",
    name: "이름",
  },
  {
    id: self.crypto.randomUUID(),
    url: "https://google.com",
    src: "../images/youtube.png",
    name: "이름",
  },
  {
    id: self.crypto.randomUUID(),
    url: "https://google.com",
    src: "../images/youtube.png",
    name: "이름",
  },
  {
    id: self.crypto.randomUUID(),
    url: "https://google.com",
    src: "../images/youtube.png",
    name: "이름",
  },
  {
    id: self.crypto.randomUUID(),
    url: "https://google.com",
    src: "../images/youtube.png",
    name: "이름",
  },
  {
    id: self.crypto.randomUUID(),
    url: "https://google.com",
    src: "../images/youtube.png",
    name: "이름",
  },
  {
    id: self.crypto.randomUUID(),
    url: "https://google.com",
    src: "../images/youtube.png",
    name: "이름",
  },
  {
    id: self.crypto.randomUUID(),
    url: "https://google.com",
    src: "../images/youtube.png",
    name: "이름",
  },
  {
    id: self.crypto.randomUUID(),
    url: "https://google.com",
    src: "../images/youtube.png",
    name: "이름",
  },
  {
    id: self.crypto.randomUUID(),
    url: "https://google.com",
    src: "../images/youtube.png",
    name: "이름",
  },
  {
    id: self.crypto.randomUUID(),
    url: "https://google.com",
    src: "../images/youtube.png",
    name: "이름",
  },
  {
    id: self.crypto.randomUUID(),
    url: "https://google.com",
    src: "../images/youtube.png",
    name: "이름",
  },
  {
    id: self.crypto.randomUUID(),
    url: "https://google.com",
    src: "../images/youtube.png",
    name: "이름",
  },
  {
    id: self.crypto.randomUUID(),
    url: "https://google.com",
    src: "../images/youtube.png",
    name: "이름",
  },
  {
    id: self.crypto.randomUUID(),
    url: "https://google.com",
    src: "../images/youtube.png",
    name: "이름",
  },
  {
    id: self.crypto.randomUUID(),
    url: "https://google.com",
    src: "../images/youtube.png",
    name: "이름",
  },
  {
    id: self.crypto.randomUUID(),
    url: "https://google.com",
    src: "../images/youtube.png",
    name: "이름",
  },
  {
    id: self.crypto.randomUUID(),
    url: "https://google.com",
    src: "../images/youtube.png",
    name: "이름",
  },
  {
    id: self.crypto.randomUUID(),
    url: "https://google.com",
    src: "../images/youtube.png",
    name: "이름",
  },
  {
    id: self.crypto.randomUUID(),
    url: "https://google.com",
    src: "../images/youtube.png",
    name: "이름",
  },
];

const positionIcons = (icons, number) => {
  if (icons.length % number !== 0) {
    for (let i = 0; i < icons.length % 3; i++) {
      icons.push({ id: self.crypto.randomUUID() });
    }
  }
  return icons;
};
icons = positionIcons(icons, 3);


function App() {
  return (
    <>

      <div>
        <Link to="/">홈으로</Link>
        <Link to="/testpage">테스트 페이지로</Link>
        <Link to="/testmenu">테스트 메뉴로</Link>
        <Routes>
          <Route path="/" element={<TestHome/>}></Route>
          <Route path="/testpage" element={<TestPage/>}></Route>
          <Route path='/testmenu' element={<Menue icons ={icons}/>}></Route>
        </Routes>
      </div>
    </>
  );
}

export default App;
