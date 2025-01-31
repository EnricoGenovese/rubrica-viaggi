const travelers = [
  {
    name: "Luca",
    surname: "Rossi",
    email: "luca.rossi@example.com",
    phoneNumber: "+39 345 678 9012",
  },
  {
    name: "Giulia",
    surname: "Bianchi",
    email: "giulia.bianchi@example.com",
    phoneNumber: "+39 333 456 7890",
  },
  {
    name: "Marco",
    surname: "Verdi",
    email: "marco.verdi@example.com",
    phoneNumber: "+39 320 987 6543",
  },
  {
    name: "Elena",
    surname: "Russo",
    email: "elena.russo@example.com",
    phoneNumber: "+39 310 123 4567",
  },
  {
    name: "Antonio",
    surname: "Ferrari",
    email: "antonio.ferrari@example.com",
    phoneNumber: "+39 345 222 3333",
  },
  {
    name: "Martina",
    surname: "Colombo",
    email: "martina.colombo@example.com",
    phoneNumber: "+39 312 678 2345",
  },
  {
    name: "Davide",
    surname: "Romano",
    email: "davide.romano@example.com",
    phoneNumber: "+39 399 543 2109",
  },
  {
    name: "Sara",
    surname: "Gallo",
    email: "sara.gallo@example.com",
    phoneNumber: "+39 328 789 6543",
  },
  {
    name: "Federico",
    surname: "Bruno",
    email: "federico.bruno@example.com",
    phoneNumber: "+39 377 222 5555",
  },
  {
    name: "Chiara",
    surname: "Marini",
    email: "chiara.marini@example.com",
    phoneNumber: "+39 356 321 9876",
  },
  {
    name: "Riccardo",
    surname: "Moretti",
    email: "riccardo.moretti@example.com",
    phoneNumber: "+39 333 444 5566",
  },
  {
    name: "Alessandra",
    surname: "Barbieri",
    email: "alessandra.barbieri@example.com",
    phoneNumber: "+39 322 654 3210",
  },
  {
    name: "Stefano",
    surname: "De Luca",
    email: "stefano.deluca@example.com",
    phoneNumber: "+39 345 987 1234",
  },
  {
    name: "Valentina",
    surname: "Conti",
    email: "valentina.conti@example.com",
    phoneNumber: "+39 355 666 7777",
  },
  {
    name: "Matteo",
    surname: "Lombardi",
    email: "matteo.lombardi@example.com",
    phoneNumber: "+39 366 222 4444",
  },
  {
    name: "Francesco",
    surname: "Esposito",
    email: "francesco.esposito@example.com",
    phoneNumber: "+39 377 999 8888",
  },
  {
    name: "Roberta",
    surname: "Ricci",
    email: "roberta.ricci@example.com",
    phoneNumber: "+39 344 111 2222",
  },
  {
    name: "Giorgio",
    surname: "Ferrero",
    email: "giorgio.ferrero@example.com",
    phoneNumber: "+39 399 888 7777",
  },
  {
    name: "Silvia",
    surname: "Santoro",
    email: "silvia.santoro@example.com",
    phoneNumber: "+39 322 555 9999",
  },
  {
    name: "Emanuele",
    surname: "Fabbri",
    email: "emanuele.fabbri@example.com",
    phoneNumber: "+39 311 777 6666",
  },
];

const trips = [
  {
    title: "Tour della Toscana",
    startDate: "2025-06-10",
    endDate: "2025-06-20",
    destination: "Toscana, Italia",
    travelers: [travelers[0], travelers[1]],
  },
  {
    title: "Vacanza a Parigi",
    startDate: "2025-07-05",
    endDate: "2025-07-12",
    destination: "Parigi, Francia",
    travelers: [travelers[2], travelers[3]],
  },
  {
    title: "Avventura in Giappone",
    startDate: "2025-09-15",
    endDate: "2025-09-30",
    destination: "Tokyo, Giappone",
    travelers: [travelers[4], travelers[5], travelers[6]],
  },
  {
    title: "Safari in Kenya",
    startDate: "2025-11-01",
    endDate: "2025-11-10",
    destination: "Nairobi, Kenya",
    travelers: [travelers[7], travelers[8], travelers[9]],
  },
  {
    title: "Esplorazione dell'Australia",
    startDate: "2025-12-15",
    endDate: "2026-01-05",
    destination: "Sydney, Australia",
    travelers: [travelers[10], travelers[11], travelers[12], travelers[13]],
  },
];

export { travelers, trips };
