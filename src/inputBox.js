import React from 'react'
const InputBox = ({onChange,value,name,id,width,placeholder}) => {
    const inputprops = {
        onChange,value,name,id
    }

  return (
    <input {...inputprops} placeholder={placeholder} className="inputbox" />
  )
}

export default InputBox