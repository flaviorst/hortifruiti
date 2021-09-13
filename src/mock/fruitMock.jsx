import mock from '../utils/Mock'

const fruits = [
    {
        id: 1,
        imagem: "/images/banana.png",
        titulo: 'Banana',
        texto: 'Banana Caturra Fresquinha',
        unidade: 'Kg',
        valor: '6.99'
    },
    {
        id: 2,
        imagem: "/images/abacaxi.png",
        titulo: 'Abacaxi',
        texto: 'Abacaxi direto do Espirito Santo',
        unidade: 'Un',
        valor: '5.99'
    },
    {
        id: 3,
        imagem: "/images/cereja.png",
        titulo: 'Cereja',
        texto: 'Cereja importada',
        unidade: 'Kg',
        valor: '46.99'
    },
    {
        id: 4,
        imagem: "/images/coco.png",
        titulo: 'Coco',
        texto: 'Coco verde da Bahia',
        unidade: 'Un',
        valor: '4.00'
    },
    {
        id: 5,
        imagem: "/images/kiwi.png",
        titulo: 'Kiwi',
        texto: 'Kiwi importado do Japão',
        unidade: 'Kg',
        valor: '19.99'
    },
    {
        id: 6,
        imagem: "/images/laranja.png",
        titulo: 'Laranja',
        texto: 'Laranja Pêra-rio',
        unidade: 'Kg',
        valor: '3.99'
    },
    {
        id: 7,
        imagem: "/images/maca.png",
        titulo: 'Maça',
        texto: 'Maçâ importada Argentina',
        unidade: 'Kg',
        valor: '7.99'
    },
    {
        id: 8,
        imagem: "/images/manga.png",
        titulo: 'Manga',
        texto: 'Manga Tommy',
        unidade: 'Kg',
        valor: '6.99'
    },
    {
        id: 9,
        imagem: "/images/melancia.png",
        titulo: 'Melancia',
        texto: 'Melancia importada',
        unidade: 'Un',
        valor: '9.99'
    },
    {
        id: 10,
        imagem: "/images/morango.png",
        titulo: 'Morango',
        texto: 'Morango silvestre',
        unidade: 'Kg',
        valor: '12.99'
    },
    {
        id: 11,
        imagem: "/images/pera.png",
        titulo: 'Pêra',
        texto: 'Pêra Portuguesa',
        unidade: 'Kg',
        valor: '8.99'
    }
]

function filterItems(query) {
    if (query === '')
        return fruits
    else {
        return fruits.filter(function (el) {
            return el.titulo.toLowerCase().indexOf(query.toLowerCase()) > -1;
        })
    }
}

mock.onGet('api/hortifruti/fruit').reply(function (config) {
    return [
        200,
        filterItems(config.searchText)
    ]
})