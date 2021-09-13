import pdfMake from 'pdfmake/build/pdfmake'
import pdfFonts from 'pdfmake/build/vfs_fonts'

function gerarPdf(cart) {
    pdfMake.vfs = pdfFonts.pdfMake.vfs

    const title = [
        {
            text: 'Carrinho de Compras - HortiFruti',
            fontSize: 15,
            bold: true,
            margin: [15, 20, 0, 45]
        }
    ]

    let totalCart = 0
    
    const dados = cart.map((item) => {

        totalCart = totalCart + (item.valor * item.quantidade)

        return [
            { text: item.titulo, fontSize: 11, margin: [0, 2, 0, 2] },
            { text: item.valor, fontSize: 11, margin: [0, 2, 0, 2] },
            { text: item.quantidade, fontSize: 11, margin: [0, 2, 0, 2] },
            { text: (item.valor * item.quantidade).toFixed(2), fontSize: 11, margin: [0, 2, 0, 2] }
        ]
    })

    console.log(dados)

    const details = [
        {
            table: {
                headerRows: 1,
                widths: ['*', '*', '*', '*'],

                body: [
                    [
                        { text: 'Nome do Produto', style: 'tableHeader', fontSize: 12 },
                        { text: 'Valor', style: 'tableHeader', fontSize: 12 },
                        { text: 'Quantidade', style: 'tableHeader', fontSize: 12 },
                        { text: 'Total', style: 'tableHeader', fontSize: 12 }
                    ],
                    ...dados,
                    [
                        { text: 'Total', colSpan: 3, alignment: 'right', fontSize: 12 },
                        {},
                        {},
                        { text: totalCart.toFixed(2), alignment: 'left', fontSize: 12 }
                    ]
                ]
            },
            layout: 'headerLineOnly'
        }
    ]

    function rodape(currentPage, pageCount) {

        return [
            {
                text: currentPage + ' / ' + pageCount,
                alignment: 'right',
                fontSize: 12,
                margin: [0, 10, 20, 0]
            }
        ]
    }

    const docDefinitions = {
        pageSize: 'A4',
        pageMargins: [15, 50, 15, 40],

        header: [title],
        content: [details],
        footer: rodape
    }

    pdfMake.createPdf(docDefinitions).download()
}

export default gerarPdf