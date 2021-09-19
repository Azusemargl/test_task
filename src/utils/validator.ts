export const validator = {
   name: (value: string, setError: (value: boolean) => void, setter: (value: string) => void) => {
      const nameReg = /^[a-zA-zа-яА-я- ]+$/

      if (!nameReg.test(value) || typeof value === "number") setError(true)
      else setError(false)

      setter(value)
   },
   email: (value: string, setError: (value: boolean) => void, setter: (value: string) => void) => {
      if (!value.includes("@")) setError(true)
      else setError(false)

      setter(value)
   },
   phone: (value: string, setError: (value: boolean) => void, setter: (value: string) => void) => {
      const phoneReg = /^[0-9-+() ]+$/
      let phoneNumber = value.replace(/[^\d]/g, '')

      if (!phoneReg.test(value) || phoneNumber.length !== 11) setError(true)
      else setError(false)

      setter(value)
   }
}