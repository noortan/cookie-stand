'use strict';
/*let time = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'];
let shop1 = {
    name: 'Seattle',
    MinCust: 23,
    MaxCust: 65,
    AvgCookieSale: 6.3,
    total: 0,
    cosTom: [],
    amounts: function () {
        for (let i = 0; i <= time.length; i++) {

            this.cosTom[i] = (Math.floor(randum(this.MinCust, this.MaxCust) * this.AvgCookieSale));
        }
        return this.cosTom;
    },
    firstResut: function () { 
        let seattleShop = document.getElementById('purchased');
        let header = document.createElement('h2');
        seattleShop.appendChild(header);
        header.textContent = shop1.name;

        let ulList = document.createElement('ul');
        seattleShop.appendChild(ulList);
        for (let i = 0; i < shop1.cosTom.length; i++) {
            let lilist = document.createElement('li');
            ulList.appendChild(lilist);
            lilist.textContent = `${time[i]} : ${shop1.cosTom[i]} cookies`;
            shop1.total = shop1.total + shop1.cosTom[i];
            if (i == 14) {
                lilist.textContent = `total : ${shop1.total} cookies`;
            }
        }


    }

}
function randum(min, max) {
    return Math.floor(Math.random() * (max - min) + min);

}
shop1.amounts()
console.log(shop1.cosTom);
shop1.firstResut();


let shop2 = {
    name: 'Tokyo',
    MinCust: 3,
    MaxCust: 24,
    AvgCookieSale:1.2,
    total: 0,
    cosTom: [],
    amounts: function () {
        for (let i = 0; i <= time.length; i++) {

            this.cosTom[i] = (Math.floor(randum(this.MinCust, this.MaxCust) * this.AvgCookieSale));
        }
        return this.cosTom;
    },
    firstResut: function () {
        let tokyoShop = document.getElementById('purchased');
        let header = document.createElement('h2');
        tokyoShop.appendChild(header);
        header.textContent = shop2.name;

        let ulList = document.createElement('ul');
        tokyoShop.appendChild(ulList);
        for (let i = 0; i < shop2.cosTom.length; i++) {
            let lilist = document.createElement('li');
            ulList.appendChild(lilist);
            lilist.textContent = `${time[i]} : ${shop2.cosTom[i]} cookies`;
            shop2.total = shop2.total + shop2.cosTom[i];
            if (i == 14) {
                lilist.textContent = `total : ${shop2.total} cookies`;
            }
        }


    }

}
shop2.amounts()
console.log(shop2.cosTom);
shop2.firstResut();

let shop3 = {
    name: 'Dubai',
    MinCust: 11,
    MaxCust: 38	,
    AvgCookieSale:3.7,
    total: 0,
    cosTom: [],
    amounts: function () {
        for (let i = 0; i <= time.length; i++) {

            this.cosTom[i] = (Math.floor(randum(this.MinCust, this.MaxCust) * this.AvgCookieSale));
        }
        return this.cosTom;
    },
    firstResut: function () {
        let dubaiShop = document.getElementById('purchased');
        let header = document.createElement('h2');
        dubaiShop.appendChild(header);
        header.textContent = shop3.name;

        let ulList = document.createElement('ul');
        dubaiShop.appendChild(ulList);
        for (let i = 0; i < shop3.cosTom.length; i++) {
            let lilist = document.createElement('li');
            ulList.appendChild(lilist);
            lilist.textContent = `${time[i]} : ${shop3.cosTom[i]} cookies`;
            shop3.total = shop3.total + shop3.cosTom[i];
            if (i == 14) {
                lilist.textContent = `total : ${shop3.total} cookies`;
            }
        }


    }

}
shop3.amounts()
console.log(shop3.cosTom);
shop3.firstResut();

let shop4 = {
    name: 'Paris',
    MinCust: 38	,
    MaxCust: 24,
    AvgCookieSale:2.3,
    total: 0,
    cosTom: [],
    amounts: function () {
        for (let i = 0; i <= time.length; i++) {

            this.cosTom[i] = (Math.floor(randum(this.MinCust, this.MaxCust) * this.AvgCookieSale));
        }
        return this.cosTom;
    },
    firstResut: function () {
        let parisShop = document.getElementById('purchased');
        let header = document.createElement('h2');
        parisShop.appendChild(header);
        header.textContent = shop4.name;

        let ulList = document.createElement('ul');
        parisShop.appendChild(ulList);
        for (let i = 0; i < shop4.cosTom.length; i++) {
            let lilist = document.createElement('li');
            ulList.appendChild(lilist);
            lilist.textContent = `${time[i]} : ${shop4.cosTom[i]} cookies`;
            shop4.total = shop4.total + shop4.cosTom[i];
            if (i == 14) {
                lilist.textContent = `total : ${shop4.total} cookies`;
            }
        }


    }

}
shop4.amounts()
console.log(shop4.cosTom);
shop4.firstResut();

let shop5 = {
    name: 'Lima',
    MinCust:2,
    MaxCust: 16,
    AvgCookieSale:4.6,
    total: 0,
    cosTom: [],
    amounts: function () {
        for (let i = 0; i <= time.length; i++) {

            this.cosTom[i] = (Math.floor(randum(this.MinCust, this.MaxCust) * this.AvgCookieSale));
        }
        return this.cosTom;
    },
    firstResut: function () {
        let limaShop = document.getElementById('purchased');
        let header = document.createElement('h2');
        limaShop.appendChild(header);
        header.textContent = shop5.name;

        let ulList = document.createElement('ul');
        limaShop.appendChild(ulList);
        for (let i = 0; i < shop5.cosTom.length; i++) {
            let lilist = document.createElement('li');
            ulList.appendChild(lilist);
            lilist.textContent = `${time[i]} : ${shop5.cosTom[i]} cookies`;
            shop5.total = shop5.total + shop5.cosTom[i];
            if (i == 14) {
                lilist.textContent = `total : ${shop5.total} cookies`;
            }
        }


    }

}
shop5.amounts()
console.log(shop5.cosTom);
shop5.firstResut();*/
let timee = ['6 am', '7 am', '8 am', '9 am', '10 am', '11 am', '12 pm', '1 pm', '2 pm', '3 pm', '4 pm', '5 pm', '6 pm', '7 pm'];
let locationshop = [];
let totalloc = 0;

function salmonCookies(name, minCust, maxCust, AvgCookieSale,) {
    this.name = name;
    this.minCust = minCust;
    this.maxCust = maxCust;
    this.AvgCookieSale = AvgCookieSale;

    this.costom = [];
    this.avecookies = [];
    this.total = 0;

    locationshop.push(this);
}
function randum(min, max) {
    return Math.floor(Math.random() * (max - min) + min);
}
salmonCookies.prototype.cosTomperh = function () {
    for (let i = 0; i < timee.length; i++) {
        this.costom[i] = randum(this.minCust, this.maxCust);
    }
    console.log(this.costom);
}
salmonCookies.prototype.averagkoo = function () {
    for (let i = 0; i < this.costom.length; i++) {
        this.avecookies[i] = Math.floor(this.costom[i] * this.AvgCookieSale);
        this.total += this.avecookies[i];
    }
    console.log(this.total);
}

let Parent = document.getElementById('purchased');


let td = document.createElement('table');

Parent.appendChild(td);

function firstResult() {
    let tr = document.createElement('tr')
    td.appendChild(tr);

    let thr = document.createElement('th')
    tr.appendChild(thr);
    thr.textContent = 'Name/time';



    for (let i = 0; i < timee.length; i++) {
        let th = document.createElement('th');
        tr.appendChild(th);
        th.textContent = timee[i];

    }
    let totalth = document.createElement('th');
    tr.appendChild(totalth);
    totalth.textContent = 'daily location total';


}
firstResult();
salmonCookies.prototype.tabledata = function () {
    let datar = document.createElement('tr')
    td.appendChild(datar);

    let indata = document.createElement('td');
    datar.appendChild(indata);
    indata.textContent = this.name;

    for (let i = 0; i < timee.length; i++) {
        let tddata = document.createElement('td');
        datar.appendChild(tddata);
        tddata.textContent = this.avecookies[i];
    }
    let totalfortime = document.createElement('td')
    datar.appendChild(totalfortime);
    totalfortime.textContent = this.total;



}

function tabelfooter() {
    let tabelfooterr = document.createElement('tr');
    td.appendChild(tabelfooterr);

    let footertd = document.createElement('td');
    tabelfooterr.appendChild(footertd);
    footertd.textContent = 'Total';

    for (let i = 0; i < timee.length; i++) {
        let finaLtotel = 0;

        for (let s = 0; s < locationshop.length; s++) {
            finaLtotel += locationshop[s].avecookies[i];

        }

        let totalfooter = document.createElement('td');
        tabelfooterr.appendChild(totalfooter);
        totalfooter.textContent = finaLtotel;
        totalloc += finaLtotel;

    }
    let lastfooterr = document.createElement('td');
    tabelfooterr.appendChild(lastfooterr);
    lastfooterr.textContent = totalloc ;

}
let shop1 = new salmonCookies('Seattle', 23, 65, 6.3);
console.log(shop1);



let shop2 = new salmonCookies('Tokyo', 3, 24, 1.2);



let shop3 = new salmonCookies('Dubai', 11, 38, 3.7);



let shop4 = new salmonCookies('Paris', 20, 38, 2.3);



let shop5 = new salmonCookies('Lima', 2, 16, 4.6);



for (let i = 0; i < locationshop.length; i++) {
    locationshop[i].cosTomperh();
    locationshop[i].averagkoo();
    locationshop[i].tabledata();


}
tabelfooter();