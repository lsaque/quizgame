import { useContext } from 'react';
import { useTheme } from '@mui/material/styles';
import { IconButton, AppBar, Toolbar, Button, Stack, Box } from '@mui/material';
import { Link } from '@mui/material';

import LightModeIcon from '@mui/icons-material/LightMode';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import HomeIcon from '@mui/icons-material/Home';
import CategoryIcon from '@mui/icons-material/Category';
import MenuBookIcon from '@mui/icons-material/MenuBook';
import InfoIcon from '@mui/icons-material/Info';
import DescriptionIcon from '@mui/icons-material/Description';

import { ColorModeContext } from '../../../contexts/ColorModeContext';
import { ReactComponent as Logo } from '../../../assets/images/logo/logo.svg';
import { ROOT } from '../../../utils/constants/routes.constants';

const navbarItens = [
  {
    key: 1,
    label: "Home",
    href: ROOT,
    disabled: false,
    icon: <HomeIcon />,
  },
  {
    key: 2,
    label: "Categories",
    href: '',
    disabled: true,
    icon: <CategoryIcon />,
  },
  {
    key: 3,
    label: "Learn",
    href: '',
    disabled: true,
    icon: <MenuBookIcon />,
  },
  {
    key: 4,
    label: "About",
    href: '',
    disabled: true,
    icon: <InfoIcon />,
  },
  {
    key: 5,
    label: "Result",
    href: '',
    disabled: false,
    icon: <DescriptionIcon />,
  },
]

export default function Navbar() {
  
  const theme = useTheme();
  const colorMode = useContext(ColorModeContext);

  return (
    <AppBar component="nav">
      <Toolbar>

        <Box flexGrow={1}>
          <Link href={ROOT}>
              <Logo fill={theme.palette.text.primary} />
          </Link>
        </Box>

        <Stack direction="row" spacing={0.6}>
          { navbarItens?.map(item => (
            <Button
              key={item.key}
              href={item.href}
              color='inherit'
              className="navbarItem"
              sx={
                item.key === 5
                ? { display: 'flex' }
                : { display: { xs: 'none', md: 'flex' } }
              }
            >
              {item.label}
            </Button>
          ))}
          <IconButton
            onClick={colorMode.toggleColorMode} 
            color="inherit"
            aria-label="Set the website mode"
          >
            { theme.palette.mode === "dark"
              ? <LightModeIcon />
              : <DarkModeIcon />
            }
          </IconButton>
        </Stack>

      </Toolbar>
    </AppBar>
  );
}