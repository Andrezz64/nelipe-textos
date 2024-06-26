interface TextosInterface {
  Titulo: string;
  Path: string;
  LinkEmbded: string;
  Autor: string;
  Data: string;
  Genero: string
}

const Textos: Array<TextosInterface> = [
   {
    Titulo: "Helena",
    Autor: "Nelipe",
    Data: "22/06/2024",
    Path: "helena",
    Genero: "Crônica",
    LinkEmbded:
      "https://docs.google.com/document/d/e/2PACX-1vSMzZM_GBcxBJz4wmuyE8kRNguyJJFr1jlAhvX0wNN0_ycITt6dTe3Fzx9qOzAzdfX0bwMKdKwsk39a/pub?embedded=true"
  },
  {
    Titulo: "O desespero de te amar/me odiar",
    Autor: "Nelipe",
    Data: "15/06/2024",
    Path: "o-desespero-de-te-amar-me-odiar",
    Genero: "Crônica reflexiva",
    LinkEmbded:
      "https://docs.google.com/document/d/e/2PACX-1vScAkXsYxSx0qGu0eLsAvG4xpMSSDugjGXZ3eR9SlANBMTTxKtgutmRB-sLXh3bFGuwz-0VhLbf6aMH/pub?embedded=true"
  },
  {
    Titulo: "Pensamentos, insónias e paranoias ",
    Autor: "Nelipe",
    Data: "14/05/2023",
    Path: "pensamentos-insonias-e-paranoias",
    Genero: "Crônica Reflexiva",
    LinkEmbded:
      "https://docs.google.com/document/d/e/2PACX-1vTGskiqnQ9s57JN1zsD0Po_CyltopVLEghezuKX2c6AufOUyR6MG98VzrbFLogvOJ00GYG7aDVg42Iw/pub?embedded=true",
  },
  {
    Titulo: "Historias do Lilith Numero 205",
    Autor: "Nelipe",
    Data: "11/06/2022",
    Path: "historias-do-lilith-numero-205",
    Genero: "Conto",
    LinkEmbded:
      "https://docs.google.com/document/d/e/2PACX-1vTVuyUIWOJMR_lBjlzf0wSkEji7si-CeHrXXUmhoeaNwqX8hckruBrimj7Q8uUB4BS2TpYzgK-YT6L8/pub?embedded=true",
  },
  {
    Titulo: "A Amante Fanstasma",
    Autor: "Lara. W",
    Data: "05/11/2021",
    Path: "amante-fantasma",
    Genero: "?",
    LinkEmbded:
      "https://docs.google.com/document/d/e/2PACX-1vTfKXlmcuJ1CbHrU_ac6R9e06T2IH1gMVzc7bU_fZXG_h4qVl5H0j90ckuI3cDao_cULdSr5ivF0smk/pub?embedded=true",
  },

  {
    Titulo: "Quem acompanha a solidão ?",
    Autor: "Nelipe",
    Data: "01/11/2021",
    Path: "quem-acompanha-a-solidao",
    Genero: "Crônica",
    LinkEmbded:
      "https://docs.google.com/document/d/e/2PACX-1vRLj5dmL77RjSJsk7FurFLE4XJeEUia7CFUV4DPePTlKevohor2ehkL6YG74AWVal20sXksPpPKvp6j/pub?embedded=true",
  },
];

export default Textos;
