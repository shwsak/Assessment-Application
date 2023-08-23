import SideBar from './components/SideBar'
import { ThemeProvider } from '@mui/material/styles';
import theme from './theme';
import { DrawerProvider } from './providers/DrawerProvider';

function App() {
  return (
    <ThemeProvider theme={theme}>

      <DrawerProvider >
        <SideBar/>
      </DrawerProvider>
    </ThemeProvider>
  )
}

export default App
