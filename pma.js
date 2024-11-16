const deletePasswordData=(index)=>{
    if (window.confirm('Are you sure to remove this password data?')) {
        let passwordData = JSON.parse(localStorage.getItem("passwordDetails"));
        passwordData.splice(index, 1);
        localStorage.setItem("passwordDetails",JSON.stringify(passwordData));
        location.reload();        
}
}
const populateSavedPasswordDetails=() =>{
    let savedPasswords = localStorage.getItem('savedPasswords');
    if(savedPasswords === null)
    {
        return;
    }
        else 
        {
            savedPasswords = JSON.parse(savedPasswords);
            for (let i = 0; i < savedPasswords.length; i++) 
            {
                document.getElementById("passwordList").innerHTML += `<li class="list-group-item">${savedPasswords[i].website}</li>`;
                addToTable(savedPasswords[i]);
            }
        }           
}
document.querySelector(".btn").addEventListener("click",(event)=>{
    event.preventDefault();
    console.log("Website:",website.value);
    console.log("Username:",username.value);
    console.log("Password:",password.value); 

    let passwordDetails = localStorage.getItem("passwordDetails");
    if (passwordDetails === null) {
        let passwordJSON=[];
        passwordJSON.push({"website": website.value, "username": username.value,"password": password.value});
        alert("Password Details Saved.");
        localStorage.setItem("passwordDetails", JSON.stringify(passwordJSON));
    } 

    else {
            let passwordData= JSON.parse(passwordDetails);
            passwordData.push({"website": website.value, "username": username.value,"password": password.value}) ;
            localStorage.setItem("passwordDetails", JSON.stringify(passwordData));
            alert("Password Details Saved.");
    }
    populateSavedPasswordDetails();
});