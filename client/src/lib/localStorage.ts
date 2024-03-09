export const getItem = (key: string) => {
  try {
    const item = window.localStorage.getItem(key)
    return item ? JSON.parse(item) : undefined
  } catch (error) {
    console.error(error)
  }
}

export const setItem = (key: string, value: string) => {
  try {
    window.localStorage.setItem(key, JSON.stringify(value))
  } catch (error) {
    console.error(error)
  }
}

export const removeItem = (key: string) => {
  try {
    window.localStorage.removeItem(key)
  } catch (error) {
    console.error(error)
  }
}
