import { Link as RouterLink } from "react-router-dom"
import { Button, Grid2, Link, TextField, Typography } from "@mui/material"
import { AuthLayout } from "../layout/AuthLayout"

export const RegisterPage = () => {
  return (
    <AuthLayout title="Crear cuenta">
      <form>
        <Grid2 container>
          <Grid2 size={{ xs: 12 }} sx={{ mb: 2 }}>
            <TextField
              label="Nombre completo"
              type="text"
              placeholder="Nombre completo"
              fullWidth
            />
          </Grid2>
          <Grid2 size={{ xs: 12 }} sx={{ mb: 2 }}>
            <TextField
              label="correo"
              type="email"
              placeholder="correo"
              fullWidth
            />
          </Grid2>
          <Grid2 size={{ xs: 12 }} sx={{ mb: 2 }}>
            <TextField
              label="contraseña"
              type="password"
              placeholder="contraseña"
              fullWidth
            />
          </Grid2>
        </Grid2>

        <Grid2 container spacing={2} sx={{ mb: 2 }}>
          <Grid2 size={{ xs: 12 }} >
            <Button variant="contained" fullWidth>
              Crear Cuenta
            </Button>
          </Grid2>
        </Grid2>

        <Grid2 container direction="row" justifyContent="end">
          <Typography sx={{ mr: 1 }}>¿Ya tienes una cuenta?</Typography>
          <Link component={RouterLink} color="inherit" to="/auth/login">
            Login
          </Link>
        </Grid2>
      </form>
    </AuthLayout>
  )
}
