# Especificação do Projeto

## Perfis de Usuários

<table>
<tbody>
<tr align=center>
<th colspan="2">Perfil Estudante Universitário </th>
</tr>
<tr>
<td width="150px"><b>Descrição</b></td>
<td width="600px">Homens e mulheres que estão em busca de estágios para complementar sua formação acadêmica e adquirir experiência prática.</td>
</tr>
<tr>
<td><b>Necessidades</b></td>
<td>1. Acesso fácil e rápido a vagas de estágio.<br> 2. Informações centralizadas sobre oportunidades de estágio</td>
</tr>
</tbody>
</table>

<table>
<tbody>
<tr align=center>
<th colspan="2">Perfil Empresa Contratante </th>
</tr>
<tr>
<td width="150px"><b>Descrição</b></td>
<td width="600px">Empresas que oferecem vagas de estágio para estudantes universitários.</td>
</tr>
<tr>
<td><b>Necessidades</b></td>
<td>1. Plataforma eficiente para divulgação das vagas de estágio.<br> 2. Facilidade na triagem de candidatos.</td>
</tr>
</tbody>
</table>

## Histórias de Usuários

|EU COMO... `QUEM`   | QUERO/PRECISO ... `O QUE`                                                                                              |PARA ... `PORQUE`                 |
|--------------------|--------------------------------------------------------------------------------------------------------------------    |----------------------------------|
| ALUNO              | Encontrar uma plataforma online que contenha diversas vagas de estágio/emprego na área desejada (Computação, gestão…). | Para que possa economizar e minimizar o meu tempo de procura por vagas de emprego.|
| ALUNO              | Enviar curriculos as vagas abertas.                                              | Para poder me candidatar ao maior número de vagas de emprego com facilidade e rapidez.|
| ALUNO              | Obter feedbacks da empresa para á vaga de emprego.                                                      | Para ajudar na minha preparação e qualificação da vaga almejada.|
| ALUNO              | Comunicar-me com a empresa que divulgou a vaga.                          | Para poder tirar dúvidas da vaga, processo seletivo e informações relevantes.|
| ALUNO              | Realizar uma avaliação das empresas e vagas divulgadas.                                                                | Para que eu possa escolher e identificar as empresas melhor avaliadas pelos usuários e alunos.|
| ALUNO              | Busca por vagas filtradas por área e localização.                                             | Para encontrar vagas que realmente me interessem e que sejam perto de mim.|
| EMPRESA            | Selecionar candidatos.                                                                         | Para organizar e melhorar o processo seletivo de modo eficiente.|
| EMPRESA            | Divulgar vagas de maneira transparente.                                                                                | Para atrair talentos compatíveis com o perfil da empresa.|
| ALUNO              | Realizar a  atualização do meu currículo com facilidade.                                                           | Para manter meu currículo sempre atualizado e pronto para enviar a qualquer momento.|
| ALUNO              | Acessar uma plataforma que tenha filtros de busca para vagas específicas na área de interesse.                  | Para poder encontrar as vagas mais relevantes e adequadas ao meu perfil de forma mais ágil e personalizada.|


## Requisitos do Projeto

### Requisitos Funcionais

| ID        | Descrição                                                                                                     | Prioridade |
|--------------|------------------------------------------------------------------------------------------------------------|------------|                                                        
| RF-02/07  | Página de login com campos de usuário e senha                                                                 | ALTA       |
| RF-02     | Cards das vagas com botão de inscrição e campo de envio de currículo.                                         | ALTA       | 
| RF-02/07  | Separação das funções/privilégios do usuário do sistema (candidato, empresa, suporte e administrador)         | ALTA       |
| RF-03/04  | Desenvolver um canal de comunicação interna para candidatos e empresas.                                       | ALTA       | 
| RF-03/04  | Criação de uma seção de comentários com campos de texto e botões, para que os candidatos possam dar feedback sobre as empresas e processos seletivos.| MEDIA     |
| RF-06     | Desenvolver uma barra de filtragem de vagas                                                                   | MEDIA      | 
| RF-08     | Tela para cadastro de vagas.  (por parte da empresa)                                                          | ALTA       |
| RF-10     | Filtrar vagas por cidade, bairro e área de interesse                                                          | ALTA       | 
| RF-07     | Seção para as empresas, com cards que mostram os candidatos inscritos nas vagas.                              | ALTA       |
| RF-09     | Página com campos e botões para atualizar e editar as informações dos candidatos.                             | ALTA       | 
| RF-02     | Funcionalidade de enviar arquivos para plataforma web                                                         | ALTA       |
| RF-11     | Funcionalidade de gerar um dashboard com gráficos de vagas e candidatos                                       | ALTA       |

**Prioridade: Alta / Média / Baixa. 

### Requisitos não Funcionais

| ID    | Descrição                                                                      | Prioridade  |
|-------|---------------------------------                                               |----         |
| RF-01 | O software deve ser construído utilizando JS, HTML e CSS                       | ALTA        | 
| RF-02 | O envio de currículo deve ser no formato PDF                                   | ALTA        |
| RF-03 | O sistema precisa ser acessado em telas de computadores e celulares            | ALTA        | 
| RF-04 | A aplicação deve funcionar em dispositivos móveis com Android 10 ou superior.  | MEDIA       |
| RF-05 | O sistema deve ser capaz de processar 1.000 requisições simultâneas.           | MEDIA       | 
| RF-06 | O sistema deve exigir autenticação de dois fatores para acessos administrativos| ALTA        |
| RF-07 | O sistema deve seguir diretrizes WCAG 2.1                                      | ALTA        | 

**Prioridade: Alta / Média / Baixa. 

