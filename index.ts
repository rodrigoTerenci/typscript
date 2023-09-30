interface IPessoa {
    name: string;
    age: number;
}
const ObjPessoa = {
    name: 'Whos',
    lastName: 'care',
    age: 36
}

const objTest = {
    name: 'Whos',
    lastName: 'care',
    otherProp: 'uma string qualquer'
}

type Obj = typeof ObjPessoa | IPessoa

const pessoa : IPessoa = {...objTest}