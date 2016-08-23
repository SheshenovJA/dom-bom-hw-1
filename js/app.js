var mainFunc = function () {
    //take a variables for list items
    var enterFirstName= document.getElementById("enterFirstName");
    var enterLastName = document.getElementById("enterLastName");
    var enterSalary= document.getElementById("enterSalary");
    var enterPosition = document.getElementById("enterPosition");
    //console.log(enterFirstName.value, enterLastName.value, enterSalary.value, enterPosition.value);//check for entered values


    //create a list items
    var listItem = document.createElement('li');
    var spanEl = document.createElement('span');
    //create a first name position

    spanEl.setAttribute("class","employeeFirstName");
    listItem.appendChild(spanEl).textContent = (" "+enterFirstName.value+ " ");
    //create a second name position
    var spanEl = document.createElement('span');
    spanEl.setAttribute("class","employeeLastName");
    listItem.appendChild(spanEl).textContent = (" "+enterLastName.value+" ");
    //create a  salary position
    var spanEl = document.createElement('span');
    spanEl.setAttribute("class","employeeSalary");
    listItem.appendChild(spanEl).textContent = (" "+enterSalary.value +" $");
    //position
    var spanEl = document.createElement('span');
    spanEl.setAttribute("class","employeePosition");
    listItem.appendChild(spanEl).textContent = (" "+enterPosition.value+ " ");
    //save all to document
    var newListItem = document.getElementsByClassName('employeeList')[0].appendChild(listItem);
    //console.log(newListItem);
    //calcualate and display a count of li's
    var liCount = document.querySelector('.employeeList').getElementsByTagName('li');
    var currentEmpCount = liCount.length;
    var displayEmpCounter = document.querySelector('.employeesCounter').textContent = (currentEmpCount);




    //var maxEmpCount = 0;

    //get a value from form
    //var maxEmpCount = document.getElementById('maxEmploees').value;

    //
    //if (currentEmpCount > maxEmpCount -1 ) {
      //  alert("employees count over " +maxEmpCount );
        //return null;
      //}else{

    //}



























}
