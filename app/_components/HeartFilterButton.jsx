import { useDispatch, useSelector } from 'react-redux'
import HeartIcon from "./HeartIcon"
import React from 'react'

const HeartFilterButton = React.memo(() => {
  const dispatch = useDispatch()
  const doFilterHeart = useSelector((state) => state.doFilterHeartState)

  const toggleHeartFilter = () => dispatch({ type: "doFilterHeart/toggleHeartFilter" })

  const baseStyle = "h-[30px]"
  const color = "text-red-400"
  const style = `${baseStyle} ${color}`

  return (
    <div onClick={toggleHeartFilter}>
      <HeartIcon doLike={doFilterHeart} style={style} />
    </div>
  )
})

export default HeartFilterButton