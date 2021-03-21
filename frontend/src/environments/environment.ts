/* @TODO replace with your variables
 * ensure all variables on this page match your project
 */

export const environment = {
  production: false,
  apiServerUrl: 'http://127.0.0.1:5000', // the running FLASK api server url
  auth0: {
    url: 'trialproject.us', // the auth0 domain prefix
    audience: 'coffee_shop', // the audience set for the auth0 app
    clientId: 'Ar68PICzCuElZjg8M23xPO06I5kYlm4p', // the client id generated for the auth0 app
    callbackURL: 'https://127.0.0.1:8080/login-results', // the base url of the running ionic application. 
  }
};
