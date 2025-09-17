"use client"
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import style from "./login.module.css"
import Button from '@mui/material/Button';
import Link from '@mui/material/Link';
import { Visibility, VisibilityOff } from '@mui/icons-material';
import { useState } from 'react';
import { z } from 'zod';
import InputAdornment from '@mui/material/InputAdornment';
import IconButton from '@mui/material/IconButton';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod'

export const loginSchema = z.object({
    email: z.string().min(6, { message: 'Invalid email address' }),
    password: z.string().min(6, { message: 'Password must be at least 6 characters' }),
});
type LoginFormData = z.infer<typeof loginSchema>;
export default function Login() {
    const [showPassword, setShowPassword] = useState(false);
    const togglePasswordVisibility = () => {
        setShowPassword((prev) => !prev);
    };
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<LoginFormData>({
        resolver: zodResolver(loginSchema),
    });

    return (
        <>

            <Box className={style.background}>
                <Typography sx={{ textAlign: "center", fontFamily: "sans-serif", fontSize: "40px", fontWeight: "bold", color: "#cda675", }}>Rising Star</Typography>
                <Box className={style.login}>
                    <Typography>Enter your credential to access your dashboard</Typography>
                    <TextField sx={{
                        background: "rgba(39, 39, 42, 0.5)"
                        , borderRadius: "10px", '& .MuiInputBase-input::placeholder': {
                            color: 'grey',
                            opacity: 1,
                        },
                        input: {
                            color: 'white'
                        }
                    }} placeholder="Enter your registration ID" />
                    <TextField sx={{
                        background: "rgba(39, 39, 42, 0.5)", borderRadius: "10px", '& .MuiInputBase-input::placeholder': {
                            color: 'grey',
                            opacity: 1,
                        },
                        input: {
                            color: 'white'
                        }
                    }} placeholder="password" type={showPassword ? 'text' : 'password'} margin="normal"
                        slotProps={{
                            input: {
                                endAdornment: (
                                    <InputAdornment position="end">
                                        <IconButton sx={{ color: "wheat" }} onClick={togglePasswordVisibility} edge="end">
                                            {showPassword ? <VisibilityOff /> : <Visibility />}
                                        </IconButton>
                                    </InputAdornment>
                                ),
                            },
                        }} />

                    <Button sx={{ background: "rgb(125, 106, 251)" }} variant="contained">Sign In</Button>
                    <Link sx={{ color: "yellow", textAlign: "center" }}>Forgot password</Link>
                </Box>
            </Box>

        </>
    )
}