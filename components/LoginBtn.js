import { useSession, signIn, signOut } from "next-auth/react";

export default function Component() {
  const { data: session } = useSession();
  if (session) {
    return (
      <>
        Conectado como {session.user.email} <br />
        <button onClick={() => signOut()}>Desconectar</button>
      </>
    );
  }
  return (
    <>
      Você precisa se conectar para acessar essa área do site
      <br />
      <button onClick={() => signIn()}>Conectar</button>
    </>
  );
}
