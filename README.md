# Nosso Mini Insta

##  O que o usuário pode fazer

- Fazer login
- Fazer cadastro
- Visualizar os dados do perfil
- Editar os dados do perfil 
- Ver postagens de outras pessoas
    - Ver quantidade de curtidas numa postagem
    - Ver os comentários em uma postagem
- Curtir postagens de outras pessoas
- Comentar postagens de outras pessoas
- Ver o número de pessoas que curtiram uma postagem
- Pode navegar pelas fotos de uma postagem

## O que não será possível fazer

- Ver a localização de uma postagem
- Ver pessoas que curtiram uma postagem
- Curtir um comentario
- Comentar em outro comentários

## Endpoints

### POST - Login 

### Dados enviados
- username
- senha

### Dados retornados
- sucesso /  erro

### Objetivos gerais

- Validar username
- Buscar o usuario no banco de dados
- Verificar se a senha informada está correta
- Gerar o token de autenticação
- Retornar os dados do usuário e o token
___

### POST - Cadastro
- username
- senha

#### Dados enviados
- sucesso / erro

### Objetivos gerais

- Validar username e a senha
- Verificar se o username já existe no banco de dados
- criptografar a senha
- Cadastrar o usuario no banco de dados
- Retornar sucesso ou erro

### GET - Perfil

#### Dados enviados
- token (que terá id ou username) 

### Dados retornados
- URL da foto
- Nome
- Username
- Bio
- Email
- Telefone
- Genero

### Objetivos gerais

- Validar o token
- Buscar o cadastro do usuario com a informação do token
- Retornar os dados do usuario

---

### PUT - Perfil

#### Dados enviados
- token (que terá id ou username) 
- URL da foto
- Nome
- Username
- Bio
- Email
- Telefone
- Genero

#### Dados enviados
- sucesso / erro

### Objetivos gerais

- Validar o token
- Buscar o cadastro do usuario com a informação do token
- Exigir ao menos um campo para atualizar
- Criptografar a senha se for informada
- Verificar se o email e o username já existe no banco de dados se for informado
- Atualizar o registro do usuario no banco de dados
- Retornar sucesso ou erro

---

### GET - Feed

#### Dados enviados
- token
- offset

#### Dados retornados
- Postagens []
     - id
     - foi curtido por mim
     - Usuario
         - URL da foto
         - username
         - é perfil oficial
    - Fotos []
    - quantidade de curtidas
    - Comentários []
        - username
        - texto
    - Data 

### Objetivos gerais

- Validar o token
- Buscar o cadastro do usuario com a informação do token
- Retornar postagens de outras pessoas

___

### POST - Feed

#### Dados enviados
- token
- texto
- array com fotos

#### Dados retornados
- sucessso ou erro

### Objetivos gerais

- Validar o token
- Buscar o cadastro do usuario com a informação do token
- Exigir que seja informado ao menos uma foto no array
- Cadastrar postagem para o usuario logado
- Cadastrar fotos da postagem

### POST - curtir

#### Dados enviados
- token (contem username ou id do usuario)
- id 

#### Dados retornados
- sucesso ou erro

### Objetivos gerais
- Validar o token
- Buscar o cadastro do usuario com a informação do token
- Buscar o cadastro da postagem com o id informado
- Verificar se o usuario ja curtiu a postagem
- Cadastrar curtida da postagem 
- Retornar sucesso ou erro

---

### POST - comentar

#### Dados enviados
- token (contem username ou id do usuario)
- id da postagem
- mensagem

#### Dados retornados
- sucesso ou 

### Objetivos gerais
- Validar o token
- Buscar o cadastro do usuario com a informação do token
- Validar o texto
- Buscar a postagem pelo id informado
- Cadastrar comentário da postagem
- Retornar sucesso ou erro
   