import { Link as RouterLink } from "react-router-dom"
import { Button, Grid2, Link, TextField, Typography } from "@mui/material"
import { Google } from "@mui/icons-material"

export const LoginPage = () => {
  return (
    <Grid2
      container
      spacing={0}
      direction="column"
      alignItems="center"
      justifyContent="center"
      sx={{ minHeight: '100vh', backgroundColor: 'primary.main', padding: 4 }}
    >
      <Grid2
        className="box-shadow"
        size={{ xs: 12, sm: 8, md: 6, xl: 4 }}
        sx={{ backgroundColor: 'white', padding: 3, borderRadius: 2 }}
      >
        <Typography variant="h5" sx={{ mb: 1 }}>Login</Typography>
        <form>
          <Grid2 container>
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
            <Grid2 size={{ xs: 12, md: 6 }} >
              <Button variant="contained" fullWidth>Login</Button>
            </Grid2>
            <Grid2 size={{ xs: 12, md: 6 }} >
              <Button variant="contained" fullWidth>
                <Google />
                <Typography sx={{ ml: 1 }}>Google</Typography>
              </Button>
            </Grid2>
          </Grid2>

          <Grid2 container direction="row" justifyContent="end">
            <Link component={ RouterLink } color="inherit" to="/auth/register">
              Crear cuenta
            </Link>
          </Grid2>
        </form>
      </Grid2>
    </Grid2>
  )
}
