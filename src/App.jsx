import Menue from "./components/dropdown-menue/Menue";
import "./App.css";

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
      <Menue icons={icons} />
    </>
  );
}

export default App;
