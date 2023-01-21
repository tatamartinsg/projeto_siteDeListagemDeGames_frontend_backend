CREATE DATABASE  IF NOT EXISTS `project_games` /*!40100 DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci */ /*!80016 DEFAULT ENCRYPTION='N' */;
USE `project_games`;
-- MySQL dump 10.13  Distrib 8.0.30, for Win64 (x86_64)
--
-- Host: localhost    Database: project_games
-- ------------------------------------------------------
-- Server version	8.0.30

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `jogo`
--

DROP TABLE IF EXISTS `jogo`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `jogo` (
  `idJogo` int NOT NULL AUTO_INCREMENT,
  `nome` varchar(150) NOT NULL,
  `dataLancamento` varchar(350) NOT NULL,
  `sinopse` varchar(650) NOT NULL,
  `video` varchar(145) DEFAULT NULL,
  `classificacao` varchar(2) NOT NULL,
  `palavraChave` varchar(145) DEFAULT NULL,
  PRIMARY KEY (`idJogo`),
  KEY `fk_Jogo_Classificacao1_idx` (`classificacao`),
  CONSTRAINT `fk_Jogo_Classificacao1` FOREIGN KEY (`classificacao`) REFERENCES `classificacao` (`classificacao`)
) ENGINE=InnoDB AUTO_INCREMENT=31 DEFAULT CHARSET=utf8mb3;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `jogo`
--

LOCK TABLES `jogo` WRITE;
/*!40000 ALTER TABLE `jogo` DISABLE KEYS */;
INSERT INTO `jogo` VALUES (1,'The Last Of Us','14 de Junho de 2013','The Last of Us é um jogo eletrônico pós-apocalíptico de ação-aventura e sobrevivência apresentado a partir de uma perspectiva em terceira pessoa. O jogador atravessa uma série de ambientes arruinados, passando por locais variados como cidades, florestas, edifícios e esgotos a fim de avançar pela história','https://www.youtube.com/embed/5F9h4NVVDo4','16','destaque'),(2,'Life is Strange Remastered Collection','1 de Fevereiro de 2022','Jogue como Max Caulfield, estudante de fotografia que, ao salvar sua melhor amiga Chloe Price de uma briga violenta, descobre que pode voltar no tempo','https://www.youtube.com/embed/o69FMYlJ_48','16','destaque'),(3,'Red Dead Redemption 2','26 de Outubro de 2018','Estados Unidos, 1899. Arthur Morgan e a gangue Van der Linde são forçados a fugir. Com agentes federais e os melhores caçadores de recompensas no seu encalço, a gangue precisa roubar, assaltar e lutar para sobreviver no impiedoso coração dos Estados Unidos. Conforme divisões internas profundas ameaçam despedaçar a gangue, Arthur deve fazer uma escolha entre os seus próprios ideais e a lealdade à gangue que o criou.','https://www.youtube.com/embed/gmA6MrX81z4','18','destaque, gameoftheyear'),(4,'The Forest','30 de Maio de 2014','Em The Forest, o jogador deve sobreviver ao ambiente e não ser morto por canibais de uma ilha florestal após sobreviver a um desastre de avião','https://www.youtube.com/embed/7mwn5U2PNvk','18','favorito'),(5,'Days Gone','26 de Abril de 2019','Days Gone é um jogo de mundo aberto com zumbis em um cenário pós-apocalíptico jogado em uma perspectiva de terceira-pessoa. Os jogadores controlam Deacon St.','https://www.youtube.com/embed/FKtaOY9lMvM','16','favorito'),(6,'The Witcher 3: Wild Hunt','18 de Maio de 2015','Lançado em 2015, The Witcher 3: Wild Hunt marcou época como um dos jogos mais aclamados da geração. Ele conta a aventura do bruxo Geralt de Rívia em busca da sua filha, Ciri, enquanto enfrenta inimigos mortais e explora um mundo cheio de possibilidades, desafios e aventuras','https://www.youtube.com/embed/vuOPN4MpLaM','16','gameoftheyear'),(7,'Dying Light 2 Stay Human','4 de Fevereiro','Dying Light 2 acontece 36 anos após a queda da humanidade, onde grande parte da população mundial foi extinta e os sobreviventes passaram a viver em assentamentos espalhados pelo mundo. A cidade europeia de Villedor é considerada uma das maiores do planeta e resistiu bem aos eventos por ser fortificada, impedindo que a horda zumbi a invadisse.','https://www.youtube.com/embed/UwJAAy7tPhE','16','favorito'),(8,'Hogwarts Legacy','10 de Fevereiro de 2023','Hogwarts Legacy é um RPG de ação de mundo aberto ambientado no mundo introduzido pela primeira vez nos livros do Harry Potter. Embarque em uma jornada por locais novos e familiares enquanto explora e descubra animais fantásticos, personalize seu personagem e crie poções, domine o lançamento de feitiços, aprimore talentos e torne-se o bruxo que deseja ser.','https://www.youtube.com/embed/yF29baX-IsA','12','lançamento'),(9,'Stray','19 de Julho de 2022','O que é Stray? Perdido, sozinho e ferido, um gato precisa solucionar um mistério ancestral para escapar de uma cidade esquecida. ','https://www.youtube.com/embed/Rda52S3Jah8','10','favorito, destaque'),(10,'Elden Ring','25 de Fevereiro de 2022','O QUE É ELDEN RING?Use o poder do Elden Ring e torne-se um Elden Lord nas Lands Between.','https://www.youtube.com/embed/E3Huy2cdih0','16','gameoftheyear, mais vendido'),(11,'Tekken 7','18 de Fevereiro de 2015',' O clássico lutador retorna mais uma vez, para tomar seu lugar e lidar com oponentes de longa data – a começar por Nina. Ao lado dele, outros personagens vão surgir, com interesses próprios, enquanto figuras inéditas também emergem, para trazer algo realmente novo à já complicada história da série.','\"https://www.youtube.com/embed/1V-_q3SKh5w','12','favorito'),(12,'God of War Ragnarök','9 de Novembro de 2022','Dentro de um gruta, Kratos e Atreus se refugiam do Fimbulwinter. O inverno que antecede o Ragnarök os cerca de inimigos que estão cada vez mais próximos. Para sobreviver a essa grande guerra, pai e filho precisam se decidir: Devem se esconder, mudando de esconderijo em esconderijo? Ou buscar aliados para enfrentar aqueles que os perseguem?','https://www.youtube.com/embed/Wc8Z-F2OcxE','18','favorito, mais vendido'),(13,'Resident Evil 4 Remake','24 de Março de 2023','Em um mundo dominado por mortos-vivos, Alice continua sua batalha para salvar sobreviventes. Sua batalha se intensifica e ela recebe a ajuda de um velho amigo. Em Los Angeles, pode existir um lugar para salvar-se, mas a cidade foi invadida por mortos-vivos.','https://www.youtube.com/embed/pQsyi4j1RqM','18','lançamento'),(14,'Call of Duty: Modern Warfare II','27 de Outubro de 2022','Call of Duty: Modern Warfare II coloca os jogadores dentro de um conflito global sem precedentes que conta com o retorno dos Operadores icônicos da Força-Tarefa 141. Desde operações táticas para infiltração de alto risco em pequena escala até missões altamente confidenciais, jogadores vão se mobilizar junto de amigos em uma verdadeira experiência imersiva.','https://www.youtube.com/embed/gOEWZ6iofzQ','18','mais vendido'),(15,'Lego Star Wars: The Skywalker Saga','5 de Abril de 2022','Vivencie os nove filmes da saga Star Wars em um novo jogo LEGO diferente de tudo o que você já viu! Divirta-se em aventuras épicas com humor fantástico e a liberdade de mergulhar totalmente na galáxia de LEGO Star Wars. Quer jogar como um Jedi?','https://www.youtube.com/embed/AzjUuIMs5N0','10','mais vendido'),(16,'Pokémon Scarlet e Violet','18 de Novembro de 2022','Em Pokémon Scarlet e Violet, somos apresentados à região de Paldea, que busca inspiração na nossa Espanha do mundo real. Pela primeira vez em um jogo da franquia, temos um mundo completamente aberto, em que todas as cidades são interligadas e podem ser exploradas livremente.','https://www.youtube.com/embed/-yw6nMgk3cg','L','mais vendido'),(17,'FIFA 23','26 de Setembro de 2022','Jogue com clubes femininos pela primeira vez na história do EA SPORTS FIFA nas ligas Barclays Women’s Super League e Division 1 Arkema, com captura dedicada da HyperMotion2, responsável pelo jogo feminino no FIFA 23. Jogue a fase eliminatória da UWCL no FIFA 23 logo no início de 2023 com clubes como Juventus Women, Real Madrid Femenino, Chelsea Women, Manchester City Women, Olympique Lyonnais Féminin, Paris Saint-Germain Féminine e mais.','https://www.youtube.com/embed/GvXbIAuIEq0','L','mais vendido'),(18,'Horizon Forbidden West','18 de Fevereiro de 2022','Horizon Forbidden West é um jogo eletrônico de RPG de ação com uma perspectiva em terceira pessoa. Os jogadores controlam Aloy, uma caçadora em um mundo governado por máquinas. O jogo apresenta um mundo aberto ambientado numa Califórnia pós-apocalíptica.','\"https://www.youtube.com/embed/ztwwQByMmmE','14','mais vendido'),(19,'Counter-Strike: Global Offensive','21 de Agosto de 2012','CS:GO é um FPS da Valve disputado entre duas equipes. Elas se revezam entre terroristas e contra terroristas, os terroristas armam a bomba enquanto o outro time protege os sites, locais onde os explosivos devem ser plantados. Alguns mapas funcionam com reféns, que por sua vez devem ser salvos pelos contra terroristas.','https://www.youtube.com/embed/edYCtaNueQY','16','mais vendido'),(20,'Playerunknown\'s Battlegrounds','30 de Julho de 2016','O jogo consiste de até cem jogadores que caem de paraquedas em uma ilha em busca de armas e equipamento a fim de matar os outros jogadores, enquanto tentam sobreviver ao mesmo tempo.','https://www.youtube.com/embed/8z35rlAslsE','16','mais vendido'),(21,'GTA V','17 de Setembro de 2013','Grand Theft Auto V é um jogo eletrônico de ação-aventura desenvolvido pela Rockstar North e publicado pela Rockstar Games. É o sétimo título principal da série Grand Theft Auto. O jogo se passa no estado ficcional de San Andreas, com a história da campanha um jogador seguindo três criminosos e seus esforços para realizarem assaltos sob a pressão de uma agência governamental. O mundo aberto permite que os jogadores naveguem livremente pelas áreas rurais e urbanas de San Andreas.','https://www.youtube.com/embed/QkkoHAzjnUs','18','favorito'),(22,'Assassin’s Creed Mirage','2023','Assassin\'s Creed Mirage é um próximo jogo de ação e aventura desenvolvido pela Ubisoft Bordeaux e publicado pela Ubisoft. Será a décima terceira parcela principal da série Assassin\'s Creed e a sucessora de Assassin\'s Creed Valhalla de 2020.','https://www.youtube.com/embed/ItxcFUN6FiU','18','lançamento'),(23,'Valorant','2 de Junho de 2020','Duas equipes de cinco jogam uma contra a outra, e os jogadores assumem o papel de \"agentes\" com habilidades únicas. No modo de jogo principal, a equipe atacante tem uma bomba, chamada Spike, que eles precisam plantar em um local. Se a equipe atacante proteger com sucesso a bomba e ela detonar, eles ganharão um ponto. Se a equipe defensora desarmar com sucesso a bomba ou o cronômetro de 100 segundos da rodada expirar, a equipe defensora receberá um ponto. Eliminar todos os membros da equipe adversária também ganha uma rodada. A primeira equipe a vencer o melhor de 24 rodadas vence a partida.','https://www.youtube.com/embed/e_E9W2vsRbQ','14','favorito'),(24,'The Last of Us Part II','19 de Junho de 2020','Ambientado cinco anos após os eventos de The Last of Us (2013), o jogador assume o papel de duas protagonistas em um Estados Unidos pós-apocalíptico: Ellie, que busca por vingança após um evento traumático, e Abby, uma soldada que se envolve em um conflito entre uma milícia e um culto. O jogo contém elementos de survival horror e é jogado numa perspectiva de terceira pessoa. Os jogadores podem usar armas de fogo, arcos, armas improvisadas, esquiva e furtividade para se defenderem de seres humanos hostis e criaturas infectadas por uma mutação do fungo Cordyceps.','https://www.youtube.com/embed/qPNiIeKMHyg','18','gameoftheyear, favorito'),(25,'It Takes Two','25 de Março de 2021','Cody e May são casados, mas estão considerando o divórcio depois de uma discussão em que o Cody cobra sua esposa sobre ela trabalhar o tempo todo, e ela ter argumentado que seu marido nunca mostra apreço pelo seu trabalho. Depois de contar para a sua filha Rose que eles estão se separando, a menina pega suas bonecas feitas à mão, que se parecem com seus pais, leva-as para o galpão da família e tenta consertar seu relacionamento com uma encenação. Quando uma lágrima de Rose cai sobre as bonecas, os pais se encontram presos dentro do corpo delas.','https://www.youtube.com/embed/ohClxMmNLQQ','12','gameoftheyear'),(26,'Sekiro: Shadows Die Twice','22 de Março de 2019','Em Sekiro™: Shadows Die Twice, você é o \'lobo de um braço só\', um guerreiro desfigurado e desgraçado, resgatado da beira da morte. Jurado para proteger um jovem lorde descendente de uma antiga linhagem de sangue, você vira alvo de muitos inimigos perigosos, incluindo o temido clã Ashina. Quando o jovem lorde é capturado, você parte em uma jornada de redenção onde nada impedirá você, nem mesmo a própria morte.','https://www.youtube.com/embed/rXMX4YJ7Lks','18','gameoftheyear'),(27,'The Legend of Zelda: Breath of the Wild','3 de Março de 2017','Esqueça tudo que você sabe sobre os jogos da série The Legend of Zelda. Entre em um mundo de descobertas, exploração e aventura em The Legend of Zelda: Breath of the Wild, o novo jogo da famosa série que veio para romper barreiras. Viaje pelos vastos campos, florestas e montanhas enquanto descobre o que aconteceu com o reino de Hyrule nesta deslumbrante aventura a céu aberto. E agora no Nintendo Switch, a sua jornada tem mais liberdade do que nunca. Leve o seu console para qualquer lugar e viva aventuras na pele de Link da maneira que quiser.','\"https://www.youtube.com/embed/zw47_q9wbBE','10','gameoftheyear'),(28,'Overwatch ','3 de Maio de 2016','Overwatch 2 é um jogo de ação em equipe grátis para jogar que se passa em um futuro otimista, no qual cada partida é um campo de batalha 5v5 definitivo. Jogue como uma lutadora da liberdade viajante do tempo, um DJ do campo batalha ou outro dos mais de 30 heróis únicos em suas lutas ao redor do mundo.','https://www.youtube.com/embed/1tnYpkt5G2g','12','gameoftheyear'),(29,'Dragon Age: Inquisition','18 de Novembro de 2014','Um cataclisma lança a terra de Thedas num turbilhão. Dragões escurecem o céu lançando sombras sobre as terras à beira do caos. Magos abrem guerra total contra os templários opressores. Nações se erguem umas contra as outras. É incumbência sua e de seus aliados restaurar a ordem liderando a Inquisição e perseguindo os agentes do caos. Explore, lidere e batalhe: escolhas difíceis definem sua experiência e até mesmo uma única decisão pode alterar o rumo dos acontecimentos.','https://www.youtube.com/embed/jJqxfkgSUog','16','gameoftheyear'),(30,'A Plague Tale: Requiem','17 de Outubro de 2022','Embarque em uma comovente jornada por um cativante mundo brutal e descubra o preço pago para salvar aqueles que você ama nesta desesperada luta pela sobrevivência. Ataque nas sombras ou use uma variedade de armas, ferramentas e poderes místicos.','https://www.youtube.com/embed/qIbzwb8vzNI','18','favorito');
/*!40000 ALTER TABLE `jogo` ENABLE KEYS */;
UNLOCK TABLES;

--

--
-- Table structure for table `categoria`
--

DROP TABLE IF EXISTS `categoria`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `categoria` (
  `idCategoria` int NOT NULL,
  `nomeCategoria` varchar(50) NOT NULL,
  PRIMARY KEY (`idCategoria`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `categoria`
--

LOCK TABLES `categoria` WRITE;
/*!40000 ALTER TABLE `categoria` DISABLE KEYS */;
INSERT INTO `categoria` VALUES (1,'Ação'),(2,'Aventura'),(3,'Sobrevivência'),(4,'Zombie'),(5,'Terror'),(6,'Mundo Aberto'),(7,'RPG'),(8,'Luta'),(9,'Tiro'),(10,'Esporte');
/*!40000 ALTER TABLE `categoria` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `classificacao`
--

DROP TABLE IF EXISTS `classificacao`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `classificacao` (
  `classificacao` varchar(2) NOT NULL,
  `imagem` varchar(145) NOT NULL,
  PRIMARY KEY (`classificacao`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `classificacao`
--

LOCK TABLES `classificacao` WRITE;
/*!40000 ALTER TABLE `classificacao` DISABLE KEYS */;
INSERT INTO `classificacao` VALUES ('10','https://i.ibb.co/8DP9gMd/10.png'),('12','https://i.ibb.co/bgHLs3R/12.png'),('14','https://i.ibb.co/7psFy3x/14.png'),('16','https://i.ibb.co/BC3tvps/16.png'),('18','https://i.ibb.co/tbZYxL5/18.png'),('L','https://i.ibb.co/yydH0Mf/L.png');
/*!40000 ALTER TABLE `classificacao` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `descricao`
--

DROP TABLE IF EXISTS `descricao`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `descricao` (
  `idDescricao` int NOT NULL,
  `descricao` varchar(145) CHARACTER SET utf8mb3 COLLATE utf8mb3_bin NOT NULL,
  PRIMARY KEY (`idDescricao`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `descricao`
--

LOCK TABLES `descricao` WRITE;
/*!40000 ALTER TABLE `descricao` DISABLE KEYS */;
INSERT INTO `descricao` VALUES (1,'Violência'),(2,'Drogas Lícitas'),(3,'Violência Extrema'),(4,'Linguagem Imprópria'),(5,'Drogas'),(6,'Compras no jogo'),(7,'Usuários interagem'),(8,'Violência Fantasiosa'),(9,'Livre para todas as idades'),(10,'Conteúdo Sexual'),(11,'Temas Sensíveis'),(12,'Nudez'),(13,'Sexo Explícito'),(14,'Conteúdo inapropriado para crianças');
/*!40000 ALTER TABLE `descricao` ENABLE KEYS */;
UNLOCK TABLES;
--
-- Table structure for table `classificacao_has_descricao`
--

DROP TABLE IF EXISTS `classificacao_has_descricao`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `classificacao_has_descricao` (
  `classificacao` varchar(2) NOT NULL,
  `idDescricao` int NOT NULL,
  `idJogo` int NOT NULL,
  PRIMARY KEY (`classificacao`,`idDescricao`,`idJogo`),
  KEY `fk_Classificacao_has_Descricao_Descricao1_idx` (`idDescricao`),
  KEY `fk_Classificacao_has_Descricao_Classificacao1_idx` (`classificacao`),
  KEY `fk_Classificacao_has_Descricao_Jogo1_idx` (`idJogo`),
  CONSTRAINT `fk_Classificacao_has_Descricao_Classificacao1` FOREIGN KEY (`classificacao`) REFERENCES `classificacao` (`classificacao`),
  CONSTRAINT `fk_Classificacao_has_Descricao_Descricao1` FOREIGN KEY (`idDescricao`) REFERENCES `descricao` (`idDescricao`),
  CONSTRAINT `fk_Classificacao_has_Descricao_Jogo1` FOREIGN KEY (`idJogo`) REFERENCES `jogo` (`idJogo`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `classificacao_has_descricao`
--

LOCK TABLES `classificacao_has_descricao` WRITE;
/*!40000 ALTER TABLE `classificacao_has_descricao` DISABLE KEYS */;
INSERT INTO `classificacao_has_descricao` VALUES ('10',1,27),('12',1,25),('14',1,18),('14',1,23),('16',1,19),('16',1,20),('16',1,29),('18',1,13),('18',1,14),('18',1,21),('14',2,18),('18',2,12),('18',3,12),('18',3,22),('18',3,24),('18',3,27),('18',3,30),('12',4,25),('18',4,12),('18',4,13),('18',4,22),('18',4,26),('14',5,23),('18',5,14),('18',5,21),('18',5,24),('18',6,14),('18',7,14),('10',8,15),('L',9,16),('L',9,17),('18',10,21),('18',11,22),('18',12,24),('16',13,29),('12',14,28);
/*!40000 ALTER TABLE `classificacao_has_descricao` ENABLE KEYS */;
UNLOCK TABLES;


--
-- Table structure for table `imagem`
--

DROP TABLE IF EXISTS `imagem`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `imagem` (
  `idImagem` int NOT NULL,
  `imagemBg` varchar(145) NOT NULL,
  `imagemCard` varchar(145) DEFAULT NULL,
  `idJogo` int NOT NULL,
  PRIMARY KEY (`idImagem`),
  KEY `fk_Imagem_Jogo1_idx` (`idJogo`),
  CONSTRAINT `fk_Imagem_Jogo1` FOREIGN KEY (`idJogo`) REFERENCES `jogo` (`idJogo`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `imagem`
--

LOCK TABLES `imagem` WRITE;
/*!40000 ALTER TABLE `imagem` DISABLE KEYS */;
INSERT INTO `imagem` VALUES (1,'https://i.ibb.co/hMnm7rc/thelastofus2.jpg','https://i.ibb.co/SN4c85j/thelastofus-card.png',1),(2,'https://i.ibb.co/wY0mFFY/lis.png','https://i.ibb.co/Zh9LvHQ/lis-card.jpg',2),(3,'https://i.ibb.co/mCPQddg/reddead2.jpg','https://i.ibb.co/YdtkdS9/reddead2.jpg',3),(4,'https://i.ibb.co/TKHy4TY/theforest-bg.jpg','https://i.ibb.co/SryBxrx/theforest-card.png',4),(5,'https://i.ibb.co/QY6XhCJ/daysgone-bg.jpg','https://i.ibb.co/n1zzrbg/daysgone-card.png',5),(6,'https://i.ibb.co/mDJnkhp/thewitcher3-bg.png','https://i.ibb.co/5Y6t21p/thewicher3-card.png',6),(7,'https://i.ibb.co/44JfQ9y/dyinglight-bg.jpg','https://i.ibb.co/XsTVmDZ/dyinglight2-card.jpg',7),(8,'https://i.ibb.co/17NHx0n/hogwarts-bg.jpg','https://i.ibb.co/TkJHLx8/hogwarts-card2.jpg',8),(9,'https://i.ibb.co/Btk5X3X/stray-bg.jpg','https://i.ibb.co/nbr08PP/stray-card.png',9),(10,'https://i.ibb.co/KjQG5fF/eldenring-bg.png','https://i.ibb.co/XYvwwHx/eldenringcard.jpg',10),(11,'https://i.ibb.co/PY95Hy9/tekken7-bg.jpg','https://i.ibb.co/g4tzwjp/tekken7-card.png',11),(12,'https://i.ibb.co/HXsCNF0/godfowar-bg.jpg','https://i.ibb.co/xJQKQ7z/godofwar-card.jpg',12),(13,'https://i.ibb.co/t4STpyz/re4-bg.jpg','https://i.ibb.co/GxCcFzr/re4-card.png',13),(14,'https://i.ibb.co/qxzT3Nm/cod-bg.jpg','https://i.ibb.co/ctVzJGs/cod-card.png',14),(15,'https://i.ibb.co/wLyGZYr/starwars-bg.png','https://i.ibb.co/0JHZz8K/starwars-card.png',15),(16,'https://i.ibb.co/cYvJg8Y/pkmn-violet-scarlet-bg.jpg','https://bdjogos.com.br/capas/16903-pokemon-violet-nintendo-switch-capa-1.jpg',16),(17,'https://i.ibb.co/2PK9qmR/fifa23-bg.png','https://i.ibb.co/D45FDsS/fifa23-card.jpg',17),(18,'https://i.ibb.co/7RJV6rz/horizon-bg.jpg','https://i.ibb.co/z5tVMsZ/horizon-card.jpg',18),(19,'https://i.ibb.co/HrYR0gG/cs-bg.png','https://i.ibb.co/5BBStBn/cs-card.png',19),(20,'https://i.ibb.co/VQQLg5D/pugb-bg.jpg','https://i.ibb.co/8K6WByn/pugb-card.jpg',20),(21,'https://i.ibb.co/KyrvLNF/gta-v-bg.jpg','https://i.ibb.co/dgV1Bj9/gta-v-card.png',21),(22,'https://i.ibb.co/HVb9YX9/assassins-creed-mirage-bg.jpg','https://i.ibb.co/M1FywxN/assassins-creed-mirage-card.png',22),(23,'https://i.ibb.co/P9fcvN7/valorant-bg.png','https://dfg.ai/itemimages/914261074-gift-card-valorant-r-50-00-9QTW.webp',23),(24,'https://i.ibb.co/qYjZSb7/tlou2-bg.png','https://i.ibb.co/5jPQrjP/tlou2-card.png',24),(25,'https://i.ibb.co/BLmxM3f/it-takes-two-bg.jpg','https://i.ibb.co/GsnSdJV/it-takes-two-card.png',25),(26,'https://i.ibb.co/f4YB79K/sekiro-bg.jpg','https://i.ibb.co/CV5FpCn/sekiro-card.png',26),(27,'https://i.ibb.co/HzVBV5Z/zelda-bg.png','https://i.ibb.co/RyLw3wh/zelda-card.png',27),(28,'https://wallpapercave.com/wp/wp5843708.jpg','https://psverso.com.br/wp-content/uploads/2021/09/overwatch-2-estagio-final.jpg',28),(29,'https://i.ibb.co/TqnXFkJ/da-inq-bg.png','https://i.ibb.co/9WDCz3R/da-inq-card.png',29),(30,'https://i.ibb.co/n7T10Kr/pt-requiem-bg.png','https://sm.ign.com/ign_br/cover/a/a-plague-t/a-plague-tale-requiem_x3t3.jpg',30);
/*!40000 ALTER TABLE `imagem` ENABLE KEYS */;
UNLOCK TABLES;


-- Table structure for table `jogo_has_categoria`
--

DROP TABLE IF EXISTS `jogo_has_categoria`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `jogo_has_categoria` (
  `idJogo` int NOT NULL,
  `idCategoria` int NOT NULL,
  PRIMARY KEY (`idJogo`,`idCategoria`),
  KEY `fk_Categoria_has_Jogo_Jogo1_idx` (`idJogo`),
  KEY `fk_Categoria_has_Jogo_Categoria1_idx` (`idCategoria`),
  CONSTRAINT `fk_Categoria_has_Jogo_Categoria1` FOREIGN KEY (`idCategoria`) REFERENCES `categoria` (`idCategoria`),
  CONSTRAINT `fk_Categoria_has_Jogo_Jogo1` FOREIGN KEY (`idJogo`) REFERENCES `jogo` (`idJogo`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `jogo_has_categoria`
--

LOCK TABLES `jogo_has_categoria` WRITE;
/*!40000 ALTER TABLE `jogo_has_categoria` DISABLE KEYS */;
INSERT INTO `jogo_has_categoria` VALUES (1,1),(1,2),(1,3),(1,4),(1,5),(2,2),(3,1),(3,2),(3,3),(3,6),(4,1),(4,2),(4,3),(4,6),(5,1),(5,2),(5,3),(5,4),(5,5),(5,6),(6,1),(6,2),(6,6),(6,7),(7,1),(7,2),(7,3),(7,4),(7,5),(8,1),(8,2),(8,6),(8,7),(9,2),(10,1),(10,2),(10,3),(10,6),(10,7),(10,8),(11,8),(12,1),(12,2),(12,8),(13,1),(13,2),(13,5),(14,1),(14,2),(14,9),(15,1),(15,2),(16,2),(16,7),(17,10),(18,1),(18,2),(18,7),(18,8),(19,1),(19,9),(20,3),(20,9),(22,1),(22,2),(23,1),(23,9),(24,1),(24,2),(24,4),(24,5),(24,9),(25,1),(25,2),(26,1),(26,2),(26,8),(27,1),(27,2),(27,7),(28,1),(28,9),(29,1),(29,7),(30,2);
/*!40000 ALTER TABLE `jogo_has_categoria` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `plataforma`
--

DROP TABLE IF EXISTS `plataforma`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `plataforma` (
  `idPlataforma` int NOT NULL AUTO_INCREMENT,
  `nomePlataforma` varchar(150) NOT NULL,
  PRIMARY KEY (`idPlataforma`)
) ENGINE=InnoDB AUTO_INCREMENT=17 DEFAULT CHARSET=utf8mb3;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `plataforma`
--

LOCK TABLES `plataforma` WRITE;
/*!40000 ALTER TABLE `plataforma` DISABLE KEYS */;
INSERT INTO `plataforma` VALUES (1,'Steam'),(2,'Nintendo Switch'),(3,'PlayStation 3'),(4,'PlayStation 4'),(5,'PlayStation 5'),(6,'Xbox One'),(7,'Xbox Series X/S'),(9,'Google Stadia'),(10,'Epic Games'),(11,'Xbox 360'),(12,'Ubisoft'),(13,'Riot Games'),(14,'Eletronic Arts'),(15,'BattleNet'),(16,'WiiU');
/*!40000 ALTER TABLE `plataforma` ENABLE KEYS */;
UNLOCK TABLES;
--
-- Table structure for table `jogo_has_plataforma`
--

DROP TABLE IF EXISTS `jogo_has_plataforma`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `jogo_has_plataforma` (
  `idJogo` int NOT NULL,
  `idPlataforma` int NOT NULL,
  `urlJogo` varchar(250) DEFAULT NULL,
  PRIMARY KEY (`idJogo`,`idPlataforma`),
  KEY `fk_Jogo_has_Plataforma_Plataforma1_idx` (`idPlataforma`),
  KEY `fk_Jogo_has_Plataforma_Jogo_idx` (`idJogo`),
  CONSTRAINT `fk_Jogo_has_Plataforma_Jogo` FOREIGN KEY (`idJogo`) REFERENCES `jogo` (`idJogo`),
  CONSTRAINT `fk_Jogo_has_Plataforma_Plataforma1` FOREIGN KEY (`idPlataforma`) REFERENCES `plataforma` (`idPlataforma`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `jogo_has_plataforma`
--

LOCK TABLES `jogo_has_plataforma` WRITE;
/*!40000 ALTER TABLE `jogo_has_plataforma` DISABLE KEYS */;
INSERT INTO `jogo_has_plataforma` VALUES (1,3,NULL),(1,4,'https://store.playstation.com/pt-br/product/UP9000-CUSA00552_00-THELASTOFUS00000'),(1,5,'https://store.playstation.com/pt-br/product/UP9000-PPSA03396_00-THELASTOFUSPART1'),(2,1,'https://store.steampowered.com/app/1265920/Life_is_Strange_Remastered/'),(2,2,NULL),(2,3,NULL),(2,4,'https://store.playstation.com/pt-br/product/UP0082-CUSA23980_00-1951785847228082'),(2,5,NULL),(2,6,NULL),(2,7,NULL),(2,9,NULL),(3,1,NULL),(3,4,NULL),(3,6,NULL),(3,9,NULL),(4,1,NULL),(4,4,NULL),(5,1,NULL),(5,4,NULL),(6,2,NULL),(6,4,NULL),(6,5,NULL),(6,6,NULL),(6,7,NULL),(7,1,NULL),(7,2,NULL),(7,4,NULL),(7,5,NULL),(7,6,NULL),(7,7,NULL),(8,1,NULL),(8,2,NULL),(8,4,NULL),(8,5,NULL),(8,6,NULL),(8,7,NULL),(11,1,'https://store.steampowered.com/app/389730/TEKKEN_7/'),(11,4,'https://store.playstation.com/pt-br/product/UP0700-CUSA05972_00-000000000TEKKEN7'),(11,6,'https://www.xbox.com/pt-BR/games/store/tekken-7/BRJGPRMBV1NT'),(11,7,'https://www.xbox.com/pt-BR/games/store/tekken-7/BRJGPRMBV1NT'),(12,4,'https://store.playstation.com/pt-br/concept/10001850'),(12,5,'https://store.playstation.com/pt-br/concept/10001850'),(13,1,'https://store.steampowered.com/app/2050650/Resident_Evil_4/'),(13,4,'https://store.playstation.com/pt-br/concept/10004473'),(13,5,'https://store.playstation.com/pt-br/concept/10004473'),(13,7,'https://www.xbox.com/pt-BR/games/store/resident-evil-4/9NNMTSTGMKFZ'),(14,1,'https://store.steampowered.com/app/1938090/Call_of_Duty_Modern_Warfare_II/'),(14,4,'https://www.playstation.com/pt-br/games/call-of-duty-modern-warfare-ii/'),(14,5,'https://www.playstation.com/pt-br/games/call-of-duty-modern-warfare-ii/'),(14,6,'https://www.xbox.com/pt-BR/games/store/call-of-duty-modern-warfare-ii/9N201KQXS5BM'),(14,7,'https://www.xbox.com/pt-BR/games/store/call-of-duty-modern-warfare-ii/9N201KQXS5BM'),(15,1,'https://store.steampowered.com/app/920210/LEGO_Star_Wars_A_Saga_Skywalker/'),(15,4,'https://store.playstation.com/pt-br/concept/232847'),(15,5,'https://store.playstation.com/pt-br/concept/232847'),(15,10,'https://store.epicgames.com/pt-BR/p/lego-star-wars-the-skywalker-saga'),(16,2,'https://www.nintendo.com/pt-br/store/products/pokemon-scarlet-switch/'),(17,1,'https://store.steampowered.com/app/1811260/EA_SPORTS_FIFA_23/'),(17,2,'https://www.nintendo.com/pt-br/store/products/ea-sports-fifa-23-nintendo-switch-legacy-edition-switch/'),(17,4,'https://store.playstation.com/pt-br/product/UP0006-CUSA31878_00-FIFAFOOTBALL2023'),(17,5,'https://store.playstation.com/pt-br/concept/10004336'),(17,6,'https://www.xbox.com/pt-BR/games/fifa-23'),(17,7,'https://www.xbox.com/pt-BR/games/fifa-23'),(17,9,'https://stadia.google.com/game/fifa-23-standard-edition-preorder-product'),(17,10,'https://store.epicgames.com/pt-BR/p/fifa-23'),(18,4,'https://store.playstation.com/pt-br/product/UP9000-CUSA28561_00-FORBIDDENWESTPS4'),(18,5,'https://www.playstation.com/pt-br/games/horizon-forbidden-west/'),(19,1,'https://store.steampowered.com/app/730/CounterStrike_Global_Offensive/?l=portuguese'),(19,3,NULL),(19,6,'https://www.xbox.com/pt-BR/games/store/counter-strike-go/c4q8mjnv4564'),(19,11,'https://www.xbox.com/pt-BR/games/store/counter-strike-go/c4q8mjnv4564'),(20,4,'https://store.playstation.com/pt-br/product/UP5082-CUSA14081_00-PTSBUN0000000000'),(20,6,'https://www.xbox.com/pt-BR/games/store/pubg-battlegrounds/C0MN5DN8KR3F'),(20,7,'https://www.xbox.com/pt-BR/games/store/pubg-battlegrounds/C0MN5DN8KR3F'),(20,9,'https://stadia.google.com/game/pubg'),(21,1,'https://store.steampowered.com/app/271590/Grand_Theft_Auto_V/?l=portuguese'),(21,3,NULL),(21,4,'https://store.playstation.com/pt-br/product/UP1004-PPSA03420_00-GTAVCROSSGENBUND/?gclid=Cj0KCQiAq5meBhCyARIsAJrtdr4-wdnwpDucgcBN55G2Bu-je2ytOuEASm9Qe9QoxSOvoAbTKJKq2KoaAgc7EALw_wcB, '),(21,5,'https://store.playstation.com/pt-br/product/UP1004-PPSA03420_00-GTAVCROSSGENBUND/?gclid=Cj0KCQiAq5meBhCyARIsAJrtdr4-wdnwpDucgcBN55G2Bu-je2ytOuEASm9Qe9QoxSOvoAbTKJKq2KoaAgc7EALw_wcB, '),(21,6,'https://www.xbox.com/pt-BR/games/store/grand-theft-auto-v-xbox-one-e-xbox-series-xs/9p8rqh67ttt1'),(21,7,'https://www.xbox.com/pt-BR/games/gta-v#purchaseoptions'),(21,10,'https://store.epicgames.com/pt-BR/p/grand-theft-auto-v'),(21,11,'https://marketplace.xbox.com/pt-br/Product/GTA-V/66acd000-77fe-1000-9115-d802545408a7'),(22,4,'https://store.playstation.com/pt-br/concept/10004865'),(22,5,'https://store.playstation.com/pt-br/concept/10004865'),(22,6,'https://www.xbox.com/pt-BR/games/store/assassins-creed-mirage/9n4096hx1wwq'),(22,7,'https://www.xbox.com/pt-BR/games/store/assassins-creed-mirage/9n4096hx1wwq'),(22,12,'https://www.ubisoft.com/pt-br/game/assassins-creed/mirage/buy'),(23,10,'https://store.epicgames.com/pt-BR/p/valorant'),(23,13,'https://playvalorant.com/pt-br/?gclid=Cj0KCQiAq5meBhCyARIsAJrtdr4qVS980vpjlrEMxdlu-osuiLhnhoQZcB2kTx4enHZjkWBSrF9-apkaAofZEALw_wcB&gclsrc=aw.ds'),(24,4,'https://www.playstation.com/pt-br/games/the-last-of-us-part-ii/'),(25,1,'https://store.steampowered.com/app/1426210/It_Takes_Two/'),(25,2,'https://www.nintendo.com/pt-br/store/products/it-takes-two-switch/'),(25,4,'https://store.playstation.com/pt-br/product/UP0006-PPSA02342_00-ITTAKESTWORETAIL'),(25,5,'https://store.playstation.com/pt-br/product/UP0006-PPSA02342_00-ITTAKESTWORETAIL'),(25,6,'https://www.xbox.com/pt-BR/games/store/it-takes-two-versao-digital/9nxvc0482qs5'),(25,7,'https://www.xbox.com/pt-BR/games/store/it-takes-two-versao-digital/9nxvc0482qs5'),(25,10,'https://store.epicgames.com/pt-BR/p/it-takes-two'),(26,1,'https://store.steampowered.com/app/814380/Sekiro_Shadows_Die_Twice__GOTY_Edition/'),(26,4,'https://store.playstation.com/pt-br/product/UP0002-CUSA12047_00-SEKIROGAME000001'),(26,6,'https://www.xbox.com/pt-BR/games/store/sekiro-shadows-die-twice-edicao-jogo-do-ano/bqd5wrrp2d6q'),(26,7,'https://www.xbox.com/pt-BR/games/store/sekiro-shadows-die-twice-edicao-jogo-do-ano/bqd5wrrp2d6q'),(26,9,'https://stadia.google.com/game/sekiro-shadows-die-twice'),(27,2,'https://www.nintendo.com/pt-br/store/products/the-legend-of-zelda-breath-of-the-wild-switch/'),(27,16,'https://www.nintendo.pt/Jogos/Jogos-para-a-Wii-U/The-Legend-of-Zelda-Breath-of-the-Wild-893260.html'),(28,2,'https://www.nintendo.com/pt-br/store/products/overwatch-2-switch/'),(28,4,'https://www.playstation.com/pt-br/games/overwatch/'),(28,5,'https://www.playstation.com/pt-br/games/overwatch/'),(28,6,'https://www.xbox.com/pt-BR/games/overwatch-2'),(28,7,'https://www.xbox.com/pt-BR/games/overwatch-2'),(28,15,'https://us.shop.battle.net/pt-br/product/overwatch?blzcmp=ow_gamesite'),(29,1,'https://store.steampowered.com/app/1222690/Dragon_Age_Inquisition/'),(29,3,NULL),(29,4,'https://store.playstation.com/pt-br/product/UP0006-CUSA00220_00-DA3GAMEOFTHEYEAR'),(29,6,'https://www.xbox.com/pt-BR/games/store/dragon-age-inquisition/c47gzzbmr5wg'),(29,7,'https://www.xbox.com/pt-BR/games/store/dragon-age-inquisition/c47gzzbmr5wg'),(29,11,NULL),(29,14,'https://www.ea.com/pt-br/games/dragon-age/dragon-age-inquisition'),(30,1,'https://store.steampowered.com/app/1182900/A_Plague_Tale_Requiem/'),(30,2,'https://www.nintendo.pt/Jogos/Aplicacoes-de-download-da-Nintendo-Switch/A-Plague-Tale-Requiem-Cloud-Version-2232537.html'),(30,5,'https://store.playstation.com/pt-br/product/UP4133-PPSA05366_00-APLAGUEOUTBURST0'),(30,7,'https://www.xbox.com/pt-BR/games/a-plague-tale-requiem');
/*!40000 ALTER TABLE `jogo_has_plataforma` ENABLE KEYS */;
UNLOCK TABLES;
--
-- Table structure for table `usuario`
--

DROP TABLE IF EXISTS `usuario`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `usuario` (
  `idUsuario` int NOT NULL,
  `username` varchar(50) NOT NULL,
  `email` varchar(145) NOT NULL,
  `senha` varchar(65) NOT NULL,
  PRIMARY KEY (`idUsuario`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `usuario`
--

--
-- Table structure for table `jogo_has_usuario`
--

DROP TABLE IF EXISTS `jogo_has_usuario`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `jogo_has_usuario` (
  `idJogo` int NOT NULL,
  `idUsuario` int NOT NULL,
  `codigoListagem` int DEFAULT NULL,
  PRIMARY KEY (`idJogo`,`idUsuario`),
  KEY `fk_Jogo_has_Usuario_Usuario1_idx` (`idUsuario`),
  KEY `fk_Jogo_has_Usuario_Jogo1_idx` (`idJogo`),
  CONSTRAINT `fk_Jogo_has_Usuario_Jogo1` FOREIGN KEY (`idJogo`) REFERENCES `jogo` (`idJogo`),
  CONSTRAINT `fk_Jogo_has_Usuario_Usuario1` FOREIGN KEY (`idUsuario`) REFERENCES `usuario` (`idUsuario`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `jogo_has_usuario`
--

LOCK TABLES `jogo_has_usuario` WRITE;
/*!40000 ALTER TABLE `jogo_has_usuario` DISABLE KEYS */;
/*!40000 ALTER TABLE `jogo_has_usuario` ENABLE KEYS */;
UNLOCK TABLES;



LOCK TABLES `usuario` WRITE;
/*!40000 ALTER TABLE `usuario` DISABLE KEYS */;
/*!40000 ALTER TABLE `usuario` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2023-01-21 18:44:39
