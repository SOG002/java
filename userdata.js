// const sampleData =[]




async function fetchUserData() {
    const response = await fetch('https://jsonplaceholder.typicode.com/users')
    if (!response.ok) {
        throw new Error ('user data contains some error')
    }
    return response.json();
}

// function to display Data in HTML
async function displayUserData() {
    const userList = document.getElementById('user-list');
    try{
          const users = await fetchUserData();
          const ListItems = users.map(user => `<li>${user.name} -${user.email} </li>`)
          userList.innerHTML = ListItems;
    }catch  (error){
        console.log ('error fetching data:', error)
        user.innerHTML = '<li> Error fetching user data. pls try again later.</li>'
    }
}

displayUserData();

const viewButton = document.getElementById('more');
const hideButton = document.getElementById('some');
const userList =  document.getElementById('user-list');

viewButton.addEventListener('click', () => {
    userList.style.display = 'block';
    displayUserData();
});

hideButton.addEventListener('click', () => {
    userList.style.display = 'none';
    
});