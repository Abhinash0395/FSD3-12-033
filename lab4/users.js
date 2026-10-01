// we use in memory database
let users = [
    {
        id:1,
        name:'Abhinash Rai',
        mob:'98345xxxxx',
        email:'abhinash.example@exam.com'
    },

    {
        id:2,
        name:'Abhay Singh',
        mob:'92345xxxxx',
        email:'abhay.example@exam.com'
    },
    
];

let nextId = 3;

export const getAllUsers = () => {
    return users;
}

export const getUserById = (pid) => {
    const found = users.find((user)=> user.id ===pid);
    return found;
}

export const getUsers = () => users;


export const addUser=(user)=> {
    user.id=nextId++ ;
    users.push(user);
    return users;
}

export const updateUser = (pid,updateData) => {
    const index = user.findIndex((user)=> user.id === pid);
    if(index == -1){
        return false;
    }
    updateData.id = pid;
    users[index] = updateData;
    return updateData;
}

export const deleteUser = (pid) => {
  const index = users.findIndex((user) => user.id === pid);
  if (index == -1) {
    return false;
  }
  users.splice(index, 1);
  return true;
};