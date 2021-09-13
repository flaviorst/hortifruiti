import mock from '../utils/Mock'

const users = [
    {
        login: 'flavio',
        nome: 'Flavio Teixeira',
        pass: ''
    },
    {
        login: 'lara',
        nome: 'Lara Mahé',
        pass: ''
    }
]

function filterItems(login, pass) {
    if (login === '')
        return []
    else {
        return users.filter(function (el) {
            return el.login.toLowerCase().indexOf(login.toLowerCase())  > -1;
        })
    }
}

mock.onGet('api/hortifruti/user').reply(function (config) {
    return [
        200,
        filterItems(config.login, config.pass)
    ]
})