
'use strict';
let timee = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'];

function Shopcookies(name, minCust, maxCust, AvgCookieSale, time, costom, avecookies, total) {
    this.name = name;
    this.minCust = minCust;
    this.maxCust = maxCust;
    this.AvgCookieSale = AvgCookieSale;
    this.time = time;
    this.costom = costom;
    this.avecookies = avecookies;
    this.total = total;
}
function randum(min, max) {
    return Math.floor(Math.random() * (max - min) + min);
}
Shopcookies.prototype.cosTomperh = function () {
    for (let i = 0; i < this.time.length; i++) {
        this.costom[i] = randum(this.minCust, this.maxCust);
    }
    console.log(this.costom);
}
Shopcookies.prototype.averagkoo = function () {
    for (let i = 0; i < this.costom.length; i++) {
        this.avecookies[i] = Math.floor(this.costom[i] * this.AvgCookieSale);
        this.total += this.avecookies[i];
    }
    console.log(this.total);
}
let Parent = document.getElementById('purchased');
Shopcookies.prototype.firstResult = function () {
    let article = document.createElement('article');
    Parent.appendChild(article);
    let td = document.createElement('td');
    article.appendChild(td);

    for (let i = 0; i < this.time.length; i++) {
        let th = document.createElement('th');
        td.appendChild(th);
        th.textContent = this.time[i];
    }


}

let shop1 = new Shopcookies('Seattle', 23, 65, 6.3, ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'], [], [], 0);
console.log(shop1);
shop1.cosTomperh();
shop1.averagkoo();
shop1.firstResult();

let shop2 = new Shopcookies('Tokyo', 3, 24, 1.2, ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'], [], [], 0);
console.log(shop2);
shop1.cosTomperh();
shop1.averagkoo();

let shop3 = new Shopcookies('Dubai', 11, 38, 3.7, ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'], [], [], 0);
console.log(shop3);
shop1.cosTomperh();
shop1.averagkoo();

let shop4 = new Shopcookies('Paris', 20, 38, 2.3, ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'], [], [], 0);
console.log(shop4);
shop1.cosTomperh();
shop1.averagkoo();

let shop5 = new Shopcookies('Lima', 2, 16, 4.6, ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'], [], [], 0);
console.log(shop5);
shop1.cosTomperh();
shop1.averagkoo();