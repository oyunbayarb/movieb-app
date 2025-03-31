"use client";
import { useParams } from "next/navigation";
import React from "react";

function Detail() {
  const params = useParams();
  console.log(params.movieId);

  return <div>{params.movieId}</div>;
}
export default Detail;
