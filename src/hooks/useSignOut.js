
const useSignOut = (authStorage, apolloClient) => {
  const signOut = async () => {
  await authStorage.removeAccessToken()
  await apolloClient.resetStore()
  }
  return signOut
}

export default useSignOut