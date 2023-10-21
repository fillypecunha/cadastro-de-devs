# cadastro-de-devs
## Cadastro de Devs

É uma página web que permita cadastrar desenvolvedores, suas tecnologias e tempos de experiência. 
No qual pagina tem 
- A página tem um input para o nome completo do desenvolvedor , um input para colocar a data de nascimento e textarea para que o usuario possa falar um pouco sobre ele  e um botão para adicionar uma nova tecnologia.
- Ao clicar no botão um evento vai ser disparado criando no formulário uma nova linha de inputs contendo:
    - um campo de texto para o nome da tecnologia
    - um grupo de botões tipo “radio” com opções de tempo de experiência (por exemplo, “1-2 anos”, “3-4 anos” e “5-6 anos e "+ de 6 anos”)Onde tem uma função de calback que criara esses novos inputs  com evento addEventListener
    - um botão de remover que deve excluir essa linha, Que tem uma outra função de calback fazendo que remova a linha adicionada da nova tecnologia.
- O formulário também  tem um botão de cadastrar que salva as informações do dev em um array e limpa o formulário. Onde estou salvando todas as informaçãoes do usuario dentro de um array chamado devs, que vai ficar salvo o nome do usuario, a data de nascimento dele e a pequena biografia do usuario, que podemos ver no terminal
-  É apos clicar no botão de cadastrar , vai ser renderizar todas as informações que o usuario digitou dentro de uma div e aparecerá um alert mostrando que o cadastro foi concluindo com sucesso, caso não preencha as informações irá mostrar um alert falando para preencher o formulario.
Para realizar esse projeto o wireframe escolhido foi o Modelo 1 que tomei como base para a criação! Sendo assim usei Html, Css, JavaSript para tal feito 

