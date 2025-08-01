import React, { FC } from 'react'
import Box from '@mui/material/Box'
import InputBase from '@mui/material/InputBase'
import Container from '@mui/material/Container'
import Typography from '@mui/material/Typography'
import { StyledButton } from '../styled-button'

const HomeNewsLetter: FC = () => {
  return (
    <Box sx={{ 
      backgroundColor: 'background.paper', 
      py: { xs: 6, sm: 8, md: 10, lg: 12 } 
    }}>
      <Container>
        <Box
          sx={{
            backgroundColor: '#000000',
            borderRadius: { xs: 8, sm: 10 },
            py: { xs: 4, sm: 6, md: 8, lg: 10 },
            px: { xs: 3, sm: 4, md: 6, lg: 8 },
            textAlign: 'center',
          }}
        >
          <Typography 
            variant="h1" 
            component="h2" 
            sx={{ 
              mb: { xs: 1, sm: 2 }, 
              fontSize: { xs: 24, sm: 28, md: 36, lg: 42 },
              lineHeight: { xs: 1.2, md: 1.1 },
              color: '#ffffff' 
            }}
          >
            Subscribe to Our News Letter
          </Typography>
          <Typography 
            sx={{ 
              mb: { xs: 4, sm: 5, md: 6 }, 
              color: '#ffffff',
              fontSize: { xs: 14, sm: 16, md: 'inherit' },
              lineHeight: { xs: 1.4, md: 1.5 }
            }}
          >
            Subscribe to our newsletter to get information about our courses.
          </Typography>

          <Box
            sx={{
              display: 'flex',
              alignItems: 'center',
              flexDirection: { xs: 'column', sm: 'row' },
              justifyContent: 'space-around',
              width: { xs: '100%', sm: 500, md: 560 },
              mx: 'auto',
              gap: { xs: 2, sm: 3 },
            }}
          >
            <InputBase
              sx={{
                backgroundColor: 'background.paper',
                borderRadius: { xs: 2, sm: 3 },
                width: '100%',
                height: { xs: 44, sm: 48 },
                px: { xs: 1.5, sm: 2 },
                fontSize: { xs: 14, sm: 16 },
                '& input': {
                  fontSize: { xs: 14, sm: 16 },
                },
              }}
              placeholder="Enter your Email Address"
            />
            <Box sx={{ 
              width: { xs: '100%', sm: 'auto' },
              minWidth: { sm: 120 }
            }}>
              <StyledButton 
                disableHoverEffect 
                size="large"
              >
                Subscribe
              </StyledButton>
            </Box>
          </Box>
        </Box>
      </Container>
    </Box>
  )
}

export default HomeNewsLetter
