import multer from "multer";
import nextConnect from "next-connect";

// Configuração do multer (define onde os arquivos serão armazenados)
const upload = multer({ storage: multer.memoryStorage() });

// Criando um middleware Next.js para usar com multer
const apiRoute = nextConnect({
  onError(error, req, res) {
    res.status(500).json({ error: `Erro no upload: ${error.message}` });
  },
  onNoMatch(req, res) {
    res.status(405).json({ error: `Método ${req.method} não permitido` });
  },
});

// Middleware para lidar com upload de arquivo único chamado "file"
apiRoute.use(upload.single("file"));

apiRoute.post((req, res) => {
  if (!req.file) {
    return res.status(400).json({ error: "Nenhum arquivo enviado" });
  }

  res.status(200).json({
    message: "Upload realizado com sucesso",
    filename: req.file.originalname,
  });
});

// Desabilita o BodyParser padrão do Next.js para trabalhar com multer
export const config = {
  api: {
    bodyParser: false,
  },
};

export default apiRoute;
