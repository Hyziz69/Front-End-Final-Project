export async function generateStaticParams() {
  return [{ mode: "login" }, { mode: "register" }];
}

export default function Page({ params }: { params: { mode: string } }) {
  return <h1>{params.mode}</h1>;
}
