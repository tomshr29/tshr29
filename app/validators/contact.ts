import vine from '@vinejs/vine'

export const contactValidator = vine.compile(
  vine.object({
    name: vine.string().trim(),
    email: vine.string().email(),
    message: vine.string().trim(),
  })
)
