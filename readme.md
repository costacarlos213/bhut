## 💡 Sobre o projeto

API para teste realizado para BHUT

## ⚙️ Techs

- Node
- Typescript
- MongoDB

# 🏁 Como eu uso?

Para clonar esse projeto em sua máquina,
Execute o seguinte comando:

```bash
git clone https://github.com/costacarlos213/bhut
```

```bash
cd bhut
```

## ✨ Instalando dependências

```
yarn
```

_ou_

```
npm install
```

_obs: caso opte por instalar com o npm, lembre-se de remover os arquivos yarn.lock e yarn-error.log_

## 🛠 Configurando variáveis de ambiente

Renomeie o arquivo `.env.example` para `.env` e o preencha com os dados necessários para o funcionamento da API

_obs: observe que a aplicação adotará valores padrões para todos os campos não preenchidos_

## 🎲 Configurando o banco de dados

Certifique-se de ter acesso à uma instância do banco de dados MongoDB e que o arquivo `.env` está corretamente preenchido.

## 🏃‍♀️ Executando o projeto na máquina

Com todas as dependências instaladas, o ambiente e o banco de dados configurado e em execução, você pode buildar e executar a API com:

```bash
yarn build
yarn start
```

_ou_

```bash
npm run build
npm run start
```

Por padrão, o servidor vai ser iniciado na porta `3333`, porém pode ser alterado com a variável de ambiente `PORT`

## 🕹 Interagindo com a API

Todos os endpoints e parâmetros estão contidos [nesta documentação](https://documenter.getpostman.com/view/25299399/2s946maVGT). No ambiente _Development_ está a porta e endereço padrão configurado no `.env`.
