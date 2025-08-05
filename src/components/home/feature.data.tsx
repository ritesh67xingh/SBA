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
    description: 'Master + Mentor Teachers for expert teaching and personalized support.',
    icon: <GroupsIcon />,
  },
  {
    title: 'Real-World Learning',
    description: 'Hands-on projects with real-life context to build practical problem-solving skills.',
    icon: <SchoolIcon />,
  },
  {
    title: 'Life Skills',
    description: 'Boosts communication, empathy, and leadership through collaboration.',
    icon: <EmojiObjectsIcon />,
  },
  {
    title: 'Interactive Play',
    description: 'Learning that feels like fun — interactive, communication, and confidence.',
    icon: <SportsEsportsIcon />,
  },
]
