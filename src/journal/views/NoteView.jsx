import { SaveOutlined } from "@mui/icons-material"
import { Button, Grid2, TextField, Typography } from "@mui/material"
import { Fragment } from "react"
import { ImageGallery } from "../components"

export const NoteView = () => {
  return (
    <Fragment>
      <Grid2
        container
        direction="row"
        justifyContent="space-between"
        sx={{ mb: 1 }}
      >
        <Typography fontSize={39} fontWeight='light'>12 Marzo, 1997</Typography>
        <Button color="primary" sx={{ padding: 2 }}>
          <SaveOutlined sx={{ fontSize: 30, mr: 1 }} />
          Guardar
        </Button>


      </Grid2>
      <Grid2 container>
        <TextField
          type="text"
          variant="filled"
          fullWidth
          placeholder="Ingrese un título"
          label="Título"
          sx={{ border: 'none', mb: 1 }}
        />
        <TextField
          type="text"
          variant="filled"
          fullWidth
          multiline
          placeholder="¿Qué sucedió el día hoy?"
          minRows={5}
        />
      </Grid2>
      <Grid2 container>
        <ImageGallery />
      </Grid2>
    </Fragment>
  )
}
