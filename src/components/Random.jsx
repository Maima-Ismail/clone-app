const Random = () => {
  const variable = {
    email: '',
    password: '',
  }
  const handleSubmit = () => {
    console.log(variable)
  }
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="email"
          name="email"
          placeholder="Email Address"
          value={variable.email}
          onChange={(e) => {
            variable.email = e.target.value
          }}
        />
        <input
          type="password"
          name="password"
          placeholder="Password"
          value={variable.password}
          onChange={(e) => {
            variable.password = e.target.value
          }}
        />
        <button type="submit">Submit</button>
      </form>
    </div>
  )
}
export default Random
