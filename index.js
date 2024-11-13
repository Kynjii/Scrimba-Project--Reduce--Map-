import {propertyForSaleArr} from '/properties/propertyForSaleArr.js'
import {placeholderPropertyObj} from '/properties/placeholderPropertyObj.js'

function getPropertyHtml(propertyArr = [placeholderPropertyObj]){
        return propertyArr.map(property=> {
            const {
                propertyLocation,
                priceGBP,
                roomsM2,
                comment,
                image
            } = property
            const totalSize = roomsM2.reduce((a, b) => a + b)            
            return `<section class="card">
                        <img src="${image}">
                        <div class="card-right">
                            <h2>${propertyLocation}</h2>
                            <h3>${priceGBP}</h3>
                            <p>${comment}</p>
                            <h3>${totalSize}m&sup2;</h3>
                        </div>
                    </section> `
        }).join('')        
}

document.getElementById('container').innerHTML = getPropertyHtml(propertyForSaleArr)
