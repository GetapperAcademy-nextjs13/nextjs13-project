import Head from "next/head";
import { ThemeProvider } from "@mui/material";
import theme from "@/themes";
import { SignupForm } from "@/components/SignupForm";
import { LoginForm } from "@/components/LoginForm";

export default function Home() {
  return (
    <>
      <Head>
        <title>Lezione8</title>
        <meta name="description" content="Lezione8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <ThemeProvider theme={theme}>
        <SignupForm />
        <LoginForm />
      </ThemeProvider>
    </>
  );
}
