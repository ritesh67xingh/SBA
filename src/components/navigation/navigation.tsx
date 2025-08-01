import React, { FC } from 'react'
import Box from '@mui/material/Box'
import { Link as ScrollLink } from 'react-scroll'
import { navigations } from './navigation.data'


const Navigation: FC = () => {
  return (
    <Box sx={{ 
      display: 'flex', 
      flexDirection: { xs: 'column', md: 'row' },
      gap: { xs: 2, md: 1 },
      alignItems: { xs: 'center', md: 'flex-start' }
    }}>
      {navigations.map(({ path: destination, label }) => (
        <Box
          component={ScrollLink as any}
          key={destination}
          activeClass="current"
          to={destination}
          spy={true}
          smooth={true}
          duration={350}
          sx={{
            position: 'relative',
            color: 'text.disabled',
            cursor: 'pointer',
            fontWeight: 600,
            display: 'inline-flex',
            alignItems: 'center',
            justifyContent: 'center',
            px: { xs: 2, sm: 3, md: 3 },
            py: { xs: 1.5, md: 0 },
            mb: { xs: 1, md: 0 },
            fontSize: { xs: '1.1rem', sm: '1.2rem', md: 'inherit' },
            borderRadius: { xs: 2, md: 0 },
            transition: 'all 0.3s ease',
            ...(destination === '/' && {
              color: 'primary.main',
            }),

            '& > div': { display: 'none' },

            '&.current>div': { display: 'block' },

            '&:hover': {
              color: 'primary.main',
              backgroundColor: { xs: 'rgba(0,0,0,0.04)', md: 'transparent' },
              '&>div': {
                display: 'block',
              },
            },
          }}
        >
          <Box
            className="curve-line"
            sx={{
              position: 'absolute',
              top: { xs: '100%', sm: '100%', md: 12 },
              transform: 'rotate(3deg)',
              width: { xs: '100%', sm: '100%', md: 'auto' },
              '& img': { 
                width: { xs: '100%', sm: '100%', md: 44 }, 
                height: 'auto',
                maxWidth: { xs: '100%', sm: '100%', md: 'none' },
              },
            }}
          >
            {/* eslint-disable-next-line */}
                            <img src="/SBA/images/headline-curve-responsive.svg" alt="Headline curve" className="crisp-image" />
          </Box>
          {label}
        </Box>
      ))}
    </Box>
  )
}

export default Navigation
