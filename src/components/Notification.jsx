import { useSelector, useDispatch } from "react-redux"

const Notification = () => {
  const dispatch = useDispatch()

  const style = {
    border: 'solid',
    padding: 10,
    borderWidth: 1,
    marginBottom: 15
  }
  return (
    <div style={style}>
      {
        useSelector(({ notification }) => {
          return notification
        })
      }
    </div>
  )
}

export default Notification