import React from "react";

export default function IndividualTransactionPage({
  params,
}: {
  params: { slug: string };
}) {
  return <div>Individual Transaction Page: {params.slug}</div>;
}
