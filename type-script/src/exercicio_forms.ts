import isEmail from 'validator/lib/isEmail'

const SHOW_ERROR_MESSAGES = 'show-error-message'

const form = document.querySelector('.form') as HTMLFormElement
const username = form.querySelector('.username') as HTMLInputElement
const email = form.querySelector('.email') as HTMLInputElement
const password = form.querySelector('.password') as HTMLInputElement
const password2 = form.querySelector('.password2') as HTMLInputElement

form.addEventListener('submit', (e: Event) => {
  e.preventDefault()

  cleanErrorMessages(form)
  checkIsEmpty(username, password, password2)
  checkEmail(email)
  checkEgualPassword(password, password2)

  if (shouldSendForm(form)) console.log('Enviei Form')
})

function checkEgualPassword(p1: HTMLInputElement, p2: HTMLInputElement): void {
  if (p1.value !== p2.value) {
    showErrorMessages(p1, 'Senhas Diferentes!')
    showErrorMessages(p2, 'Senhas Diferentes!')
  }
}

function checkEmail(input: HTMLInputElement): void {
  if (!isEmail(input.value)) showErrorMessages(input, 'Email Invalido!')
}

function checkIsEmpty(...inputs: HTMLInputElement[]): void {
  inputs.forEach((input) => {
    if (!input.value) showErrorMessages(input, 'Campo não pode ficar vazio!')
  })
}

function cleanErrorMessages(form: HTMLFormElement): void {
  form
    .querySelectorAll('.' + SHOW_ERROR_MESSAGES)
    .forEach((item) => item.classList.remove(SHOW_ERROR_MESSAGES))
}

function showErrorMessages(input: HTMLInputElement, msg: string): void {
  const formField = input.parentElement as HTMLDivElement
  const errorMessage = formField.querySelector(
    '.error-message',
  ) as HTMLSpanElement

  errorMessage.innerHTML = msg
  formField.classList.add(SHOW_ERROR_MESSAGES)
}

function shouldSendForm(form: HTMLFormElement): boolean {
  let send = true
  form.querySelectorAll('.' + SHOW_ERROR_MESSAGES).forEach(() => (send = false))

  return send
}
