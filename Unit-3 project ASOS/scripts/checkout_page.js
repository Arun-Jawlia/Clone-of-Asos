
function mycheckout()
{
    // window.location.href='./product_page.html'
    let obj = {
        firstname: document.getElementById('firstname').value,
        lastname: document.getElementById('lastname').value,
        mobile: document.getElementById('mobile').value,
        address: document.getElementById('address').value,
        city: document.getElementById('city').value,
        country: document.getElementById('country').value,
        postcode: document.getElementById('postcode').value

    }

    localStorage.setItem('myadd',JSON.stringify(obj))
    alert('Address Added Successfully')
    window.location.href='./checkout_page2.html'

}