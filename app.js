let hours = ['6 am', '7 am', '8 am', '9 am', '10 am', '11 am', '12 pm', '1 pm', '2 pm', '3 pm', '4 pm', '5 pm', '6 pm', '7 pm'];

function city(name, min, max, avg) {
  this.name = name;
  this.min = min;
  this.max = max;
  this.avg = avg;
  this.total = 0;
  this.cookiesPerHour = [];

  this.calculateCookiesPerHour = function () {
    for (let i = 0; i < hours.length; i++) {
      let customerThisHour = Math.floor(Math.random() * (this.max - this.min + 1) + this.min);
      let cookiesSoldThisHour = Math.ceil(customerThisHour * this.avg);
      this.cookiesPerHour.push(cookiesSoldThisHour);
    }
  };
  this.calculateCookiesPerHour();

  this.time = function () {
    let msg = '';
    for (let i = 0; i < hours.length; i++) {
      msg = msg + `\n ${hours[i]} : ${this.cookiesPerHour[i]} cookies `
      this.total += this.cookiesPerHour[i]
    }
    msg = msg + `\n total: ${this.total} cookies`
    console.log(msg);
  };

  this.render = function () {
    let h2EL = document.createElement('h2');
    h2EL.textContent = this.name;
    container.appendChild(h2EL);
    let ulEl = document.createElement('ul');
    container.appendChild(ulEl);
    for (let i = 0; i < hours.length; i++) {
      let liEl = document.createElement('li');
      ulEl.appendChild(liEl);
      liEl.textContent = `${hours[i]} ${this.cookiesPerHour[i]} cookies`;
    }
    let totalEl = document.createElement('li');
    ulEl.appendChild(totalEl);
    totalEl.textContent = `Total ${this.total} cookies`;
  }
}

let city1 = new city('Seattle', 23, 65, 6.3);
// city1.calculateCookiesPerHour();
// city1.time();
// city1.render();

let city2 = new city('Tokyo', 3, 24, 1.2);
// city2.calculateCookiesPerHour();
// city2.time();
// city2.render();

let city3 = new city('Dubai', 11, 38, 3.7);
// city3.calculateCookiesPerHour();
// city3.time();
// city3.render();

let city4 = new city('Paris', 20, 38, 2.3);
// city4.calculateCookiesPerHour();
// city4.time();
// city4.render();

let city5 = new city('Liam', 2, 16, 4.6);
// city5.calculateCookiesPerHour();
// city5.time();
// city5.render();


// let Seattle = {
//   name: 'Seattle',
//   min: 23,
//   max: 65,
//   total: 0,
//   cookiesPerHour: [],
//   avg: 6.3,


//   calculateCookiesPerHour: function () {
//     for (let i = 0; i < hours.length; i++) {
//       let customerThisHour = Math.floor(Math.random() * (this.max - this.min + 1) + this.min);
//       let cookiesSoldThisHour = Math.ceil(customerThisHour * this.avg);
//       this.cookiesPerHour.push(cookiesSoldThisHour);
//     }
//   },

//   time: function () {
//     let msg = '';
//     for (let i = 0; i < hours.length; i++) {
//       msg = msg + `\n ${hours[i]} : ${this.cookiesPerHour[i]} cookies `
//       this.total += this.cookiesPerHour[i]
//     }
//     msg = msg + `\n total: ${this.total} cookies`
//     console.log(msg);
//   },
//   render: function () {
//     let h2EL = document.createElement('h2');
//     h2EL.textContent = this.name;
//     container.appendChild(h2EL);
//     let ulEl = document.createElement('ul');
//     container.appendChild(ulEl);
//     for (let i = 0; i < hours.length; i++) {
//       let liEl = document.createElement('li');
//       ulEl.appendChild(liEl);
//       liEl.textContent = `${hours[i]} ${this.cookiesPerHour[i]} cookies`;
//     }
//     let totalEl = document.createElement('li');
//     ulEl.appendChild(totalEl);
//     totalEl.textContent = `Total ${this.total} cookies`;
//   }
// }

// let Tokyo = {
//   name: 'Tokyo',
//   min: 3,
//   max: 24,
//   total: 0,
//   cookiesPerHour: [],
//   avg: 1.2,


//   customersPerHour: function () {
//     return Math.floor(Math.random() * (this.max - this.min + 1) + this.min);
//   },

//   calculateCookiesPerHour: function () {
//     for (let i = 0; i < hours.length; i++) {
//       let customerThisHour = this.customersPerHour();
//       let cookiesSoldThisHour = Math.ceil(customerThisHour * this.avg);
//       this.cookiesPerHour.push(cookiesSoldThisHour);
//     }
//   },

//   time: function () {
//     let msg = '';
//     for (let i = 0; i < hours.length; i++) {
//       msg = msg + `\n ${hours[i]} : ${this.cookiesPerHour[i]} cookies `
//       this.total += this.cookiesPerHour[i]
//     }
//     msg = msg + `\n total: ${this.total} cookies`
//     console.log(msg);
//   },
//   render: function () {
//     let h2EL = document.createElement('h2');
//     h2EL.textContent = this.name;
//     container.appendChild(h2EL);
//     let ulEl = document.createElement('ul');
//     container.appendChild(ulEl);
//     for (let i = 0; i < hours.length; i++) {
//       let liEl = document.createElement('li');
//       ulEl.appendChild(liEl);
//       liEl.textContent = `${hours[i]} ${this.cookiesPerHour[i]} cookies`;
//     }
//     let totalEl = document.createElement('li');
//     ulEl.appendChild(totalEl);
//     totalEl.textContent = `Total ${this.total} cookies`;
//   }
// }

// let Dubai = {
//   name: 'Dubai',
//   min: 11,
//   max: 38,
//   total: 0,
//   cookiesPerHour: [],
//   avg: 3.7,


//   customersPerHour: function () {
//     return Math.floor(Math.random() * (this.max - this.min + 1) + this.min);
//   },

//   calculateCookiesPerHour: function () {
//     for (let i = 0; i < hours.length; i++) {
//       let customerThisHour = this.customersPerHour();
//       let cookiesSoldThisHour = Math.ceil(customerThisHour * this.avg);
//       this.cookiesPerHour.push(cookiesSoldThisHour);
//     }
//   },

//   time: function () {
//     let msg = '';
//     for (let i = 0; i < hours.length; i++) {
//       msg = msg + `\n ${hours[i]} : ${this.cookiesPerHour[i]} cookies `
//       this.total += this.cookiesPerHour[i]
//     }
//     msg = msg + `\n total: ${this.total} cookies`
//     console.log(msg);
//   },
//   render: function () {
//     let h2EL = document.createElement('h2');
//     h2EL.textContent = this.name;
//     container.appendChild(h2EL);
//     let ulEl = document.createElement('ul');
//     container.appendChild(ulEl);
//     for (let i = 0; i < hours.length; i++) {
//       let liEl = document.createElement('li');
//       ulEl.appendChild(liEl);
//       liEl.textContent = `${hours[i]} ${this.cookiesPerHour[i]} cookies`;
//     }
//     let totalEl = document.createElement('li');
//     ulEl.appendChild(totalEl);
//     totalEl.textContent = `Total ${this.total} cookies`;
//   }
// }

// let Paris = {
//   name: 'Paris',
//   min: 20,
//   max: 38,
//   total: 0,
//   cookiesPerHour: [],
//   avg: 2.3,


//   customersPerHour: function () {
//     return Math.floor(Math.random() * (this.max - this.min + 1) + this.min);
//   },

//   calculateCookiesPerHour: function () {
//     for (let i = 0; i < hours.length; i++) {
//       let customerThisHour = this.customersPerHour();
//       let cookiesSoldThisHour = Math.ceil(customerThisHour * this.avg);
//       this.cookiesPerHour.push(cookiesSoldThisHour);
//     }
//   },

//   time: function () {
//     let msg = '';
//     for (let i = 0; i < hours.length; i++) {
//       msg = msg + `\n ${hours[i]} : ${this.cookiesPerHour[i]} cookies `
//       this.total += this.cookiesPerHour[i]
//     }
//     msg = msg + `\n total: ${this.total} cookies`
//     console.log(msg);
//   },

//   render: function () {
//     let h2EL = document.createElement('h2');
//     h2EL.textContent = this.name;
//     container.appendChild(h2EL);
//     let ulEl = document.createElement('ul');
//     container.appendChild(ulEl);
//     for (let i = 0; i < hours.length; i++) {
//       let liEl = document.createElement('li');
//       ulEl.appendChild(liEl);
//       liEl.textContent = `${hours[i]} ${this.cookiesPerHour[i]} cookies`;
//     }
//     let totalEl = document.createElement('li');
//     ulEl.appendChild(totalEl);
//     totalEl.textContent = `Total ${this.total} cookies`;
//   }
// }

// let Lima = {
//   name: 'Lima',
//   min: 2,
//   max: 16,
//   total: 0,
//   cookiesPerHour: [],
//   avg: 4.6,


//   customersPerHour: function () {
//     return Math.floor(Math.random() * (this.max - this.min + 1) + this.min);
//   },

//   calculateCookiesPerHour: function () {
//     for (let i = 0; i < hours.length; i++) {
//       let customerThisHour = this.customersPerHour();
//       let cookiesSoldThisHour = Math.ceil(customerThisHour * this.avg);
//       this.cookiesPerHour.push(cookiesSoldThisHour);
//       console.log(this.cookiesPerHour);
//     }
//   },

//   time: function () {
//     let msg = '';
//     for (let i = 0; i < hours.length; i++) {
//       msg = msg + `\n ${hours[i]} : ${this.cookiesPerHour[i]} cookies `
//       this.total += this.cookiesPerHour[i]
//     }
//     msg = msg + `\n total: ${this.total} cookies`
//     console.log(msg);
//   },


//   render: function () {
//     let h2EL = document.createElement('h2');
//     h2EL.textContent = this.name;
//     container.appendChild(h2EL);
//     let ulEl = document.createElement('ul');
//     container.appendChild(ulEl);
//     for (let i = 0; i < hours.length; i++) {
//       let liEl = document.createElement('li');
//       ulEl.appendChild(liEl);
//       liEl.textContent = `${hours[i]} ${this.cookiesPerHour[i]} cookies`;
//     }
//     let totalEl = document.createElement('li');
//     ulEl.appendChild(totalEl);
//     totalEl.textContent = `Total ${this.total} cookies`;
//   }
// }

// Seattle.calculateCookiesPerHour();
// Seattle.time();
// Seattle.render();

// Tokyo.calculateCookiesPerHour();
// Tokyo.time();
// Tokyo.render();

// Dubai.calculateCookiesPerHour();
// Dubai.time();
// Dubai.render();

// Paris.calculateCookiesPerHour();
// Paris.time();
// Paris.render();

// Lima.calculateCookiesPerHour();
// Lima.time();
// Lima.render();


let branches = [city1, city2, city3, city4, city5];
function addTable() {
  let hours2 = [' ','6 am', '7 am', '8 am', '9 am', '10 am', '11 am', '12 pm', '1 pm', '2 pm', '3 pm', '4 pm', '5 pm', '6 pm', '7 pm'];
  var myTableDiv = document.getElementById("myDynamicTable");
  var table = document.createElement('TABLE');
  table.border = '1';

  var tableBody = document.createElement('TBODY');
  table.appendChild(tableBody);

  for (var i = 0; i < 1; i++) {
    var tr = document.createElement('TR');
    tableBody.appendChild(tr);
  
  for (var j = 0; j < hours2.length; j++) {
    var td = document.createElement('TD');
    td.width = '75';
    td.appendChild(document.createTextNode(hours2[j]));
    tr.appendChild(td);
  }
}


for (var i = 0; i < branches.length; i++) {
  var tr = document.createElement('TR');
  tableBody.appendChild(tr);

for (var j = 0; j < hours2.length; j++) {
  var td = document.createElement('TD');
  td.width = '75';
  if(j == 0 ){
    td.textContent = branches[i].name;
    tr.appendChild(td);
  }
  else{
    td.textContent = branches[i].cookiesPerHour[j-1];
    tr.appendChild(td);
  }
}
}
myTableDiv.appendChild(table);
}
addTable();

/////////////////////////////////////////////////////

let myForm = document.getElementById("myForm")
    myForm.addEventListener('submit', addShop)
    function addShop(event) {
        event.preventDefault();

        let shopName = event.target.Storename.value;
        let min = event.target.MinimumOrder.value;
        let max = event.target.MaxmumOrder.value;
        let avg = event.target.AvarageSales.value;
        
        let newShop = new city(shopName, min, max, avg);
        branches.push(newShop);
        document.getElementById ('myDynamicTable').innerHTML = 'Added a new location';
        addTable();        
    }

