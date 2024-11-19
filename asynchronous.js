setTimeout(() => {
    console.log('this will log in 2 seconds')
},2000);

function greet(){
    console.log('hello from greet function')
}
setTimeout(greet,2000)

setTimeout(() => {
    console.log('data feteched')
}, 2000)

console.log ('data fetching')

setTimeout(() =>{
    console.log('datas')
}, 4000)

const sampleData = [
    {id:1, name:'item 1', description: 'Description for item 1' },
    {id:1, name:'item 2', description: 'Description for item 2' },
    {id:1, name:'item 3', description: 'Description for item 3' },
]

async function fetchData() {
    console.log('fetching data........')

    return await new Promise((resolve, reject) => { 
        setTimeout(() =>{
            console.log('data fetched successfully', sampleData)
            resolve(sampleData)
        }, 2000)
    });
}

fetchData();

async function displayData() {
    const dataList = document.getElementById('data-list')
    try {
        const data = await fetchData()
        const ListItems = data.map(item => `<li>${item.name}:  
            ${item.description}</li>`).join(''); 
        dataList.innerHTML = ListItems;    
    } catch (error) {
        console.log(error)
    }
}

displayData()


const viewButton = document.getElementById('view');
const hideButton = document.getElementById('hide');
const userList =  document.getElementById('user-list');

viewButton.addEventListener('click', () => {
    userList.style.display = 'block';
    displayUserData();
});

hideButton.addEventListener('click', () => {
    userList.style.display = 'none';
    
});
