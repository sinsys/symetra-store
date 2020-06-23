export default {
  API_ENDPOINT: process.env.NODE_ENV==='production' ?
  "https://ancient-reef-64647.herokuapp.com/api"
  : "http://localhost:8000/api"
}