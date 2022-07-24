import { useRouter } from "next/router";
import React, { useEffect } from "react";
import BackgroundParticles from "../components/BackgroundParticles";

type Props = {};

export default function Error404({}: Props) {
  const router = useRouter();

  useEffect(() => {
    router.push("/");
  });

  return (
    <>
      <BackgroundParticles />
    </>
  );
}
