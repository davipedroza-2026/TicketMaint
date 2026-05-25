🤖 SENAI Jaú - Assistente de IA para Cursos Tech

Este repositório contém o código-fonte da Landing Page do SENAI Jaú integrada a um agente de Inteligência Artificial (LLM). O objetivo do projeto é apresentar o portfólio de cursos de tecnologia e fornecer um assistente virtual capaz de tirar dúvidas sobre matriz curricular, laboratórios, processo seletivo e infraestrutura da instituição.

📑 Índice

Visão Geral

Arquitetura do Projeto

Requisitos do Sistema

Instalação e Configuração

Guia de Uso

Integração com a IA

Tecnologias Utilizadas

Contribuição

Equipe

🎯 Visão Geral

O projeto consiste em duas partes principais:

Frontend (Landing Page): Uma interface moderna, responsiva e acessível, construída com HTML5 semântico e Tailwind CSS. Focada na conversão de novos alunos para os cursos de Desenvolvimento de Sistemas, Redes de Computadores e Análise de Dados & IA.

Backend/Agente de IA (API): Um serviço que consome modelos de linguagem natural (LLMs) configurados com um prompt de sistema específico (RAG - Retrieval-Augmented Generation) para responder apenas com informações validadas sobre o SENAI Jaú.

📐 Arquitetura do Projeto

senai-jau-ai-assistant/
│
├── public/                 # Arquivos estáticos servidos ao cliente
│   ├── index.html          # Landing Page principal (UI)
│   ├── assets/             # Imagens, SVGs e ícones customizados
│   └── css/                # Tailwind CSS compilado (se necessário)
│
├── server/                 # Backend e lógica da IA
│   ├── main.py             # Ponto de entrada da API (FastAPI/Flask)
│   ├── ai_service.py       # Integração com a API do LLM (OpenAI/Gemini)
│   └── knowledge_base/     # Documentos em TXT/PDF para o RAG (Ementas dos cursos)
│
├── .env.example            # Exemplo de variáveis de ambiente
├── requirements.txt        # Dependências do Python
└── README.md               # Este arquivo


⚙️ Requisitos do Sistema

Antes de iniciar, certifique-se de ter os seguintes requisitos instalados em sua máquina:

Node.js (v18.0.0 ou superior) - Apenas se for compilar o Tailwind localmente.

Python (v3.10 ou superior) - Para o servidor da API de IA.

Git (Para clonar o repositório).

Uma chave de API válida de um provedor de LLM (ex: Google Gemini API Key ou OpenAI API Key).

🚀 Instalação e Configuração

Siga os passos abaixo para configurar o ambiente de desenvolvimento local:

1. Clonar o repositório

git clone [https://github.com/sua-organizacao/senai-jau-ai-assistant.git](https://github.com/sua-organizacao/senai-jau-ai-assistant.git)
cd senai-jau-ai-assistant


2. Configurar o Frontend (Opcional - Tailwind via CDN já implementado)

A landing page (index.html) já utiliza o Tailwind CSS via CDN para desenvolvimento rápido. Nenhuma instalação de pacote JS é estritamente necessária para visualizar a interface. Basta abrir o arquivo no seu navegador.

3. Configurar o Backend (IA)

Crie um ambiente virtual Python e instale as dependências:

# Navegue para a pasta do servidor
cd server

# Crie o ambiente virtual
python -m venv venv

# Ative o ambiente virtual
# No Windows:
venv\Scripts\activate
# No Linux/Mac:
source venv/bin/activate

# Instale as dependências
pip install -r requirements.txt


4. Configurar Variáveis de Ambiente

Copie o arquivo de exemplo e insira suas credenciais:

cp .env.example .env


Edite o arquivo .env e adicione sua chave de API:

LLM_API_KEY="sua_chave_aqui_sk_..."
ENVIRONMENT="development"
PORT=8000


💻 Guia de Uso

Iniciando a API local

Com o ambiente virtual ativado, inicie o servidor local:

uvicorn main:app --reload


A API estará disponível em: http://localhost:8000.

Interagindo com o Assistente de IA

O frontend (Landing Page) possui um widget de chat embutido (implementação futura baseada no index.html atual) que envia requisições POST para a nossa API.

Para testar a IA diretamente via terminal (cURL):

curl -X POST http://localhost:8000/api/chat \
     -H "Content-Type: application/json" \
     -d '{"message": "Quais são as linguagens ensinadas no curso de Desenvolvimento de Sistemas?"}'


Exemplo de Resposta Esperada:

"No curso Técnico em Desenvolvimento de Sistemas do SENAI Jaú, com carga horária de 1200h, você aprenderá linguagens modernas exigidas pelo mercado, incluindo JavaScript, Python, e fundamentos de banco de dados relacionais e não-relacionais."

🧠 Integração com a IA (Contexto RAG)

Para garantir que a IA não sofra de alucinações (inventar informações), o agente consome documentos textuais contidos na pasta knowledge_base/. O System Prompt foi configurado com a seguinte diretriz:

"Você é o assistente virtual oficial do SENAI Jaú. Sua função é ajudar os visitantes da landing page a entenderem os cursos de tecnologia (Desenvolvimento de Sistemas, Redes e Análise de Dados). Seja cordial, profissional e persuasivo. Use APENAS os dados fornecidos na base de conhecimento. Se não souber a resposta, peça para o usuário enviar um email para secretaria.jau@sp.senai.br ou ligar para (14) 3602-8700."

🛠️ Tecnologias Utilizadas

Frontend:

HTML5 Semântico

Tailwind CSS (Estilização e Responsividade)

Lucide Icons (Iconografia)

Backend / IA:

Python 3.10+

FastAPI (Roteamento de API)

LangChain (Orquestração de LLMs e RAG)

🤝 Contribuição

Contribuições são sempre bem-vindas! Para contribuir:

Faça um Fork do projeto.

Crie uma Branch para sua feature (git checkout -b feature/NovaIncrívelFeature).

Faça o Commit de suas mudanças (git commit -m 'Adiciona uma nova feature incrível').

Faça o Push para a Branch (git push origin feature/NovaIncrívelFeature).

Abra um Pull Request.

Siga nosso Código de Conduta em todas as interações.

👥 Equipe

Projeto desenvolvido como material de estudo e estruturação de arquitetura frontend/backend.

Líder Técnico: Desenvolvedor Sênior IA/Web

Instituição Base: SENAI Jaú (Fictício/Modelo de estudo)

Documentação gerada para fins de demonstração de arquitetura profissional.