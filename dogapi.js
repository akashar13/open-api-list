
      function b(){
        document.getElementById("cardie").style.display="none";
        document.getElementById("scro").style.display="block";

  const url = "https://api.thedogapi.com/v1/breeds?limit=15&page=0";
  fetch(url)
.then((resp) => resp.json()).then(data=>{
// var tab=document.getElementById("tab");
n=0;
while (tab.rows.length != 0) {
  tab.deleteRow(0);
  
}
data.forEach(x => {
 
  var AddRown = document.getElementById('tab');
  var NewRow = AddRown.insertRow(n);
  var cel1 = NewRow.insertCell(0);
var cel2 = NewRow.insertCell(1);
var cel3 = NewRow.insertCell(2);
var cel4 = NewRow.insertCell(3);

  


cel1.innerHTML =`<img src="${x.image.url}" class=img-thumbnail style="width:100px;height:80px">`;
cel2.innerHTML = x.name;
cel3.innerHTML =x.bred_for;
// console.log(cel1.innerHTML = x.name)
 
  cel4.innerHTML = `
 <button type="submit" class=btn btn-dark onclick=Modal(${x}) data-toggle="modal" data-target="#view" style="width:40px; height:40px"><i class="fa fa-eye" aria-hidden="true"></i>
</button>


  `
  console.log(x)
  n++;
  


})
tablehead();
})}

function Modal(x){
  $('#view').modal('show');
  console.log(x);
  var tab=document.getElementById("tabi");
  for (var property in x) {
    //output +=  + ': ' + x[property]+'; ';
   var row = tab.insertRow(0);
   var cell1 = row.insertCell(0);
   var cell2 = row.insertCell(1);
   cell1.innerHTML =  property.toUpperCase();
   cell2.innerHTML =  `<h6>${x[property]}</h6>`;
}
}


function d(){
  document.getElementById("cardie").style.display="none";
  document.getElementById("scro").style.display="block";
  const url = "http://makeup-api.herokuapp.com/api/v1/products.json?brand=maybelline";
  fetch(url)
.then((resp) => resp.json()).then(data=>{
// var tab=document.getElementById("tab");
n=0;

while (tab.rows.length != 0) {
  tab.deleteRow(0);
  
}
data.forEach(x => {
 
  var AddRown = document.getElementById('tab');

  var NewRow = AddRown.insertRow(n);
  var cel1 = NewRow.insertCell(0);
var cel2 = NewRow.insertCell(1);
var cel3 = NewRow.insertCell(2);
var cel4 = NewRow.insertCell(3);
var cel5 = NewRow.insertCell(4);

  


cel1.innerHTML =`<img src="${x.image_link}" class=img-thumbnail style="width:100px;height:80px">`;
cel2.innerHTML = x.name;
cel3.innerHTML =x.price;
cel4.innerHTML =x.brand;

 
  cel5.innerHTML = `
 <button type="submit" class=btn btn-dark onclick=thisview(${n}) data-toggle="modal" data-target="#view" style="width:40px; height:40px"><i class="fa fa-eye" aria-hidden="true"></i>
</button>


  `
  console.log(x)
  n++;
  


})
tablehead2();
})}



function tablehead(){
  var AddRown = tab.createTHead();
          var NewRow = AddRown.insertRow(0);
          var cel1 = NewRow.insertCell(0);
    var cel2 = NewRow.insertCell(1);
    var cel3 = NewRow.insertCell(2);
          var cel4 = NewRow.insertCell(3);
     
          cel1.innerHTML=`<h4> Image</h4>`
          cel2.innerHTML=`<h4> Name</h4>`
          cel3.innerHTML=`<h4> Breed for</h4>`
          cel4.innerHTML=`<h4>Action</h4>`
        
}




function tablehead3(){
  var AddRown = tab.createTHead();
          var NewRow = AddRown.insertRow(0);
          var cel1 = NewRow.insertCell(0);
    var cel2 = NewRow.insertCell(1);
    var cel3 = NewRow.insertCell(2);
          var cel4 = NewRow.insertCell(3);
          
          cel1.innerHTML=`<h4> Image</h4>`
          cel2.innerHTML=`<h4> Name</h4>`
          cel3.innerHTML=`<h4> Temperament</h4>`
          cel4.innerHTML=`<h4>Action</h4>`
          // cel5.innerHTML=`<h6> Rate</h6>`
          // cel6.innerHTML=`<h6> Action</h6>`
}








function tablehead2(){
  var AddRown = tab.createTHead();
          var NewRow = AddRown.insertRow(0);
          var cel1 = NewRow.insertCell(0);
    var cel2 = NewRow.insertCell(1);
    var cel3 = NewRow.insertCell(2);
          var cel4 = NewRow.insertCell(3);
          var cel5 = NewRow.insertCell(4);
          // var cel6 = NewRow.insertCell(5);

          cel1.innerHTML=`<h4>Image</h4>`
          cel2.innerHTML=`<h4>Name</h4>`
          cel3.innerHTML=`<h4>Price</h4>`
          cel4.innerHTML=`<h4>Brand</h4>`
          cel5.innerHTML=`<h4>Action</h4>
         
           `
          // cel6.innerHTML=`<h6> Action</h6>`
}


function c(){
  document.getElementById("cardie").style.display="none";
  document.getElementById("scro").style.display="block";
  const url = "https://api.thecatapi.com/v1/breeds?limit=5&page=0";
  fetch(url)
.then((resp) => resp.json()).then(data=>{
// var tab=document.getElementById("tab");
n=0;

while (tab.rows.length != 0) {
  tab.deleteRow(0);
  
}
data.forEach(x => {
 
  var AddRown = document.getElementById('tab');

  var NewRow = AddRown.insertRow(n);
  var cel1 = NewRow.insertCell(0);
var cel2 = NewRow.insertCell(1);
var cel3 = NewRow.insertCell(2);
var cel4 = NewRow.insertCell(3);

  


cel1.innerHTML =`<img src="${x.image.url}" class=img-thumbnail style="width:100px;height:80px">`;
cel2.innerHTML = x.name;
cel3.innerHTML =x.temperament;

 
  cel4.innerHTML = `
 <button type="submit" class=btn btn-dark  data-toggle="modal" data-target="#view" style="width:40px; height:40px"><i class="fa fa-eye" aria-hidden="true"></i>
</button>


  `
  console.log(x)
  n++;
  


})
tablehead3();
})}




function e(){
  document.getElementById("cardie").style.display="none";
  document.getElementById("scro").style.display="block";
  const url = "http://makeup-api.herokuapp.com/api/v1/products.json?brand=covergirl&product_type=lipstick";
  fetch(url)
.then((resp) => resp.json()).then(data=>{
// var tab=document.getElementById("tab");
n=0;

while (tab.rows.length != 0) {
  tab.deleteRow(0);
  
}
data.forEach(x => {
 
  var AddRown = document.getElementById('tab');

  var NewRow = AddRown.insertRow(n);
  var cel1 = NewRow.insertCell(0);
var cel2 = NewRow.insertCell(1);
var cel3 = NewRow.insertCell(2);
var cel4 = NewRow.insertCell(3);
var cel5 = NewRow.insertCell(4);

  


cel1.innerHTML =`<img src="${x.image_link}" class=img-thumbnail style="width:100px;height:80px">`;
cel2.innerHTML = x.name;
cel3.innerHTML =x.price;
cel4.innerHTML =x.brand;

 
  cel5.innerHTML = `
 <button type="submit" class=btn btn-dark onclick=thisview(${n}) data-toggle="modal" data-target="#view" style="width:40px; height:40px"><i class="fa fa-eye" aria-hidden="true"></i>
</button>


  `
  console.log(x)
  n++;
  


})
tablehead2();
})}

