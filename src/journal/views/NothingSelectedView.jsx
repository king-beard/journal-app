import { StarOutline } from "@mui/icons-material"
import { Grid2, Typography } from "@mui/material"

export const NothingSelectedView = () => {
  return (
    <Grid2
      container
      spacing={0}
      direction="column"
      alignItems="center"
      justifyContent="center"
      sx={{ minHeight: 'calc(100vh - 110px)', backgroundColor: 'primary.main', borderRadius: 5 }}
    >
      <StarOutline sx={{ fontSize: 100, color: 'white' }} />
      <Typography color="white" variant="h5">Selecciona o crea una cuenta</Typography>
    </Grid2>
  )
}
