import type { NextPage } from "next";
import Head from "next/head";
import { useEffect, useState } from "react";
import BackgroundParticles from "../components/BackgroundParticles";
import Body from "../components/Body";

const Home: NextPage = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(false);
  }, []);

  return (
    <>
      {isLoading ? (
        <div>Loading...</div>
      ) : (
        <>
          <Body />
        </>
      )}

      <BackgroundParticles />
    </>
  );
};

export default Home;
