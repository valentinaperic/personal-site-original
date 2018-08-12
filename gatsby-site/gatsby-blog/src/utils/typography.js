import Typography from 'typography'


import Wordpress2016 from 'typography-theme-wordpress-2016'




Wordpress2016.overrideThemeStyles = () => ({
  'a.gatsby-resp-image-link': {
    boxShadow: 'none',
    color: '#f09f9b'
  },
  'a': {
    color: '#f09f9b'
  },
})


const typography = new Typography(Wordpress2016)

// Hot reload typography in development.
if (process.env.NODE_ENV !== 'production') {
  typography.injectStyles()
}

export default typography
