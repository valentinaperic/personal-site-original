import React from 'react'

// Import typefaces
import 'typeface-montserrat'
import 'typeface-merriweather'

class Bio extends React.Component {
  render() {
    return (
      <div className="main-links">
          <a href="/about.html">About</a> | <a href="/experience.html">Experience</a> | <a href="/blog/">Blog</a>
      </div>
    )
  }
}

export default Bio
