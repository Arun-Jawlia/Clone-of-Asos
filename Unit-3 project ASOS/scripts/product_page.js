import navbar from '../components/navbar.js '
import footer from '../components/footer.js '


document.getElementById("footer").innerHTML=footer()
document.getElementById("navbar").innerHTML=navbar()




let product = [{
        image: 'https://images.asos-media.com/products/asos-design-relaxed-button-down-aztec-stripe-shirt-in-turquoise/201590750-1-green?$n_480w$&wid=476&fit=constrain',
        title: 'ASOS DESIGN relaxed button down aztec stripe shirt in turquiose',
        price: '1799'
    },


    {
        image: 'https://images.asos-media.com/products/asos-design-satin-shirt-with-tie-neck-and-blouson-volume-sleeve-in-jewel-green/202758317-1-jewelgreen?$n_480w$&wid=476&fit=constrain',
        title: 'ASOS DESIGN satin shirt with tie nexk and blouson volume sleeve in jewel',
        price: '2199'
    },


    {
        image: 'https://images.asos-media.com/products/asos-design-revere-floral-shirt-in-light-green/202212334-1-green?$n_480w$&wid=476&fit=constrain',
        title: 'ASOS DESIGN revere floral shirt in light green',
        price: '1499 '
    },


    {
        image: 'https://images.asos-media.com/products/asos-design-relaxed-revere-shirt-in-beige-knitted-stripe/202327319-1-beige?$n_480w$&wid=476&fit=constrain',
        title: 'ASOS DESIGN relaxed revere shirt in beige knitted stripe',
        price: '2699 '
    },



    // 5
    {
        image: 'https://images.asos-media.com/products/new-look-long-sleeve-poplin-shirt-in-white/202030023-1-white?$n_480w$&wid=476&fit=constrain',
        title: 'New Look long sleeve poplin shirt in white',
        price: '999 '
    },



    {
        image: 'https://images.asos-media.com/products/new-look-short-sleeve-poplin-shirt-in-white/203128915-1-white?$n_480w$&wid=476&fit=constrain',
        title: 'New Look short sleeve poplin shirt in white',
        price: '899'
    },



    // 7
    {
        image: 'https://images.asos-media.com/products/new-look-long-sleeve-grandad-poplin-shirt-in-white/201351710-1-white?$n_480w$&wid=476&fit=constrain',
        title: 'New Look long sleeve grandad poplin shirt in white',
        price: '899'
    },



    {
        image: 'https://images.asos-media.com/products/new-look-short-sleeve-poplin-shirt-in-black/203128655-1-black?$n_480w$&wid=476&fit=constrain',
        title: 'New Look short sleeve poplin shirt in black',
        price: '799 '
    },


    // 9
    {
        image: 'https://images.asos-media.com/products/asos-design-relaxed-revere-shirt-in-linen-mix-with-embroidered-border/202374900-1-beige?$n_480w$&wid=476&fit=constrain',
        title: 'ASOS DESIGN relaxed revere shirt in linen mix with embroidered border',
        price: '3299 '
    },



    {
        image: 'https://images.asos-media.com/products/asos-design-boxy-oversized-shirt-in-blue-and-green-patchwork-stripe/202579175-1-blue?$n_480w$&wid=476&fit=constrain',
        title: 'ASOS DESIGN boxy oversized shirt in blue and green patchwork stripe',
        price: '2199'
    },


    // 11
    {
        image: 'https://images.asos-media.com/products/asos-design-relaxed-revere-satin-shirt-with-paisley-placement-print/202579300-1-multi?$n_480w$&wid=476&fit=constrain',
        title: 'ASOS DESIGN relaxed revere satin shirt with paisely placement print',
        price: '2299 '
    },



    {
        image: 'https://images.asos-media.com/products/asos-design-regular-shirt-in-floral-jacquard-with-shawl-neck-in-green/202601356-1-mintgreen?$n_480w$&wid=476&fit=constrain',
        title: 'ASOS DESIGN regular shirt in floral jacquard with shawl neck in green',
        price: '2399 '
    },


    //13

    {
        image: 'https://images.asos-media.com/products/asos-design-skinny-cropped-shirt-with-70s-collar-in-knitted-geo-pattern/202681264-1-green?$n_480w$&wid=476&fit=constrain',
        title: 'ASOS DESIGN skinny cropped shirt with 70s collar in knitted geo pattern',
        price: '2199 '
    },



    {
        image: 'https://images.asos-media.com/products/asos-design-longline-sheer-shirt-with-tie-front-fastening-in-black/202758314-1-black?$n_480w$&wid=476&fit=constrain',
        title: 'ASOS DESIGN longline sheer shirt with tie front fastening in black',
        price: '2399 '
    },


    //15
    {
        image: 'https://images.asos-media.com/products/gant-icon-logo-slim-fit-oxford-shirt-button-down-in-light-blue/202832772-1-lightblue?$n_480w$&wid=476&fit=constrain',
        title: 'GANT icon logo slim fit oxford shirt button down in light blue',
        price: '6999'
    },



    {
        image: 'https://images.asos-media.com/products/hugo-ebor-all-over-logo-print-short-sleeve-shirt-in-white/202583829-1-white?$n_480w$&wid=476&fit=constrain',
        title: 'Hugo Ebor all over logo print short sleeve shirt in white',
        price: '7799'
    },



    //17
    {
        image: 'https://images.asos-media.com/products/asos-design-relaxed-viscose-shirt-with-revere-collar-in-pink/201620290-1-pink?$n_320w$&wid=317&fit=constrain',
        title: 'ASOS DESIGN relaxed viscose shirt with revere collar in pink',
        price: '1599 '
    },



    {
        image: 'https://images.asos-media.com/products/asos-design-relaxed-revere-linen-mix-shirt-in-scribble-conversational-print/202212414-1-beige?$n_320w$&wid=317&fit=constrain',
        title: 'ASOS DESIGN relaxed revere linen mix shirt in scribble conversational print',
        price: '2199 '
    },


    //19
    {
        image: 'https://images.asos-media.com/products/asos-design-boxy-oversized-revere-shirt-in-patchwork-cloud-and-stripe-print/202579197-1-white?$n_320w$&wid=317&fit=constrain',
        title: 'ASOS DESIGN boxy oversized revere shirt in patchwork cloud and stripe print',
        price: '2199. '
    },



    {
        image: 'https://images.asos-media.com/products/asos-design-90s-oversized-linen-shirt-in-white/201620233-1-white?$n_320w$&wid=317&fit=constrain',
        title: 'ASOS DESIGN 90s oversized linen shirt in white',
        price: '2299 '
    },


    // 21
    {
        image: 'https://images.asos-media.com/products/hugo-evito-slim-fit-long-sleeve-cotton-shirt-in-blue/202583876-1-blue?$n_320w$&wid=317&fit=constrain',
        title: 'Hugo Evito slim fit long sleeve cotton shirt in blue',
        price: '5599 '
    },



    {
        image: 'https://images.asos-media.com/products/hugo-evito-slim-fit-long-sleeve-cotton-shirt-in-navy/202584062-1-navy?$n_320w$&wid=317&fit=constrain',
        title: 'Hugo Evito slim fit long sleeve cotton shirt in navy',
        price: '5599 '
    },


    // 23
    {
        image: 'https://images.asos-media.com/products/farah-floral-shirt-in-navy/202628329-1-navy?$n_320w$&wid=317&fit=constrain',
        title: 'Farah floral shirt in navy',
        price: '5199 '
    },



    {
        image: 'https://images.asos-media.com/products/boss-casual-mabsoot-oxford-shirt-in-white/202690138-1-white?$n_320w$&wid=317&fit=constrain',
        title: 'Boss Casual Mabsoot oxford shirt in white',
        price: '6199 '
    },


    {
        image: 'https://images.asos-media.com/products/asos-design-boxy-oversized-shirt-in-bright-green-zebra-print/202652130-1-green?$n_320w$&wid=317&fit=constrain',
        title: 'ASOS DESIGN boxy oversized shirt in bright green zebra print',
        price: '2199 '
    },

    {
        image: 'https://images.asos-media.com/products/asos-design-regular-linen-shirt-with-roll-sleeve-in-yellow/201595108-1-yellow?$n_320w$&wid=317&fit=constrain',
        title: 'ASOS DESIGN regular linen shirt with roll sleeve in yellow',
        price: '2099'
    },

    {
        image: 'https://images.asos-media.com/products/collusion-unisex-shirt-in-floral-print-co-ord/201865985-1-black?$n_320w$&wid=317&fit=constrain',
        title: 'COLLUSION Unisex shirt in floral print co-ord',
        price: '1499'
    },

    {
        image: 'https://images.asos-media.com/products/asos-design-slim-denim-shirt-in-light-wash/202082425-1-lightwash?$n_320w$&wid=317&fit=constrain',
        title: 'ASOS DESIGN slim denim shirt in light wash',
        price: '1400'
    },

    {
        image: 'https://images.asos-media.com/products/asos-design-skinny-satin-shirt-in-black/200505973-1-black?$n_320w$&wid=317&fit=constrain',
        title: 'ASOS DESIGN skinny satin shirt in black',
        price: '2199'
    },

    {
        image: 'https://images.asos-media.com/products/asos-design-relaxed-revere-linen-mix-shirt-in-white-with-floral-border/202374881-1-white?$n_320w$&wid=317&fit=constrain',
        title: 'ASOS DESIGN relaxed revere linen mix shirt in white with floral border',
        price: '2199'
    },

    {
        image: 'https://images.asos-media.com/products/asos-design-revere-shirt-in-abstract-horse-print/201866515-1-blue?$n_320w$&wid=317&fit=constrain',
        title: 'ASOS DESIGN revere shirt in abstract horse print',
        price: '1400'
    },

    {
        image: 'https://images.asos-media.com/products/new-look-short-sleeve-revere-collar-shirt-with-abstract-print-in-navy/203002905-1-navy?$n_320w$&wid=317&fit=constrain',
        title: 'New Look short sleeve revere collar shirt with abstract print in navy',
        price: '1499'
    },

    {
        image: 'https://images.asos-media.com/products/asos-design-relaxed-revere-satin-shirt-with-pattern-border/202579282-1-multi?$n_320w$&wid=317&fit=constrain',
        title: 'ASOS DESIGN relaxed revere satin shirt with pattern border',
        price: '2399'
    },

    {
        image: 'https://images.asos-media.com/products/asos-design-relaxed-shirt-in-yellow-and-lime-hand-painted-check/202249066-1-yellow?$n_320w$&wid=317&fit=constrain',
        title: 'ASOS DESIGN relaxed shirt in yellow and lime hand painted check',
        price: '1599'
    },

    {
        image: 'https://images.asos-media.com/products/collusion-unisex-denim-utility-shirt-in-blue-co-ord/202591109-1-midblue?$n_320w$&wid=317&fit=constrain',
        title: 'COLLUSION Unisex denim utility shirt in blue co-ord',
        price: '2299'
    },

    {
        image: 'https://images.asos-media.com/products/asos-design-relaxed-double-breasted-shirt-in-textured-cotton/201931903-1-white?$n_320w$&wid=317&fit=constrain',
        title: 'ASOS DESIGN relaxed double breasted shirt in textured cotton',
        price: '2199'
    },

]


let display = (data) => {

    console.log(data)

    let container = document.getElementById("containers")
    container.innerHTML=""
    data.forEach((el, index) => {
        let div = document.createElement('div')
        let image = document.createElement('img')
        image.src = el.image

        let title = document.createElement('p')
        title.innerText = el.title

        let div2 = document.createElement('div')

        let price = document.createElement('h5')
        price.innerText = `Rs. ${el.price}`



        div2.append(title)
        div.append(image, div2, price)
        div.addEventListener('click', function () {
            myShoWCase(el, index)
        })

        container.append(div)



    })



}
display(product)


let myShoWCase = (el, index) => {
    // console.log(el)
    // console.log( index)
    localStorage.setItem('product', JSON.stringify(el))
    window.location.href = 'show_case.html'
}


document.getElementById('HTL').addEventListener('click', hightolow)
document.getElementById('LTH').addEventListener('click',lowtohigh)

// price high to low
function hightolow()
{
    product.sort(function(a,b)
    {
         return b.price - a.price
    })
    display(product)
}

// Price low to high
function lowtohigh()
{
    product.sort(function(a,b)
    {
         return a.price - b.price
    })
    display(product)
}