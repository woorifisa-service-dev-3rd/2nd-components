import { useEffect, useState } from "react"
import SpinBox from "./SpinBox.jsx";


// <SubmitButton color={'rgb(51,51,255)'} callback={testFunction} message={'로그인'} />
const SubmitButton = ({color, callback, data, message, width}) => {
  // 색
  const sub = color.slice(4, -1);
  const [red, green, blue] = sub.split(",").map(Number);
  const hoveredColor = `rgb(${Math.floor(red/1.2)},${Math.floor(green/1.2)},${Math.floor(blue/1.2)})`
  const mouseDownColor = `rgb(${Math.floor(red/3)},${Math.floor(green/3)},${Math.floor(blue/3)})`

  // 메세지
  const buttonMessage = message? message : "SUBMIT";

  // 함수 실행되기 전 버튼을 비활성화하기 위한 변수
  const [disabled, setDisabled] = useState(false);
  const [isHovered, setHover] = useState(false);
  const [buttonColor, setColor] = useState(color);

  const buttonWidth = width? width : '100%'
  const height = '3rem';

  // 클릭 시 실행될 함수
  const onClick = async () => {
    setDisabled(true);
    if (data) {
      await callback(data);
    }
    else {
      await callback();
    }
    setDisabled(false);
  }

  useEffect(() => {
    if (isHovered === false) {
      setColor(color);
    }
    else{
      setColor(hoveredColor);
    }
  },[isHovered])

  return (
    <div className='button-container' style={{width: buttonWidth, height: height}}>
      <button id='submit-button' 
      className="border-transparent rounded-xl disabled:opacity-50 relative text-white text-xl font-bold w-full h-full" 
      style={{backgroundColor: buttonColor}}
      onClick={onClick} 
      onMouseEnter={() => setHover(true)} onMouseLeave={() => setHover(false)}
      onMouseDown={() => setColor(mouseDownColor)} onMouseUp={() => setColor(color)}
      disabled={disabled}>
        {
          disabled?
          <SpinBox color={buttonColor}/>
          : buttonMessage
        }
      </button>
    </div>
  )
}

export default SubmitButton