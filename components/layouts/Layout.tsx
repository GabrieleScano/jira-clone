import { FC } from 'react'
import Head from 'next/head'
import { Box } from '@mui/material'
import { Navbar } from '../ui'
import { Sidebar } from '../ui'

interface Props {
    title?: string
    children: React.ReactNode
}

export const Layout:FC<Props> = ({ children, title = 'JIRA' }) => {
    return (
        <Box>
            <Head>
                <title>{title}</title>
            </Head>
            <Navbar />
            <Sidebar />
            <Box sx={{padding: '10px 20px'}}>
                {children}
            </Box>
        </Box>
    )
}