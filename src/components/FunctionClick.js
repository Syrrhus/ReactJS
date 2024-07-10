import React from 'react'

function FunctionClick() {

    function clickHandler(){
        console.log('cutton clicked')
    }

  return (
    <div>
        <button onCLick = {clickHandler}>Click</button>
    </div>
  )
}

export default FunctionClick