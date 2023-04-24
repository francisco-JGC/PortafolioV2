import { init, sendForm } from '@emailjs/browser'

export const sendEmail = async (fields) => {
  // TODO: emailjs.init() should be called only once in the app

  init(import.meta.env.VITE_EMAILJS_PUBLIC_KEY)

  const TEMPLATE_FORM = (fields) => `
            <form>
                <input type="text" name="from_name" value="${fields.name}" />
                <input type="email" name="from_email" value="${fields.email}" />
                <input type="text" name="from_interest" value="${fields.interest}" />
                <textarea name="message">${fields.message}</textarea>
            </form>
        `
  const template = new DOMParser().parseFromString(
    TEMPLATE_FORM(fields),
    'text/html'
  )
  const form = template.querySelector('form')
  /*
    is necessary create a template and convert to a form
    because emailjs.sendForm() doesn't work with a simple object as parameter (fields)
    */

  return await sendForm(
    import.meta.env.VITE_EMAILJS_SERVICE_ID,
    import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
    form
  )
}
