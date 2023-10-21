# cadastro-de-devs
## Cadastro de Devs

É uma página web que permite cadastrar desenvolvedores, suas tecnologias e tempo de experiência. 
- A página tem um input para o nome completo do desenvolvedor, um input para colocar a data de nascimento e textarea para que o requerente possa falar um pouco sobre ele  e um botão para adicionar uma nova tecnologia.
- Ao clicar no botão um evento será disparado criando no formulário uma nova linha de inputs contendo:
    - um campo de texto para o nome da tecnologia.
    - um grupo de botões tipo “radio” com opções de tempo de experiência (por exemplo, “1-2 anos”, “3-4 anos” e “5-6 anos e "+ de 6 anos”). Onde tem uma função de calback que criará esses novos inputs  com evento addEventListener.
    - um botão "remover" que deleta essa linha, contendo uma outra função de calback fazendo com que exclua a linha adicionada da nova tecnologia.
- No formulário há um botão de cadastro que salva as informações do dev em um array e logo após limpa o formulário. Essa varíavel  registra todas as informações do usuário no
- let devs, que ficará alocado o nome do requerente, a data de nascimento e a minibiografia, que poderá ser visto no terminal.
-  É apos clicar no botão "cadastrar" , será renderizado todas as informações que o usuário digitou dentro de uma div e aparecerá um alert mostrando que o cadastro foi concluído com sucesso, caso não preencha o que foi requerido irá aparecer um alert para completar o formulário.
Para a realização deste projeto foi utilizado como base o modelo 1 do wireframe para sua criação. Sendo assim, foi recorrido as ferramnetas de Html para a estrutura do conteúdo, Css para a estilização da página e a linguagem JavaSript para realizar alguns eventos recorrentes do site.

