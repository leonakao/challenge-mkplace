# MkPlace Challenge

O Projeto consiste no desenvolvimento de uma API para listagem e consulta de productos, permitindo também o cadastro dos mesmos.

Princípios/Técnicas/Conceitos utilizados:
- Clean Code
- Clean Architecture
- SOLID
- Design Patterns
- Keep It Simple, Stupid (KISS)
- Don't Repeat Yourself (DRY)

Tecnologias/Ferramentas utilizadas:
- NodeJs
- ExpressJs
- Typescript
- Mongoose
- MongoDB
- Docker
- Yup

## Instruções

O projeto foi desenvolvido com a utilização do Docker, então esperasse que o mesmo esteja baixado e configurado corretamente na sua máquina.

### Criação e Configurações Iniciais

#### Clonando o Projeto

1. `git clone git@github.com:leonakao/git@github.com:leonakao/challenge-mkplace.git.git` - Clona o projeto para o seu computador
2. `cd git@github.com:leonakao/challenge-mkplace.giti` - Acessa o diretório recém criado do projeto

#### Configurando o projeto

1. `cp .env.example .env` - Copia as variáveis de ambiente.
2. `docker-compose up --build -d` - Inicializa os containers em background

*Note:* "challenge-mkplace-app-1 é o nome do container que está rodando o app, em caso de erros, verifique se ele está correto.

#### Inicializações Futuras

1. `docker-compose up --build -d`

## Aplicação e Considerações

### Rotas

**GET** `/products` - Retorna toda a listagem de produtos

```
// Example
http://localhost:3333/products

// Query Params
page=1
perPage=10
name=ProductName
brand=BrandName
seller=SellerName

// Result
{
	"data": [
		{
			"id": "632c7d16b0ff4351d04bd877",
			"name": "teste5",
			"brand": "my brand",
			"price": 49,
			"seller": "Bianca"
		},
		{
			"id": "632c80f247c293cc4f0c2c1c",
			"name": "teste6",
			"slug": "teste6",
			"brand": "my brand",
			"price": 49,
			"seller": "Bianca"
		}
	],
	"total": 7,
	"perPage": 2,
	"page": 3,
	"totalPages": 4
}
```

*Note*: Não foi implementado o filtro por ranges de preço.

**GET** `/products/:slug` - Retorna toda a listagem de produtos

```
// Example
http://localhost:3333/products/meu-produto

// Result
{
	"id": "632c811ce840cb682194d23a",
	"name": "Meu Produto",
	"slug": "meu-produto",
	"brand": "my brand",
	"price": 49,
	"seller": "Bianca"
}
```

**POST** `/products` - Retorna toda a listagem de produtos

```
// Example
http://localhost:3333/products

// Body Params
{
	"name": "Meu Primeiro Produto",
	"seller": "Leonardo",
	"price": 55,
	"brand": "Alguma Brand"
}

// Result
{
  "id": "632c811ce840cb682194d23a"
	"name": "Meu Primeiro Produto",
  "slug: "meu-primeiro-produto",
	"seller": "Leonardo",
	"price": 55,
	"brand": "Alguma Brand"
}
```

### Arquitetura

A arquitetura do projeto foi baseada nos princípios do Clean Architecture, aonde foi priorizado o desacoplamento das dependências do projeto, a fim de facilitar a manutenção e implementação de features futuras. A camada de domínio permanece bem isolada, garantindo que as regras de negócio não sejam afetadas por alterações em outras partes do sistema.

A modelagem do sistema inicialmente foi planejada para ser agrupada em modulos, prevendo a criaçao de um novo módulo de Sellers (vendedores) para realizar a integração/relacionamento com os produtos... Porém não foi possível realizar a conclusão desse módulo.

Diagrama:
https://excalidraw.com/#json=E1R023N2ZBPIlR8c5hxNC,WQIo6QTUa_8rSfBpKv9VKg

### Melhorias

O projeto foi desenvolvido considerando um cenário de MVP, focando sua funcionalidade e flexibilidade.

A partir do momento que se tornar necessário escalar a aplicação podemos começar a adotar outras abordagens dependendo da situação. Possíveis abordagens:

- Criação de múltiplas instâncias da aplicação (podemos utilizar o kubernetes) para realizar uma escalação horizontal, adicionando um Load Balancer na frente das requisições
- Criação novas instâncias de leitura do banco de dados, caso esteja ocorrendo um grande número de conexões no mesmo. Dessa forma podemos usar a réplicas para ler o dados e manter a instância principal do banco apenas para escrita dos dados
- Se necessário otimizar as consultas, podemos integrar nossa base de dados com alguma SearchEngine como por exemplo: Elasticsearch ou Algolia.
- A fim de diminuir o número de acessos no banco de dados sem necessidade, podemos implementar uma camada de cache na frente da aplicação, ou sobre as regras de negócio, ganhando assim mais performance e economizando recursos.
- A paginação da aplicação foi feita utilizando uma lib terceira, que executa alguns skips por trás dos panos. Porém existem algumas contra indicações do uso de skip para escalação da aplicação. Pode ser viável dar uma olhada em possível alternativas para essa lib caso a performance comece a ser prejudica com a inclusão de muitos dados.

## Testes

Infelizmente, não foi possível finalizar a parte de testes da aplicação.

Idealmente, considerando que foi realizado o uso de diversos adapters e contratos de interface no desenvolvimento da aplicação, seria viável e praticável o uso do TDD. A aplicação também permite o uso de DependencyInjection, que facilita para injeção dos mocks.

