import React, { memo } from "react";
import { AppHead } from "@/components/AppHead";
import { GetStaticPropsResult, GetStaticPropsContext } from "next";

type ContactsProps = {
  contacts: {
    email: string;
    phone: string;
  };
};

const Contacts = memo(({ contacts }: ContactsProps) => {
  return (
    <>
      <AppHead title="Contacts" description="" />
      <div>Contacts</div>
      <div>{contacts.email}</div>
      <div>{contacts.phone}</div>
    </>
  );
});
Contacts.displayName = " Contacts";

export default Contacts;

//in fase dev questa funzione getStaticProps verrà eseguita ogni volta che carichiamo la pagina
//In fase build invece verrà eseguita una sola volta
export async function getStaticProps({}: GetStaticPropsContext<{}>): Promise<
  GetStaticPropsResult<ContactsProps>
> {
  //accesso al db fake
  const contacts = {
    email: "test@test.com",
    phone: "123455667" + Math.random(),
  };
  return {
    props: {
      contacts,
    },
    revalidate: 100, //ogni 100 sec la pagina statica viene rigenerata
  };
}

//per leggere dei dati non disponibili lati frontend, ma lato backend
//getStaticProps permette a Next di collegarci lato backend prima ancora che la pagina venga reindirizzata lato frontend
//getStaticProps viene attivata solo in fase di build
