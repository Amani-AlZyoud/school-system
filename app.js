// Constructor to intialize a student object
// Full name
// Date of birth
// Gender
// Major: // Administration // IT // Science // Art
// Image URL
// Phone number

function Student(stdName, stdBirth, stdGender, stdMajor, stdImg, stdPhone){
    this.stdName = stdName;
    this.stdBirth = stdBirth;
    this.stdGender = stdGender;
    this.stdMajor = stdMajor;
    this.stdImg = stdImg;
    this.stdPhone = stdPhone;
}



let std; 
let studentArray = [];
// let stdName;
// let stdBirth;
// let stdGender;
// let stdPhone;
// let stdImg;
// let stdMajor;
// let stdGrade;

let isCreated = true;

// let tableHead;
// let tableBody;
// let table;
// let h1;
// const arr = ['Student Name', 'Student Birth', 'Student Gender', 'Student Major', 'Student IMG', 'Student Phone'];

// let tableHeader = document.getElementById("divTable");

let main = document.getElementById("mainSection");

let student_name;

const studentForm = document.getElementById("contactForm");


studentForm.addEventListener("submit", (event) => {

    event.preventDefault();
    std = new Student;

    if(isCreated) {

    isCreated = false;
    h1 = document.createElement("h1");
    h1.textContent = "Students Information";
    h1.style.color = "black";
    h1.style.fontWeight = "bold";
    h1.textTransform = "capitalize";
    main.prepend(h1);

    // tableHead = document.createElement("thead");

    // tableBody = document.createElement("tbody");

    // table = document.getElementById("stdTable");

    // const tr = document.createElement("tr");


    // for (let i = 0; i < 5; i++){
    //     const th = document.createElement("th");
    //     th.textContent = arr[i];
    //     tr.appendChild(th);
    // }

    // tableHead.appendChild(tr);

    // table.appendChild(tableHead);


    // table.style.textTransform = "capitalize";


    }


    student_name = event.target.fullName.value.split(" ");
    for (let i = 0; i < student_name.length; i++) {
        student_name[i] = student_name[i].charAt(0).toUpperCase() + student_name[i].slice(1);

    }

    std.stdName = student_name.join(" ");

    std.stdBirth = event.target.dateOfBirth.value;

    std.stdGender = event.target.gender.value;

    std.stdPhone = event.target.phoneNumber.value;

    std.stdImg = event.target.img.value;

    std.stdMajor = event.target.major.value;

    save();

    render(std.stdName, std.stdBirth, std.stdGender, std.stdMajor, std.stdImg, std.stdPhone );
    studentForm.reset();

    });


function render(stdName, stdBirth, stdGender, stdMajor, stdImg, stdPhone ){
    

    // stdInfo = [stdName, stdBirth, stdGender, stdMajor, stdImg, stdPhone];

    

    let stdCard = document.createElement("div");

    stdCard.classList.add("card");
    stdCard.style.color = "black";
    stdCard.style.backgroundColor = "white";
    stdCard.style.width = "18rem";
    stdCard.style.textTransform = "capitalize";
    
    let imgCard = document.createElement("img");
    
    imgCard.classList.add("card-img-top","img-thumbnail");
    
    imgCard.setAttribute("src", stdImg);
    imgCard.style.border = "none";

    let bodyCard = document.createElement("div");
    
    bodyCard.classList.add("card-body");
    
    let cardText = document.createElement("p")
    cardText.classList.add("card-text");
    cardText.textContent = `Student Name: ${stdName}`;
    
    let cardText2 = document.createElement("p")
    cardText2.classList.add("card-text");
    cardText2.textContent = `Date of Birth: ${stdBirth}`;


    
    let cardText3 = document.createElement("p")
    cardText3.classList.add("card-text");
    cardText3.textContent = `Gender: ${stdGender}`;


    let cardText4 = document.createElement("p")
    cardText4.classList.add("card-text");
    cardText4.textContent = `Major: ${stdMajor}`;


    let cardText5 = document.createElement("p")
    cardText5.classList.add("card-text");
    cardText5.textContent = `Phone: ${stdPhone}`;


  
    stdCard.appendChild(imgCard);
    bodyCard.style.fontSize = "small";
    bodyCard.style.width = "max-content";
    bodyCard.style.fontWeight = "600";
    bodyCard.style.textAlign = "start";

    bodyCard.appendChild(cardText);
    bodyCard.appendChild(cardText2);
    bodyCard.appendChild(cardText3);
    bodyCard.appendChild(cardText4);
    bodyCard.appendChild(cardText5);

    stdCard.appendChild(bodyCard);
    main.appendChild(stdCard);

  
    // const tr = document.createElement("tr"); 
    // for (let i = 0; i < 5; i++){
    //     const td = document.createElement("td");
    //     td.textContent = stdInfo[i];
    //     tr.appendChild(td);
    //     tableBody.appendChild(tr);
    // }
    // table.appendChild(tableBody);


}

function save(){
    studentArray.push(std);
    localStorage.setItem("Students info.", JSON.stringify(studentArray));
    // console.log(studentArray);
}


// AWBGCE