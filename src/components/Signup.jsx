import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { signup, activate } from '../redux/action/Index';
import { useDispatch } from 'react-redux';


function Copyright(props) {
    return (
        <Typography variant="body2" color="text.secondary" align="center" {...props}>
            {'Copyright © '}
            <Link color="inherit" href="https://mui.com/">
                E-commerce
            </Link>{' '}
            {new Date().getFullYear()}
            {'.'}
        </Typography>
    );
}

// sign up data . the prople who are already signin
// const signupData = [
//     { Username: "saadansari", password: "saad10" },
//     { Username: "ahmed", password: "15" },
// ]

// TODO remove, this demo shouldn't need to reset the theme.

const defaultTheme = createTheme();
export default function SignUp() {

    const [error, setError] = React.useState(0)

    const dispatch = useDispatch()
    const handleSubmit = (event) => {
        event.preventDefault();
        const data = new FormData(event.currentTarget);
        const signupData = {
            Username: data.get('Username'),
            password: data.get('password'),
        };
        console.log(signupData)
        if (signupData.Username.trim() === "" && signupData.password.trim() === "") {
            setError(1);
        } else if (signupData.password.length < 8 || signupData.password.length > 20) {
            setError(2);
        } else if (!/\d/.test(signupData.password) || !/[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]/.test(signupData.password)) {
            setError(3); // Error code for password missing number or special character
        } else {
            dispatch(signup(signupData));
            dispatch(activate());
        }

        // const matchingUser = signupData.find(
        //     (user) => user.Username === signinData.Username && user.password === signinData.password
        // );

        // console.log(matchingUser)
        // if (matchingUser) {
        //     dispatch(signin())
        //     console.log("true")
        // }
        //   we will add and error for else statement later 

    };

    return (
        <ThemeProvider theme={defaultTheme}>
            <Container component="main" maxWidth="xs">
                <CssBaseline />
                <Box
                    sx={{
                        marginTop: 8,
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                    }}
                >
                    <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
                        <LockOutlinedIcon />
                    </Avatar>
                    <Typography component="h1" variant="h5">
                        Sign up
                    </Typography>
                    <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
                        <TextField
                            margin="normal"
                            required
                            fullWidth
                            id="Username"
                            label="Username"
                            name="Username"
                            autoComplete="off"
                            autoFocus
                        />
                        <TextField
                            margin="normal"
                            required
                            fullWidth
                            name="password"
                            label="password"
                            type="password"
                            autoComplete="current-password"
                        />
                        <Typography color={"red"} fontSize={'12px'}>
                               {error === 1 ? 'Username & password must not be empty' :
                                error === 2 ? 'Password must be at least 8 characters long and no longer than 20' : 
                                error === 3 ? 'Password must contain special character & numbers ' : null}
                        </Typography>
                        <FormControlLabel
                            control={<Checkbox value="remember" color="primary" />}
                            label="Remember me"
                        />
                        <Button
                            type="submit"
                            fullWidth
                            variant="contained"
                            sx={{ mt: 3, mb: 2 }}
                        >
                            Sign Up
                        </Button>
                        <Grid container>
                            <Grid item xs>
                                <Link href="#" variant="body2">
                                    Forgot password?
                                </Link>
                            </Grid>
                            <Grid item>
                                <Link href="#" variant="body2">
                                    {"Don't have an account? Sign Up"}
                                </Link>
                            </Grid>
                        </Grid>
                    </Box>
                </Box>
                <Copyright sx={{ mt: 8, mb: 4 }} />
            </Container>
        </ThemeProvider>
    );
}