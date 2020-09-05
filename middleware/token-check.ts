export default function (store: any) {
  const { tokenExpired } = store.$auth.check(true)
  if (tokenExpired) {
    store.$auth.reset()
  }
}
