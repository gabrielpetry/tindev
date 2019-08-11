# Tindev

Projeto desenvolvido durante a semana omnistack da https://rocketseat.com.br

## Resumo

Aplicativo similar ao Tinder, mas utilizando a api do github e criando um ambiente 
para que desenvolvedores cadastrados no aplicativo interajam entre si e formem novas conexões.


## Tecnologias

Backend da aplicação foi desenvolvido utilizando Node.js com Express e Socket.io para fornecer
uma api que gerenciar as interações do usuários, como criar, marcar como gostei ou não gostei,
assim como permitir conexão em tempo real entre clientes e servidores.

O Banco de dados utilizado foi o MongoDB, fornecido através da imagem Docker oficial e gerenciado
pela imagem da aplicação mongo-express.

Frontend foi desenvolvido utilizando React para componentização dos elementos e interações,
notificações de combinações em tempo real foram criadas com o cliente do socket.io.

A aplicação Mobile foi desenvolvida com React Native para criação dos componentes e estilos,
as notificações em tempo real foram criadas utilizando o cliente do socket.io

## Como testar a aplicação

Para testar o aplicativo mobile é preciso configurar o ambiente, um guia completo para
realizar a configuração [pode ser encontrado no site da Rocketseat.](https://docs.rocketseat.dev/ambiente-react-native/introducao)

Somente foi testando no Emulador Android (Release 27) e em dispositivo android com MiUI 10.

Os testes podem ser feitos conforme:
```sh
# Clonar o repositório
git clone https://github.com/gabrielpetry/tindev

# Acessar a pasta principal
cd tindev

# Iniciar o servidor backend
cd backend && yarn && yarn dev

# Iniciar o servidor frontend 
cd frontend && yarn && yarn start

# Para iniciar o aplicativo mobile
cd mobile && yarn && yarn react-native run-android
yarn start
```

## Aprendizados.

- Desenvolvimento de APIs com Node.js.
- Desenvolvimento de aplicações frontend com React.
- Desenvolvimento de aplicações mobile com React Native.
- Consumo de APIs com Axios.
- Gerenciamento de comunicações em tempo real client-server.

## TODO:

[  ] Criar autenticação para os usuários
[  ] Implementar a possibilidade de ambientes desenvolvimento/homologação/produção
[  ] Isolar backend e frontend em containers

