import React, { FC } from 'react'
import Link from 'next/link'
import Grid from '@mui/material/Grid'
import MuiLink from '@mui/material/Link'
import type { Navigation } from '@/interfaces/navigation'
import { navigations as headerNavigations } from '@/components/navigation/navigation.data'
import { FooterSectionTitle } from '@/components/footer'

const courseMenu: Array<Navigation & { id: string }> = [
  {
    id: 'ui-ux-design',
    label: 'UI/UX Design',
    path: '#',
  },
  {
    id: 'mobile-development',
    label: 'Mobile Development',
    path: '#',
  },
  {
    id: 'machine-learning',
    label: 'Machine Learning',
    path: '#',
  },
  {
    id: 'web-development',
    label: 'Web Development',
    path: '#',
  },
]

const pageMenu = headerNavigations

const companyMenu: Array<Navigation & { id: string }> = [
  { id: 'contact-us', label: 'Contact Us', path: '#' },
  { id: 'privacy-policy', label: 'Privacy & Policy', path: '#' },
  { id: 'terms-conditions', label: 'Term & Condition', path: '#' },
  { id: 'faq', label: 'FAQ', path: '#' },
]

interface NavigationItemProps {
  label: string
  path: string
}

const NavigationItem: FC<NavigationItemProps> = ({ label, path }) => {
  return (
    <Link href={path} passHref>
      <MuiLink
        underline="hover"
        sx={{
          display: 'block',
          mb: 1,
          color: 'primary.contrastText',
        }}
      >
        {label}
      </MuiLink>
    </Link>
  )
}

const FooterNavigation: FC = () => {
  return (
    <Grid container spacing={2}>
      <Grid item xs={12} md={4}>
        <FooterSectionTitle title="Course" />
        {courseMenu.map(({ id, label, path }) => (
          <NavigationItem key={id} label={label} path={path} />
        ))}
      </Grid>
      <Grid item xs={12} md={4}>
        <FooterSectionTitle title="Menu" />
        {pageMenu.map(({ label, path }) => (
          <NavigationItem key={path} label={label} path={path} />
        ))}
      </Grid>
      <Grid item xs={12} md={4}>
        <FooterSectionTitle title="About" />
        {companyMenu.map(({ id, label, path }) => (
          <NavigationItem key={id} label={label} path={path} />
        ))}
      </Grid>
    </Grid>
  )
}

export default FooterNavigation
