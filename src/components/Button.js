import PropTypes from 'prop-types'


const Button = ({text,color,onClick}) => {
  return (
   <button style={{backgroundColor:color}} className='btn' onClick={onClick}>
    {text}   </button>
  )
}
Button.defaultProps ={
text : 'click',
color: 'steelblue',
}
Button.propTypes = {
text:PropTypes.string,
color:PropTypes.string,
onClick:PropTypes.func.isRequired
}

export default Button
