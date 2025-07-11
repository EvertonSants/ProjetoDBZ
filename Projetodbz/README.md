#  ProjetoDBZ — Projeto Final de Programação Web (XDES03)

Aplicação web inspirada no universo Dragon Ball, desenvolvida como trabalho final da disciplina **XDES03 – Programação Web** na **Universidade Federal de Itajubá (UNIFEI)**.

---

## 📌 Objetivo

Consolidar os fundamentos de desenvolvimento web FullStack, unindo frontend moderno com backend funcional e autenticação via tokens, utilizando uma API externa temática para enriquecimento visual e funcional.

---

##  Funcionalidades Implementadas

- ✅ Tela de login com validações
- ✅ Tela de cadastro com e-mail único e confirmação de senha
- ✅ Autenticação com JWT e rotas protegidas
- ✅ Integração com a API externa de Dragon Ball (https://dragonball-api.com/)
- ✅ Exibição de imagens dinâmicas como plano de fundo
- ✅ CRUD 
- ✅ Métodos HTTP: GET, POST, PUT, DELETE
- ✅ Validações com Yup
- ✅ Estrutura clara e componentizada com Next.js 

---

##  Tecnologias Utilizadas

### Frontend
- Next.js
- React
- CSS
- Yup

### Backend
- Node.js
- Express
- Manipulação de arquivos (sem banco)

### Autenticação
- JSON Web Token

---

##  Problema que o projeto resolve

Fãs de Dragon Ball normalmente têm interesse em catalogar, explorar e comparar personagens ou dados do universo da série. O ProjetoDBZ oferece uma forma simples e estilosa de gerenciar esses dados com segurança e interatividade.

---

##  Estrutura da Aplicação

/app
/login → Tela de login
/register → Tela de cadastro
/dashboard → Área logada protegida
/api → Backend com Express
/public
/images → Recursos visuais

yaml
Copiar
Editar

---

## 📦 Instalação Local

```bash
# Clone o repositório
git clone https://github.com/EvertonSantss/ProjetoDBZ.git

# Acesse a pasta
cd ProjetoDBZ

# Instale as dependências
npm install

# Rode o servidor de desenvolvimento
npm run dev
Abra no navegador: http://localhost:3000

🧪 Como Testar
Acesse /register e crie uma conta com e-mail válido

Faça login em /login

Navegue pela área protegida /dashboard

Teste as funcionalidades de CRUD

Veja a imagem do personagem mudando ao carregar toda vez que recarregar a pagina login


📚 Requisitos Atendidos
✅ Aplicação web com autenticação

✅ Login/cadastro com validações e email único

✅ Rotas protegidas com JWT

✅ API externa utilizada

✅ CRUD completo com arquivo ou JSON

✅ Métodos HTTP: GET, POST, PUT, DELETE



📝 Licença
Projeto acadêmico desenvolvido para a disciplina XDES03 – Programação Web (UNIFEI).
Uso exclusivo para fins educacionais.
