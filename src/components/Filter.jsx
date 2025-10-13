import { useDispatch } from 'react-redux'
import { doSetFilter } from '../reducers/filterReducer'

const Filter = () => { 
  const dispach = useDispatch()
  const handleChange = (event) => {
    dispach(doSetFilter(event.target.value))
  }

  const style = {
    marginBottom: 10
  }

  return (
    <div style={style}>
      filter <input onChange={handleChange} />
    </div>
  )
}

export default Filter