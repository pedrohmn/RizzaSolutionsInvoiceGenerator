# Welcome to your Expo app 👋

This is an [Expo](https://expo.dev) project created with [`create-expo-app`](https://www.npmjs.com/package/create-expo-app).

## Get started

1. Install dependencies

   ```bash
   npm install
   ```

2. Start the app

   ```bash
    npx expo start
   ```

In the output, you'll find options to open the app in a

- [development build](https://docs.expo.dev/develop/development-builds/introduction/)
- [Android emulator](https://docs.expo.dev/workflow/android-studio-emulator/)
- [iOS simulator](https://docs.expo.dev/workflow/ios-simulator/)
- [Expo Go](https://expo.dev/go), a limited sandbox for trying out app development with Expo

You can start developing by editing the files inside the **app** directory. This project uses [file-based routing](https://docs.expo.dev/router/introduction).

## Get a fresh project

When you're ready, run:

```bash
npm run reset-project
```

This command will move the starter code to the **app-example** directory and create a blank **app** directory where you can start developing.

## Learn more

To learn more about developing your project with Expo, look at the following resources:

- [Expo documentation](https://docs.expo.dev/): Learn fundamentals, or go into advanced topics with our [guides](https://docs.expo.dev/guides).
- [Learn Expo tutorial](https://docs.expo.dev/tutorial/introduction/): Follow a step-by-step tutorial where you'll create a project that runs on Android, iOS, and the web.

## Join the community

Join our community of developers creating universal apps.

- [Expo on GitHub](https://github.com/expo/expo): View our open source platform and contribute.
- [Discord community](https://chat.expo.dev): Chat with Expo users and ask questions.


## About the project 
Após a reunião de levantamento de requisitos, foi constatado que a necessidade era de desenvolver um aplicativo com três páginas. A primeira página deve ter um botão para a criação de um novo invoice, além de uma listagem de todos os invoices criados separados por ID, com botões que permitem a navegação para os detalhes daquele dito invoice. A segunda página deve conter campos para a entrada de dados relativos ao invoice, como o nome do cliente, valor e descrição. A terceira página, acessada a partir de um botão atrelado a um invoice específico, exibe os dados daquele invoice.

Setup do aplicativo
No terminal do VSCode, foi utilizado o código abaixo para iniciar o projeto
expo init RizzaSolutionsInvoiceGenerator
e as dependências foram instaladas com o código abaixo
expo install expo-file-system expo-mail-composer expo-sharing react-native-paper @react-navigation/native @react-navigation/stack

No arquivo, foram criadas os seguintes arquivos: App.js referente ao aplicativo e outros 3, index.js, CreateInvoiceScreen.js e InvoiceDetailsScreen.js, referentes a cada uma das paginas do aplicativo.

Para o arquivo App.js, foi elaborado o código que apresenta uma estrutura básica de um aplicativo React Native

Para o arquivo index.js, foi elaborado o código que define a tela principal do aplicativo, onde o usuário pode visualizar uma lista de invoices salvas e navegar para outras telas, como a criação de uma nova invoice ou a visualização dos detalhes de uma invoice específica. O código utiliza os hooks useState e useEffect para gerenciar o estado e o ciclo de vida da aplicação. O useEffect é utilizado para buscar as invoices do armazenamento local quando o componente é montado. O uso do useRouter da biblioteca expo-router simplifica a navegação entre telas. O método router.push() facilita a transição para a tela de criação de invoices e detalhes de uma invoice, mantendo a navegação bem estruturada. O componente FlatList é usado para renderizar a lista de invoices, com um key extractor que utiliza o índice da lista para garantir que cada item seja único. O botão "View Details" permite a navegação para uma tela de detalhes, passando o ID da invoice como parâmetro.

Para o arquivo CreateInvoiceScreen.js, este código implementa a tela de criação de invoices. O usuário pode inserir o nome do cliente, o valor e a descrição da fatura. Após criar a invoice, ela é armazenada e o usuário é redirecionado de volta para a tela anterior. O uso de useState permite gerenciar o estado dos inputs de forma simples e eficiente. Cada campo de input (clientName, amount, description) é atrelado a um estado específico. O uso da função router.back() após a criação da invoice garante que o usuário seja redirecionado de volta à tela anterior, mantendo o fluxo natural do aplicativo. O objeto newInvoice inclui um ID gerado aleatoriamente, informações essenciais (nome do cliente, valor, descrição) e a data de criação, tornando a invoice única e facilmente identificável.

Para o arquivo InvoiceDetailsScreen.js, este código implementa a tela de detalhes da invoice no aplicativo. Ele recupera os dados da fatura selecionada com base no ID recebido via parâmetro, usando o useLocalSearchParams para pegar o ID da invoice. A tela exibe o nome do cliente, o valor, a descrição e a data da invoice. O uso de useLocalSearchParams do expo-router para capturar o ID da fatura permite que o componente saiba qual invoice deve buscar e exibir. A renderização condicional dos dados da invoice, como o nome do cliente, valor, descrição e data, mostra que o código está preparado para lidar com diferentes estados do componente (como, por exemplo, se a invoice ainda não foi carregada). A transformação da data em um formato legível com new Date().toDateString() é uma boa prática para exibir as informações de forma clara para o usuário.
