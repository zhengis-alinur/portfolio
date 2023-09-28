const Button = (props) => {
  return (
	<button className={`w-fit bg-opacity-0 border-2  p-2 font-bold ${props.primary ? 'border-primary' : 'border-white'} ${props.className}`}>{props.title}</button>
  )
}

export default Button