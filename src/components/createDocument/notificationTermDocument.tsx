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

export function notificationTermDocument(
  dataEvent: FormValues,
  imgBase64: string
) {
  pdfMake.vfs = pdfFonts.pdfMake.vfs;

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
        text: `POLÍCIA MILITAR DA BAHIA\n COMANDO DE OPERAÇÕES POLICIAIS MILITARES\n COMANDO DE POLICIAMENTO REGIONAL SUL\n 69ª CIPM\n`,
        style: "header",
        alignment: "center",
      },
      {
        text: `TERMO DE NOTIFICAÇÃO\n RISCO DE QUEBRA DE ORDEM PÚBLICA\n\n`,
        style: "subheader",
        alignment: "center",
      },
      {
        style: "tableExample",
        table: {
          headerRows: 1,
          body: [
            [
              {
                text: "NATUREZA DO EVENTO, ESTABELECIMENTO OU ATIVIDADE",
                style: "tableHeader",
              },
            ],
            [`${dataEvent.eventKind}`],
          ],
        },
        layout: "lightHorizontalLines",
      },

      {
        style: "tableExample",
        table: {
          headerRows: 1,
          body: [
            [
              {
                text: "NOME/CNPJ DO EVENTO, ESTABELECIMENTO OU ATIVIDADE",
                style: "tableHeader",
              },
            ],
            [`${dataEvent.eventName}`],
          ],
        },
        layout: "lightHorizontalLines",
      },
      {
        style: "tableExample",
        table: {
          headerRows: 1,
          body: [
            [
              {
                text: "NOME/CPF DO RESPONSAVEL PELO EVENTO, ESTABELECIMENTO OU ATIVIDADE",
                style: "tableHeader",
              },
            ],
            [`${dataEvent.eventName}`],
          ],
        },
        layout: "lightHorizontalLines",
      },

      {
        style: "tableExample",
        table: {
          headerRows: 1,
          body: [
            [
              {
                text: "ENDEREÇO DO EVENTO, ESTABELECIMENTO OU ATIVIDADE",
                style: "tableHeader",
              },
            ],
            [`${dataEvent.location}`],
          ],
        },
        layout: "lightHorizontalLines",
      },

      {
        style: "tableExample",
        table: {
          headerRows: 1,
          body: [
            [{ text: "TELEFONES DE CONTATO", style: "tableHeader" }],
            [`${dataEvent.contact}`],
          ],
        },
        layout: "lightHorizontalLines",
      },
      {
        text: `\nConsiderando dos ditames do Art. Artigo 42 do Decreto Lei no 3.688 de 03 de Outuh:o de 1921. Lei de Contravenções Penais, e seus incisos, sobretudo no que tange ao "abuso de instrumentos sonou-os ou sinais acústicos", a exemplo de paredões de som automotivo, não expressamente autorizados pelo público municipal;

        Considerando o constante na Recomendação NO 002/2019, de 22 de maio de 2019, emitida Ministério Público, através da I I a Promotoria de Justiça de Ilhéus, na pessoa do Promotor Paulo Eduardo Sampaio Figueiredo, válida para o município de Ilhéus/BA;

        NOTIFICO, PARA OS DEVIDOS FINS, QUE ESTE EVENTO, EM CASO DE DESCUMPRIMENTO DA LEGISLAÇÃO ORA EXPOSTA, BEM COMO DE XOVAS PTBLICAÇÕES LEGAIS QUE A ELE SE APLIQUEM, DEVERÁ SER ENCERRADO SOB PENA DE 	DA ORDEM PÚBLICA, FICANDO O ORGANIZADOR RESPONSÁVEL POR TODO E QCALQLER FATO QUE ADVENHA DESTA AÇÃO.\n\n`,
      },
      {
        style: "tableExample",
        table: {
          headerRows: 1,
          body: [
            [
              {
                text: "NOME/MATRÍCULA/ASSINATURA DO POLICIAL MILITAR",
                style: "tableHeader",
              },
            ],
            [`${dataEvent.contact}`],
          ],
        },
        layout: "lightHorizontalLines",
      },
      {
        style: "tableExample",
        table: {
          headerRows: 1,
          body: [
            [
              {
                text: "NOME/ASSINTURA/CPF DO RESPONSÁVEL PELO EVENTO, ESTABELECIMENTO OU ATIVIDADE",
                style: "tableHeader",
              },
            ],
            [`${dataEvent.contact}`],
          ],
        },
        layout: "lightHorizontalLines",
      },

      {
        style: "tableExample",
        table: {
          headerRows: 1,
          body: [
            [{ text: "RECEBIDO EM:", style: "tableHeader" }],
            [`${dataEvent.contact}`],
          ],
        },
        layout: "lightHorizontalLines",
      },
    ],
    styles: {
      header: {
        fontSize: 16,
        bold: true,
      },
      subheader: {
        fontSize: 20,
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
