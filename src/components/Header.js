import PropTypes from 'prop-types'
import Button from './Button'
const Header = ({h1,onAdd,showAdd}) => {
    
  return (
    <header className='header'>
      <h1>{h1} </h1>
      <Button text={showAdd?'close':'add'} color='black' onClick={onAdd}  />
    </header>
  )
}
Header.defaultProps ={
    h1:'Task Manager',
}
Header.propTypes={
    h1:PropTypes.string.isRequired
}

export default Header
