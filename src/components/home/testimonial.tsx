import React, { FC, useRef } from 'react'
// import Image from 'next/image'
import Box from '@mui/material/Box'
import Grid from '@mui/material/Grid'
import Slider, { Settings } from 'react-slick'
import Container from '@mui/material/Container'
import Typography from '@mui/material/Typography'
import IconButton from '@mui/material/IconButton'
import { styled } from '@mui/material/styles'
import IconArrowBack from '@mui/icons-material/ArrowBack'

import IconArrowForward from '@mui/icons-material/ArrowForward'

import { TestimonialItem } from '@/components/testimonial'
import { data } from './testimonial.data'

interface SliderArrowProps {
  onClick?: () => void
  type: 'next' | 'prev'
  className?: string
}

const SliderArrow: FC<SliderArrowProps> = (props) => {
  const { onClick, type, className } = props
  return (
    <IconButton
      sx={{
        backgroundColor: 'background.paper',
        color: 'primary.main',
        '&:hover': { backgroundColor: 'primary.main', color: 'primary.contrastText' },
        bottom: { xs: '-28px !important', md: '64px !important' },
        left: 'unset !important',
        right: type === 'prev' ? '90px !important' : '30px !important',
        zIndex: 10,
        boxShadow: 1,
      }}
      disableRipple
      color="inherit"
      onClick={onClick}
      className={className}
    >
      {type === 'next' ? <IconArrowForward sx={{ fontSize: 22 }} /> : <IconArrowBack sx={{ fontSize: 22 }} />}
    </IconButton>
  )
}

const StyledSlickContainer = styled('div')(() => ({
  position: 'relative',

  '& .slick-list': { marginLeft: '-30px', marginBottom: '24px' },
}))

const HomeTestimonial: FC = () => {
  const sliderRef = useRef(null)

  const sliderConfig: any = {
    infinite: true,
    autoplay: true,
    speed: 300,
    slidesToShow: 1,
    slidesToScroll: 1,
    prevArrow: <SliderArrow type="prev" />,
    nextArrow: <SliderArrow type="next" />,
  }

  return (
    <Box id="testimonial" sx={{ 
      pb: { xs: 4, sm: 6, md: 8, lg: 10 }, 
      backgroundColor: 'background.paper',
      pt: { xs: 4, sm: 6, md: 8 }
    }}>
      <Container>
        <Grid container spacing={{ xs: 3, sm: 4, md: 5 }}>
          <Grid item xs={12} md={6}>
            <Box sx={{ px: { xs: 2, sm: 0 } }}>
              <Typography
                component="h2"
                sx={{
                  position: 'relative',
                  fontSize: { xs: 28, sm: 32, md: 38, lg: 46 },
                  mt: { xs: 0, md: 7 },
                  mb: { xs: 3, sm: 4, md: 4 },
                  lineHeight: { xs: 1.1, md: 1 },
                  fontWeight: 'bold',
                }}
              >
              Testimonial What our{' '}
              <Typography
                component="mark"
                sx={{
                  position: 'relative',
                  color: 'primary.main',
                  fontSize: 'inherit',
                  fontWeight: 'inherit',
                  backgroundColor: 'unset',
                }}
              >
                Students{' '}
                <Box
                  className="curve-line"
                  sx={{
                    position: 'absolute',
                    top: { xs: '100%', sm: '100%', md: 28 },
                    left: { xs: 0, sm: 0, md: 2 },
                    width: { xs: '100%', sm: '100%', md: 'auto' },
                    '& img': { 
                      width: { xs: '100%', sm: '100%', md: 175 }, 
                      height: 'auto',
                      maxWidth: { xs: '100%', sm: '100%', md: 'none' },
                    },
                  }}
                >
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                                      <img src="/SBA/images/headline-curve-responsive.svg" alt="Headline curve" className="crisp-image" />
                </Box>
              </Typography>
              Say
            </Typography>

            <StyledSlickContainer>
              {React.createElement(Slider as any, { ...sliderConfig, ref: sliderRef },
                data.map((item, index) => (
                  <TestimonialItem key={String(index)} item={item} />
                ))
              )}
            </StyledSlickContainer>
            </Box>
          </Grid>
          <Grid item xs={12} md={6} sx={{ display: { xs: 'none', md: 'block' } }}>
            <Box sx={{ width: { xs: '100%', md: '90%' } }}>
                              <img 
                                src="/SBA/images/home-testimonial.png" 
                                width={350} 
                                height={400} 
                                alt="Testimonial img" 
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
      </Container>
    </Box>
  )
}

export default HomeTestimonial
