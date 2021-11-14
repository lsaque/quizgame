import { useContext } from 'react';
import { useTheme } from '@mui/material/styles';
import { IconButton, AppBar, Stack, Link} from '@mui/material';
import { Grid, Pagination, Typography } from '@material-ui/core';

import GitHubIcon from '@mui/icons-material/GitHub';
import TwitterIcon from '@mui/icons-material/Twitter';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import HeartIcon from '@mui/icons-material/Favorite';

import { FooterModeContext } from '../../../contexts/FooterModeContext';

const socialMedias = [
  {
    key: 1,
    href: "https://github.com/lsaque",
    icon: <GitHubIcon sx={{ fontSize: 20 }}/>,
    label: "Github do criador da página, Isaque",
  },
  {
    key: 2,
    href: "https://www.linkedin.com/in/isaque-jose/",
    icon: <LinkedInIcon sx={{ fontSize: 20 }}/>,
    label: "Linkedin do criador da página, Isaque",
  },
  {
    key: 3,
    href: "https://twitter.com/",
    icon: <TwitterIcon sx={{ fontSize: 20 }}/>,
    label: "Página inicial do Twitter",
  },
]

const renderHeart = (
  <HeartIcon
    color="primary"
    sx={{ fontSize: 14 }}
  />
)

const Footer: React.FC = () => {

  const theme = useTheme();
  const { state } = useContext(FooterModeContext);

  return (
    <AppBar component="footer">
      <Grid container alignItems="center" >

        <Grid item xs={12} md={4}>
          <Typography
            className="leftFooterItem"
            sx={{ display: { xs: 'none', md: 'inline-block' }}}
          >
            Good luck
          </Typography>
        </Grid>

        <Grid 
          item 
          zeroMinWidth 
          xs={12} 
          md={4} 
          justifyContent="center" 
          display="flex"
        >
          { state.isPagination 
            ? (
              <Pagination count={10} shape="rounded" color="primary"/>
            )
            : (
              <Typography 
                noWrap
                align="center" 
                color={theme.palette.text.secondary} 
              >
                Made with {renderHeart} by Isaque 
              </Typography>
            )
          }
        </Grid>

        <Grid item xs={12} md={4}>
          <Stack 
            direction="row" 
            spacing={1}
            sx={{ justifyContent: { xs: 'center', md: 'flex-end' }}}
          >
            { socialMedias?.map(item => (
              <Link key={item.key} href={item.href} target="_blank" color="inherit"> 
                <IconButton color="inherit" aria-label={item.label}>
                  {item.icon}
                </IconButton>
              </Link>
            ))}
          </Stack>
        </Grid>

      </Grid>
    </AppBar>
  );
}

export default Footer;
