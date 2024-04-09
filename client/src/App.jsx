import { useState } from 'react'
import axios from "axios";
import HomePage from './Pages/Home/HomePage'

function App() {
  axios.defaults.withCredentials = true;
  axios.defaults.baseURL = import.meta.env.VITE_SERVER_URL;

  return (
    <>
      <HomePage />

    </>
  )
}

export default App
