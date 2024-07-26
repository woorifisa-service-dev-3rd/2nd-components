
import SubmitButton from '../components/submitbutton/SubmitButton'
import Input from '../components/input/Input.jsx'
const TestPage = () => {
  const callback = async () => {
    await new Promise((resolve) => {
      setTimeout(() => {
        resolve();
      },1000)
    })
  }

  return (
    <div className='flex flex-col justify-around gap-10 test-container w-128 h-96 border-2 p-2 m-auto border-blue-800'>
      <Input id={'id-input'} label={'아이디를 입력해주세요'} type={'text'} />
      <Input id={'pass-input'} label={'비밀번호를 입력해주세요'} type={'password'} />
      <SubmitButton color={'rgb(51,153,255)'} callback={callback} message={'테스트용'} width={'28rem'} />
      <SubmitButton color={'rgb(255,153,255)'} callback={callback} message={'테스트용2'} />
    </div>
  )
}

export default TestPage