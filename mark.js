const Name = document.querySelector(".Name");
const Email = document.querySelector(".Email");
const imgURL = document.querySelector(".imgURL");
const Create = document.querySelector(".Create");
const Read_Contact = document.querySelector(".Read-Contact");
const contact = document.querySelector(".Contact")
readPraduct()
console.log(Date.now());

Read_Contact.addEventListener("click",()=>{
    let newProduct = {
        title: Name.value,
        Email: Email.value,
        Image:  imgURL.value,
        id: Date.now()
    };
    
    let DomProduct = JSON.parse(localStorage.getItem("DomProduct")) || [];
    DomProduct.push(newProduct);
    
    localStorage.setItem("DomProduct",JSON.stringify(DomProduct));
    readPraduct()
    console.log(DomProduct);
});

function readPraduct() {
    contact.innerHTML = "";
    let DomProduct = JSON.parse(localStorage.getItem("DomProduct")) || [];
    DomProduct.forEach(el => {
        let box = document.createElement("div");
        let text = document.createElement("h1");
        let text2 = document.createElement("p")
        let img = document.createElement("img");
        let btnDelete = document.createElement("button");
        let button_00 = document.createElement("button")
        box.classList.add("box");
        
        text.innerText = el.title;
        text2.innerText = el.Email;
        btnDelete.innerText="delete"
        img.src = el.Image;
        button_00.innerText = "Edit"
        box.append(text);
        box.append(text2);
        box.append(img);
        box.append(btnDelete);
        contact.append(box);
        box.append(button_00)
        
        button_00.addEventListener("click",()=>{
            container.style.visibility = "visible"
        })
        
    
       btnDelete.addEventListener("click",()=>{
             deleteProduct(el.id)
        })
    });
};


function deleteProduct(id){
    let Dom = JSON.parse(localStorage.getItem("DomProduct")) || [];
    Dom = Dom.filter((el)=>{
        return el.id !== id
    })
    console.log(Dom);
    
    localStorage.setItem("DomProduct",JSON.stringify(Dom));
    readPraduct()
}





