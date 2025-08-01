import React, { FC, useState } from 'react'
import Box from '@mui/material/Box'
import Container from '@mui/material/Container'
import IconButton from '@mui/material/IconButton'
import useMediaQuery from '@mui/material/useMediaQuery'
import { Logo } from '@/components/logo'
import { Navigation, AuthNavigation } from '@/components/navigation'
import { useTheme } from '@mui/material/styles'
import { Menu, Close } from '@mui/icons-material'

const Header: FC = () => {
  const [visibleMenu, setVisibleMenu] = useState<boolean>(false)
  const { breakpoints } = useTheme()
  const matchMobileView = useMediaQuery(breakpoints.down('md'))

  return (
    <Box sx={{ backgroundColor: 'background.paper', position: 'sticky', top: 0, zIndex: 1000 }}>
      <Container sx={{ py: { xs: 1.5, sm: 2, md: 2.5, lg: 3 } }}>
        <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
          <Logo />
          <Box sx={{ ml: 'auto', display: { xs: 'inline-flex', md: 'none' } }}>
            <IconButton 
              onClick={() => setVisibleMenu(!visibleMenu)}
              sx={{ 
                p: { xs: 1, sm: 1.5 },
                '&:hover': { backgroundColor: 'rgba(0,0,0,0.04)' }
              }}
            >
              <Menu />
            </IconButton>
          </Box>
          <Box
            sx={{
              width: '100%',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              flexDirection: { xs: 'column', md: 'row' },
              transition: (theme) => theme.transitions.create(['top', 'opacity'], {
                duration: theme.transitions.duration.standard,
              }),
              ...(matchMobileView && {
                py: { xs: 4, sm: 6 },
                px: { xs: 2, sm: 4 },
                backgroundColor: 'background.paper',
                zIndex: 999,
                position: 'fixed',
                height: '100vh',
                top: visibleMenu ? 0 : '-100vh',
                left: 0,
                right: 0,
                opacity: visibleMenu ? 1 : 0,
                visibility: visibleMenu ? 'visible' : 'hidden',
              }),
            }}
          >
            <Box /> {/* Magic space */}
            <Navigation />
            <AuthNavigation />
            {visibleMenu && matchMobileView && (
              <IconButton
                sx={{
                  position: 'fixed',
                  top: 10,
                  right: 10,
                }}
                onClick={() => setVisibleMenu(!visibleMenu)}
              >
                <Close />
              </IconButton>
            )}
          </Box>
        </Box>
      </Container>
    </Box>
  )
}

export default Header
