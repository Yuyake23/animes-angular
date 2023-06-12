import { Injectable } from '@angular/core';

import { Anime } from '../interfaces/Anime';

@Injectable({
  providedIn: 'root'
})
export class AnimeServiceService {

  private animes: Anime[] = [
    {
      id: 0,
      title: "Attack on Titan",
      sinopse: "Em um mundo onde a humanidade vive cercada por muros para se proteger de gigantes devoradores de pessoas, um jovem chamado Eren se junta ao exército para vingar a morte de sua mãe e descobrir a verdade por trás dos titãs.",
      genhres: ["Ação", "Drama", "Fantasia"],
      src: "https://store-images.s-microsoft.com/image/apps.50874.68142772876284446.19495189-b6e8-4dd8-aaa7-8625b65929ed.a82d5e47-53e1-4731-8123-42382c069b76?q=90&w=480&h=270"
    },
    {
      id: 1,
      title: "One Piece",
      sinopse: "Monkey D. Luffy e sua tripulação de piratas embarcam em uma aventura épica em busca do tesouro conhecido como 'One Piece', enfrentando perigos, inimigos poderosos e desvendando segredos do passado.",
      genhres: ["Ação", "Aventura", "Comédia"],
      src: "https://www.geeklando.com.br/wp-content/uploads/2022/06/One-Piece-Manga-tera-hiato-para-se-preparar-para-a-saga-final-da-serie.jpg"
    },
    {
      id: 2,
      title: "Naruto",
      sinopse: "Naruto Uzumaki, um jovem ninja, busca se tornar o Hokage, o líder de sua vila, enquanto enfrenta desafios, inimigos e descobre a verdade sobre seu passado.",
      genhres: ["Ação", "Aventura", "Fantasia"],
      src: "https://www.plgcolecionaveis.com.br/noticias_imgs/2528.jpg"
    },
    {
      id: 3,
      title: "Death Note",
      sinopse: "Light Yagami encontra um misterioso caderno capaz de matar qualquer pessoa cujo nome seja escrito nele. Ele começa a usá-lo para criar um mundo livre de criminosos, mas sua missão o coloca em rota de colisão com um detetive genial chamado L.",
      genhres: ["Mistério", "Thriller", "Sobrenatural"],
      src: "https://www.crunchyroll.com/imgsrv/display/thumbnail/1200x675/catalog/crunchyroll/97129a46f2418ffe5a67ec64f49a3038.jpe"
    },
    {
      id: 4,
      title: "Fullmetal Alchemist: Brotherhood",
      sinopse: "Os irmãos Edward e Alphonse Elric usam a alquimia em busca da Pedra Filosofal para restaurar seus corpos, após uma tentativa de ressuscitar a mãe dar terrivelmente errado.",
      genhres: ["Ação", "Aventura", "Drama"],
      src: "https://idris.com.br/dev/wp-content/themes/Idris/timthumb.php?src=https://idris.com.br/dev/wp-content/uploads/2018/03/fullmetal-alchemist-brotherhood-thumb.jpg&w=821&h=400&zc=1"
    },
    {
      id: 5,
      title: "Dragon Ball Z",
      sinopse: "Goku e seus amigos protegem a Terra de ameaças poderosas, enfrentando vilões intergalácticos, guerreiros saiyajins e outras criaturas místicas em batalhas épicas.",
      genhres: ["Ação", "Aventura", "Fantasia"],
      src: "https://nerdsdagalaxia.com.br/wp-content/uploads/2022/08/DBZ-Wall-Paper.jpg"
    },
    {
      id: 6,
      title: "My Hero Academia",
      sinopse: "Em um mundo onde quase todos têm superpoderes, Izuku Midoriya luta para se tornar um herói, apesar de não possuir nenhum poder, e entra para a prestigiada escola U.A. High School.",
      genhres: ["Ação", "Superpoderes", "Escolar"],
      src: "https://i0.wp.com/hitsite.com.br/wp-content/uploads/2022/10/my-hero-academia.jpg?resize=768%2C432&ssl=1"
    },
    {
      id: 7,
      title: "Hunter x Hunter",
      sinopse: "Gon Freecss embarca em uma jornada para se tornar um Hunter, um título de prestígio que lhe permitirá procurar por tesouros, enfrentar desafios e encontrar seu pai desaparecido.",
      genhres: ["Ação", "Aventura", "Fantasia"],
      src: "https://d17lbu6bbzbdc8.cloudfront.net/wp-content/uploads/2021/01/06075713/hunter-x-hunter.jpg"
    },
    {
      id: 8,
      title: "Code Geass",
      sinopse: "Lelouch Lamperouge, um jovem estrategista rebelde, obtém o poder do 'Geass', que lhe permite comandar qualquer pessoa. Ele usa esse poder para se levantar contra o império britânico e buscar vingança.",
      genhres: ["Ação", "Drama", "Mecha"],
      src: "https://www.jornalismo.ufv.br/cinecom/wp-content/uploads/2020/04/7eaf15dea3e549bc95260ce8a455eea9.jpg"
    },
    {
      id: 9,
      title: "Sword Art Online",
      sinopse: "Em um futuro próximo, os jogadores mergulham em um popular MMORPG chamado 'Sword Art Online', mas descobrem que estão presos dentro do jogo e a única maneira de escapar é completando os 100 níveis da torre mortal.",
      genhres: ["Ação", "Aventura", "Romance"],
      src: "https://i.ytimg.com/vi/p3DWNMCW78c/maxresdefault.jpg"
    },
    {
      id: 10,
      title: "Tokyo Ghoul",
      sinopse: "Em um mundo onde criaturas conhecidas como 'ghouls' se alimentam de carne humana, um jovem chamado Kaneki se torna meio-humano, meio-ghoul e é arrastado para o mundo sombrio dessas criaturas.",
      genhres: ["Ação", "Horror", "Sobrenatural"],
      src: "https://assets.nuuvem.com/image/upload/v1/products/5dd1bbe3e8d4f2228aa4bc3a/sharing_images/znl7wrvfmvogi2qw3yx7.jpg"
    },
    {
      id: 11,
      title: "Demon Slayer: Kimetsu no Yaiba",
      sinopse: "Tanjiro Kamado se torna um caçador de demônios depois que sua família é massacrada por um demônio, e ele embarca em uma jornada para vingar sua família e encontrar uma cura para sua irmã transformada em demônio.",
      genhres: ["Ação", "Aventura", "Sobrenatural"],
      src: "https://s2.glbimg.com/cI-azLksn8dQrIUTFftf_IMMbSE=/0x0:1280x720/924x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_08fbf48bc0524877943fe86e43087e7a/internal_photos/bs/2023/J/8/EbfA0BTv2pV98gASWdfA/f5d0f04e85a224493fe9caa2e59740811630901421-main.png"
    },
    {
      id: 12,
      title: "Cowboy Bebop",
      sinopse: "Em um futuro onde a humanidade colonizou o sistema solar, um grupo de caçadores de recompensas embarca na nave Bebop em busca de criminosos procurados, enquanto lidam com seu passado conturbado.",
      genhres: ["Ação", "Aventura", "Sci-Fi"],
      src: "https://t.ctcdn.com.br/E0mqZosJ56MBc8pv0xDhsbnFK-E=/0x9:1140x651/1140x641/smart/i347797.jpeg"
    },
    {
      id: 13,
      title: "One Punch Man",
      sinopse: "Saitama é um super-herói tão poderoso que consegue derrotar qualquer inimigo com apenas um soco. No entanto, ele está entediado com a falta de desafios e busca por adversários mais fortes.",
      genhres: ["Ação", "Comédia", "Superpoderes"],
      src: "https://sm.ign.com/t/ign_br/screenshot/b/bone-punch/bone-punch-manbbrbrwith-the-popularity-of-superhero-movies-a_pr84.1200.jpg"
    },
    {
      id: 14,
      title: "Fairy Tail",
      sinopse: "Lucy Heartfilia, uma maga celestial, se une à Guilda Fairy Tail e embarca em missões emocionantes com seus companheiros, enfrentando inimigos poderosos e descobrindo segredos do mundo mágico.",
      genhres: ["Ação", "Aventura", "Fantasia"],
      src: "https://laboratorioexperimentalsite.files.wordpress.com/2017/07/ftjdkwj.jpg"
    },
    {
      id: 15,
      title: "Bleach",
      sinopse: "Ichigo Kurosaki, um adolescente com a habilidade de ver fantasmas, se torna um 'Shinigami' (deus da morte) e protege a Terra de espíritos malignos e monstros chamados Hollows.",
      genhres: ["Ação", "Aventura", "Sobrenatural"],
      src: "https://criticalhits.com.br/wp-content/uploads/2021/06/bleach-immortal-soul.jpg"
    },
    {
      id: 16,
      title: "JoJo's Bizarre Adventure",
      sinopse: "A saga da família Joestar, que ao longo das gerações enfrenta inimigos com habilidades sobrenaturais e usa poderes conhecidos como 'Stands' para derrotá-los.",
      genhres: ["Ação", "Aventura", "Sobrenatural"],
      src: "https://i.ytimg.com/vi/GOS2eFsTccw/maxresdefault.jpg"
    },
    {
      id: 17,
      title: "Steins;Gate",
      sinopse: "Um grupo de amigos descobre acidentalmente como enviar mensagens para o passado, o que desencadeia uma série de eventos que ameaçam a linha do tempo e suas próprias vidas.",
      genhres: ["Thriller", "Sci-Fi", "Drama"],
      src: "https://www.crunchyroll.com/imgsrv/display/thumbnail/640x360/catalog/crunchyroll/411e752336bd55d33c2bf1ead2fddef9.jpe"
    },
    {
      id: 18,
      title: "Neon Genesis Evangelion",
      sinopse: "Em um mundo pós-apocalíptico, jovens pilotos são recrutados para pilotar gigantes robôs chamados 'Evas' e defender a humanidade contra criaturas misteriosas conhecidas como 'Anjos'.",
      genhres: ["Ação", "Drama", "Mecha"],
      src: "https://uploads.jovemnerd.com.br/wp-content/uploads/2019/06/como-assistir-evangelion-netflix-1210x540.png"
    },
    {
      id: 19,
      title: "Mob Psycho 100",
      sinopse: "Shigeo Kageyama, apelidado de Mob, é um jovem com poderes psíquicos impressionantes. Ele tenta levar uma vida normal, mas é constantemente envolvido em eventos sobrenaturais.",
      genhres: ["Ação", "Comédia", "Sobrenatural"],
      src: "https://gkpb.com.br/wp-content/uploads/2022/09/mob-psycho-scaled-e1664378252614.jpg"
    },
    {
      id: 20,
      title: "Gintama",
      sinopse: "Em um Japão dominado por alienígenas, um grupo peculiar de samurais freelancers enfrenta trabalhos estranhos, humor irreverente e inimigos poderosos enquanto lutam por sua própria sobrevivência.",
      genhres: ["Ação", "Comédia", "Paródia"],
      src: "https://muramasa.com.br/wp-content/uploads/2022/11/gintama.webp"
    },
    {
      id: 21,
      title: "Haikyuu!!",
      sinopse: "Shoyo Hinata, inspirado por um jogador de vôlei de elite, se junta ao time de vôlei de sua escola, onde enfrenta rivais talentosos e busca se tornar o melhor jogador do país.",
      genhres: ["Esportes", "Comédia", "Drama"],
      src: "https://2.bp.blogspot.com/-WiG3G1XHNOo/VCIokELyxBI/AAAAAAAALtE/vsCQEx3QAXA/s1600/57533-haikyuu-haik222yuu.jpg"
    },
    {
      id: 22,
      title: "No Game No Life",
      sinopse: "Sora e Shiro, dois irmãos hikikomori especialistas em jogos, são transportados para um mundo onde tudo é decidido através de jogos e eles tentam se tornar os governantes desse novo mundo.",
      genhres: ["Aventura", "Comédia", "Fantasia"],
      src: "https://hitsite.com.br/wp-content/uploads/2023/03/No-Game-No-Life.jpg"
    },
    {
      id: 23,
      title: "Your Lie in April",
      sinopse: "Kosei Arima, um prodígio do piano que perdeu sua habilidade de tocar devido a um trauma, encontra esperança novamente quando conhece uma violinista talentosa chamada Kaori.",
      genhres: ["Drama", "Romance", "Música"],
      src: "https://i2.wp.com/www.genkidama.com.br/wp-content/uploads/2020/08/your-lie-in-april.jpg?fit=1920%2C1280&ssl=1"
    },
    {
      id: 24,
      title: "Clannad",
      sinopse: "Tomoya Okazaki, um estudante desiludido, encontra um grupo de garotas com problemas pessoais e ajuda a melhorar suas vidas enquanto lida com seu próprio passado doloroso.",
      genhres: ["Drama", "Romance", "Slice of Life"],
      src: "https://onlygoodanimes.files.wordpress.com/2013/04/clannad.jpg"
    },
    {
      id: 25,
      title: "Assassination Classroom",
      sinopse: "Uma classe de alunos desajustados é encarregada de assassinar seu professor, um alienígena amarelo com tentáculos, que promete destruir a Terra após o ano letivo.",
      genhres: ["Ação", "Comédia", "Escolar"],
      src: "https://www.crunchyroll.com/imgsrv/display/thumbnail/1200x675/catalog/crunchyroll/cdb845c5f165c85bacddaf5eef80b707.jpe"
    },
    {
      id: 26,
      title: "Black Clover",
      sinopse: "Asta e Yuno são órfãos que cresceram em um mundo onde magia é tudo. Asta não tem poderes mágicos, mas deseja se tornar o Rei dos Feiticeiros, enquanto Yuno é um prodígio com poderes excepcionais.",
      genhres: ["Ação", "Aventura", "Fantasia"],
      src: "https://upandoavida.com/wp-content/uploads/2019/10/Black-Clover-Wallpaper-1024x640.png"
    },
    {
      id: 27,
      title: "Beastars",
      sinopse: "Em um mundo onde animais antropomórficos vivem em sociedade, o lobo Legoshi luta contra sua natureza predatória e busca o amor verdadeiro enquanto enfrenta uma série de crimes e conflitos.",
      genhres: ["Drama", "Romance", "Psicológico"],
      src: "https://i.ytimg.com/vi/08eC9zvpX9A/maxresdefault.jpg"
    },
    {
      id: 28,
      title: "Re:Zero − Starting Life in Another World",
      sinopse: "Subaru Natsuki é transportado para um mundo de fantasia e descobre que possui a habilidade de voltar no tempo cada vez que morre. Ele tenta mudar seu destino e proteger as pessoas ao seu redor.",
      genhres: ["Drama", "Fantasia", "Thriller"],
      src: "https://i.ytimg.com/vi/_1jcITg3DxM/maxresdefault.jpg"
    },
    {
      id: 29,
      title: "Kimi no Na wa (Your Name)",
      sinopse: "Mitsuha e Taki, dois estranhos que vivem em cidades diferentes, acordam no corpo um do outro aleatoriamente e começam a se comunicar através de notas, desencadeando uma série de eventos que desafiam o tempo e o espaço.",
      genhres: ["Romance", "Fantasia", "Drama"],
      src: "https://miro.medium.com/v2/resize:fit:752/1*WZRIprUcMH0N-gJrr_9dzA.jpeg"
    }
  ];

  getAnimes(): Anime[] {
    return this.animes;
  }

  constructor() { }
}
