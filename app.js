// fetch("https://jsonplaceholder.typicode.com/users")
// .then(res => res.json())
// .then(data => showUserName(data));

// function showUserName(data){
//     let userInfo= "";
//     data.forEach(users => {
//         userInfo = userInfo + ` 
//         <div class = " user"> 
//         <h2>Name: ${users.name}</h2>
//         <p>Email: ${users.email}</p>
//         <p>Company: ${users.company.name}, ${users.company.catchPhrase}, ${users.company.bs}</p>
//         </div>  `
//     });
//     const userList = document.getElementById("user-container");
//     userList.innerHTML = userInfo;
// }