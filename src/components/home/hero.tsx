import React, { FC, useState, useEffect } from 'react'
// import Image from 'next/image'
import Box from '@mui/material/Box'
import Grid from '@mui/material/Grid'
import Container from '@mui/material/Container'
import Typography from '@mui/material/Typography'
import Dialog from '@mui/material/Dialog'
import IconButton from '@mui/material/IconButton'
import CloseIcon from '@mui/icons-material/Close'
import { StyledButton } from '@/components/styled-button'


interface Exp {
  label: string
  value: string
}
interface ExpItemProps {
  item: Exp
}

const exps: Array<Exp> = [
  { label: 'Students', value: '10K+' },
  { label: 'Quality Course', value: '20+' },
  { label: 'Experience Mentors', value: '10+' },
]

const ExpItem: FC<ExpItemProps> = ({ item }) => {
  const { value, label } = item
  return (
    <Box sx={{ 
      textAlign: 'center', 
      mb: { xs: 1, md: 0 },
      px: { xs: 1, sm: 2 }
    }}>
      <Typography
        sx={{ 
          color: '#1877F2', 
          mb: { xs: 0.5, sm: 1, md: 2 }, 
          fontSize: { xs: 28, sm: 32, md: 38, lg: 44 }, 
          fontWeight: 'bold',
          lineHeight: 1.1
        }}
      >
        {value}
      </Typography>
      <Typography 
        color="text.secondary" 
        variant="h5"
        sx={{
          fontSize: { xs: 14, sm: 16, md: 17, lg: 19 }
        }}
      >
        {label}
      </Typography>
    </Box>
  )
}

const HomeHero: FC = () => {
  const [openModal, setOpenModal] = useState(false)

  const handleOpen = (): void => setOpenModal(true)
  const handleClose = (): void => setOpenModal(false)

  useEffect(() => {
    const timer1 = setTimeout(() => {
      setOpenModal(true)
    }, 6000) // 6 seconds

    const timer2 = setTimeout(() => {
      setOpenModal(true)
    }, 18000)

    return () => {
      clearTimeout(timer1)
      clearTimeout(timer2)
    }
  }, [])

  return (
    <Box id="hero" sx={{ 
      backgroundColor: 'background.paper', 
      position: 'relative', 
      pt: { xs: 2, sm: 3, md: 4, lg: 6 }, 
      pb: { xs: 6, sm: 8, md: 10, lg: 12 } 
    }}>
      <Container maxWidth="lg">
        <Grid container spacing={{ xs: 3, md: 0 }} sx={{ 
          flexDirection: { xs: 'column', md: 'unset' },
          alignItems: { xs: 'center', md: 'flex-start' }
        }}>
          <Grid item xs={12} md={7}>
            <Box
              sx={{
                textAlign: { xs: 'center', md: 'left' },
                height: '100%',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                px: { xs: 2, sm: 3, md: 0 },
              }}
            >
              <Box sx={{ mb: { xs: 2, sm: 3, md: 4 } }}>
                <Typography
                  component="h1"
                  sx={{
                    position: 'relative',
                    fontSize: { xs: 28, sm: 36, md: 48, lg: 56 },
                    letterSpacing: { xs: 0.5, md: 1.2 },
                    fontWeight: 'bold',
                    lineHeight: { xs: 1.2, md: 1.3 },
                  }}
                >
                  <Typography
                    component="mark"
                    sx={{
                      position: 'relative',
                      color: '#1877F2',
                      fontSize: 'inherit',
                      fontWeight: 'inherit',
                      backgroundColor: 'unset',
                      display: 'inline-block',
                    }}
                  >
                    Master{' '}
                    <Box
                      sx={{
                        position: 'absolute',
                        bottom: { xs: -6, sm: -8, md: -10 },
                        left: 0,
                        transform: 'rotate(3deg)',
                        zIndex: 1,
                        width: '100%',
                        '& img': {
                          width: '100%',
                          height: 'auto',
                          display: 'block',
                        },
                      }}
                    >
                      <img src="/SBA/images/headline-curve-responsive.svg" alt="Headline curve" className="crisp-image" />
                    </Box>
                  </Typography>
                  your{' '}
                  <Typography
                    component="span"
                    sx={{
                      fontSize: 'inherit',
                      fontWeight: 'inherit',
                      position: 'relative',
                      '& svg': {
                        position: 'absolute',
                        top: -12,
                        right: -18,
                        width: { xs: 20, md: 28 },
                        height: 'auto',
                        zIndex: 2,
                      },
                    }}
                  >
                    Subjects
                    <svg version="1.1" viewBox="0 0 3183 3072">
                      <g id="Layer_x0020_1">
                        <path
                          fill="#1877F2"
                          d="M2600 224c0,0 0,0 0,0 236,198 259,562 52,809 -254,303 -1849,2089 -2221,1776 -301,-190 917,-1964 1363,-2496 207,-247 570,-287 806,-89z"
                        />
                        <path
                          fill="#1877F2"
                          d="M3166 2190c0,0 0,0 0,0 64,210 -58,443 -270,516 -260,90 -1848,585 -1948,252 -104,-230 1262,-860 1718,-1018 212,-73 437,39 500,250z"
                        />
                        <path
                          fill="#1877F2"
                          d="M566 3c0,0 0,0 0,0 -219,-26 -427,134 -462,356 -44,271 -255,1921 90,1962 245,62 628,-1392 704,-1869 36,-221 -114,-424 -332,-449z"
                        />
                      </g>
                    </svg>
                  </Typography>{' '}
                  <br />
                  in a Smarter Way
                </Typography>
              </Box>

              <Box sx={{ mb: 4, width: { xs: '100%', md: '70%' } }}>
                <Typography sx={{ color: 'text.secondary', lineHeight: 1.6 }}>
                  Master 200+ Vedic & Speed Math Tricks<br />
                  Crack Olympiads, Boards & JEE Faster<br />
                  Learn from IIT & NIT Expert Mentors<br />
                  24×7 Help via SBA AI Assistant<br />
                  Boost Science for Competitive Edge
                </Typography>
              </Box>

              <Box sx={{ '& button': { mr: 2 } }}>
                <StyledButton
                  color="primary"
                  size="large"
                  variant="contained"
                  onClick={handleOpen}
                >
                  Get 1 on 1 Instant Demo
                </StyledButton>
              </Box>
            </Box>
          </Grid>

          <Grid item xs={12} md={5} sx={{ position: 'relative' }}>
            <Box
              sx={{
                position: 'absolute',
                bottom: { xs: 20, sm: 25, md: 30 },
                left: { xs: 10, sm: 20, md: -150 },
                right: { xs: 10, sm: 20, md: 'auto' },
                boxShadow: 1,
                borderRadius: 3,
                px: { xs: 1.5, sm: 2 },
                py: { xs: 1, sm: 1.4 },
                zIndex: 1,
                backgroundColor: 'background.paper',
                display: 'flex',
                alignItems: 'flex-start',
                width: { xs: 'auto', sm: 250, md: 280 },
                maxWidth: { xs: 'calc(100% - 20px)', md: 280 },
              }}
            >
              <Box
                sx={{
                  boxShadow: 1,
                  borderRadius: '50%',
                  width: 44,
                  height: 44,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  mr: 2,
                  '& img': { width: '32px !important', height: 'auto' },
                }}
              >
                                  <img src="/SBA/images/certificate.png" alt="Certificate icon" width={50} height={50} />
              </Box>
              <Box>
                <Typography
                  component="h6"
                  sx={{ color: '#1877F2', fontSize: '1.1rem', fontWeight: 700, mb: 0.5 }}
                >
                  Certificate
                </Typography>
                <Typography variant="subtitle1" sx={{ color: 'text.secondary', lineHeight: 1.3 }}>
                  There are certificates for all courses.
                </Typography>
              </Box>
            </Box>
            <Box sx={{ lineHeight: 0 }}>
                              <img 
                                src="/SBA/images/home-hero.jpg" 
                                width={500} 
                                height={400} 
                                alt="Hero img" 
                                style={{ 
                                  maxWidth: '100%', 
                                  height: 'auto',
                                  imageRendering: 'crisp-edges',
                                  objectFit: 'cover'
                                }} 
                              />
            </Box>
          </Grid>
        </Grid>

        <Box sx={{ 
          boxShadow: 2, 
          py: { xs: 3, sm: 4, md: 5 }, 
          px: { xs: 3, sm: 5, md: 7 }, 
          borderRadius: 4,
          mt: { xs: 3, sm: 4, md: 6 }
        }}>
          <Grid container spacing={{ xs: 2, sm: 3, md: 4 }}>
            {exps.map((item) => (
              <Grid key={item.value} item xs={12} sm={6} md={4}>
                <ExpItem item={item} />
              </Grid>
            ))}
          </Grid>
        </Box>
      </Container>

      {/* Modal with Zoho Form - Updated to remove extra white space */}
      <Dialog
        open={openModal}
        onClose={handleClose}
        maxWidth="md"
        fullWidth
        PaperProps={{
          sx: {
            m: 0,
            p: 0,
            borderRadius: 2,
            overflow: 'hidden',
          },
        }}
      >
        <Box sx={{ position: 'relative', height: '80vh', width: '100%' }}>
          <IconButton
            onClick={handleClose}
            sx={{ position: 'absolute', top: 8, right: 8, zIndex: 10, backgroundColor: '#fff' }}
          >
            <CloseIcon />
          </IconButton>
          <iframe
            title="Zoho Demo Form"
            src="https://forms.zohopublic.com/infoscholarbri1/form/DemoForm/formperma/4leVoe1ne4cBPGNF01gM021HgTb1sJLnDHC38lstbEg"
            style={{ width: '100%', height: '100%', border: 'none' }}
          ></iframe>
        </Box>
      </Dialog>
    </Box>
  )
}

export default HomeHero
