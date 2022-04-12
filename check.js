  
const name = document.getElementById('FirstName')
const name = document.getElementById('LastName')
  const password = document.getElementById('Password')
  const password = document.getElementById('RepeatPassword')
  
  const form = document.getElementById('form')
  const errorElement = document.getElementById('error')
  
  form.addEventListener('submit', (e) => {
    let messages = []
    if (FirstName.value === '' || FirstName.value == null) {
      messages.push('First Name is required')
    }
    if (LastName.value === '' || LastName.value == null) {
        messages.push(' Last Name is required')
      }
  
    if (password.value.length <= 6) {
      messages.push('Password must be longer than 6 characters')
    }
  
    if (password.value.length >= 20) {
      messages.push('Password must be less than 20 characters')
    }
  
   
    if (messages.length > 0) {
      e.preventDefault()
      errorElement.innerText = messages.join(', ')
    }
  })