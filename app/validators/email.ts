import vine from '@vinejs/vine'

export const emailValidator = vine.compile(
  vine.object({
    name: vine.string(),
    email: vine.string().email(),
    message: vine.string().minLength(1).maxLength(255),
  })
)
