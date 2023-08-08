
import Features from "@/components/home/Features";
import HomeIntro from "@/components/home/HomeIntro";
import Plan from "@/components/home/Plan";
import Questions from "@/components/home/Questions";
import Review from "@/components/home/Review";
import Started from "@/components/home/Started";
import TryDemo from "@/components/home/TryDemo";
import UseCase from "@/components/home/UseCase";
import Head from "next/head";

export default function Home() {
  return (
    <>
      <Head>
        <title>GenAI-AI Based Copywriting and Content...</title>
        <meta
          name="description"
          content="Ai Based Copywriting and Content... "
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="" />
      </Head>
      <HomeIntro/>
      <TryDemo/>
      <Features/>
      <UseCase/>
      <Review/>
      <Plan/>
      <Questions/>
      <Started/>
    </>
  );
}
