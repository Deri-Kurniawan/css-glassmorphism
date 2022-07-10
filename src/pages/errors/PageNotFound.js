import React from 'react'
import { Link } from 'react-router-dom'
import './PageNotFound.css'

export default function PageNotFound() {
  document.title = 'CSS Glassmorphism | 404'
  return (
    <div className="PageNotFound">
      <div className="PageNotFound__container">
        <div className="PageNotFound__container-4cry4">
          <h1>4<span></span>4</h1>
        </div>

        <h2>Oops! Page Not Be Found</h2>
        <p>
          Sorry but the page you are looking for does not exist,
          have been removed. name changed or is temporarily unavailable
        </p>
        <Link to="/">Go Home</Link>
      </div>
    </div>
  )
}
