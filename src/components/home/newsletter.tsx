import React, { FC, useState } from 'react'
import Box from '@mui/material/Box'
import InputBase from '@mui/material/InputBase'
import Container from '@mui/material/Container'
import Typography from '@mui/material/Typography'
import Alert from '@mui/material/Alert'
import { StyledButton } from '../styled-button'

const HomeNewsLetter: FC = () => {
  const [email, setEmail] = useState('')
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [message, setMessage] = useState<{ type: 'success' | 'error'; text: string } | null>(null)

  const validateEmail = (email: string): boolean => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    return emailRegex.test(email)
  }

  const handleSubmit = async (e: React.FormEvent): Promise<void> => {
    e.preventDefault()
    
    if (!email.trim()) {
      setMessage({ type: 'error', text: 'Please enter your email address' })
      return
    }

    if (!validateEmail(email)) {
      setMessage({ type: 'error', text: 'Please enter a valid email address' })
      return
    }

    setIsSubmitting(true)
    setMessage(null)

    try {
      // Simulate API call - replace with actual newsletter subscription logic
      await new Promise(resolve => setTimeout(resolve, 1000))
      
      setMessage({ type: 'success', text: 'Thank you for subscribing to our newsletter!' })
      setEmail('')
    } catch (error) {
      setMessage({ type: 'error', text: 'Failed to subscribe. Please try again later.' })
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <Box sx={{ backgroundColor: 'background.paper', py: { xs: 8, md: 10 } }}>
      <Container>
        <Box
          sx={{
            backgroundColor: 'secondary.main',
            borderRadius: 10,
            py: { xs: 4, md: 10 },
            px: { xs: 4, md: 8 },
            textAlign: 'center',
          }}
        >
          <Typography variant="h1" component="h2" sx={{ mb: 1, fontSize: { xs: 32, md: 42 } }}>
            Subscribe to Our Newsletter
          </Typography>
          <Typography sx={{ mb: 6 }}>Subscribe to our newsletter to get information about our courses.</Typography>

          {message && (
            <Alert 
              severity={message.type} 
              sx={{ mb: 3, maxWidth: 560, mx: 'auto' }}
              onClose={() => setMessage(null)}
            >
              {message.text}
            </Alert>
          )}

          <Box
            component="form"
            onSubmit={handleSubmit}
            sx={{
              display: 'flex',
              alignItems: 'center',
              flexDirection: { xs: 'column', md: 'row' },
              justifyContent: 'space-around',
              width: { xs: '100%', md: 560 },
              mx: 'auto',
            }}
          >
            <InputBase
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              sx={{
                backgroundColor: 'background.paper',
                borderRadius: 3,
                width: '100%',
                height: 48,
                px: 2,
                mr: { xs: 0, md: 3 },
                mb: { xs: 2, md: 0 },
              }}
              placeholder="Enter your Email Address"
              type="email"
              required
              disabled={isSubmitting}
              inputProps={{
                'aria-label': 'Email address for newsletter subscription',
              }}
            />
            <Box>
              <StyledButton 
                disableHoverEffect 
                size="large" 
                type="submit"
                disabled={isSubmitting}
              >
                {isSubmitting ? 'Subscribing...' : 'Subscribe'}
              </StyledButton>
            </Box>
          </Box>
        </Box>
      </Container>
    </Box>
  )
}

export default HomeNewsLetter
