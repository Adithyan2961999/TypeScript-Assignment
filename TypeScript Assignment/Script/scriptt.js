var autoIncreamentedUserNo = 1001;
var Course = /** @class */ (function () {
    function Course(name, requiredDays, id) {
        this.courseId = "C" + (id).toString();
        this.courseName = name;
        this.requiredDays = requiredDays;
    }
    return Course;
}());
var User = /** @class */ (function () {
    function User(name, age, phone) {
        this.enrolled = new Array();
        this.userId = "UI" + (autoIncreamentedUserNo++).toString();
        this.name = name;
        this.age = age;
        this.phone = phone;
    }
    return User;
}());
var UserList = new Array();
var CurrentUser = null;
var ShowRegDiv = document.getElementById("RegDiv");
var ShowLoginDiv = document.getElementById("LoginDiv");
var ShowAfterLoginDiv = document.getElementById("AfterLoginDiv");
var ShowAvailableCourseDiv = document.getElementById("AvailableCourse");
var ShowEnrollDiv = document.getElementById("EnrollDiv");
var ShowHome = document.getElementById("Home");
function Showhome() {
    (document.getElementById("showuserlist").innerHTML) = "";
    ShowRegDiv.style.display = "none";
    ShowLoginDiv.style.display = "none";
    ShowAfterLoginDiv.style.display = "none";
    ShowAvailableCourseDiv.style.display = "none";
    ShowEnrollDiv.style.display = "none";
    ShowHome.style.display = "Block";
}
function RegisterMenu() {
    (document.getElementById("showuserlist").innerHTML) = "";
    ShowRegDiv.style.display = "block";
    ShowLoginDiv.style.display = "none";
    ShowAfterLoginDiv.style.display = "none";
    ShowAvailableCourseDiv.style.display = "none";
    ShowEnrollDiv.style.display = "none";
    ShowHome.style.display = "none";
}
function Register() {
    var name = document.getElementById("name").value;
    var age = document.getElementById("age").value;
    var phone = document.getElementById("phonenumber").value;
    if (name.trim() == "" || age == "" || phone == "") {
        alert("Cannot take empty inputs");
    }
    else {
        var tempUser = new User(name, parseInt(age), parseInt(phone));
        UserList.push(tempUser);
        alert("Your registration is complete Successfully.\nYour Login ID is: ".concat(tempUser.userId));
        Showhome();
    }
}
function Login() {
    document.getElementById("showlistofenrolledcourse").innerHTML = "";
    document.getElementById("showuserlist").innerHTML = "REGISTERED USERS<br><hr>";
    for (var index = 0; index < UserList.length; index++) {
        (document.getElementById("showuserlist").innerHTML) += "".concat(UserList[index].userId, " || ").concat(UserList[index].name, "<br>");
    }
    ShowRegDiv.style.display = "none";
    ShowLoginDiv.style.display = "Block";
    ShowAfterLoginDiv.style.display = "none";
    ShowAvailableCourseDiv.style.display = "none";
    ShowEnrollDiv.style.display = "none";
    ShowHome.style.display = "none";
}
