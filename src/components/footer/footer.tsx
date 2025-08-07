import React, { FC } from 'react'
import Box from '@mui/material/Box'
import Grid from '@mui/material/Grid'
import Container from '@mui/material/Container'
import Typography from '@mui/material/Typography'
import { FooterNavigation, FooterSocialLinks } from '@/components/footer'

const Footer: FC = () => {
  return (
    <Box
      component="footer"
      sx={{ 
        backgroundColor: 'primary.main', 
        py: { xs: 4, sm: 6, md: 8, lg: 10 }, 
        color: 'primary.contrastText' 
      }}
    >
      <Container>
        <Grid container spacing={{ xs: 2, sm: 3, md: 4 }}>
          <Grid item xs={12} md={5}>
            <Box sx={{ 
              width: { xs: '100%', md: 360 }, 
              mb: { xs: 3, md: 0 },
              px: { xs: 2, sm: 0 }
            }}>
              <Typography 
                component="h2" 
                variant="h2" 
                sx={{ 
                  mb: { xs: 1.5, sm: 2 },
                  fontSize: { xs: 24, sm: 28, md: 32 }
                }}
              >
                ScholarBridge Academy
              </Typography>
              <Typography 
                variant="subtitle1" 
                sx={{ 
                  letterSpacing: 1, 
                  mb: { xs: 1.5, sm: 2 },
                  fontSize: { xs: 13, sm: 14, md: 'inherit' },
                  lineHeight: { xs: 1.4, md: 1.5 }
                }}
              >
                We recognize that each student has unique strengths and learning needs, which is why we design a thoughtfully 
                crafted and personalized curriculum tailored to suit every learner.
              </Typography>
              <FooterSocialLinks />
            </Box>
          </Grid>
          <Grid item xs={12} md={7}>
            <FooterNavigation />
          </Grid>
        </Grid>
      </Container>
    </Box>
  )
}

export default Footer
