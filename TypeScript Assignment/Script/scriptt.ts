let autoIncreamentedUserNo = 1001;
class Course {
    courseId: string;
    courseName: string;
    requiredDays: number;
    
    
    constructor(name: string, requiredDays: number,id:number) {
       
        this.courseId = "C" + (id).toString();
        this.courseName = name;
        this.requiredDays = requiredDays;
    }

}
class User {
    
    userId: string;
    name: string;
    age: number;
    phone: number;
    enrolled: Course[]=new Array();
    constructor(name: string, age: number, phone: number) {
        this.userId = "UI" + (autoIncreamentedUserNo++).toString();
        this.name = name;
        this.age = age;
        this.phone = phone;
    }
}
let UserList: User[] = new Array();
let CurrentUser: User = null;
let ShowRegDiv=document.getElementById("RegDiv") as HTMLDivElement;
let ShowLoginDiv=document.getElementById("LoginDiv") as HTMLDivElement;
let ShowAfterLoginDiv=document.getElementById("AfterLoginDiv") as HTMLDivElement;
let ShowAvailableCourseDiv=document.getElementById("AvailableCourse") as HTMLDivElement;
let ShowEnrollDiv=document.getElementById("EnrollDiv") as HTMLDivElement;
let ShowHome=document.getElementById("Home") as HTMLDivElement;
function Showhome() {
    ((document.getElementById("showuserlist") as HTMLLabelElement).innerHTML) = "";
    ShowRegDiv.style.display = "none";
    ShowLoginDiv.style.display = "none";
    ShowAfterLoginDiv.style.display = "none";
    ShowAvailableCourseDiv.style.display = "none";
    ShowEnrollDiv.style.display = "none";
    ShowHome.style.display = "Block";
}
function RegisterMenu() {
    ((document.getElementById("showuserlist") as HTMLLabelElement).innerHTML) = "";
    ShowRegDiv.style.display = "block";
    ShowLoginDiv.style.display = "none";
    ShowAfterLoginDiv.style.display = "none";
    ShowAvailableCourseDiv.style.display = "none";
    ShowEnrollDiv.style.display = "none";
    ShowHome.style.display = "none";
}
function Register() {
    let name = (document.getElementById("name") as HTMLInputElement).value;
    let age = (document.getElementById("age") as HTMLInputElement).value;
    let phone = (document.getElementById("phonenumber") as HTMLInputElement).value;
    if (name.trim() == "" || age == "" || phone =="") {
        alert("Cannot take empty inputs");
    }
    else {
        let tempUser = new User(name,parseInt(age) ,parseInt(phone) )
        UserList.push(tempUser);
        alert(`Your registration is complete Successfully.\nYour Login ID is: ${tempUser.userId}`);
        Showhome();
    }
}
function Login() {
    (document.getElementById("showlistofenrolledcourse") as HTMLLabelElement).innerHTML=``;
    (document.getElementById("showuserlist") as HTMLLabelElement).innerHTML=`REGISTERED USERS<br><hr>`;
    for (let index = 0; index < UserList.length; index++) {

        ((document.getElementById("showuserlist") as HTMLLabelElement).innerHTML) += `${UserList[index].userId} || ${UserList[index].name}<br>`;

    }
    ShowRegDiv.style.display = "none";
    ShowLoginDiv.style.display = "Block";
    ShowAfterLoginDiv.style.display = "none";
    ShowAvailableCourseDiv.style.display = "none";
    ShowEnrollDiv.style.display = "none";
    ShowHome.style.display = "none";
}