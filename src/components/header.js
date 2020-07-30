import { Link } from "gatsby"
import React from "react"

import '../styles/components/header.styles'

const Header = ( ) => (
  <header>
    <div>
      <h1>
        <Link
          to="/">
           Navbar
        </Link>
      </h1>
    </div>
  </header>
)

export default Header
