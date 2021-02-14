import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import { css } from "@emotion/react"

const Header = ({ siteTitle, children }) => (
  <header
    css={css`
      margin-bottom: 0px;
      text-align: center;
      width: 100%;
    `}
  >
    <div
      style={{
        // maxWidth: 960,
        padding: `1.45rem 1.0875rem`,
      }}
    >
      <h1 style={{ margin: 0 }}>
        <Link
          to="/"
          style={{
            color: `white`,
            textDecoration: `none`,
          }}
        >
          {siteTitle}
        </Link>
      </h1>
    </div>

    {children}
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
  children: PropTypes.node.isRequired,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
