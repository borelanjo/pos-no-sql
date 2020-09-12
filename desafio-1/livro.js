// 1. Cria a coleçao e insere um livro
db.livro.insert({
  "title": "Clean Code",
  "description": "Boas praticas de programaçao",
  "by": "Robert C Martin",
  "url": "https://www.worldcat.org/title/clean-code/oclc/1039545496&referer=brief_results",
  "tags": [
    "dev",
    "code",
    "clean"
  ],
  "likes": 100,
  "comments": [
    {
      "user": "borelanjo",
      "message": "Achei top",
      "dateCreated": new Date(),
      "like": 50
    }
  ]
});

// 2. Consultar a coleçao

db.livro.find();

// 3. Inserir 5 livros

db.livro.insertMany ([{
  "title": "A Menina que roubava livros",
  "description": "A trajetória de Liesel Meminger é contada por uma narradora mórbida, surpreendentemente simpática. Ao perceber que a pequena ladra de livros lhe escapa, a Morte afeiçoa-se à menina e rastreia suas pegadas de 1939 a 1943.",
  "by": "Markus Zusak",
  "url": "https://www.amazon.com.br/Menina-que-Roubava-Livros/dp/8598078174",
  "tags": [
    "menina",
    "livro",
    "pt-br"
  ],
  "likes": 100,
  "comments": [
    {
      "user": "Moema Fluza",
      "message": "AComprei esse livro e demorei uma eternidade para começar a ler porque tenho preguiça de sucessos.",
      "dateCreated": new Date(),
      "like": 54
    }
  ]
},
{
  "title": "O menino do pijama listrado",
  "description": "A trajetória de Liesel Meminger é contada por uma narradora mórbida, surpreendentemente simpática. Ao perceber que a pequena ladra de livros lhe escapa, a Morte afeiçoa-se à menina e rastreia suas pegadas de 1939 a 1943.",
  "by": "John Boyne",
  "url": "https://www.amazon.com.br/menino-do-pijama-listrado/dp/853591112X/ref=pd_sim_14_1/144-6864111-3367421?_encoding=UTF8&pd_rd_i=853591112X&pd_rd_r=f768bdc3-cf0e-440c-aa0e-e94458a5f23d&pd_rd_w=TDpQ5&pd_rd_wg=8ULxw&pf_rd_p=6add7f72-cb67-4e44-ab4d-fac94c1a5c1f&pf_rd_r=PWA6JD4RZQ9BZDF5MD7B&psc=1&refRID=PWA6JD4RZQ9BZDF5MD7B",
  "tags": [
    "menino",
    "livro",
    "pt-br"
  ],
  "likes": 100,
  "comments": [
    {
      "user": "Lívia Gomes",
      "message": "Um livro maravilhoso! Não apenas a edição, que é muito bem acabada e luxuosa",
      "dateCreated": new Date(),
      "like": 17
    }
  ]
},
{
  "title": "Clube da luta",
  "description": "O clube da luta é idealizado por Tyler Durden",
  "by": "Chuck Palahniuk",
  "url": "https://www.amazon.com.br/Clube-Luta-Chuck-Palahniuk/dp/8580444497/ref=sr_1_1?__mk_pt_BR=%C3%85M%C3%85%C5%BD%C3%95%C3%91&dchild=1&keywords=clube+da+luta&qid=1599871708&s=books&sr=1-1",
  "tags": [
    "clube",
    "livro",
    "pt-br"
  ],
  "likes": 100,
  "comments": [
    {
      "user": "Waker",
      "message": "FICÇÃO TRANSGRESSIVA",
      "dateCreated": new Date(),
      "like": 35
    }
  ]
},
{
  "title": "Laranja Mecânica",
  "description": "Uma das mais brilhantes sátiras distópicas já escritas,",
  "by": "Anthony Burgess",
  "url": "https://www.amazon.com.br/Laranja-Mec%C3%A2nica-Anthony-Burgess/dp/8576574462/ref=pd_bxgy_img_2/144-6864111-3367421?_encoding=UTF8&pd_rd_i=8576574462&pd_rd_r=63119742-f4fb-4d9e-b3f9-5013896eee4c&pd_rd_w=LIB68&pd_rd_wg=dYJhp&pf_rd_p=cfb8196f-900f-4d57-8879-02619d5aab28&pf_rd_r=Z8XPS2R5R7ZCYTTKAHMT&psc=1&refRID=Z8XPS2R5R7ZCYTTKAHMT",
  "tags": [
    "laranja",
    "livro",
    "pt-br"
  ],
  "likes": 100,
  "comments": [
    {
      "user": "Willian Martins",
      "message": "O início do livro traz um texto do Fábio Fernandes (tradutor) explicando ao leitor",
      "dateCreated": new Date(),
      "like": 190
    }
  ]
}
]);

// 4. Verifique o que cada consulta retorna

db.livro.count(); //5
db.livro.find({likes: 100}); // livros com 100 likes
db.livro.find({}, {"title": 1, "description": 1}); // titulo, descriçao e _id
db.livro.find({tags: "database"}); //Fetched 0 record(s) in 1ms
db.livro.find({tags: "menina"}); //A menina que roubava livros
db.livro.distinct("title"); // o titulo dos livros
db.livro.find({"comments.like": {$gt: 2}}); // livros com mais de 2 likes por comentario
db.livro.find({"comments.like": {$gt: 5}}); // livros com mais de 5 likes por comentario
db.livro.find().skip(2); // retorna todos livros menos os 2 primeiros
db.livro.find().sort({Title:-1}).limit(4).skip(2); // nao ordena pelo T maiusculo
db.livro.find().sort({title:-1}).limit(4).skip(2); // Ordena de maneira descrescente trazendo apenas 4 pulando os 2 primeiros

// 5. Atualize 2 propriedades

db.livro.updateOne({"title":"Clean Code"}, {$set:{likes: 101}});

// 6. Faça um upsert

db.questaoSeis.update({"questao": "O que e upsert"}, {$set:{"resposta": "Tenta atualizar, senao existir cria"}}, {upsert: true});

// 7. Titulos com mais de 5 likes no comentario

db.livro.find({"comments.like": {$gt: 5}}, {"title": 1});