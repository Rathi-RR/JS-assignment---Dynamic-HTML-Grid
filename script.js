 
        // Main Div
        var mainDiv = document.getElementById('mainDiv')

        var mainTitle = document.createElement('h1')
        mainTitle.classList.add('title')
            var mainTitletext = document.createTextNode('Clothing for Men and Women')
            mainTitle.appendChild(mainTitletext)
            mainDiv.appendChild(mainTitle)

        // Product Grid
        var prodDiv = document.createElement('div');
        prodDiv.id = 'clothing_section'
        prodDiv.className = "card_container"
        mainDiv.appendChild(prodDiv)

        var mainTitle2 = document.createElement('h1')
        mainTitle2.classList.add('title')
            var mainTitletext2 = document.createTextNode('Accessories for Men and Women')
            mainTitle2.appendChild(mainTitletext2)
            mainDiv.appendChild(mainTitle2)
        
         // Product Grid 2

        var prodDiv2 = document.createElement('div');
        prodDiv2.id = 'accessories_section'
        prodDiv2.className = "card_container"
        mainDiv.appendChild(prodDiv2)

        for(var i=0; i<productList.length; i++){
            // console.log(productList productList.length)

            // create card
            var card = document.createElement('div')
            card.className = 'card'
            card.id= productList[i].id
            card.classList.add('card')

            // a tag
            var cardlink = document.createElement('a')
            cardlink.href = '#'
            card.appendChild(cardlink)

            // image
            var cardImgDiv = document.createElement('div')
            cardImgDiv.className = 'cardImg'
            cardlink.appendChild(cardImgDiv)

            var cardImg = document.createElement('img')
            cardImg.src = productList[i].preview;
            cardImg.alt = productList[i].name;
            cardImgDiv.appendChild(cardImg)

            // card details
            var card_desc = document.createElement('div')
            card_desc.className = 'cardDesc'
            cardlink.appendChild(card_desc)

                // headings
                var prodHeading = document.createElement('h3');
                prodHeading.classList.add('card-title')
                prodHeading.innerHTML = productList[i].name
                card_desc.appendChild(prodHeading)

                var prodbrand = document.createElement('h4');
                prodbrand.classList.add('brandname')
                prodbrand.innerHTML = productList[i].brand
                card_desc.appendChild(prodbrand)

                var prodprice = document.createElement('h5');
                prodprice.classList.add('price')
                var prodpricedet = document.createTextNode('Rs ' + productList[i].price)

                prodprice.appendChild(prodpricedet)
                card_desc.appendChild(prodprice)

            prodDiv.appendChild(card)

            if(productList[i].isAccessory === true){
                prodDiv2.appendChild(card)
            }
        }
