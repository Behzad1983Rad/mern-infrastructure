// Service modules export business/app logic
// such as managing tokens, etc.
// Service modules often depend upon API modules
// for making AJAX requests to the server.

import * as usersAPI from './users-api';

export async function signUp(userData) {
  const token = await usersAPI.signUp(userData);
  localStorage.setItem('token', token);
  return getUser();
}

export async function login (userData) {
    const token = await usersAPI.login(userData)
    localStorage.setItem('token' , token)
    console.log("LogIn Function")
    return getUser()
}

export function logOut() {
  localStorage.removeItem('token');
}

export function getToken() {
  // getItem will return null if the key does not exists
  const token = localStorage.getItem('token');
  if (!token) return null;
  const payload = JSON.parse(atob(token.split('.')[1]));
  // A JWT's exp is expressed in seconds, not miliseconds
  if (payload.exp < Date.now() / 1000) {
    // Token has expired
    localStorage.removeItem('token');
    return null;
  }
  return token;
}

export function getUser() {
  const token = getToken();
  return token ? JSON.parse(atob(token.split('.')[1])).user : null;
}

export function checkToken() {
    return usersAPI.checkToken()
    .then(dateStr => new Date(dateStr) )
}