import Head from 'next/head'
import Image from 'next/image'
import {Heading,Text,Stack} from "@chakra-ui/react";
Home.title = "Home";
export default function Home() {
  return (
    <>
      <Stack direction="column" spacing="30px">
        <Heading fontSize="25px">
          Using Next js, Chakra-UI and Formik to build CRUD
        </Heading>
        <Text>
          This application is featured with create,read,update and delete (CRUD)
          operations implemented using Formik for handling forms,NextJS as React framework 
          and Chakra-UI to polish the designs.The server side codes are quite easy to
          understand as NextJS is featured with SSR.I didn&apos;t use the realtime database (
          I&apos;m treating <strong>db.json</strong> file as database here)like one of MongoDB or MySQL but the code implementation works exactly
          like how we can connect our front-end part with the realtime backend.Don&apos;t
          forget to give me a star if you liked the app 😊.
        </Text>
      </Stack>
    </>
  )
}
