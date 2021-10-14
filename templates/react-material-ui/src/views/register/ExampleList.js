import React from "react";
import {
  Container,
  Card,
  CardContent,
  CardActions,
  Typography,
  Button,
  TableContainer,
  Table,
  TableHead,
  TableBody,
  TableCell,
  TableRow,
  Grid,
} from "@mui/material";
import { StyledTableCell } from "../../constants/CustomStyles";
import { THEME_COLOR } from "../../constants/default_settings";
import BreadcrumbsWrapper from "../../components/BreadcrumbsWrapper";
import ListIcon from "@material-ui/icons/List";
import ViewModuleIcon from "@material-ui/icons/ViewModule";

function createData(name, author, pages, genre) {
  return { name, author, pages, genre };
}

const rows = [
  createData("Jogos Vorazes", "Suzanne Collins", 320, "Trilogia"),
  createData(
    "Harry Potter e a Pedra Filosofal",
    "J.K Rowling",
    220,
    "Trilogia"
  ),
  createData("Me poupe!", "Nathalia Arcuri", 200, "Finanças"),
  createData("Sherlock Homes", "Arthur Conan Doyle", 500, "Suspense"),
  createData(
    "O mistério dos sete relógios",
    "Agatha Christie",
    300,
    "Suspense"
  ),
];

function ExampleList() {
  return (
    <>
      <Container fixed>
        <br />
        <Card>
          <CardContent>
            <BreadcrumbsWrapper childrenLabel="Livros" />
            <Typography
              gutterBottom
              variant="h5"
              component="h1"
              color={THEME_COLOR}
            >
              Livros
            </Typography>
            <Grid container justifyContent="flex-end" gap="10px">
              <Button variant="text">
                <ListIcon color="primary" />
              </Button>
              <Button variant="text">
                <ViewModuleIcon />
              </Button>
            </Grid>
            <TableContainer>
              <Table>
                <TableHead>
                  <TableRow>
                    <StyledTableCell>Título</StyledTableCell>
                    <StyledTableCell>Autor</StyledTableCell>
                    <StyledTableCell>Gênero</StyledTableCell>
                    <StyledTableCell>Páginas</StyledTableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {rows.map((row) => {
                    return (
                      <TableRow key={row.name}>
                        <TableCell>{row.name}</TableCell>
                        <TableCell>{row.author}</TableCell>
                        <TableCell>{row.genre}</TableCell>
                        <TableCell>{row.pages}</TableCell>
                      </TableRow>
                    );
                  })}
                </TableBody>
              </Table>
            </TableContainer>
          </CardContent>
          <CardActions>
            <Button size="small">Adicionar</Button>
          </CardActions>
        </Card>
      </Container>
    </>
  );
}

export default ExampleList;
