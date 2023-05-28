import Router from 'next/router'

const redirect = (path: any) => {
  return Router.push(path)
}

export default redirect
