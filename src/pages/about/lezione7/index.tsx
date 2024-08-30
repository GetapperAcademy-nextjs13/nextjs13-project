import Head from "next/head";
import {
  Box,
  Button,
  Container,
  Grid,
  Paper,
  Stack,
  ThemeProvider,
} from "@mui/material";
import theme from "@/themes";

export default function Home() {
  return (
    <>
      <Head>
        <title>Lezione7</title>
        <meta name="description" content="Lezione7" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <ThemeProvider theme={theme}>
        <Container>
          <Button variant="contained">Hello world</Button>
          <Button variant="outlined">Hello world</Button>
          <Button variant="text">Hello world</Button>
          <Button variant="contained" color="secondary">
            Hello world
          </Button>
          <Button variant="outlined" color="secondary">
            Hello world
          </Button>
          <Button variant="text" color="secondary">
            Hello world
          </Button>
        </Container>

        <Container>
          <Button sx={{ m: 3 }} variant="contained">
            Hello world
          </Button>
          <Button sx={{ m: 3 }} variant="outlined">
            Hello world
          </Button>
          <Button sx={{ m: 3 }} variant="text">
            Hello world
          </Button>

          <Button sx={{ m: 3 }} variant="contained" color="secondary">
            Hello world
          </Button>
          <Button sx={{ m: 3 }} variant="outlined" color="secondary">
            Hello world
          </Button>
          <Button sx={{ m: 3 }} variant="text" color="secondary">
            Hello world
          </Button>
        </Container>
        <Container>
          <Stack
            spacing={1}
            sx={{
              mx: 2,
              p: 1,
              height: "100vh",
            }}
            alignItems="flex-end"
            justifyContent="center"
          >
            <Box>
              <Button variant="contained" sx={{ borderRadius: 4 }}>
                Hello world
              </Button>
            </Box>
            <Button variant="outlined">Hello world</Button>
            <Button variant="text">Hello world</Button>
            <Button variant="contained" color="secondary">
              Hello world
            </Button>
            <Button variant="outlined" color="secondary">
              Hello world
            </Button>
            <Button variant="text" color="secondary">
              Hello world
            </Button>
            <Stack direction="row" width="100%">
              <Button sx={{ flex: 1 }} variant="contained" color="secondary">
                Hello world
              </Button>
              <Button sx={{ flex: 2 }} variant="outlined" color="secondary">
                Hello world
              </Button>
              <Button variant="text" color="secondary">
                Hello world
              </Button>
            </Stack>
          </Stack>
        </Container>

        <Container maxWidth="sm">
          <Box
            sx={{
              bgcolor: "primary.main",
            }}
          >
            Ciao
          </Box>
        </Container>
        <Container maxWidth="md">
          <Grid container sx={{ bgcolor: "#f00", p: 2, mt: 10 }} spacing={3}>
            <Grid item xs={12}>
              <Paper sx={{ height: 75, width: "100%", p: 1 }}>1</Paper>
            </Grid>
            <Grid item xs={12} sm={6} md={4} lg={3} xl={2}>
              <Paper sx={{ height: 75, width: "100%", p: 1 }}>1</Paper>
            </Grid>
            <Grid item xs={12} sm={6} md={4} lg={3} xl={2}>
              <Paper sx={{ height: 75, width: "100%", p: 1 }}>1</Paper>
            </Grid>
            <Grid item xs={12} sm={6} md={4} lg={3} xl={2}>
              <Paper sx={{ height: 75, width: "100%", p: 1 }}>1</Paper>
            </Grid>
            <Grid item xs={12} sm={6} md={4} lg={3} xl={2}>
              <Paper sx={{ height: 75, width: "100%", p: 1 }}>1</Paper>
            </Grid>
            <Grid item xs={12} sm={6} md={4} lg={3} xl={2}>
              <Paper sx={{ height: 75, width: "100%", p: 1 }}>1</Paper>
            </Grid>
            <Grid item xs={12} sm={6} md={4} lg={3} xl={2}>
              <Paper sx={{ height: 75, width: "100%", p: 1 }}>1</Paper>
            </Grid>
            <Grid item xs={12} sm={6} md={4} lg={3} xl={2}>
              <Paper sx={{ height: 75, width: "100%", p: 1 }}>1</Paper>
            </Grid>
            <Grid item xs={12} sm={6} md={4} lg={3} xl={2}>
              <Paper sx={{ height: 75, width: "100%", p: 1 }}>1</Paper>
            </Grid>
            <Grid item xs={12} sm={6} md={4} lg={3} xl={2}>
              <Paper sx={{ height: 75, width: "100%", p: 1 }}>1</Paper>
            </Grid>
            <Grid item xs={12} sm={6} md={4} lg={3} xl={2}>
              <Paper sx={{ height: 75, width: "100%", p: 1 }}>1</Paper>
            </Grid>
            <Grid item xs={12} sm={6} md={4} lg={3} xl={2}>
              <Paper sx={{ height: 75, width: "100%", p: 1 }}>1</Paper>
            </Grid>
            <Grid item xs={12} sm={6} md={4} lg={3} xl={2}>
              <Paper sx={{ height: 75, width: "100%", p: 1 }}>1</Paper>
            </Grid>
            <Grid item xs={12} sm={6} md={4} lg={3} xl={2}>
              <Paper sx={{ height: 75, width: "100%", p: 1 }}>1</Paper>
            </Grid>
            <Grid item xs={12} sm={6} md={4} lg={3} xl={2}>
              <Paper sx={{ height: 75, width: "100%", p: 1 }}>1</Paper>
            </Grid>
            <Grid item xs={12} sm={6} md={4} lg={3} xl={2}>
              <Paper sx={{ height: 75, width: "100%", p: 1 }}>1</Paper>
            </Grid>
            <Grid item xs={12} sm={6} md={4} lg={3} xl={2}>
              <Paper sx={{ height: 75, width: "100%", p: 1 }}>1</Paper>
            </Grid>
            <Grid item xs={12} sm={6} md={4} lg={3} xl={2}>
              <Paper sx={{ height: 75, width: "100%", p: 1 }}>1</Paper>
            </Grid>
            <Grid item xs={12} sm={6} md={4} lg={3} xl={2}>
              <Paper sx={{ height: 75, width: "100%", p: 1 }}>1</Paper>
            </Grid>
            <Grid item xs={12} sm={6} md={4} lg={3} xl={2}>
              <Paper sx={{ height: 75, width: "100%", p: 1 }}>1</Paper>
            </Grid>
            <Grid item xs={12} sm={6} md={4} lg={3} xl={2}>
              <Paper sx={{ height: 75, width: "100%", p: 1 }}>2</Paper>
            </Grid>
            <Grid item xs={12} sm={6} md={4} lg={3} xl={2}>
              <Paper sx={{ height: 75, width: "100%", p: 1 }}>3</Paper>
            </Grid>
          </Grid>
        </Container>
      </ThemeProvider>
    </>
  );
}
