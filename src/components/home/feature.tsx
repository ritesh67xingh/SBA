import React, { FC } from 'react'
// import Image from 'next/image'
import Box from '@mui/material/Box'
import Grid from '@mui/material/Grid'
import { styled } from '@mui/material/styles'
import Container from '@mui/material/Container'
import Typography from '@mui/material/Typography'
import CircularProgress from '@mui/material/CircularProgress'
import LinearProgress, { linearProgressClasses } from '@mui/material/LinearProgress'
import { data } from './feature.data'


interface LinearProgressProps {
  order: number
}

const BorderLinearProgress = styled(LinearProgress, {
  shouldForwardProp: (prop) => prop !== 'color',
})<LinearProgressProps>(({ theme, order }) => ({
  height: 6,
  borderRadius: 5,
  [`&.${linearProgressClasses.colorPrimary}`]: {
    backgroundColor: theme.palette.grey[200],
  },
  [`& .${linearProgressClasses.bar}`]: {
    borderRadius: 5,
    ...(order === 1 && {
      backgroundColor: '#f303ff',
    }),
    ...(order === 2 && {
      backgroundColor: '#26e8bd',
    }),
    ...(order === 3 && {
      backgroundColor: '#0063ff',
    }),
  },
}))

const HomeFeature: FC = () => {
  return (
    <Box id="feature" sx={{ 
      py: { xs: 6, sm: 8, md: 10, lg: 14 }, 
      backgroundColor: 'background.paper' 
    }}>
      <Container>
        <Grid container spacing={{ xs: 2, sm: 3, md: 4 }}>
          <Grid item xs={12} md={5}>
            <Box sx={{ 
              position: 'relative',
              px: { xs: 2, sm: 0 }
            }}>
              <img 
                src="/SBA/images/home-feature.png" 
                width={400} 
                height={350} 
                alt="Feature img" 
                style={{ 
                  maxWidth: '100%', 
                  height: 'auto',
                  imageRendering: 'crisp-edges',
                  objectFit: 'cover'
                }} 
              />
              <Box
                sx={{
                  position: 'absolute',
                  top: { xs: -20, sm: -30, md: -36 },
                  right: { xs: 10, sm: 0, md: -36 },
                  left: { xs: 10, sm: 'auto', md: 'auto' },
                  boxShadow: 2,
                  borderRadius: 1,
                  px: { xs: 1.5, sm: 2, md: 2.2 },
                  py: { xs: 1, sm: 1.2, md: 1.4 },
                  zIndex: 1,
                  backgroundColor: 'background.paper',
                  width: { xs: 'auto', sm: 160, md: 190 },
                  maxWidth: { xs: 'calc(100% - 20px)', md: 190 },
                }}
              >
                <Typography variant="h5" sx={{ mb: 1 }}>
                  Master Your Skills with SBA
                </Typography>
                <Box sx={{ mb: 2 }}>
                  <Typography variant="subtitle1" color="text.secondary">
                    Math Problem Solving
                  </Typography>
                  <BorderLinearProgress variant="determinate" color="inherit" value={95} order={1} />
                </Box>
                <Box sx={{ mb: 2 }}>
                  <Typography variant="subtitle1" color="text.secondary">
                    Science Concepts
                  </Typography>
                  <BorderLinearProgress variant="determinate" color="inherit" value={85} order={2} />
                </Box>
                <Box sx={{ mb: 2 }}>
                  <Typography variant="subtitle1" color="text.secondary">
                    Logical Reasoning
                  </Typography>
                  <BorderLinearProgress variant="determinate" color="inherit" value={80} order={3} />
                </Box>
              </Box>

              <Box
                sx={{
                  position: 'absolute',
                  bottom: { xs: -8, sm: -10, md: -12 },
                  left: { xs: 10, sm: 0, md: -24 },
                  right: { xs: 10, sm: 'auto', md: 'auto' },
                  boxShadow: 2,
                  borderRadius: 1,
                  px: { xs: 1.5, sm: 2, md: 2.2 },
                  py: { xs: 1.5, sm: 1.8, md: 2 },
                  zIndex: 1,
                  backgroundColor: 'background.paper',
                  textAlign: 'center',
                  width: { xs: 'auto', sm: 160, md: 190 },
                  maxWidth: { xs: 'calc(100% - 20px)', md: 190 },
                }}
              >
                <Box
                  sx={{
                    position: 'relative',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    flexDirection: 'column',
                  }}
                >
                  <Typography sx={{ fontWeight: 600, lineHeight: 1 }}>Student Performance</Typography>
                  <Typography variant="subtitle1" sx={{ mb: 1, color: 'text.disabled' }}>
                    Overall Performance
                  </Typography>
                  <Box
                    sx={{
                      height: 85,
                      width: 85,
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      flexDirection: 'column',
                    }}
                  >
                    <Typography variant="h4" sx={{ color: '#1877F2' }}>
                      85%
                    </Typography>
                    <CircularProgress
                      sx={{ position: 'absolute', color: 'divider' }}
                      thickness={2}
                      variant="determinate"
                      value={85}
                      size={85}
                    />
                    <CircularProgress
                      disableShrink
                      thickness={2}
                      variant="determinate"
                      value={85}
                      size={85}
                      sx={{ transform: 'rotate(96deg) !important', color: '#1877F2', position: 'absolute' }}
                    />
                  </Box>
                </Box>
              </Box>
            </Box>
          </Grid>
          <Grid item xs={12} md={7}>
            <Box sx={{ 
              px: { xs: 2, sm: 3, md: 0 },
              pt: { xs: 3, sm: 0 }
            }}>
              <Typography
                component="h2"
                sx={{
                  position: 'relative',
                  fontSize: { xs: 28, sm: 36, md: 42, lg: 50 },
                  ml: { xs: 0, md: 4 },
                  mt: { xs: 1, sm: 2, md: 2 },
                  mb: { xs: 2, sm: 3, md: 3 },
                  lineHeight: { xs: 1.1, md: 1 },
                  fontWeight: 'bold',
                }}
              >
              Make your{' '}
              <Typography
                component="mark"
                sx={{
                  position: 'relative',
                  color: 'primary.main',
                  fontSize: 'inherit',
                  fontWeight: 'inherit',
                  backgroundColor: 'unset',
                  display: 'inline-block',
                }}
              >
                Learning <br />
                <Box
                  sx={{
                    position: 'absolute',
                    bottom: { xs: -6, sm: -8, md: -10 },
                    transform: 'rotate(3deg)',
                    left: 0,
                    width: '100%',
                    '& img': { 
                      width: '100%',
                      height: 'auto',
                      display: 'block',
                    },
                  }}
                >
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src="/SBA/images/headline-curve-responsive.svg" alt="Headline curve" className="crisp-image" />
                </Box>
              </Typography>
              Enjoyable
            </Typography>

            <Typography sx={{ 
              color: 'text.secondary', 
              mb: { xs: 2, sm: 3, md: 2 }, 
              ml: { xs: 0, md: 4 },
              fontSize: { xs: 14, sm: 16, md: 'inherit' },
              lineHeight: { xs: 1.5, md: 1.6 }
            }}>
              Empower your child’s learning with SBA’s smart methods, AI-powered tools, and live support to help them grow in every subject.
            </Typography>

            <Grid container spacing={{ xs: 1.5, sm: 2, md: 2 }} sx={{ ml: { xs: 0, md: 2 } }}>
              {data.map(({ title, description, icon }, index) => (
                <Grid key={String(index)} item xs={12} sm={6} md={6}>
                  <Box sx={{ 
                    px: { xs: 1.5, sm: 2, md: 2 }, 
                    py: { xs: 1.2, sm: 1.5, md: 1.5 }, 
                    boxShadow: 1, 
                    borderRadius: 4, 
                    display: 'flex', 
                    alignItems: 'center',
                    transition: 'all 0.3s ease',
                    '&:hover': {
                      boxShadow: 2,
                      transform: 'translateY(-2px)'
                    }
                  }}>
                    <Box
                      sx={{
                        mr: { xs: 1, sm: 1.5 },
                        backgroundColor: 'primary.main',
                        borderRadius: '50%',
                        height: { xs: 32, sm: 36, md: 40 },
                        width: { xs: 32, sm: 36, md: 40 },
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        color: 'primary.contrastText',
                        flexShrink: 0,
                        '& svg': {
                          fontSize: { xs: 16, sm: 18, md: 20 },
                        },
                      }}
                    >
                      {icon}
                    </Box>
                    <Box sx={{ display: 'flex', flex: 1, flexDirection: 'column', minWidth: 0 }}>
                      <Typography 
                        variant="h6" 
                        sx={{ 
                          fontSize: { xs: 14, sm: 16, md: '1rem' }, 
                          mb: { xs: 0.5, sm: 1 }, 
                          color: 'secondary.main',
                          fontWeight: 600
                        }}
                      >
                        {title}
                      </Typography>
                      <Typography 
                        sx={{ 
                          lineHeight: { xs: 1.2, sm: 1.3, md: 1.3 }, 
                          color: 'text.secondary',
                          fontSize: { xs: 12, sm: 14, md: 'inherit' }
                        }} 
                        variant="subtitle1"
                      >
                        {description}
                      </Typography>
                    </Box>
                  </Box>
                </Grid>
              ))}
            </Grid>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  )
}

export default HomeFeature
