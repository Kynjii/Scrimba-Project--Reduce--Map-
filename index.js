import {propertyForSaleArr} from '/properties/propertyForSaleArr.js'
import {placeholderPropertyObj} from '/properties/placeholderPropertyObj.js'


function getPropertyHtml(propertyArr){
    if (!propertyArr){
        const totalSize = placeholderPropertyObj.roomsM2.reduce((sum, room) => sum + room, 0)
        return `<section class="card">
                    <img src="${placeholderPropertyObj.image}">
                    <div class="card-right">
                        <h2>${placeholderPropertyObj.propertyLocation}</h2>
                        <h3>${placeholderPropertyObj.priceGBP}</h3>
                        <p>${placeholderPropertyObj.comment}</p>
                        <h3>${totalSize}m&sup2;</h3>
                    </div>
                </section>`
    }
    else {
        const propertiesArr = propertyForSaleArr.map(function(property){
            const totalSize = property.roomsM2.reduce((sum, room) => sum + room, 0)            
            return `<section class="card">
                        <img src="${property.image}">
                        <div class="card-right">
                            <h2>${property.propertyLocation}</h2>
                            <h3>${property.priceGBP}</h3>
                            <p>${property.comment}</p>
                            <h3>${totalSize}m&sup2;</h3>
                        </div>
                    </section> `
        }).join('')
        return propertiesArr
    }      
}

document.getElementById('container').innerHTML = getPropertyHtml(propertyForSaleArr)



