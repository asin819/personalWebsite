import './App.css'


import { useMediaQuery } from 'react-responsive'
import Desktop from './screens/Desktop'
import Mobile from './screens/Mobile'
import { useContext } from 'react'
import { ThemeContext } from './contexts/theme'

function App() {

  const MobileBreakPointWidth = '50em'
  // const MobileBreakPointHeight = '46em'
  const isMobile = useMediaQuery({maxWidth: MobileBreakPointWidth})
  const [{ theme, isDark }, toggleTheme] = useContext(ThemeContext);


  return (
    
    <>
    {/* {isMobile?  <Mobile/> :<Desktop/>} */}
    <Desktop/>
    </>
  )
}

export default App
