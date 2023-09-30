import { ICustomer } from './models/ICustomer'
import { IPerson } from './models/IPerson';
import express, { NextFunction, ErrorRequestHandler, Request, Response, response } from 'express';
var bodyParser = require('body-parser');



const app = express()
app.use(bodyParser.json()); // for parsing application/json
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/', function (request: Request, response: Response) {
  response.send('Hello World')
})

app.post('/', function (request: Request, response: Response) {
    console.log('Ei!')
    const Obj = {
        propiedade1: 'ete',
        propiedade2: 1
    }
    response.status(200).send(request.body)
    // showPessoa(JSON.parse(request.body))
})
// const erroHandler = (error: Error, request: Request, response: Response,  next: NextFunction) => {
//     response.status(500).send(error.message)
// }
// app.use(erroHandler) 
app.listen(3000)

const ObjPessoa = {
    id: 'lkgfr87t8i',
    name: 'Whos',
    age: 3000,
    cpf_cnpj:123456,
    email: 'exemplo@email.com'

}
const pessoaExemple: ICustomer = {
    id: '',
    name: '',
    age:0,
    cpf_cnpj: 0,
    email: 'exemplo@email.com'
}

const showPessoa = (obj: ICustomer) => {
    const obj2 = obj as ICustomer;
    const customer: ICustomer = {...obj2}
   
    return Object.keys(pessoaExemple).length === Object.keys(obj2).length ? 
            console.log('isso') : console.log(obj)
    
}

// showPessoa(ObjPessoa)
// const customer: ICustomer = {...ObjPessoa}


   // const objTest = {
//     name: 'Whos',
//     lastName: 'care',
//     age:'dfe55',
//     otherProp: 'uma string qualquer'
// }

// Object.keys(objTest).length === Object.keys().length

// const pessoa : IPessoa = {...objTest}

// console.log(pessoa)