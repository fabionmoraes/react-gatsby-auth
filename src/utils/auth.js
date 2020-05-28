export const isLoggedIn = () => {
  const user = localStorage.getItem('userGatsby');
  const verifica = JSON.parse(user);

  return verifica
}
