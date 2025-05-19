const clienti = [
  {
    "id": 1,
    "nome": "Piergiorgio",
    "cognome": "Montesano",
    "email": "piergiorgio.montesano@example.com",
    "cellulare": "+39 2523 2159124",
    "codice_fiscale": "NFPSNR48N04G041K",
    "data_nascita": "1976-01-07",
    "id_viaggio": 2
  },
  {
    "id": 2,
    "nome": "Eleanora",
    "cognome": "Viola",
    "email": "eleanora.viola@example.com",
    "cellulare": "+39 881 06 88 4859",
    "codice_fiscale": "TDXDLI39U25J724L",
    "data_nascita": "1987-06-11",
    "id_viaggio": 5
  },
  {
    "id": 3,
    "nome": "Santino",
    "cognome": "Cianciolo",
    "email": "santino.cianciolo@example.com",
    "cellulare": "+39 488 65069455",
    "codice_fiscale": "IMPZYU40N76F860D",
    "data_nascita": "1990-11-19",
    "id_viaggio": 3
  },
  {
    "id": 4,
    "nome": "Fortunata",
    "cognome": "Finotto",
    "email": "fortunata.finotto@example.com",
    "cellulare": "+39 9202 3200617",
    "codice_fiscale": "LNYBZN10C88Z846R",
    "data_nascita": "2006-08-27",
    "id_viaggio": 5
  },
  {
    "id": 5,
    "nome": "Gelsomina",
    "cognome": "Santoro",
    "email": "gelsomina.santoro@example.com",
    "cellulare": "+39 79 9233506",
    "codice_fiscale": "BPOGUN96X68A096H",
    "data_nascita": "1997-03-02",
    "id_viaggio": 1
  },
  {
    "id": 6,
    "nome": "Gioele",
    "cognome": "Pinamonte",
    "email": "gioele.pinamonte@example.com",
    "cellulare": "+39 99 6384539",
    "codice_fiscale": "YJBBAB12Q63R805C",
    "data_nascita": "1954-10-28",
    "id_viaggio": 1
  },
  {
    "id": 7,
    "nome": "Eraldo",
    "cognome": "Pedersoli",
    "email": "eraldo.pedersoli@example.com",
    "cellulare": "+39 58 70740770",
    "codice_fiscale": "MMZZXV97X01O318K",
    "data_nascita": "1993-02-24",
    "id_viaggio": 4
  },
  {
    "id": 8,
    "nome": "Laura",
    "cognome": "Pagnotto",
    "email": "laura.pagnotto@example.com",
    "cellulare": "+39 86 6165517",
    "codice_fiscale": "NQKOOA96M06V339T",
    "data_nascita": "1961-05-04",
    "id_viaggio": 3
  },
  {
    "id": 9,
    "nome": "Giorgio",
    "cognome": "Gozzi",
    "email": "giorgio.gozzi@example.com",
    "cellulare": "+39 72 63408569",
    "codice_fiscale": "BBAQFO73R64B476Q",
    "data_nascita": "1955-12-01",
    "id_viaggio": 6
  },
  {
    "id": 10,
    "nome": "Nicola",
    "cognome": "Juvara",
    "email": "nicola.juvara@example.com",
    "cellulare": "+39 66 7655780",
    "codice_fiscale": "XIXDWG61F80G785P",
    "data_nascita": "1970-08-25",
    "id_viaggio": 1
  },
  {
    "id": 11,
    "nome": "Vincentio",
    "cognome": "Storladi",
    "email": "vincentio.storladi@example.com",
    "cellulare": "+39 055 63 55 8413",
    "codice_fiscale": "JMBZGE06M69L777Z",
    "data_nascita": "1974-09-14",
    "id_viaggio": 4
  },
  {
    "id": 12,
    "nome": "Tiziana",
    "cognome": "Puglisi",
    "email": "tiziana.puglisi@example.com",
    "cellulare": "+39 30 02389887",
    "codice_fiscale": "MTQSNM22K91Y805L",
    "data_nascita": "1968-03-11",
    "id_viaggio": 1
  },
  {
    "id": 13,
    "nome": "Mirko",
    "cognome": "Merisi",
    "email": "mirko.merisi@example.com",
    "cellulare": "+39 6659 44151173",
    "codice_fiscale": "CEGDBV62R55E396W",
    "data_nascita": "1993-12-15",
    "id_viaggio": 2
  },
  {
    "id": 14,
    "nome": "Antonino",
    "cognome": "Marazzi",
    "email": "antonino.marazzi@example.com",
    "cellulare": "+39 958 67 31 9004",
    "codice_fiscale": "DLCXSP37X96M508Y",
    "data_nascita": "1973-05-12",
    "id_viaggio": 6
  },
  {
    "id": 15,
    "nome": "Pier",
    "cognome": "Donarelli",
    "email": "pier.donarelli@example.com",
    "cellulare": "+39 33 6525559",
    "codice_fiscale": "PMERCI47X96V040Q",
    "data_nascita": "1973-05-28",
    "id_viaggio": 3
  },
  {
    "id": 16,
    "nome": "Angelica",
    "cognome": "Interminelli",
    "email": "angelica.interminelli@example.com",
    "cellulare": "+39 7774 8061723",
    "codice_fiscale": "YNXDID24B66B715T",
    "data_nascita": "2003-01-06",
    "id_viaggio": 6
  },
  {
    "id": 17,
    "nome": "Agostino",
    "cognome": "Piccinni",
    "email": "agostino.piccinni@example.com",
    "cellulare": "+39 13 56839990",
    "codice_fiscale": "SCDHDF19G66N781T",
    "data_nascita": "1958-06-12",
    "id_viaggio": 1
  },
  {
    "id": 18,
    "nome": "Rosario",
    "cognome": "Borromini",
    "email": "rosario.borromini@example.com",
    "cellulare": "+39 65 71229146",
    "codice_fiscale": "AZBEAM98U40G266V",
    "data_nascita": "1959-04-26",
    "id_viaggio": 4
  },
  {
    "id": 19,
    "nome": "Mariana",
    "cognome": "Berengario",
    "email": "mariana.berengario@example.com",
    "cellulare": "+39 475 98 90 5784",
    "codice_fiscale": "WXPQTL14O04T795P",
    "data_nascita": "1971-06-26",
    "id_viaggio": 6
  },
  {
    "id": 20,
    "nome": "Torquato",
    "cognome": "Russo",
    "email": "torquato.russo@example.com",
    "cellulare": "+39 730 0623737",
    "codice_fiscale": "NJVBBT10L04M067E",
    "data_nascita": "2004-06-13",
    "id_viaggio": 2
  },
  {
    "id": 21,
    "nome": "Ninetta",
    "cognome": "Verdone",
    "email": "ninetta.verdone@example.com",
    "cellulare": "+39 97 8785946",
    "codice_fiscale": "EJSVEE88I28Q882X",
    "data_nascita": "2004-01-16",
    "id_viaggio": 4
  },
  {
    "id": 22,
    "nome": "Nanni",
    "cognome": "Belletini",
    "email": "nanni.belletini@example.com",
    "cellulare": "+39 1024 2695037",
    "codice_fiscale": "TMNAVQ30Y24G545U",
    "data_nascita": "1967-09-20",
    "id_viaggio": 3
  },
  {
    "id": 23,
    "nome": "Federigo",
    "cognome": "Redi",
    "email": "federigo.redi@example.com",
    "cellulare": "+39 20 8701794",
    "codice_fiscale": "NOYKCB19H46A451D",
    "data_nascita": "1949-10-13",
    "id_viaggio": 1
  },
  {
    "id": 24,
    "nome": "Fiorino",
    "cognome": "Iadanza",
    "email": "fiorino.iadanza@example.com",
    "cellulare": "+39 54 26617248",
    "codice_fiscale": "RWIXGC26Q87J940K",
    "data_nascita": "1984-02-28",
    "id_viaggio": 6
  },
  {
    "id": 25,
    "nome": "Pier",
    "cognome": "Tommaseo",
    "email": "pier.tommaseo@example.com",
    "cellulare": "+39 8449 46972758",
    "codice_fiscale": "XASUJF78S11R930H",
    "data_nascita": "1972-12-31",
    "id_viaggio": 4
  },
  {
    "id": 26,
    "nome": "Eraldo",
    "cognome": "Stucchi",
    "email": "eraldo.stucchi@example.com",
    "cellulare": "+39 76 4140615",
    "codice_fiscale": "PBMPRP10L58J306P",
    "data_nascita": "2003-08-29",
    "id_viaggio": 2
  },
  {
    "id": 27,
    "nome": "Rosaria",
    "cognome": "Segni",
    "email": "rosaria.segni@example.com",
    "cellulare": "+39 699 5661398",
    "codice_fiscale": "EQTSNL18F35O280X",
    "data_nascita": "1986-10-21",
    "id_viaggio": 4
  },
  {
    "id": 28,
    "nome": "Antonio",
    "cognome": "Saragat",
    "email": "antonio.saragat@example.com",
    "cellulare": "+39 9292 2854567",
    "codice_fiscale": "PFIWDI52Q89W813H",
    "data_nascita": "1990-01-10",
    "id_viaggio": 5
  },
  {
    "id": 29,
    "nome": "Alberico",
    "cognome": "Cusano",
    "email": "alberico.cusano@example.com",
    "cellulare": "+39 55 36986485",
    "codice_fiscale": "NTHYES95N00D501O",
    "data_nascita": "1980-09-24",
    "id_viaggio": 6
  },
  {
    "id": 30,
    "nome": "Luciano",
    "cognome": "Callegaro",
    "email": "luciano.callegaro@example.com",
    "cellulare": "+39 97 4368448",
    "codice_fiscale": "DDYUMT09V37H834N",
    "data_nascita": "1971-05-24",
    "id_viaggio": 4
  },
  {
    "id": 31,
    "nome": "Dino",
    "cognome": "Lucchesi",
    "email": "dino.lucchesi@example.com",
    "cellulare": "+39 383 2502418",
    "codice_fiscale": "IICLHY67E37B319J",
    "data_nascita": "1951-11-25",
    "id_viaggio": 2
  },
  {
    "id": 32,
    "nome": "Flavia",
    "cognome": "Vigorelli",
    "email": "flavia.vigorelli@example.com",
    "cellulare": "+39 57 43783852",
    "codice_fiscale": "GHXMEB08P24D904V",
    "data_nascita": "1982-11-23",
    "id_viaggio": 3
  },
  {
    "id": 33,
    "nome": "Pasquale",
    "cognome": "Guarneri",
    "email": "pasquale.guarneri@example.com",
    "cellulare": "+39 228 77249916",
    "codice_fiscale": "WVJXAU82P42L899T",
    "data_nascita": "1989-07-01",
    "id_viaggio": 4
  },
  {
    "id": 34,
    "nome": "Barbara",
    "cognome": "Ferraris",
    "email": "barbara.ferraris@example.com",
    "cellulare": "+39 005 70526728",
    "codice_fiscale": "BBQRZF18H33U955Q",
    "data_nascita": "1974-05-23",
    "id_viaggio": 3
  },
  {
    "id": 35,
    "nome": "Giovanni",
    "cognome": "Zecchini",
    "email": "giovanni.zecchini@example.com",
    "cellulare": "+39 664 91 42 0211",
    "codice_fiscale": "GWQTXG00B98P372A",
    "data_nascita": "1996-09-09",
    "id_viaggio": 6
  },
  {
    "id": 36,
    "nome": "Luigina",
    "cognome": "Petrassi",
    "email": "luigina.petrassi@example.com",
    "cellulare": "+39 6349 10062756",
    "codice_fiscale": "KUFHKN30H25S198M",
    "data_nascita": "1951-04-01",
    "id_viaggio": 3
  },
  {
    "id": 37,
    "nome": "Raffaello",
    "cognome": "Gottardi",
    "email": "raffaello.gottardi@example.com",
    "cellulare": "+39 6631 9474562",
    "codice_fiscale": "IJIKKL55X68X836Q",
    "data_nascita": "1980-08-22",
    "id_viaggio": 1
  },
  {
    "id": 38,
    "nome": "Adele",
    "cognome": "Curiel",
    "email": "adele.curiel@example.com",
    "cellulare": "+39 2421 02466664",
    "codice_fiscale": "EUUEIA03J68F118N",
    "data_nascita": "1984-08-24",
    "id_viaggio": 2
  },
  {
    "id": 39,
    "nome": "Geronimo",
    "cognome": "Filangieri",
    "email": "geronimo.filangieri@example.com",
    "cellulare": "+39 26 6725560",
    "codice_fiscale": "AKZIRD12V02G831U",
    "data_nascita": "1958-06-13",
    "id_viaggio": 3
  },
  {
    "id": 40,
    "nome": "Lara",
    "cognome": "Lancisi",
    "email": "lara.lancisi@example.com",
    "cellulare": "+39 500 58 70 0178",
    "codice_fiscale": "JUEYUQ65S73E188B",
    "data_nascita": "1973-10-20",
    "id_viaggio": 4
  },
  {
    "id": 41,
    "nome": "Maura",
    "cognome": "Simeoni",
    "email": "maura.simeoni@example.com",
    "cellulare": "+39 8664 4427770",
    "codice_fiscale": "WSTOTP34X05W919D",
    "data_nascita": "1960-03-07",
    "id_viaggio": 4
  },
  {
    "id": 42,
    "nome": "Azeglio",
    "cognome": "Ricci",
    "email": "azeglio.ricci@example.com",
    "cellulare": "+39 4162 7988788",
    "codice_fiscale": "BMILIH30A09S430Y",
    "data_nascita": "1950-12-31",
    "id_viaggio": 3
  },
  {
    "id": 43,
    "nome": "Angelo",
    "cognome": "Galiazzo",
    "email": "angelo.galiazzo@example.com",
    "cellulare": "+39 38 0547057",
    "codice_fiscale": "APXTGN49E24H908R",
    "data_nascita": "1990-04-28",
    "id_viaggio": 6
  },
  {
    "id": 44,
    "nome": "Federico",
    "cognome": "Peranda",
    "email": "federico.peranda@example.com",
    "cellulare": "+39 58 89689353",
    "codice_fiscale": "IWILEG73L60Z003U",
    "data_nascita": "1989-12-24",
    "id_viaggio": 4
  },
  {
    "id": 45,
    "nome": "Giorgio",
    "cognome": "Garibaldi",
    "email": "giorgio.garibaldi@example.com",
    "cellulare": "+39 666 47018309",
    "codice_fiscale": "SNZSOF24T08M022O",
    "data_nascita": "1997-12-13",
    "id_viaggio": 4
  },
  {
    "id": 46,
    "nome": "Raffaellino",
    "cognome": "Costalonga",
    "email": "raffaellino.costalonga@example.com",
    "cellulare": "+39 240 52 89 3766",
    "codice_fiscale": "JBNQJO62U85X624O",
    "data_nascita": "1953-04-08",
    "id_viaggio": 1
  },
  {
    "id": 47,
    "nome": "Olga",
    "cognome": "Franzese",
    "email": "olga.franzese@example.com",
    "cellulare": "+39 78 6312976",
    "codice_fiscale": "JYPWEW90T83X505S",
    "data_nascita": "1975-12-19",
    "id_viaggio": 4
  },
  {
    "id": 48,
    "nome": "Mirko",
    "cognome": "Micca",
    "email": "mirko.micca@example.com",
    "cellulare": "+39 69 96260545",
    "codice_fiscale": "LYDFEX40C09M166K",
    "data_nascita": "2004-08-27",
    "id_viaggio": 4
  },
  {
    "id": 49,
    "nome": "Franco",
    "cognome": "Guarato",
    "email": "franco.guarato@example.com",
    "cellulare": "+39 079 2852725",
    "codice_fiscale": "RVMJID51A84Y108X",
    "data_nascita": "1988-12-20",
    "id_viaggio": 6
  },
  {
    "id": 50,
    "nome": "Alessandro",
    "cognome": "Camicione",
    "email": "alessandro.camicione@example.com",
    "cellulare": "+39 649 8196215",
    "codice_fiscale": "EDEKSU76M97X143I",
    "data_nascita": "1970-01-13",
    "id_viaggio": 4
  },
  {
    "id": 51,
    "nome": "Torquato",
    "cognome": "Scalfaro",
    "email": "torquato.scalfaro@example.com",
    "cellulare": "+39 5236 1199872",
    "codice_fiscale": "FFICST16Z35J364Q",
    "data_nascita": "1954-11-14",
    "id_viaggio": 6
  },
  {
    "id": 53,
    "nome": "Franco",
    "cognome": "Tamburini",
    "email": "franco.tamburini@example.com",
    "cellulare": "+39 6857 05221357",
    "codice_fiscale": "HHNTWU85D74K076D",
    "data_nascita": "2001-09-10",
    "id_viaggio": 1
  },
  {
    "id": 54,
    "nome": "Giacinto",
    "cognome": "Natta",
    "email": "giacinto.natta@example.com",
    "cellulare": "+39 85 73785879",
    "codice_fiscale": "ZDAJBU93X10U856K",
    "data_nascita": "1978-10-19",
    "id_viaggio": 5
  },
  {
    "id": 55,
    "nome": "Gaetano",
    "cognome": "Rosselli",
    "email": "gaetano.rosselli@example.com",
    "cellulare": "+39 2021 0984433",
    "codice_fiscale": "MRIOIP07R44Q819G",
    "data_nascita": "2003-02-20",
    "id_viaggio": 3
  },
  {
    "id": 57,
    "nome": "Giampiero",
    "cognome": "Salieri",
    "email": "giampiero.salieri@example.com",
    "cellulare": "+39 8523 78392548",
    "codice_fiscale": "BPCXOK37V71G004H",
    "data_nascita": "1972-08-26",
    "id_viaggio": 1
  },
  {
    "id": 59,
    "nome": "Roman",
    "cognome": "Randazzo",
    "email": "roman.randazzo@example.com",
    "cellulare": "+39 459 2152088",
    "codice_fiscale": "VIFPSI27I77F887O",
    "data_nascita": "1986-07-12",
    "id_viaggio": 6
  },
  {
    "id": 60,
    "nome": "Letizia",
    "cognome": "Camiscione",
    "email": "letizia.camiscione@example.com",
    "cellulare": "+39 265 22 71 3775",
    "codice_fiscale": "YBIICO03N31Q835T",
    "data_nascita": "1996-05-22",
    "id_viaggio": 5
  },
  {
    "id": 61,
    "nome": "Lorenzo",
    "cognome": "Bignami",
    "email": "lorenzo.bignami@example.com",
    "cellulare": "+39 294 39 93 9339",
    "codice_fiscale": "DBNWAJ90M60Z201G",
    "data_nascita": "1965-04-26",
    "id_viaggio": 6
  },
  {
    "id": 62,
    "nome": "Graziano",
    "cognome": "Malipiero",
    "email": "graziano.malipiero@example.com",
    "cellulare": "+39 190 64 79 9416",
    "codice_fiscale": "CCEYPT19J44Y626F",
    "data_nascita": "1986-04-22",
    "id_viaggio": 5
  },
  {
    "id": 63,
    "nome": "Francesca",
    "cognome": "Grisoni",
    "email": "francesca.grisoni@example.com",
    "cellulare": "+39 4926 62472617",
    "codice_fiscale": "OQZZYJ29G04E653V",
    "data_nascita": "1964-12-17",
    "id_viaggio": 2
  },
  {
    "id": 64,
    "nome": "Gabriella",
    "cognome": "Carli",
    "email": "gabriella.carli@example.com",
    "cellulare": "+39 127 66006417",
    "codice_fiscale": "BYEYLY59C35D881C",
    "data_nascita": "1970-02-07",
    "id_viaggio": 5
  },
  {
    "id": 65,
    "nome": "Ricciotti",
    "cognome": "Roncalli",
    "email": "ricciotti.roncalli@example.com",
    "cellulare": "+39 4776 9650926",
    "codice_fiscale": "RMPCAO89F80Q239F",
    "data_nascita": "1976-01-08",
    "id_viaggio": 5
  },
  {
    "id": 66,
    "nome": "Fulvio",
    "cognome": "Visconti",
    "email": "fulvio.visconti@example.com",
    "cellulare": "+39 708 80183177",
    "codice_fiscale": "CBDXIR84G61Y579Z",
    "data_nascita": "1994-09-07",
    "id_viaggio": 1
  },
  {
    "id": 67,
    "nome": "Milena",
    "cognome": "Natta",
    "email": "milena.natta@example.com",
    "cellulare": "+39 0990 69649498",
    "codice_fiscale": "JKQIXR56I24T110B",
    "data_nascita": "1988-04-21",
    "id_viaggio": 3
  }
]

export default clienti;