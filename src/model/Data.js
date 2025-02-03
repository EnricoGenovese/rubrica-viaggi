const travelers = [
  {
    id: 1,
    name: "Luca",
    surname: "Rossi",
    email: "luca.rossi@example.com",
    phoneNumber: "+39 345 678 9012",
    ssn: "TCJQSP31H56F171H "
  },
  {
    id: 2,
    name: "Giulia",
    surname: "Bianchi",
    email: "giulia.bianchi@example.com",
    phoneNumber: "+39 333 456 7890",
    ssn: "QTSGTH41R02C289T  "
  },
  {
    id: 3,
    name: "Marco",
    surname: "Verdi",
    email: "marco.verdi@example.com",
    phoneNumber: "+39 320 987 6543",
    ssn: "SYMMLV66S20I310O  "
  },
  {
    id: 4,
    name: "Elena",
    surname: "Russo",
    email: "elena.russo@example.com",
    phoneNumber: "+39 310 123 4567",
    ssn: "MLBYVE53H42G431X"
  },
  {
    id: 5,
    name: "Antonio",
    surname: "Ferrari",
    email: "antonio.ferrari@example.com",
    phoneNumber: "+39 345 222 3333",
    ssn: "ZJMZLB68L67F830C "
  },
  {
    id: 6,
    name: "Martina",
    surname: "Colombo",
    email: "martina.colombo@example.com",
    phoneNumber: "+39 312 678 2345",
    ssn: "VWLFTL28E65G678Y",
  },
  {
    id: 7,
    name: "Davide",
    surname: "Romano",
    email: "davide.romano@example.com",
    phoneNumber: "+39 399 543 2109",
    ssn: "QBLVHH32L29C900M",
  },
  {
    id: 8,
    name: "Sara",
    surname: "Gallo",
    email: "sara.gallo@example.com",
    phoneNumber: "+39 328 789 6543",
    ssn: "DMSVRM81A13G521S",
  },
  {
    id: 9,
    name: "Federico",
    surname: "Bruno",
    email: "federico.bruno@example.com",
    phoneNumber: "+39 377 222 5555",
    ssn: "LLMTHZ97A42H890M",
  },
  {
    id: 10,
    name: "Chiara",
    surname: "Marini",
    email: "chiara.marini@example.com",
    phoneNumber: "+39 356 321 9876",
    ssn: "GSJCPK59C18L609H",
  },
  {
    id: 11,
    name: "Riccardo",
    surname: "Moretti",
    email: "riccardo.moretti@example.com",
    phoneNumber: "+39 333 444 5566",
    ssn: "BPNYZZ51C27G923Z",
  },
  {
    id: 12,
    name: "Alessandra",
    surname: "Barbieri",
    email: "alessandra.barbieri@example.com",
    phoneNumber: "+39 322 654 3210",
    ssn: "ZAEPCM42H02I220J",
  },
  {
    id: 13,
    name: "Stefano",
    surname: "De Luca",
    email: "stefano.deluca@example.com",
    phoneNumber: "+39 345 987 1234",
    ssn: "FRGVTB44H18I701A",
  },
  {
    id: 14,
    name: "Valentina",
    surname: "Conti",
    email: "valentina.conti@example.com",
    phoneNumber: "+39 355 666 7777",
    ssn: "RKUNDS41E50G645F",
  },
  {
    id: 15,
    name: "Matteo",
    surname: "Lombardi",
    email: "matteo.lombardi@example.com",
    phoneNumber: "+39 366 222 4444",
    ssn: "LQPWDP33T16I407L",
  },
  {
    id: 16,
    name: "Francesco",
    surname: "Esposito",
    email: "francesco.esposito@example.com",
    phoneNumber: "+39 377 999 8888",
    ssn: "FPTPNP47D29C550D",
  },
  {
    id: 17,
    name: "Roberta",
    surname: "Ricci",
    email: "roberta.ricci@example.com",
    phoneNumber: "+39 344 111 2222",
    ssn: "ZMHGYX41D11B508A",
  },
  {
    id: 18,
    name: "Giorgio",
    surname: "Ferrero",
    email: "giorgio.ferrero@example.com",
    phoneNumber: "+39 399 888 7777",
    ssn: "QLVMGG97B26D143P",
  },
  {
    id: 19,
    name: "Silvia",
    surname: "Santoro",
    email: "silvia.santoro@example.com",
    phoneNumber: "+39 322 555 9999",
    ssn: "GCHCDV42R53A794A",
  },
  {
    id: 20,
    name: "Emanuele",
    surname: "Fabbri",
    email: "emanuele.fabbri@example.com",
    phoneNumber: "+39 311 777 6666",
    ssn: "VRPHDE68H18C982O",
  },
  {

  }

];

const trips = [
  {
    id: 1,
    title: "Tour della Toscana",
    startDate: "2025-01-30",
    endDate: "2025-02-05",
    destination: "Toscana, Italia",
    travelers: [travelers[0], travelers[1]],
  },
  {
    id: 2,
    title: "Vacanza a Parigi",
    startDate: "2025-07-05",
    endDate: "2025-07-12",
    destination: "Parigi, Francia",
    travelers: [travelers[2], travelers[3]],
  },
  {
    id: 3,
    title: "Avventura in Giappone",
    startDate: "2025-09-15",
    endDate: "2025-09-30",
    destination: "Tokyo, Giappone",
    travelers: [travelers[4], travelers[5], travelers[6]],
  },
  {
    id: 4,
    title: "Safari in Kenya",
    startDate: "2025-11-01",
    endDate: "2025-11-10",
    destination: "Nairobi, Kenya",
    travelers: [travelers[7], travelers[8], travelers[9]],
  },
  {
    id: 5,
    title: "Esplorazione dell'Australia",
    startDate: "2025-12-15",
    endDate: "2026-01-05",
    destination: "Sydney, Australia",
    travelers: [travelers[10], travelers[11], travelers[12], travelers[13]],
  },

];

export { travelers, trips };
