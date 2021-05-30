export const initialEmployeeList = [
    {
        name: 'Andrii',
        surname: 'Ivanov', 
        age: 20, 
        position: 'be', 
        phone: '3809999999',
        email:'test21@test.com', 
        id: '0'
    },
    {
        name: 'Oleh', 
        surname:'Petrov', 
        age: 21, 
        position: 'fe', 
        phone: '3809999999',
        email:'test54@test.com', 
        id:'1'
    },
    {
        name: 'Taras',
        surname:'Shevchenko', 
        age: 29, 
        position: 'fe', 
        phone: '3809999999',
        email: 'test1@test.com', 
        id: '2'
    },
    {
        name: 'Roman',
        surname:'Shevchenko', 
        age: 29, 
        position: 'qa', 
        phone: '3809999999',
        email: 'test8@test.com', 
        id: '3'
    },
    {
        name: 'Anatolii', 
        surname: 'Shevchenko', 
        age: 19, 
        position: 'be', 
        phone: '3809999999',
        email: 'test2@test.com', 
        id: '4'
    },
    {
        name: 'Vova', 
        surname: 'Ivanov', 
        age: 89, 
        position: 'qa', 
        phone: '3809999999',
        email:'test@test.com', 
        id: '5'
    },
    {
        name: 'Fedor',
        surname:'Fedorchenko', 
        age: 23, 
        position: 'qa', 
        phone: '3809999999',
        email: 'fedor@test.com', 
        id: '6'
    },
];

export const filtersInitialState = {
    be: false,
    fe: false,
    qa: false,
    aqa: false,
    pm: false,
    other: false
  };

export const positions = ['be', 'fe', 'qa', 'aqa', 'pm', 'other'];