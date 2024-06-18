import Teaminfo from './Teaminfo'
import { useState } from 'react'

function Teammates() {
  const [visible, setVisible] = useState(false)
  return (
    <div>
      <button
        onClick={() => {
          setVisible(!visible)
        }}
      >
        {' '}
        {visible ? '숨기기' : '보이기'}
      </button>
      <hr />
      {visible && <Teaminfo />}
    </div>
  )
}

export default Teammates
