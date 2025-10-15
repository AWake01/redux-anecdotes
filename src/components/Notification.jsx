import { useSelector, useDispatch } from "react-redux"

const Notification = () => {
  const style = {
    border: 'solid',
    padding: 10,
    borderWidth: 1,
    marginBottom: 15
  }

  const notification = useSelector(({ notification }) => { return notification })

  return (
    notification ? <div style={style}>{notification}</div> : null
  )
}

export default Notification