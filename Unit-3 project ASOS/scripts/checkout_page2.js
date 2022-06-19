 let myadd = JSON.parse(localStorage.getItem('myadd'))
 address(myadd)
 address1(myadd)


 function address(data)
 {
    console.log(data)
    console.log(data.mobile)

    let address = document.getElementById("address")
    let div = document.createElement('div')

    let p1 = document.createElement("p")
    p1.innerText= `${data.firstname} ${data.lastname}`

   //  let p2 = document.createElement("p")
   //  p2.innerText=data.lastname

    let p3 = document.createElement("p")
    p3.innerText= `Mobile: ${data.mobile}`

    let p4 = document.createElement("p")
    p4.innerText=`Address: ${data.address}`

    let p5 = document.createElement("p")
    p5.innerText=`City: ${data.city}`

    let p6 = document.createElement("p")
    p6.innerText=`Country: ${data.county}`

    let p7 = document.createElement('p')
    p7.innerText=`Postcode: ${data.postcode}`

    div.append(p1,p3,p4,p5,p6,p7)
    address.append(div)

 }


 function address1(data)
 {
   //  console.log(data)
   //  console.log(data.mobile)

    let address1= document.getElementById('address1')
    let div = document.createElement('div')

    let p1 = document.createElement("p")
    p1.innerText= `Name: ${data.firstname} ${data.lastname}`

   //  let p2 = document.createElement("p")
   //  p2.innerText=data.lastname

    let p3 = document.createElement("p")
    p3.innerText= `Mobile: ${data.mobile}`

    let p4 = document.createElement("p")
    p4.innerText=`Address: ${data.address}`

    let p5 = document.createElement("p")
    p5.innerText=`City: ${data.city}`

    let p6 = document.createElement("p")
    p6.innerText=`Country: ${data.country}`

    let p7 = document.createElement('p')
    p7.innerText=`Postcode: ${data.postcode}`

    div.append(p1,p3,p4,p5,p6,p7)
    address1.append(div)

 }



var date = new Date()
date.setDate(date.getDate()+1)


var date2 = new Date()
date2.setDate(date2.getDate()+2)

document.getElementById("date").append(`Delivery on or before:- ${date}`)
document.getElementById("date2").append(`Delivery on or before:- ${date2}`)

 
//  console.log(date)
//  console.log(date2)





//  My Cart Product

let email = JSON.parse(localStorage.getItem('ASOSdata'))
dis(email)
function dis(data)
{
   document.getElementById('email').innerText=data.email
}


let total = JSON.parse(localStorage.getItem('totalprice'))
console.log(total)

document.querySelector('.card-container').innerText=`Total Price: Rs. ${total}`


// Email Function

function placeorder()
{
   alert(`Order Place Successfully. Total Price: ${total}`)
   window.location.href='../Construct Week 2/index.html'
}



