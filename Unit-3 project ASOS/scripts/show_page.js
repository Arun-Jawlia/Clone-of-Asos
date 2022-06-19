import navbar from '../components/navbar.js '
import footer from '../components/footer.js '


document.getElementById("footer").innerHTML=footer()
document.getElementById("navbar").innerHTML=navbar()




let product = [
    {image: 'https://images.asos-media.com/products/asos-design-relaxed-button-down-aztec-stripe-shirt-in-turquoise/201590750-1-green?$n_480w$&wid=476&fit=constrain',
    title: 'ASOS DESIGN ',
    price: '1799'},


    {image: 'https://images.asos-media.com/products/asos-design-satin-shirt-with-tie-neck-and-blouson-volume-sleeve-in-jewel-green/202758317-1-jewelgreen?$n_480w$&wid=476&fit=constrain',
    title: 'ASOS DESIGN',
    price: '2199'},


    {image: 'https://images.asos-media.com/products/asos-design-revere-floral-shirt-in-light-green/202212334-1-green?$n_480w$&wid=476&fit=constrain',
    title: 'ASOS DESIGN',
    price: '1499 '},


    {image: 'https://images.asos-media.com/products/asos-design-relaxed-revere-shirt-in-beige-knitted-stripe/202327319-1-beige?$n_480w$&wid=476&fit=constrain',
    title: 'ASOS DESIGN',
    price: '2699 '},



    // 5
    {image: 'https://images.asos-media.com/products/new-look-long-sleeve-poplin-shirt-in-white/202030023-1-white?$n_480w$&wid=476&fit=constrain',
    title: 'New Look ',
    price: '999 '},



    {image: 'https://images.asos-media.com/products/new-look-short-sleeve-poplin-shirt-in-white/203128915-1-white?$n_480w$&wid=476&fit=constrain',
    title: 'New Look ',
    price: '899'},



    // 7
    {image: 'https://images.asos-media.com/products/new-look-long-sleeve-grandad-poplin-shirt-in-white/201351710-1-white?$n_480w$&wid=476&fit=constrain',
    title: 'New Look',
    price: '899'},



    {image: 'https://images.asos-media.com/products/new-look-short-sleeve-poplin-shirt-in-black/203128655-1-black?$n_480w$&wid=476&fit=constrain',
    title: 'New Look',
    price: '799 '},


    // 9
    {image: 'https://images.asos-media.com/products/asos-design-relaxed-revere-shirt-in-linen-mix-with-embroidered-border/202374900-1-beige?$n_480w$&wid=476&fit=constrain',
    title: 'ASOS DESIGN ',
    price: '3299 '},



    {image: 'https://images.asos-media.com/products/asos-design-boxy-oversized-shirt-in-blue-and-green-patchwork-stripe/202579175-1-blue?$n_480w$&wid=476&fit=constrain',
    title: 'ASOS DESIGN ',
    price: '2199'},


    // 11
    {image: 'https://images.asos-media.com/products/asos-design-relaxed-revere-satin-shirt-with-paisley-placement-print/202579300-1-multi?$n_480w$&wid=476&fit=constrain',
    title: 'ASOS DESIGN ',
    price: '2299 '},



    {image: 'https://images.asos-media.com/products/asos-design-regular-shirt-in-floral-jacquard-with-shawl-neck-in-green/202601356-1-mintgreen?$n_480w$&wid=476&fit=constrain',
    title: 'ASOS DESIGN',
    price: '2399 '},


    //13
    {image: 'https://images.asos-media.com/products/gant-icon-logo-slim-fit-oxford-shirt-button-down-in-light-blue/202832772-1-lightblue?$n_480w$&wid=476&fit=constrain',
    title: 'GANT',
    price: '6999'},

    {image: 'https://images.asos-media.com/products/asos-design-skinny-cropped-shirt-with-70s-collar-in-knitted-geo-pattern/202681264-1-green?$n_480w$&wid=476&fit=constrain',
    title: 'ASOS DESIGN ',
    price: '2199 '},



    {image: 'https://images.asos-media.com/products/asos-design-longline-sheer-shirt-with-tie-front-fastening-in-black/202758314-1-black?$n_480w$&wid=476&fit=constrain',
    title: 'ASOS DESIGN',
    price: '2399 '},


//15



    {image: 'https://images.asos-media.com/products/hugo-ebor-all-over-logo-print-short-sleeve-shirt-in-white/202583829-1-white?$n_480w$&wid=476&fit=constrain',
    title: 'Hugo Ebor',
    price: '7799'},



    //17
    // {image: 'https://images.asos-media.com/products/asos-design-relaxed-viscose-shirt-with-revere-collar-in-pink/201620290-1-pink?$n_320w$&wid=317&fit=constrain',
    // title: 'ASOS DESIGN relaxed viscose shirt with revere collar in pink',
    // price: '1599 '},



    // {image: 'https://images.asos-media.com/products/asos-design-relaxed-revere-linen-mix-shirt-in-scribble-conversational-print/202212414-1-beige?$n_320w$&wid=317&fit=constrain',
    // title: 'ASOS DESIGN relaxed revere linen mix shirt in scribble conversational print',
    // price: '2199 '},


    // //19
    // {image: 'https://images.asos-media.com/products/asos-design-boxy-oversized-revere-shirt-in-patchwork-cloud-and-stripe-print/202579197-1-white?$n_320w$&wid=317&fit=constrain',
    // title: 'ASOS DESIGN boxy oversized revere shirt in patchwork cloud and stripe print',
    // price: '2199. '},



    // {image: 'https://images.asos-media.com/products/asos-design-90s-oversized-linen-shirt-in-white/201620233-1-white?$n_320w$&wid=317&fit=constrain',
    // title: 'ASOS DESIGN 90s oversized linen shirt in white',
    // price: '2299 '},


    // 21
    {image: 'https://images.asos-media.com/products/hugo-evito-slim-fit-long-sleeve-cotton-shirt-in-blue/202583876-1-blue?$n_320w$&wid=317&fit=constrain',
    title: 'Hugo Evito',
    price: '5599 '},



    {image: 'https://images.asos-media.com/products/hugo-evito-slim-fit-long-sleeve-cotton-shirt-in-navy/202584062-1-navy?$n_320w$&wid=317&fit=constrain',
    title: 'Hugo Evito ',
    price: '5599 '},


    // 23
    {image: 'https://images.asos-media.com/products/farah-floral-shirt-in-navy/202628329-1-navy?$n_320w$&wid=317&fit=constrain',
    title: 'Farah floral ',
    price: '5199 '},



    {image: 'https://images.asos-media.com/products/boss-casual-mabsoot-oxford-shirt-in-white/202690138-1-white?$n_320w$&wid=317&fit=constrain',
    title: 'Boss Casual ',
    price: '6199 '},

    
    // {image: 'https://images.asos-media.com/products/asos-design-boxy-oversized-shirt-in-bright-green-zebra-print/202652130-1-green?$n_320w$&wid=317&fit=constrain',
    // title: 'ASOS DESIGN boxy oversized shirt in bright green zebra print',
    // price: '2199 '},

    // {image: 'https://images.asos-media.com/products/asos-design-regular-linen-shirt-with-roll-sleeve-in-yellow/201595108-1-yellow?$n_320w$&wid=317&fit=constrain',
    // title: 'ASOS DESIGN regular linen shirt with roll sleeve in yellow',
    // price: '2099'},

    {image: 'https://images.asos-media.com/products/collusion-unisex-shirt-in-floral-print-co-ord/201865985-1-black?$n_320w$&wid=317&fit=constrain',
    title: 'COLLUSION',
    price: '1499'},

    // {image: 'https://images.asos-media.com/products/asos-design-slim-denim-shirt-in-light-wash/202082425-1-lightwash?$n_320w$&wid=317&fit=constrain',
    // title: 'ASOS DESIGN slim denim shirt in light wash',
    // price: '1400'},

    // {image: 'https://images.asos-media.com/products/asos-design-skinny-satin-shirt-in-black/200505973-1-black?$n_320w$&wid=317&fit=constrain',
    // title: 'ASOS DESIGN skinny satin shirt in black',
    // price: '2199'},

    // {image: 'https://images.asos-media.com/products/asos-design-relaxed-revere-linen-mix-shirt-in-white-with-floral-border/202374881-1-white?$n_320w$&wid=317&fit=constrain',
    // title: 'ASOS DESIGN relaxed revere linen mix shirt in white with floral border',
    // price: '2199'},

    // {image: 'https://images.asos-media.com/products/asos-design-revere-shirt-in-abstract-horse-print/201866515-1-blue?$n_320w$&wid=317&fit=constrain',
    // title: 'ASOS DESIGN revere shirt in abstract horse print',
    // price: '1400'},

    {image: 'https://images.asos-media.com/products/new-look-short-sleeve-revere-collar-shirt-with-abstract-print-in-navy/203002905-1-navy?$n_320w$&wid=317&fit=constrain',
    title: 'New Look',
    price: '1499'},

    {image: 'https://images.asos-media.com/products/asos-design-relaxed-revere-satin-shirt-with-pattern-border/202579282-1-multi?$n_320w$&wid=317&fit=constrain',
    title: 'ASOS DESIGN',
    price: '2399'},

    {image: 'https://images.asos-media.com/products/asos-design-relaxed-shirt-in-yellow-and-lime-hand-painted-check/202249066-1-yellow?$n_320w$&wid=317&fit=constrain',
    title: 'ASOS DESIGN',
    price: '1599' },

    {image: 'https://images.asos-media.com/products/collusion-unisex-denim-utility-shirt-in-blue-co-ord/202591109-1-midblue?$n_320w$&wid=317&fit=constrain',
    title: 'COLLUSION',
    price: '2299'},

    {image: 'https://images.asos-media.com/products/asos-design-relaxed-double-breasted-shirt-in-textured-cotton/201931903-1-white?$n_320w$&wid=317&fit=constrain',
    title: 'ASOS DESIGN ',
    price: 'Rs.2199'},

]


let display =(data) => {
    
    console.log(data)

    let container = document.getElementById("reference_image")
    data.forEach((el)=>
    {
        let div = document.createElement('div')
        let image = document.createElement('img')
        image.src=el.image

        let title = document.createElement('p')
        title.innerText=el.title

        let div2= document.createElement('div')

        let price = document.createElement('h5')
        price.innerText= `Rs. ${el.price}`

        

        div2.append(title)
        div.append(image,price,div2)
        container.append(div)



    })
}
display(product)




let data = JSON.parse(localStorage.getItem('product')) 

let play = (data)=>
{
    console.log(data)
    let div = document.createElement('div')
    let image = document.createElement('img')
    image.src = data.image
    image.style.height='550px'

    div.append(image)
    
    
    
    
    
    let divtag = document.createElement('div')
    divtag.style.padding='20px 60px 0px 30px '
    let h1 = document.createElement("h1")
    h1.innerText= data.title
    h1.style.fontSize='20px'
    h1.style.marginRight = '30px'
    
    let price = document.createElement('h2')
    price.innerText=`Rs. ${data.price}`
    
    
    let color = document.createElement('h3')
    color.innerText= `Colour: Black`
    
    let size = document.createElement('h3')
    size.innerText=`Size `
    
    let size2 =document.createElement('p')
    size2.innerText="M -  Chest 38-40"
    size2.style.display='inlineBlock'
    // size2.style.marginTop = '-20px'
    size2.style.fontSize='14px'
    
    
    
    let button = document.createElement('button')
    button.innerText='ADD TO BAG'
    button.style.padding= '10px 30px 10px 30px'
    button.style.color = 'white'
    button.style.backgroundColor = 'green'
    button.style.cursor='pointer'
    button.style.display='inline'
    button.style.marginTop='10px'
    button.addEventListener('click', ()=>
        {
            myCartFun(data)

        })

    let icon = document.createElement('div')
    icon.innerHTML=  `<span class="material-symbols-outlined">
    favorite
    </span>`

    icon.style.display='flex'
    icon.style.width='30px'
    icon.style.border='1px solid gray'
    icon.style.justifyContent='center'
    icon.style.padding='6px'
    icon.style.margin='-40px 180px 10px '
    icon.style.borderRadius='50px'
    icon.style.cursor='pointer'
    icon.addEventListener('click', ()=>
    {
        myfavFunc(data)
    })


    
    
    divtag.append(h1,price, color,size,size2, button ,icon)
    document.getElementById('card1').append(divtag)
    
    document.getElementById("product_image").append(div)


    let delivery = document.createElement('div')
    delivery.style.marginLeft='30px'
    delivery.style.marginRight='50px'
    delivery.style.marginTop='30px'
    delivery.style.padding='20px'
    delivery.style.border='1px solid gray'
    delivery.style.lineHeight='20px'



    let p = document.createElement('p')
    p.innerText='Free Delivery'
    p.style.padding='5px'
    p.style.border='0px solid black'
    p.style.background="rgb(230, 224, 224)"
    p.style.marginTop='10px'
    p.style.marginBottom='10px'

    let p2 = document.createElement('p')
    p2.innerText='Ts&Cs apply. Learn more '
    p2.style.fontSize='12px'

    let hr = document.createElement('hr')
    hr.style.marginTop='10px'
    hr.style.marginBottom='10px'

     let p3 = document.createElement('p')
     p3.innerText='This product has shipping restrictions'
     p3.style.textDecoration='underLine'
     p3.style.cursor='pointer'
     p3.style.marginTop='10px'
    p3.style.marginBottom='10px'

     

     delivery.append(p,p2,hr,p3)

     document.getElementById('card2').append(delivery)
    
}
play(data)


//  My Back to top function

document.getElementById('btt').addEventListener('click', ()=>
{
    document.documentElement.scrollTop = 0
})



// My cart function


let mycartArr = JSON.parse(localStorage.getItem('mycart')) ||[]
function myCartFun(data)
{
    mycartArr.push(data)
    localStorage.setItem('mycart', JSON.stringify(mycartArr))
    
    alert('Successfully Add to cart')
}




//  My favourite function

let myfavArr= JSON.parse(localStorage.getItem('myfavourite')) || []
function myfavFunc(data)
{
    myfavArr.push(data)
    localStorage.setItem('myfavourite', JSON.stringify(myfavArr))
    alert('Successfully Add to favourite')
}