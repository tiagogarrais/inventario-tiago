import { getServerSession } from "next-auth/next";
import { authOptions } from "../../auth/[...nextauth]";

export default async (req, res) => {
  const session = await getServerSession(req, res, authOptions);

  if (session) {
    res.send({
      content:
        "Este conteúdo é restrito. Você consegue acessar porque está conectado(a) com o e-mail " +
        session.user.email,
    });
  } else {
    res.send({
      error: "Este conteúdo só pode ser acessado por usuários conectados.",
    });
  }
};
