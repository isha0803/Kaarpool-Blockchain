var userData;
var moneyBalance;
function init() {
    // initialisation stuff here
    userData= JSON.parse(sessionStorage.getItem("userData"));
    console.log("userData: - ",userData);
    document.getElementById("userNameDiv").innerHTML = "Hi "+userData.name;
    moneyBalance ="500";

     let payload = {
    'name': userData.name,
  }
  console.log("payload: - ", payload);
  console.log("JSON.stringify(payload): - ", JSON.stringify(payload));
  var payloadString = JSON.stringify(payload);
  var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function () {
    if (this.readyState == 4 && this.status == 200) {
      console.log(typeof this.responseText);
      let responseTextData = JSON.parse(this.responseText);
      console.log(typeof responseTextData);
      console.log(responseTextData);

      document.getElementById("moneyBalance").innerHTML = responseTextData.balance;

    }
    else{
//      document.getElementById('td1').innerHTML = '<tr>No Data avaliable</tr>';

    }
  };
  xhttp.open("POST", "/getRiderBalance", true);
  xhttp.setRequestHeader("Content-type", "application/json");
  xhttp.send(payloadString);


  }
  
init();
$( function() {
  $("#selUser").select2();
  $("#selUserSource").select2();
  $('.openmodale').click(function (e) {
    e.preventDefault();
    $('.modale').addClass('opened');
});
$('.closemodale').click(function (e) {
    e.preventDefault();
    $('.modale').removeClass('opened');
});


} );
var responseSearchData ;
function searchFunction(){
  // let 
  console.log("search");
  var time = document.getElementById("timepicker-12-hr").value;
  var sourceLoacation = document.getElementById("selUserSource").value;
  var destinationLoacation = document.getElementById("selUser").value;
  if (time == "" || sourceLoacation == 0 || destinationLoacation == 0) {
    alert("please fill all fields");
  }
  else {
  let rideFaire;
  if((sourceLoacation=="Bajrang nagar, Manewada road, Nagpur(001)" && destinationLoacation =="Omkar nagar, Manewada road, Nagpur(002)") ||
  (destinationLoacation=="Bajrang nagar, Manewada road, Nagpur(001)" &&  sourceLoacation=="Omkar nagar, Manewada road, Nagpur(002)")){
    document.getElementById('rideFire').innerHTML = "40 rs"
  }
  else if((sourceLoacation=="Bajrang nagar, Manewada road, Nagpur(001)" && destinationLoacation =="Rameshwari, Nagpur(003)") ||
   (destinationLoacation=="Bajrang nagar, Manewada road, Nagpur(001)" &&  sourceLoacation=="Rameshwari, Nagpur(003)")){
    document.getElementById('rideFire').innerHTML = "60 rs"
  }
  else if((sourceLoacation=="Bajrang nagar, Manewada road, Nagpur(001)" && destinationLoacation =="Chhatrapati Sqr, Nagpur(004)") ||
   (destinationLoacation=="Bajrang nagar, Manewada road, Nagpur(001)" &&  sourceLoacation=="Chhatrapati Sqr, Nagpur(004)")){
    document.getElementById('rideFire').innerHTML = "80 rs"
  }
  else if((sourceLoacation=="Bajrang nagar, Manewada road, Nagpur(001)" && destinationLoacation =="Trimurti nagar, Nagapur(006)") ||
   (destinationLoacation=="Bajrang nagar, Manewada road, Nagpur(001)" &&  sourceLoacation=="Trimurti nagar, Nagapur(006)")){
    document.getElementById('rideFire').innerHTML = "100 rs"
  }
  else if((sourceLoacation=="Bajrang nagar, Manewada road, Nagpur(001)" && destinationLoacation =="T-point, Nagpur(007)") ||
   (destinationLoacation=="Bajrang nagar, Manewada road, Nagpur(001)" &&  sourceLoacation=="T-point, Nagpur(007)")){
    document.getElementById('rideFire').innerHTML = "120 rs"
  }
  else if((sourceLoacation=="Bajrang nagar, Manewada road, Nagpur(001)" && destinationLoacation =="Hingna road, Nagpur(008)") ||
   (destinationLoacation=="Bajrang nagar, Manewada road, Nagpur(001)" &&  sourceLoacation=="Hingna road, Nagpur(008)")){
    document.getElementById('rideFire').innerHTML = "140 rs"
  }
  else if((sourceLoacation=="Bajrang nagar, Manewada road, Nagpur(001)" && destinationLoacation =="Hingna road, Nagpur(008)") ||
   (destinationLoacation=="Bajrang nagar, Manewada road, Nagpur(001)" &&  sourceLoacation=="Hingna road, Nagpur(008)")){
    document.getElementById('rideFire').innerHTML = "140 rs"
  }
  else if((sourceLoacation=="Bajrang nagar, Manewada road, Nagpur(001)" && destinationLoacation =="Mahindra sqr, Nagpur(009)") ||
   (destinationLoacation=="Bajrang nagar, Manewada road, Nagpur(001)" &&  sourceLoacation=="Mahindra sqr, Nagpur(009)")){
    document.getElementById('rideFire').innerHTML = "160 rs"
  }
  else if((sourceLoacation=="Bajrang nagar, Manewada road, Nagpur(001)" && destinationLoacation =="IC sqr, Nagpur(010)") ||
   (destinationLoacation=="Bajrang nagar, Manewada road, Nagpur(001)" &&  sourceLoacation=="IC sqr, Nagpur(010)")){
    document.getElementById('rideFire').innerHTML = "180 rs"
  }
  else if((sourceLoacation=="Bajrang nagar, Manewada road, Nagpur(001)" && destinationLoacation =="YCC colleage, Hingna, Nagpur(011)") ||
   (destinationLoacation=="Bajrang nagar, Manewada road, Nagpur(001)" &&  sourceLoacation=="YCC colleage, Hingna, Nagpur(011)")){
    document.getElementById('rideFire').innerHTML = "220 rs"
  }
  else{
    document.getElementById('rideFire').innerHTML = "180 rs"
  }
    let payload = {
      'name': userData.name,
      'starttime': time,
      'source': sourceLoacation,
      'destination': destinationLoacation
    }
    console.log("payload: - ", payload);
    console.log("JSON.stringify(payload): - ", JSON.stringify(payload));
    var payloadString = JSON.stringify(payload);
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function () {
      if (this.readyState == 4 && this.status == 200) {
        console.log(this.responseText);
        let res = JSON.parse(this.responseText)
        console.log(typeof this.responseText);
        console.log(typeof res);
        if (res.status) {
          // launch_toast("toast", res.message);
          // sessionStorage.setItem("userData", this.responseText);
          // window.location.href = "/driverHomePage";
          document.getElementById("tableDiv").style.display = "block";
          document.getElementById("tableDiv1").style.display = "block";


          let tdData ='';
          responseSearchData = res.data;
      if(res.data?.length == 0){
        document.getElementById('td1').innerHTML = '<tr style="text-align:center">No Data avaliable</tr>';
      }
      else{
        xhttp.onreadystatechange = function () {
            if (this.readyState == 4 && this.status == 200) {
              console.log(this.responseText);


            }
            else{
        //      document.getElementById('td1').innerHTML = '<tr>No Data avaliable</tr>';

            }
          };
          xhttp.open("POST", "/getRiderRouteDataWithName", true);
          xhttp.setRequestHeader("Content-type", "application/json");
          xhttp.send(payloadString);
        tableResponseData= res.data;
        res.data.forEach((element,inx) => {
          // let timeData = element.starttime.split("_");
          tdData +=  '<tr class="openmodale" onClick="clickTableRow('+inx+')" ><td class="openmodale">'+element.name+'<strong style="font-size:12px;font-weight:400;    margin-left: 10px;"> ('+element.driverGender+')</strong></td>'+
          '<td class="openmodale">'+element.source+'</td>'+
          '<td class="openmodale">'+element.destination+'</td>'+
          '<td class="openmodale">'+element.starttime+'</td>'
          if(element.rideStatus == 0){
            tdData += '<td class="openmodale">Inactive</td>'
          }
          else if(element.rideStatus == 1){
            tdData += '<td class="openmodale" style="color:yellow">In Progress</td>'
          }
          else if(element.rideStatus == 2){
            tdData += '<td class="openmodale" style="color:green">Active</td>'
          }
          else{
            tdData += '<td class="openmodale"></td>'
          }
          tdData +='</tr>';
        });
        document.getElementById('td1').innerHTML = tdData;
        console.log(typeof this.responseText);


          console.log("responseSearchData: - ",res);
          res.data.forEach(function(item){
          let rider1= item.rider1.split("(");
          let rider2= item.rider2.split("(");

          if(rider1[0].trim() == userData.name){
            popupStatus = true;

          }
          else if(rider2[0].trim() == userData.name)
            popupStatus = true;
          })
      }
          // init();

        }
        else {
          launch_toast("toast1", "Rides are full.");

        }
      }
    };
    xhttp.open("POST", "/getDriverRouteDataWithSrcDesAndTime", true);
    xhttp.setRequestHeader("Content-type", "application/json");
    xhttp.send(payloadString);
    console.log("Rider Register Event fired");
}
}
function launch_toast(tosterName, msg) {
  var x = document.getElementById(tosterName);
  x.className = "show";
  if(tosterName == "toast"){
      document.getElementById("desc").innerHTML = msg;
  }
  else{
      document.getElementById("desc1").innerHTML = msg;
  }
  setTimeout(function () { x.className = x.className.replace("show", ""); }, 5000);
}
var selectedData;
var selectedIndex;
var popupStatus = false;
function clickTableRow(rowData){
  console.log("rowData: - ",rowData);
  console.log("responseSearchData: -",responseSearchData);
  console.log('responseSearchData: - ',responseSearchData[rowData]);
  selectedData = responseSearchData[rowData];
  selectedIndex = rowData;
  if(!popupStatus){
      $('.modale').addClass('opened');
  }
  else{
    console.log("already book");

    console.log("selectedData: - ",selectedData);
    $('.modaleCancel').addClass('opened');
    launch_toast('toast1','Ride is already book.')
  }

}
function cancelFunction(){
  // $('.modale').addClass('opened');
  $('.modale').removeClass('opened');
  $('.modaleCancel').removeClass('opened');

}
function successFunction(){
  console.log("selectedData: - ",selectedData);
  console.log("userData.name: - ",userData.name);
  let time = selectedData.starttime.split("_");
  console.log(time[1]);
  let payload = {
    'driveName': selectedData.name,
    'source':selectedData.source,
    'destination': selectedData.destination,
    'riderName': userData.name,
    'time': time[1]
  }
  console.log("JSON.stringify(payload): - ", JSON.stringify(payload));
    var payloadString = JSON.stringify(payload);
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function () {
      if (this.readyState == 4 && this.status == 200) {
        console.log(this.responseText);
        let res = JSON.parse(this.responseText)
        console.log(typeof this.responseText);
        console.log(typeof res);
        if (res.status) {
          // launch_toast("toast", res.message);
          // sessionStorage.setItem("userData", this.responseText);
          // window.location.href = "/driverHomePage";
          console.log("In side sucess");
          launch_toast("toast", "Ride booked successfully.");
          // init();
          $('.modale').removeClass('opened');
          let payload = {
              'name': userData.name,
              'starttime': time[1],
              'source': selectedData.source,
              'destination': selectedData.destination
            }
            var payloadString = JSON.stringify(payload);
          xhttp.onreadystatechange = function () {
            if (this.readyState == 4 && this.status == 200) {
              console.log(this.responseText);
              console.log(typeof this.responseText);

              responseSearchData = JSON.parse(this.responseText).data;
              console.log("responseSearchData: - ",responseSearchData);
              responseSearchData.forEach(function(item){
              let rider1= item.rider1.split("(");
              let rider2= item.rider2.split("(");

              if(rider1[0].trim() == userData.name){
                popupStatus = true;

              }
              else if(rider2[0].trim() == userData.name)
                popupStatus = true;
              })

            }
            else{
        //      document.getElementById('td1').innerHTML = '<tr>No Data avaliable</tr>';

            }
          };
          xhttp.open("POST", "/getDriverRouteDataWithSrcDesAndTime", true);
          xhttp.setRequestHeader("Content-type", "application/json");
          xhttp.send(payloadString);
          tdData='';
          responseSearchData.forEach((element,inx) => {
          // let timeData = element.starttime.split("_");

          tdData +=  '<tr class="openmodale" onClick="clickTableRow('+inx+')" ><td class="openmodale">'+element.name+'</td>'+
          '<td class="openmodale">'+element.source+'</td>'+
          '<td class="openmodale">'+element.destination+'</td>'+
          '<td class="openmodale">'+element.starttime+'</td>'
          if(selectedIndex != inx){
            tdData += '<td class="openmodale">Inactive</td>'
          }
//          else if(element.rideStatus == 1){
//            tdData += '<td class="openmodale" style="color:yellow">In Progress</td>'
//          }
          else if(selectedIndex == inx){
            tdData += '<td class="openmodale" style="color:green">Active</td>'
          }
          else{
            tdData += '<td class="openmodale"></td>'
          }
          tdData +='</tr>';
        });
        document.getElementById('td1').innerHTML = tdData
        }
        else {
          launch_toast("toast1", res?.data?.info);
//          document.getElementById("desc1").innerHTML = res?.data?.info;
          $('.modale').removeClass('opened');
        }
      }
      // else{
      //   launch_toast("toast1", "Error on ride booking.");
      // }
    };
    xhttp.open("POST", "/updateDriveRouteDataWithRiderName", true);
    xhttp.setRequestHeader("Content-type", "application/json");
    xhttp.send(payloadString);
    console.log("Rider Register Event fired");
}
function cancelRideFunction(){
    console.log("selectedData =", selectedData);
    console.log("selectedData.starttime =", selectedData.starttime);
    let time = selectedData.starttime.split("_");
  console.log(time[1]);
  let payload = {
    'driveName': selectedData.name,
    'source':selectedData.source,
    'destination': selectedData.destination,
    'riderName': userData.name,
    'time': time[1]
  }
  console.log("JSON.stringify(payload): - ", JSON.stringify(payload));
    var payloadString = JSON.stringify(payload);
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function () {
      if (this.readyState == 4 && this.status == 200) {
        console.log(this.responseText);
        let res = JSON.parse(this.responseText)
        console.log(typeof this.responseText);
        console.log(typeof res);
        if (res.status) {
          // launch_toast("toast", res.message);
          // sessionStorage.setItem("userData", this.responseText);
          // window.location.href = "/driverHomePage";
          console.log("In side sucess");
          launch_toast("toast", "Ride cancel successfully.");
          // init();
          $('.modaleCancel').removeClass('opened');
          let payload = {
              'name': userData.name,
              'starttime': time[1],
              'source': selectedData.source,
              'destination': selectedData.destination
            }
            var payloadString = JSON.stringify(payload);
          xhttp.onreadystatechange = function () {
            if (this.readyState == 4 && this.status == 200) {
              console.log(this.responseText);
              console.log(typeof this.responseText);
              popupStatus = false;
              responseSearchData = JSON.parse(this.responseText).data;
            }
            else{
        //      document.getElementById('td1').innerHTML = '<tr>No Data avaliable</tr>';

            }
          };
          xhttp.open("POST", "/getDriverRouteDataWithSrcDesAndTime", true);
          xhttp.setRequestHeader("Content-type", "application/json");
          xhttp.send(payloadString);
          tdData='';
          responseSearchData.forEach((element,inx) => {
          // let timeData = element.starttime.split("_");

          tdData +=  '<tr class="openmodale" onClick="clickTableRow('+inx+')" ><td class="openmodale">'+element.name+'</td>'+
          '<td class="openmodale">'+element.source+'</td>'+
          '<td class="openmodale">'+element.destination+'</td>'+
          '<td class="openmodale">'+element.starttime+'</td>'
          if(selectedIndex != inx){
            tdData += '<td class="openmodale">Inactive</td>'
          }
//          else if(element.rideStatus == 1){
//            tdData += '<td class="openmodale" style="color:yellow">In Progress</td>'
//          }
          else if(selectedIndex == inx){
            tdData += '<td class="openmodale" style="color:green">Active</td>'
          }
          else{
            tdData += '<td class="openmodale"></td>'
          }
          tdData +='</tr>';
        });
        document.getElementById('td1').innerHTML = tdData
        }
        else {
          launch_toast("toast1", res?.data?.info);
//          document.getElementById("desc1").innerHTML = res?.data?.info;
          $('.modaleCancel').removeClass('opened');
        }
      }
      // else{
      //   launch_toast("toast1", "Error on ride booking.");
      // }
    };
    xhttp.open("POST", "/deleteDriveRouteDataWithRiderName", true);
    xhttp.setRequestHeader("Content-type", "application/json");
    xhttp.send(payloadString);
}
$(document).ready(function(){

   $('.timepicker-12-hr').wickedpicker();

});