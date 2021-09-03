import { useEffect, useState } from "react";
import axios from "axios";
import { io } from "socket.io-client";
import { makeStyles } from "@material-ui/core/styles";
import { Container, Typography, Card, CardContent } from "@material-ui/core";
import { DataGrid } from "@material-ui/data-grid";

const columns = [
  { field: "id", headerName: "ID", width: 100 },
  {
    field: "name",
    headerName: "Nome",
    width: 300,
    editable: false,
  },
];

const useStyles = makeStyles((theme) => ({
  container: {
    display: "flex",
    flexDirection: "column",
    height: 600,
    justifyContent: "center",
  },
}));

function App() {
  const [authors, setAuthors] = useState([]);

  useEffect(() => {
    const socket = io("http://localhost:3000", { transports: ["websocket"] });

    listBooks();

    socket.on("changedBook", (data) => {
      if (data) {
        const newAuthors = [...authors];
        newAuthors.push(data);
        setAuthors(newAuthors);
      }
    });
  });

  async function listBooks() {
    const credentials = await axios.post("http://localhost:3000/login", {
      username: "pessolatohenrique",
      password: "admin",
    });

    const { accessToken } = credentials.data;

    const authors = await axios.get("http://localhost:3000/author", {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    });

    setAuthors(authors.data);
  }

  const classes = useStyles();

  return (
    <Container maxWidth="sm" className={classes.container}>
      <Card>
        <CardContent>
          <Typography variant="h3" component="h3">
            Autores
          </Typography>
          <div style={{ height: 500, width: "100%" }}>
            <DataGrid rows={authors} columns={columns} pageSize={50} />
          </div>
        </CardContent>
      </Card>
    </Container>
  );
}

export default App;
