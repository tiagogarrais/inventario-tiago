import { useSession, signIn, signOut } from "next-auth/react";
import LoginBtn from "../components/LoginBtn";
export default function Index() {
  const { data: session } = useSession();
  if (session) {
    return (
      <>
        <h1>Inventário</h1>
        <LoginBtn />
      </>
    );
  }
  return (
    <>
      <h1>Inventário</h1>
      Você não está logado <br />
      <button onClick={() => signIn()}>Entrar</button>
    </>
  );
}
