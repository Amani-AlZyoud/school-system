let stdName;
let stdBirth;
let stdGender;
let stdPhone;
let stdGrade;
let stdInfo;
let isCreated = true;

let tableHead;
let tableBody;
let table;
let h1;
const arr = ['Student Name', 'Student Birth', 'Student Gender', 'Student Phone', 'Student Grade'];

let tableHeader = document.getElementById("divTable");


const cafe_form = document.getElementById("contactForm");


cafe_form.addEventListener("submit", (event) => {

event.preventDefault();


if(isCreated) {

isCreated = false;
h1 = document.createElement("h1");
h1.textContent = "Students Information";
h1.style.color = "black";
h1.style.fontWeight = "bold";
h1.textTransform = "capitalize";
tableHeader.prepend(h1);

tableHead = document.createElement("thead");

tableBody = document.createElement("tbody");

table = document.getElementById("stdTable");

const tr = document.createElement("tr");


for (let i = 0; i < 5; i++){
    const th = document.createElement("th");
    th.textContent = arr[i];
    tr.appendChild(th);
}

tableHead.appendChild(tr);

table.appendChild(tableHead);


table.style.textTransform = "capitalize";


}


stdName = event.target.fullName.value;

stdBirth = event.target.dateOfBirth.value;

stdGender = event.target.gender.value;

stdPhone = event.target.phoneNumber.value;

stdGrade = event.target.grade.value;


render(stdName, stdBirth, stdGender, stdPhone, stdGrade);
cafe_form.reset();
});


function render(stdName, stdBirth, stdGender, stdPhone, stdGrade){
    


stdInfo = [stdName, stdBirth, stdGender, stdPhone, stdGrade];

const tr = document.createElement("tr"); 
for (let i = 0; i < 5; i++){
    const td = document.createElement("td");
    td.textContent = stdInfo[i];
    tr.appendChild(td);
    tableBody.appendChild(tr);
}
table.appendChild(tableBody);


}

