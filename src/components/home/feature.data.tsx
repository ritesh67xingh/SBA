import React, { ReactNode } from 'react'
import GroupsIcon from '@mui/icons-material/Groups' // For Dual Teacher Support
import SchoolIcon from '@mui/icons-material/School' // For Real-World Learning
import EmojiObjectsIcon from '@mui/icons-material/EmojiObjects' // For Life Skills
import SportsEsportsIcon from '@mui/icons-material/SportsEsports' // For Interactive Play

interface Data {
  title: string
  description: string
  icon?: ReactNode
}

export const data: Data[] = [
  {
    title: 'Dual Teacher Support System',
    description: '(Master Teacher + Mentor Teacher) Every class is powered by our two-teacher model',
    icon: <GroupsIcon />,
  },
  {
    title: 'Real-World Learning',
    description: 'Every lesson connects to real life — hands-on projects tied to everyday contexts',
    icon: <SchoolIcon />,
  },
  {
    title: 'Life Skills',
    description: 'We nurture communication & leadership through teamwork & projects, equipping kids to thrive tomorrow',
    icon: <EmojiObjectsIcon />,
  },
  {
    title: 'Interactive Play',
    description: 'Learning that feels like fun — interactive, communication, and confidence.',
    icon: <SportsEsportsIcon />,
  },
]
