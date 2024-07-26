import { useState } from "react"
import SpinBox from "../spinbox/SpinBox";


// <SubmitButton color={'rgb(51,51,255)'} callback={testFunction} message={'로그인'} />
const SubmitButton = ({color, callback, data, message}) => {

  // 메세지
  const buttonMessage = message? message : "SUBMIT";

  // 함수 실행되기 전 버튼을 비활성화하기 위한 변수
  const [disabled, setDisabled] = useState(false);

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

  return (
    <div className='button-container w-32 h-16'>
      <button id='submit-button' className="border-transparent w-28 h-12 rounded-xl disabled:opacity-50 relative text-white text-xl font-bold" style={{backgroundColor: color}} onClick={onClick} disabled={disabled}>
        {
          disabled?
          <SpinBox color={color}/>
          : buttonMessage
        }
      </button>
    </div>
  )
}

export default SubmitButton