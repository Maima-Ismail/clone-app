import { useRef } from 'react'
const Random = () => {
  const inputElement = useRef(null)
  const inputElement2 = useRef(null)
  const variable = {
    email: '',
    password: '',
  }
  const handleSubmit = (e) => {
    e.preventDefault()
    variable.email = inputElement.current.value
    variable.password = inputElement2.current.value
    console.log(variable)
  }
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="email"
          name="email"
          placeholder="Email Address"
          ref={inputElement}
        />
        <input
          type="password"
          name="password"
          placeholder="Password"
          ref={inputElement2}
        />
        <button type="submit">Submit</button>
      </form>
    </div>
  )
}
export default Random
