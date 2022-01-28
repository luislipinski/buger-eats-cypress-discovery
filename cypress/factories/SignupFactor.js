var faker = require('faker')
var cpf =require('gerador-validador-cpf')

export default {

    deliver: function(){

        var firstName = faker.name.firstName()
        var lastName = faker.name.lastName()

        var data = {
            name: `${firstName} ${lastName}`,
            cpf: cpf.generate(),
            email: faker.internet.email(firstName),
            whatsapp: '41992561300',
            address: {
                postalcode: '80630060',
                street: 'Avenida da República',
                number: '300',
                details: 'Ap 200',
                district: 'Guaíra',
                city_state: 'Curitiba/PR'
            },
            delivery_method: 'Moto',
            cnh: 'cnh-digital.jpg'
        }

        return data
    }
}