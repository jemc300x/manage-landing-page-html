const btnSubmit = document.getElementById('submit')
const inputText = document.getElementById('input')
const messageError = document.getElementById('message-error')

btnSubmit.addEventListener('click', (e) => {
  if(!inputText.value){
    console.log(inputText.value);
    messageError.style.display = 'block'
    return;
  }

  let emailReg = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i

  if (!emailReg.test(inputText.value)) {
    messageError.style.display = 'block'
  } else {
    messageError.style.display = 'none'
  }

})
