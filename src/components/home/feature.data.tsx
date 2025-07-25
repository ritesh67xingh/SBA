import React, { ReactNode } from 'react'
import ArtTrackIcon from '@mui/icons-material/ArtTrack'
import AttachMoneyIcon from '@mui/icons-material/AttachMoney'
import LocalLibraryIcon from '@mui/icons-material/LocalLibrary'
import ContactSupportIcon from '@mui/icons-material/ContactSupport'

interface Data {
  id: string
  title: string
  description: string
  icon?: ReactNode
}

export const data: Data[] = [
  {
    id: 'easy-accessible',
    title: 'Easy Accessible',
    description: 'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore',
    icon: <ArtTrackIcon />,
  },
  {
    id: 'affordable-cost',
    title: 'More Affordable Cost',
    description: 'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore',
    icon: <AttachMoneyIcon />,
  },
  {
    id: 'flexible-study',
    title: 'Flexible Study Time',
    description: 'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore',
    icon: <LocalLibraryIcon />,
  },
  {
    id: 'mentor-consultation',
    title: 'Consultation With Mentor',
    description: 'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore',
    icon: <ContactSupportIcon />,
  },
]
