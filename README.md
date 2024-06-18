# Testes Automatizados com Selenium

Este repositório contém testes automatizados utilizando Selenium para interagir com um site específico e validar suas funcionalidades.

## Objetivo

Desenvolver habilidades práticas na criação e execução de testes automatizados para aplicações web utilizando Selenium.

## Site Escolhido

O site escolhido para os testes é [Pinterest Brasil](https://br.pinterest.com).

## Funcionalidades Testadas

1. **Login no Sistema:**
   - Clica no botão de login.
   - Insere o e-mail e a senha nos campos correspondentes.
   - Clica no botão para efetuar o login.
   - Assert: Verifica se o login é bem-sucedido após clicar no botão de login.

2. **Navegação pelo Site:**
   - Clica em um dos itens do menu de navegação.
   - Clica em um link específico (no caso, "Today").
   - Assert: Confirma se a navegação para a página "Today" é realizada corretamente.

3. **Pesquisar Pins:**
   - Insere "Pinterest" na caixa de pesquisa.
   - Pressiona Enter para realizar a pesquisa.
   - Assert: Verifica se a pesquisa retorna resultados esperados após pressionar Enter.

4. **Salvar Pin:**
   - Clica em um pin específico para visualizá-lo.
   - Clica no botão para salvar o pin.
   - Assert: Confirma se o pin é salvo corretamente ao clicar no botão correspondente.

5. **Logout do Sistema:**
   - Clica no botão para acessar as opções de conta.
   - Clica no botão para sair da conta.
   - Assert: Verifica se o logout é realizado corretamente após clicar no botão de sair.

## Ferramentas Utilizadas

- Selenium WebDriver
- Mocha (para execução dos testes)
- Chai (para asserções)
- dotenv (para configuração de variáveis de ambiente)

## Instruções de Execução

1. Clone este repositório: 
```
git clone https://github.com/seu-usuario/.git
```
2. Instale as dependências:
```
npm install
```
3. Execute os testes:
```
npm test
```

## Observações

Este projeto foi desenvolvido como parte de um exercício acadêmico/profissional para prática de testes automatizados com Selenium. Qualquer dúvida ou sugestão, entre em contato.
