import { useRouter } from "next/router";
import React, { useEffect } from "react";
import LoadingFullScreen from "../components/LoadingFullScreen";

type Props = {};

export default function Error404({}: Props) {
  const router = useRouter();

  useEffect(() => {
    router.push("/");
  });

  return (
    <>
      <LoadingFullScreen />
    </>
  );
}
