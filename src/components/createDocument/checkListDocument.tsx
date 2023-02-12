import pdfMake from "pdfmake/build/pdfmake";
import pdfFonts from "pdfmake/build/vfs_fonts";

interface FormValues {
  accomodation: string;
  attraction: string;
  audience: string;
  contact: string;
  dateEvent: string;
  endAt: string;
  eventName: string;
  food: string;
  location: string;
  requester: string;
  startAt: string;
  transport: string;
  eventKind: string;
}

export function checkListDocument(dataEvent: FormValues, imgBase64: string) {
  pdfMake.vfs = pdfFonts.pdfMake.vfs;
  const dateEvent = new Date(dataEvent.dateEvent).toLocaleDateString("pt-BR");

  const logoPMBA = imgBase64;

  var docDefinition = {
    pageSize: "A4",
    pageMargins: [20, 5, 30, 20],

    content: [
      {
        image: logoPMBA,
        width: 120,
        height: 120,
        alignment: "center",
      },
      {
        text: `POLÍCIA MILITAR DA BAHIA\n COMANDO DE POLICIAMENTO REGIONAL SUL - ILHÉUS\n 69ª COMPANHIA INDEPENDENTE DE POLÍCIA MILITAR - ILHÉUS\n\n CHECK LIST PARA ORGANIZADORES DE EVENTOS\n\n`,
        style: "header",
        alignment: "center",
      },
      {
        text: "Diante da demanda dos eventos que ensejam a participação da Polícia Militar (PMBA), como: Shows, Festas, Confraternizações, e outros, bem como, por normatização das instâncias superiores da instituição, informamos aos organizadores dos eventos que os ofícios endereçados a esta unidade, 69 a CIPM, devem obedecer às   seguintes normas, ficando sujeitos a recusa de recebimento e conseqüente escala do policiamento quando não cumpridos:\n\n",
        style: "small",
      },
      "OFICIO COM ANTECEDÊNCIA MÍNIMA DE 15 DIAS DO INICIO DO EVENTO ENDEREÇADO AO MAJ PM CLAUDIO DOS SANTOS COSTA LOPES COMANDANTEDA 69 a CIPM - ILHÉUS,DEVERÁ CONTER NA SOLICITAÇÃO:\n*NOME DO RESPONSÁVEL E TELEFONE PARA CONTATO\n*PERÍODO*\nLOCAL DO EVENTO*\nATRACÕES*\nESTIMATIVA DE PÚBLICO\n*TRANSPORTE (a cargo do solicitante)\n*ALIMENTAÇÃO (a cargo do solicitante)\n*HOSPEDAGEM (quando for o caso)ANEXO AO OFÍCIO DEVERÁ CONTER OS SEGUINTES DOCUMENTOS:\n -	AUTORIZAÇÃO DA PREFEITURA MUNICIPAL PARA REALIZAÇÃO DO EVENTO;\n-	LAUDO DE VISTORIA DO ESPAÇO, REALIZADO PELO CORPO DE BOMBEIROS;\n\n",
      {
        text: "FORMULÁRIO DE SOLICITAÇÃO DE POLICIAMENTO\n\n",
        style: "subheader",
      },
      {
        style: "tableExample",
        table: {
          body: [
            ["NOME DO EVENTO", `${dataEvent.eventName}`],
            ["NOME DO SOLICITANTE/RESPONSÁVEL", `${dataEvent.requester}`],
            ["DATA DO EVENTO", `${dateEvent}`],
            ["HORÁRIO DE INÍCIO", `${dataEvent.startAt}`],
            ["HORÁRIO DE TÉRMINO", `${dataEvent.endAt}`],
            ["LOCAL DO EVENTO", `${dataEvent.location}`],
            ["ATRAÇÕES", `${dataEvent.attraction}`],
            ["ESTIMATIVA DE PÚBLICO", `${dataEvent.audience}`],
            [
              "TRANSPORTE",
              `${dataEvent.transport ? dataEvent.transport : "Sem previsão"}`,
            ],
            [
              "ALIMENTAÇÃO",
              `${dataEvent.food ? dataEvent.food : "Sem previsão"}`,
            ],
            [
              "HOSPEDAGEM",
              `${
                dataEvent.accomodation ? dataEvent.accomodation : "Sem previsão"
              }`,
            ],
            ["CARACTERÍSTICA DO EVENTO", `${dataEvent.eventKind}`],
            ["CONTATOS", `${dataEvent.contact}`],
          ],
        },
      },
    ],
    styles: {
      header: {
        fontSize: 16,
        bold: true,
      },
      subheader: {
        fontSize: 15,
        bold: true,
      },
      quote: {
        italics: true,
      },
      small: {
        fontSize: 12,
      },
    },
  };
  pdfMake.createPdf(docDefinition).download();
}
