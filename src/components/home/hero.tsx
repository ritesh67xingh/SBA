import React, { FC, useState, useEffect } from 'react'
import Image from 'next/image'
import Box from '@mui/material/Box'
import Grid from '@mui/material/Grid'
import Container from '@mui/material/Container'
import Typography from '@mui/material/Typography'
import Dialog from '@mui/material/Dialog'
import IconButton from '@mui/material/IconButton'
import CloseIcon from '@mui/icons-material/Close'
import { StyledButton } from '@/components/styled-button'
import { getImagePath } from '@/utils/paths'

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
    <Box sx={{ textAlign: 'center', mb: { xs: 1, md: 0 } }}>
      <Typography
        sx={{ color: '#1877F2', mb: { xs: 1, md: 2 }, fontSize: { xs: 34, md: 44 }, fontWeight: 'bold' }}
      >
        {value}
      </Typography>
      <Typography color="text.secondary" variant="h5">
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
    <Box id="hero" sx={{ backgroundColor: 'background.paper', position: 'relative', pt: 4, pb: { xs: 8, md: 10 } }}>
      <Container maxWidth="lg">
        <Grid container spacing={0} sx={{ flexDirection: { xs: 'column', md: 'unset' } }}>
          <Grid item xs={12} md={7}>
            <Box
              sx={{
                textAlign: { xs: 'center', md: 'left' },
                height: '100%',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
              }}
            >
              <Box sx={{ mb: 3 }}>
                <Typography
                  component="h1"
                  sx={{
                    position: 'relative',
                    fontSize: { xs: 32, md: 56 },
                    letterSpacing: 1.2,
                    fontWeight: 'bold',
                    lineHeight: 1.3,
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
                    }}
                  >
                    Master{' '}
                    <Box
                      sx={{
                        position: 'absolute',
                        top: { xs: 16, md: 24 },
                        left: 2,
                        transform: 'rotate(3deg)',
                        zIndex: 1,
                      }}
                    >
                      <Image src={getImagePath("/images/headline-curve.svg")} alt="Headline curve" width={160} height={40} />
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
                  Master 200+ Smart Tricks in Speed & Vedic Maths <br />
                  Crack Olympiads, Boards & JEE Faster with Proven Techniques<br />
                  Guided by Expert Mentors from IITs & NITs<br />
                  Get Instant Help Anytime with SBA AI Assistant (24×7)<br />
                  Strengthen Science Concepts for a Competitive Advantage
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
                bottom: 30,
                left: { xs: 0, md: -150 },
                boxShadow: 1,
                borderRadius: 3,
                px: 2,
                py: 1.4,
                zIndex: 1,
                backgroundColor: 'background.paper',
                display: 'flex',
                alignItems: 'flex-start',
                width: 280,
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
                                  <Image src={getImagePath("/images/certificate.png")} alt="Certificate icon" width={50} height={50} quality={97} />
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
              <Image src={getImagePath("/images/home-hero.jpg")} width={775} height={787} alt="Hero img" />
            </Box>
          </Grid>
        </Grid>

        <Box sx={{ boxShadow: 2, py: 4, px: 7, borderRadius: 4 }}>
          <Grid container spacing={2}>
            {exps.map((item) => (
              <Grid key={item.value} item xs={12} md={4}>
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
