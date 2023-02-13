import React from 'react'
import { Box, Button, CardMedia, TextField } from '@mui/material'

// import { MAIN_URL } from '../../constant/env'

const Login = () => {
  return (
    <>
        <Box
            width={'100%'}
        >
            <Box 
                width={'99.9%'}
                // height={'70px'}
                border={'1px solid #6358e5'}
                bgcolor={'#6358e5'}
            >
                <CardMedia
                    component="img"
                    alt="login_image"
                    // src={`${MAIN_URL}/login.gif`}
                    src={`/shopping.png`}
                    style={{
                        width: '50px',
                        height: '50px',
                        marginTop: '10px'
                    }}
                />
            </Box>
            <Box
                display={'flex'}
                justifyContent={'space-around'}
                alignItems={'center'}
                marginTop={'60px'}
            >
                <Box>
                    <CardMedia
                        component="img"
                        alt="login_image"
                        // src={`${MAIN_URL}/login.gif`}
                        src={`/login.gif`}
                        style={{
                            width: '300px',
                            marginTop: '20px'
                        }}
                    />
                </Box>
                <Box>
                    <form>
                        <Box>
                            <TextField 
                                id="filled-basic" 
                                label="E-mail" 
                                variant="filled" 
                                style={{
                                    marginBottom: '20px',
                                    width: '70%'
                                }}
                            />
                            <TextField 
                                id="filled-basic" 
                                label="Password" 
                                variant="filled" 
                                style={{
                                    marginBottom: '20px',
                                    width: '70%'
                                }}
                            />
                        </Box>
                        <Box>
                            <Button 
                                variant="contained"
                            >Login</Button>
                        </Box>
                    </form>
                </Box>
            </Box>
        </Box>
    </>
  )
}

export default Login
