# Especificações do Projeto

## Perfis de Usuários

<table>
<tbody>
<tr>
<th colspan="2">Perfil 1: Gerente de operações </th>
</tr>
<tr>
<td width="150px"><b>Descrição</b></td>
<td width="600px">
Responsável pela supervisão geral das operações diárias da distribuidora de bebidas 
</td>
</tr>
<tr>
<td><b>Necessidades</b></td>
<td>
1. Monitorar o estoque de bebidas e insumos; 
2. Acompanhar a logística e garantir o cumprimento das metas de entrega e produtividade; 
3. Gerar relatórios de desempenho operacional;
4. Ter acesso a dados em tempo real para a tomada de decisões; 
</td>
</tr>
</tbody>
</table>

<table>
<tbody>
<tr>
<th colspan="2">Perfil 2: Operador de produção </th>
</tr>
<tr>
<td width="150px"><b>Descrição</b></td>
<td width="600px">
Responsável pela separação, embalagem e movimentação das bebidas na distribuidora. 
</td>
</tr>
<tr>
<td><b>Necessidades</b></td>
<td>
1. Registrar a movimentação diária e a quantidade das bebidas na distribuidora; 
2. Acessar manuais e procedimentos de operação;
3. Reportar problemas na separação ou falhas de equipamentos;
4. Garantir a conformidade com os padrões de segurança no trabalho;
</td>
</tr>
</tbody>
</table>

<table>
<tbody>
<tr>
<th colspan="2">Perfil 3: Controlador de estoque </th>
</tr>
<tr>
<td width="150px"><b>Descrição</b></td>
<td width="600px">
Responsável pela supervisão geral das operações diárias da distribuidora de bebidas. 
</td>
</tr>
<tr>
<td><b>Necessidades</b></td>
<td>
1. Registrar entradas e saídas de produtos; 
2. Controlar o inventário e evitar desperdícios;
3. Gerar relatórios de estoque para o gerenciamento;
4. Acompanhar a validade dos produtos e garantir o giro adequado;
</td>
</tr>
</tbody>
</table>

<table>
<tbody>
<tr>
<th colspan="2">Perfil 4: Cliente da distrubuidora de bebidas </th>
</tr>
<tr>
<td width="150px"><b>Descrição</b></td>
<td width="600px">
Responsável pela compra de bebidas na distribuidora. 
</td>
</tr>
<tr>
<td><b>Necessidades</b></td>
<td>
1. Acesso fácil e rápido ao catálogo de bebidas; 
2. Informações detalhadas sobre os produtos, como tipos, marcas e preços;
3. Facilidade para realizar pedidos e acompanahar o status das entregas;
4. Suporte ao cliente para resolver dúvidas e problemas;
</td>
</tr>
</tbody>
</table>

## Histórias de Usuários

Com base na análise das personas forma identificadas as seguintes histórias de usuários:

| EU COMO... `PERSONA` | QUERO/PRECISO ... `FUNCIONALIDADE`                                                        | PARA ... `MOTIVO/VALOR`                                                                                          |
| -------------------- | ----------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------- |
| Gerente de operações | monitorar o estoque de bebidas e insumos em tempo real                                    | garantir que as metas de distribuições sejam atingidas.                                                          |
| Operador de produção | registrar a movimentação diária e a quantidade de produtos separados                      | manter um controle eficiente das operações.                                                                      |
|Controlador de estoque| ter fácil acesso à data de validade dos produtos através da identificação do lote         | garantir o giro adequado e evitar desperdícios.                                                                  |
|Controlador de estoque| registrar entradas e saídas de produtos                                                   | manter um inventário preciso e atualizado.                                                                       |
|Cliente distribuidora | acessar facilmente o catálogo de bebidas                                                  | realizar minhas compras de forma eficiente.                                                                      |
|Cliente distribuidora | acompanhar o status das minhas entregas em tempo real                                     | garantir que os produtos cheguem dentro do prazo esperado.                                                       |


## Requisitos

### Requisitos Funcionais


|ID    | Descrição                | Prioridade |
|-------|---------------------------------|----|
| RF-01 | A aplicação deve permitir ao usuário cadastrar uma conta| ALTA| 
| RF-02 | A aplicação deve permitir ao usuário fazer login em sua conta| ALTA|
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

