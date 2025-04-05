# Especificação do Projeto

## Perfis de Usuários

[Enumere e faça o detalhamento dos perfis de usuários. Utilize o modelo de tabela abaixo para sintetizá-los.]
<table>
  
|Perfil| Usuário| Descrição| Necessidades|
  
|PF-01| Gerente de operações| Responsável pela supervisão geral das operações diárias da distribuidora de bebidas| Monitorar o estoque de bebidas e insumos; • Acompanhar a logística e garantir o cumprimento das metas de entrega e produtividade; • Gerar relatórios de desempenho operacional; • Ter acesso a dados em tempo real para tomada de decisões|

|PF-02| Operador de produção| Responsável pela separação, embalagem e movimentação das bebidas na distribuidora| • Registrar a movimentação diária e a quantidade de produtos separados; • Acessar manuais e procedimentos de operação; • Reportar problemas na separação ou falhas de equipamentos; • Garantir a conformidade com os padrões de segurança no trabalho|

|PF-03| Controlador de estoque| Responsável pela supervisão geral das operações diárias da distribuidora de bebidas|• Registrar entradas e saídas de produtos;• Controlar o inventário e evitar desperdícios;• Gerar relatórios de estoque para o gerenciamento;• Acompanhar a validade dos produtos e garantir o giro adequado|

|PF-04| Cliente da distribuidora de bebidas| Responsável pela compra de bebidas na distribuidora| • Acesso fácil e rápido ao catálogo de bebidas; • Informações detalhadas sobre os produtos, como tipos, marcas e preços; • Facilidade para realizar pedidos e acompanhar o status das entregas; • Suporte ao cliente para resolver dúvidas e problemas|
<table>
<tbody>
<tr align=center>
<th colspan="2">Gerente de Operações </th>
</tr>
<tr>
<td width="150px"><b>Descrição</b></td>
<td width="600px">Responsável pela supervisão geral das operações diárias da distribuidora de bebidas.</td>
</tr>
<tr>
<td><b>Necessidades</b></td>
<td>
<ul>
  <li>Monitorar o estoque de bebidas e insumos;</li>
  <li>Acompanhar a logística e garantir o cumprimento das metas de entrega e produtividade; </li>
  <li>Gerar relatórios de desempenho operacional;</li>
  <li>Ter acesso a dados em tempo real para tomada de decisões.</li>
</ul>
</td>
</tr>
</tbody>
</table>


<table>
<tbody>
<tr align=center>
<th colspan="2">Operador de produção</th>
</tr>
<tr>
<td width="150px"><b>Descrição</b></td>
<td width="600px">Responsável pela separação, embalagem e movimentação das bebidas na distribuidora.</td>
</tr>
<tr>
<td><b>Necessidades</b></td>
<td>
<ul>
  <li>Registrar a movimentação diária e a quantidade de produtos separados;</li>
  <li>Acessar manuais e procedimentos de operação;</li>
  <li>Reportar problemas na separação ou falhas de equipamentos;</li>
  <li>Garantir a conformidade com os padrões de segurança no trabalho.</li>
</ul>
</td>
</tr>
</tbody>
</table>


<table>
<tbody>
<tr align=center>
<th colspan="2">Controlador de Estoque</th>
</tr>
<tr>
<td width="150px"><b>Descrição</b></td>
<td width="600px">Responsável pela separação, embalagem e movimentação das bebidas na distribuidora.</td>
</tr>
<tr>
<td><b>Necessidades</b></td>
<td>
<ul>
  <li>Registrar entradas e saídas de produtos;</li>
  <li>Controlar o inventário e evitar desperdícios;</li>
  <li>Gerar relatórios de estoque para o gerenciamento; </li>
  <li>Acompanhar a validade dos produtos e garantir o giro adequado.</li>
</ul>
</td>
</tr>
</tbody>
</table>


<table>
<tbody>
<tr align=center>
<th colspan="2">Cliente da Distribuidora de Bebidas</th>
</tr>
<tr>
<td width="150px"><b>Descrição</b></td>
<td width="600px">Responsável pela compra de bebidas na distribuidora.</td>
</tr>
<tr>
<td><b>Necessidades</b></td>
<td>
<ul>
  <li>Acesso fácil e rápido ao catálogo de bebidas;</li>
  <li>Acompanhar a logística e garantir o cumprimento das metas de entrega e produtividade;</li>
  <li>Facilidade para realizar pedidos e acompanhar o status das entregas; </li>
  <li>Suporte ao cliente para resolver dúvidas e problemas.</li>
</ul>
</td>
</tr>
</tbody>
</table>



## Histórias de Usuários

[Apresente aqui as histórias de usuários que são relevantes para o projeto da solução.]

> **Link Útil**:
> - [Como escrever boas histórias de usuário](https://medium.com/vertice/como-escrever-boas-users-stories-hist%C3%B3rias-de-usu%C3%A1rios-b29c75043fac)

[Utilize o modelo de tabela abaixo para apresentar as histórias de usuários.]

|EU COMO... `QUEM`   | QUERO/PRECISO ... `O QUE` |PARA ... `PORQUE`                 |
|--------------------| --------------------------|----------------------------------|
|Gerente de operações| Monitorar estoque em tempo real| Garantir que as metas de distribuição sejam atingidas.|
|Operador de produção| Registrar movimentação diária e a quantidade de produtos separados| Controle eficiente das operações|
|Controlador de estoque| Acessar datas de validade através da identificação do lote| garantir o giro adequado e evitar desperdícios|
|Controlador de estoque| Registrar entradas e saídas de produtos| manter um inventário preciso e atualizado|
|Cliente da distribuidora| Acessar facilmente o catálogo de bebidas| realizar minhas compras de forma eficiente|
|Cliente da distribuidora| Acompanhar o status das minhas entregas em tempo real| garantir que os produtos cheguem dentro do prazo esperado|

## Requisitos do Projeto

[Com base nas Histórias de Usuários, enumere os requisitos da solução. Lembre-se que cada requisito deve corresponder a uma, e somente uma, característica alvo da solução. Além disso, certifique-se de que todos os aspectos capturados nas Histórias de Usuário foram cobertos.]

### Requisitos Funcionais

[Utilize o modelo de tabela abaixo para apresentar os requisitos funcionais]

|ID    | Descrição                | Prioridade |
|-------|---------------------------------|----|
| RF-01 |  Cadastrar conta de usuário| ALTA| 
| RF-02 |  Permitir login| ALTA|
| RF-03 |A aplicação deve permitir ao usuário cadastrar manuais de processos| MÉDIA|
| RF-04 |A aplicação deve permitir ao usuário filtrar os manuais cadastrados através de filtros de pesquisas| MÉDIA|
| RF-05 |A aplicação deve permitir ao usuário cadastrar produtos| ALTA|
| RF-06 |A aplicação deve permitir ao usuário pesquisar os produtos através de filtros de pesquisa| MÉDIA|
| RF-07 |A aplicação deve permitir ao usuário cadastrar lote de produtos|	ALTA|
| RF-08 |A aplicação deve permitir ao usuário dar entrada em ordens de compra de fornecedores alimentando o estoque| MÉDIA|
| RF-09 |A aplicação deve permitir ao usuário visualizar um gráfico de monitoramento dos produtos| MÉDIA|
| RF-10 |A aplicação deve permitir a filtragem de dados no gráfico de monitoramento| BAIXA|	
| RF-11 |A aplicação deve permitir ao usuário realizar a inclusão de pedidos|	ALTA|
| RF-12 |A aplicação deve exibir um catálogo de produtos para os clientes| MÉDIA|
| RF-13 |A aplicação deve permitir ao cliente utilizar filtros de pesquisa para encontrar os produtos desejados| BAIXA|
| RF-14 |A aplicação deve permitir que clientes façam pedidos através do catálogo exibido| BAIXA|
| RF-15 |A aplicação deve conter um carrinho para que o cliente finalize sua compra| BAIXA|
| RF-16 |A aplicação deve conter uma tela de visualização dos pedidos| ALTA| 
| RF-17 |A aplicação deve informar o status do pedido ao cliente via e-mail| BAIXA|
| RF-18 |A aplicação deve alertar ao supervisor produtos perto do vencimento| ALTA|

**Prioridade: Alta / Média / Baixa. 

### Requisitos não Funcionais

[Utilize o modelo de tabela abaixo para apresentar os requisitos não-funcionais]

|ID      | Descrição               |Prioridade |
|--------|-------------------------|----|
| RNF-01 |Desempenho – O sistema deve carregar as telas em menos de 3s. Os gráficos e indicadores na tela de monitoramento devem ser atualizados em tempo real, com delay máximo de 5s| BAIXA| 
| RNF-02 |Usabilidade – O sistema deve ser intuitivo e de fácil navegação, com uma curva de aprendizado mínima para novos usuários. Deve ser compatível com dispositivos móveis (responsive) e desktops, seguindo as boas práticas de design| MÉDIA|
| RNF-03 |Compatibilidade – O front-end deve ser compatível com os principais navegadores (Chrome, Firefox, Safari, Edge) em suas versões mais recentes. Deve funcionar corretamente em diferentes sistemas operacionais (Windows, MacOS, Linux, iOS, Android)| BAIXA|
| RNF-04 |Segurança - A tela de login deve implementar validações básicas de segurança, como prevenção contra ataques de força bruta e injeção de scripts (XSS). Dados sensíveis (como senhas) não devem ser armazenados localmente no front-end| ALTA|
| RNF-05 |Escalabilidade - O código deve ser modular e bem estruturado para facilitar a adição de novas funcionalidades no futuro. A interface deve suportar um aumento no volume de dados (ex.: mais produtos, manuais ou pedidos) sem comprometer o desempenho| BAIXA|
| RNF-06 |Manutenibilidade - O código deve ser documentado e seguir boas práticas de desenvolvimento (ex.: uso de padrões como BEM para CSS, componentes reutilizáveis em frameworks como React ou Vue). Deve ser fácil de depurar e testar, com ferramentas de logging e mensagens de erro claras| MÉDIA|
| RNF-07 |Confiabilidade - O sistema deve garantir que as funcionalidades críticas (como login, cadastro de produtos e exportação de CSV) funcionem sem falhas em 99% dos casos. Em caso de falha, o sistema deve exibir mensagens de erro claras e orientar sobre como proceder| ALTA|
| RNF-08 |Armazenamento local (cache) - O sistema deve utilizar armazenamento local para melhorar a experiência do usuário, como manter dados de sessão ou preferências de filtros| MÉDIA|
| RNF-09 |Limitações técnicas - O front-end não deve depender de bibliotecas ou frameworks pesados que comprometam o desempenho. O tamanho total dos assets (CSS, JS, imagens) não deve exceder 5MB para garantir um carregamento rápido.| ALTA|

**Prioridade: Alta / Média / Baixa. 

