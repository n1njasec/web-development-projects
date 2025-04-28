Criei esse sistema de reservas baseado em momentos em que trabalhei numa pizzaria e vi que era necessário criar algo do tipo ao invés de ficar fazendo reservas de forma manual.

Trata-se de um sistema simples onde um usuário insere informações como nome, data, horário, quantidade de pessoas e a posição da mesa. Essas informações são enviadas para o banco de dados que foi configurado usando o PRISMA ORM. Existe uma rota chamada /dashboard onde o usuário (no caso seria o administrador mas criei sem ter um sistema de autenticação) consegue buscar, através da data do dia, as reservas que foram realizadas.

As rotas da API foi configurada como /create-reservation e /view-reservation?date=.

#### Explicando /create-reservation:
- Essa rota captura os valores passados no campo de formulário as seguintes informações.
  - name
  - date
  - time
  - number_of_people
  - table_number
    Após isso, ele processa essas informações jogando-as no banco de dados PostgreSQL. Logo após esse processo, o usuário é encaminhado para uma página
    dizendo "Reserva realizada com sucesso.".

#### Explicando /view-reservation?date=
- Essa rota faz um filtro através de datas e busca por todas as informações que estão ligadas em uma data específica.
  Ex: Eu passo o parâmetro https://domain.com/api/view-reservation?date=20/05/2025 e ela retorna todas as informações restantes sobre aquela reserva.
  Como nome, horário, número de pessoas e o número da mesa...

É um projeto simples e as tecnologias usadas foram: **Next.Js**,** Prisma ORM**, **PostgreSQL** e** Tailwind-CSS**.
