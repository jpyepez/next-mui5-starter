import styled from '@emotion/styled'
import { Button, Typography } from '@mui/material'
import type { NextPage } from 'next'
import Head from 'next/head'

const StyledButton = styled(Button)`
    background-color: ${({ theme }) => theme.palette.primary.main};
    margin-top: 2rem;
    width: 100%;
`

const Home: NextPage = () => {
    return (
        <div>
            <Head>
                <title>Next MUI5 Starter</title>
                <meta
                    name="description"
                    content="Generated by create next app"
                />
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <main>
                <Typography sx={{ color: 'primary.dark' }} variant="h1">
                    Next MUI5 Starter
                </Typography>
                <StyledButton variant="contained">Get Started</StyledButton>
            </main>
        </div>
    )
}

export default Home
