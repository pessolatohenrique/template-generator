import React from "react";
import {
  Container,
  Card,
  CardContent,
  Typography,
  Grid,
  TextField,
  Button,
} from "@mui/material";
import { useForm } from "react-hook-form";

import { THEME_COLOR } from "../../constants/default_settings";
import BreadcrumbsWrapper from "../../components/BreadcrumbsWrapper";

function ExampleForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => console.log(data);

  return (
    <>
      <Container fixed>
        <br />
        <Card>
          <CardContent>
            <BreadcrumbsWrapper
              parentLink={{ link: "/livros", label: "Livros" }}
              childrenLabel="Novo"
            />
            <Typography
              gutterBottom
              variant="h5"
              component="h1"
              color={THEME_COLOR}
            >
              Novo Livro
            </Typography>
            <form onSubmit={handleSubmit(onSubmit)}>
              <Grid container direction={"column"} spacing={2}>
                <Grid item>
                  <TextField
                    fullWidth
                    id="firstName"
                    label="First Name"
                    error={Boolean(errors.firstName)}
                    helperText={
                      errors.firstName && "Campo de preenchimento obrigatório"
                    }
                    {...register("firstName", {
                      required: true,
                      maxLength: 20,
                    })}
                  />
                </Grid>
                <Grid item>
                  <TextField
                    fullWidth
                    id="lastName"
                    label="Lastname Name"
                    error={Boolean(errors.lastName)}
                    helperText={
                      errors.lastName && "Campo de preenchimento obrigatório"
                    }
                    {...register("lastName", { required: true, maxLength: 20 })}
                  />
                </Grid>
                <Grid item>
                  <Button variant="contained" type="submit">
                    Salvar
                  </Button>
                </Grid>
              </Grid>
            </form>
          </CardContent>
        </Card>
      </Container>
    </>
  );
}
export default ExampleForm;
