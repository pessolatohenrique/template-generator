import React, { useEffect, useState } from "react";
import {
  Container,
  Card,
  CardContent,
  Typography,
  Grid,
  TextField,
  Button,
  Select,
  MenuItem,
  InputLabel,
  FormControl,
  FormHelperText,
  FormGroup,
  FormControlLabel,
  Switch,
} from "@mui/material";
import { useForm } from "react-hook-form";

import { THEME_COLOR } from "../../constants/default_settings";
import BreadcrumbsWrapper from "../../components/BreadcrumbsWrapper";
import { IExampleForm } from "../../interfaces/FormData";
import { IBook, IBookList } from "../../interfaces/Book";

function createData({ book, author, pages, genre }: IBook) {
  return { book, author, pages, genre };
}

const rows: IBookList = {
  items: [
    createData({
      book: "Jogos Vorazes",
      author: "Suzanne Collins",
      pages: 320,
      genre: "Trilogia",
    }),
    createData({
      book: "Harry Potter e a Pedra Filosofal",
      author: "J.K Rowling",
      pages: 220,
      genre: "Trilogia",
    }),
    createData({
      book: "Me poupe!",
      author: "Nathalia Arcuri",
      pages: 200,
      genre: "Finanças",
    }),
    createData({
      book: "Sherlock Homes",
      author: "Arthur Conan Doyle",
      pages: 500,
      genre: "Suspense",
    }),
    createData({
      book: "O mistério dos sete relógios",
      author: "Agatha Christie",
      pages: 300,
      genre: "Suspense",
    }),
    createData({
      book: "Harry Potter e o Enigma do Príncipe",
      author: "J.K Rowling",
      pages: 220,
      genre: "Trilogia",
    }),
  ],
};

function ExampleForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
  } = useForm<IExampleForm>();
  const [books, setBooks] = useState<IBookList>({ items: [] });
  const onSubmit = (data: IExampleForm) => console.log(data);

  useEffect(() => {
    const author = watch("author");
    const books = [...rows.items].filter((item) => item.author === author);
    console.log("all items?", [...rows.items]);
    console.log("author??", author);
    console.log("books??", books);
    setBooks({ items: books });
  }, [watch("author")]);

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
                  <FormControl fullWidth>
                    <InputLabel id="author">Author</InputLabel>

                    <Select
                      labelId="author"
                      id="demo-simple-select-helper"
                      fullWidth
                      inputProps={{ "data-testid": "author" }}
                      error={Boolean(errors.author)}
                      {...register("author", {
                        required: true,
                      })}
                    >
                      <MenuItem value={"J.K Rowling"}>JK Rowling</MenuItem>
                      <MenuItem value={"Cortella"}>Cortella</MenuItem>
                      <MenuItem value={"Nathalia Arcuri"}>
                        Nathalia Arcuri
                      </MenuItem>
                    </Select>
                    {errors.author && (
                      <FormHelperText error>
                        With label + helper text
                      </FormHelperText>
                    )}
                  </FormControl>
                </Grid>
                <Grid item>
                  <FormControl fullWidth>
                    <InputLabel id="book">Book</InputLabel>

                    <Select
                      labelId="book"
                      id="book"
                      fullWidth
                      inputProps={{ "data-testid": "book" }}
                      error={Boolean(errors.book)}
                      {...register("book", {
                        required: true,
                      })}
                    >
                      {books.items.map((item) => {
                        return (
                          <MenuItem key={item.book} value={item.book}>
                            {item.book}
                          </MenuItem>
                        );
                      })}
                    </Select>
                    {errors.book && (
                      <FormHelperText error>
                        With label + helper text
                      </FormHelperText>
                    )}
                  </FormControl>
                </Grid>
                <Grid item>
                  <FormGroup>
                    <FormControlLabel
                      control={
                        <Switch defaultChecked {...register("active")} />
                      }
                      label="Ativo?"
                    />
                  </FormGroup>
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
