// we use in memory database
let users = [
    {
        id:1,
        name:'Abhinash Rai',
        mob:'98345xxxxx',
        email:'abhinash.example@exam.com'
    },
    {
        id:1,
        name:'Abhay Singh',
        mob:'92345xxxxx',
        email:'abhay.example@exam.com'
    },
];

let nextId = 3;

export const getUsers = () => users;


export const addUser=(user)=> {
    user.id=nextId++ ;
    users.push(user);
    return users;
}

