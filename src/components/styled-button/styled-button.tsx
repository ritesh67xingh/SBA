import React, { FC, ReactNode } from 'react'
import Box from '@mui/material/Box'
import { Theme } from '@mui/material'
import { styled } from '@mui/material/styles'
import { ButtonProps } from '@mui/material/Button'
import { fontFamily } from '@/config/theme/typography'

interface BaseButtonProps extends Pick<ButtonProps, 'onClick' | 'type' | 'startIcon' | 'endIcon'> {
  variant?: 'contained' | 'outlined' | 'text'
  color?: 'default' | 'primary' | 'secondary' | 'dark' | 'light'
  size?: 'small' | 'medium' | 'large'
  disableHoverEffect?: boolean
}
interface StyledButtonRootProps extends BaseButtonProps {
  theme?: Theme
}

const StyledButtonRoot = styled('button', {
  shouldForwardProp: (prop) =>
    prop !== 'variant' && prop !== 'color' && prop !== 'size' && prop !== 'disableHoverEffect',
})<StyledButtonRootProps>(({ theme, color, variant, size, disableHoverEffect }) => ({
  fontFamily,
  cursor: 'pointer',
  minWidth: 40,
  fontSize: 14,
  fontWeight: 500,
  lineHeight: 1.5,
  letterSpacing: 1,
  borderRadius: Number(theme.shape.borderRadius) * 3,

  display: 'inline-flex',
  alignItems: 'center',
  userSelect: 'none',
  transform: 'unset',
  position: 'relative',
  overflow: 'hidden',
  border: 'none',
  whiteSpace: 'nowrap',
  WebkitTapHighlightColor: 'transparent',
  verticalAlign: 'middle',
  outline: 'none !important',
  transition: theme.transitions.create(['transform']),

  '&:hover': {
    ...(!disableHoverEffect && {
      transform: 'translateY(-3px)',
    }),
  },

  '& svg': {
    fontSize: 20,
  },

  ...(size === 'small' &&
    variant === 'outlined' && {
      padding: '4px 10px',
    }),
  ...(size === 'medium' &&
    variant === 'outlined' && {
      padding: '6px 14px',
    }),
  ...(size === 'large' &&
    variant === 'outlined' && {
      padding: '10px 18px',
      fontSize: 15,
    }),

  ...(size === 'small' &&
    variant !== 'outlined' && {
      padding: '6px 12px',
    }),
  ...(size === 'medium' &&
    variant !== 'outlined' && {
      padding: '8px 16px',
    }),
  ...(size === 'large' &&
    variant !== 'outlined' && {
      padding: '12px 20px',
      fontSize: 15,
    }),

  ...(variant !== 'contained' && {
    backgroundColor: 'transparent',
    boxShadow: 'none !important',
  }),

  // === FACEBOOK BLUE STYLING ===
  ...(color === 'primary' &&
    variant === 'contained' && {
      backgroundColor: '#1877F2',
      color: '#fff',
      boxShadow: '0 4px 12px rgba(24, 119, 242, 0.3)',
      '&:hover': {
        backgroundColor: '#155cc1',
        boxShadow: '0 6px 16px rgba(21, 92, 193, 0.35)',
      },
    }),

  ...(color === 'primary' &&
    variant === 'outlined' && {
      border: '2px solid #1877F2',
      color: '#1877F2',
      '&:hover': {
        backgroundColor: 'rgba(24, 119, 242, 0.1)',
      },
    }),

  ...(color === 'primary' &&
    variant === 'text' && {
      color: '#1877F2',
      '&:hover': {
        backgroundColor: 'rgba(24, 119, 242, 0.1)',
      },
    }),

  ...(color === 'default' &&
    variant === 'contained' && {
      backgroundColor: theme.palette.text.primary,
      color: theme.palette.primary.contrastText,
    }),

  ...(color === 'secondary' &&
    variant === 'contained' && {
      backgroundColor: theme.palette.secondary.main,
      color: theme.palette.primary.contrastText,
    }),

  ...(color === 'dark' &&
    variant === 'contained' && {
      backgroundColor: '#313d56',
      color: theme.palette.primary.contrastText,
    }),

  ...(color === 'light' &&
    variant === 'contained' && {
      backgroundColor: theme.palette.primary.contrastText,
      color: theme.palette.text.primary,
    }),

  ...(color === 'secondary' &&
    variant === 'outlined' && {
      border: `2px solid ${theme.palette.secondary.main}`,
      color: theme.palette.secondary.main,
    }),

  ...(color === 'dark' &&
    variant === 'outlined' && {
      border: `2px solid #313d56`,
      color: '#313d56',
    }),

  ...(color === 'light' &&
    variant === 'outlined' && {
      border: `2px solid #313d56`,
      color: `#313d56`,
    }),

  ...(color === 'secondary' &&
    variant === 'text' && {
      color: theme.palette.secondary.main,
    }),

  ...(color === 'dark' &&
    variant === 'text' && {
      color: '#313d56',
    }),

  ...(color === 'light' &&
    variant === 'text' && {
      color: theme.palette.primary.contrastText,
    }),
}))

interface Props extends BaseButtonProps {
  children: ReactNode
}

const StyledButton: FC<Props> = (props: Props) => {
  const { children, onClick, disableHoverEffect, startIcon, endIcon, ...rest } = props
  return (
    <StyledButtonRoot onClick={onClick} disableHoverEffect={disableHoverEffect} {...rest}>
      {startIcon && (
        <Box component="span" sx={{ display: 'inherit', mr: 1, ml: -0.5 }}>
          {startIcon}
        </Box>
      )}
      <Box component="span">{children}</Box>
      {endIcon && (
        <Box component="span" sx={{ display: 'inherit', ml: 1, mr: -0.5 }}>
          {endIcon}
        </Box>
      )}
    </StyledButtonRoot>
  )
}

StyledButton.defaultProps = {
  color: 'primary',
  variant: 'contained',
  size: 'medium',
  disableHoverEffect: false,
}

export default StyledButton
