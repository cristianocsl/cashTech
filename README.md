
# Bem vindo(a) ao repositório do CashTech (back-end).

## Contexto

Aplicação back-end desenvolvida com NodeJS, Express, MySQL e Sequelize.

## Instruções para rodar o projeto localmente

1. abra o terminal e clone o repositório do projeto frontend_todolist:
`git clone git@github.com:cristianocsl/cashTech.git`

2. entre no diretório frontend-pokemon:
<code>cd cashTech</code>

3. instale as dependências com <code>npm install</code>

4. para iniciar a aplicação, execute <code>npm start</code>

5. a aplicação estará disponível em `http://localhost:3001`

6. crie o arquivo .env na raiz do projeto com o nome de usuário e a senha do seu banco de dados MySQL:

MYSQL_USER=meu_nome_de_usuario
MYSQL_PASSWORD=minha_senha

7. para interromper a execução da aplicação, execute `ctrl + c`

### Para rodar o front-end desse projeto, acesso o link abaixo e siga as intruções para rodar o projeto
https://github.com/cristianocsl/cash_tech_front_2

## Visualizando detalhes de notas fiscais

### Endpoint GET <code>/</code>

* Resultado esperado:

```json
[
  {
    "id": 1,
    "orderNfId": "1605181324132",
    "orderNumber": "18153",
    "orderPath": null,
    "orderFileName": null,
    "orderOriginalName": null,
    "emissionDate": "30/10/2020",
    "pdfFile": null,
    "emitedTo": "22843980000127",
    "nNf": "18153",
    "CTE": "",
    "value": "R$ 1.984,50",
    "cnpjId": 1,
    "userId": 1,
    "buyerId": 1,
    "providerId": 1,
    "orderStatusBuyer": "Pendente de confirmação",
    "orderStatusProvider": "0",
    "deliveryReceipt": null,
    "cargoPackingList": null,
    "deliveryCtrc": null,
    "createdAt": "2020-10-30T17:54:18.000Z",
    "updatedAt": "2020-10-30T17:54:18.000Z",
    "buyer": {
      "name": "SACADO 001"
    },
    "provider": {
      "name": "CEDENTE 002"
    }
  },
  {
    "id": 2,
    "orderNfId": "160518132413",
    "orderNumber": "18157",
    "orderPath": null,
    "orderFileName": null,
    "orderOriginalName": null,
    "emissionDate": "04/11/2020",
    "pdfFile": null,
    "emitedTo": "35705180000272",
    "nNf": "18153",
    "CTE": "",
    "value": "R$ 1.688,50",
    "cnpjId": 1,
    "userId": 1,
    "buyerId": 1,
    "providerId": 1,
    "orderStatusBuyer": "Pendente de confirmação",
    "orderStatusProvider": "0",
    "deliveryReceipt": null,
    "cargoPackingList": null,
    "deliveryCtrc": null,
    "createdAt": "2020-11-10T18:33:46.000Z",
    "updatedAt": "2020-11-10T18:33:46.000Z",
    "buyer": {
      "name": "SACADO 001"
    },
    "provider": {
      "name": "CEDENTE 002"
    }
  },
  {
    "id": 3,
    "orderNfId": "1605181324130",
    "orderNumber": "18184",
    "orderPath": null,
    "orderFileName": null,
    "orderOriginalName": null,
    "emissionDate": "10/11/2020",
    "pdfFile": null,
    "emitedTo": "00418477002640",
    "nNf": "18184",
    "CTE": "",
    "value": "R$ 2.227,95",
    "cnpjId": 1,
    "userId": 1,
    "buyerId": 1,
    "providerId": 1,
    "orderStatusBuyer": "Recebida e confirmada",
    "orderStatusProvider": "3",
    "deliveryReceipt": null,
    "cargoPackingList": null,
    "deliveryCtrc": null,
    "createdAt": "2020-11-12T11:42:06.000Z",
    "updatedAt": "2020-11-18T12:22:14.000Z",
    "buyer": {
      "name": "SACADO 001"
    },
    "provider": {
      "name": "CEDENTE 002"
    }
  }
]
```

## Ferramentas utilizadas

- [NodeJS];
- [MySQL];
- [Sequelize];
- [Express];
- [date-fns];


## Contatos

- Email: cslcristiano@gmail.com
- LinkedIn: https://www.linkedin.com/in/cristianolimacsl/
- Github: https://github.com/cristianocsl




