let hours = ['6 am', '7 am', '8 am', '9 am', '10 am', '11 am', '12 pm', '1 pm', '2 pm', '3 pm', '4 pm', '5 pm', '6 pm', '7 pm'];
console.log("hello?")
let Seattle = {
  name: 'Seattle',
  min: 23,
  max: 65,
  total: 0,
  cookiesPerHour: [],
  avg: 6.3,


  customersPerHour: function () {
    return Math.floor(Math.random() * (this.max - this.min + 1) + this.min);
  },

  calculateCookiesPerHour: function () {
    for (let i = 0; i < hours.length; i++) {
      let customerThisHour = this.customersPerHour();
      let cookiesSoldThisHour = Math.ceil(customerThisHour * this.avg);
      this.cookiesPerHour.push(cookiesSoldThisHour);
    }
  },

  time: function () {
    let msg = '';
    for (let i = 0; i < hours.length; i++) {
      msg = msg + `\n ${hours[i]} : ${this.cookiesPerHour[i]} cookies `
      this.total += this.cookiesPerHour[i]
    }
    msg = msg + `\n total: ${this.total} cookies`
    console.log(msg);
  },
  render: function () {
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
////////////////////////////////////////////////////////////////////////////
let Tokyo = {
  name: 'Tokyo',
  min: 3,
  max: 24,
  total: 0,
  cookiesPerHour: [],
  avg: 1.2,


  customersPerHour: function () {
    return Math.floor(Math.random() * (this.max - this.min + 1) + this.min);
  },

  calculateCookiesPerHour: function () {
    for (let i = 0; i < hours.length; i++) {
      let customerThisHour = this.customersPerHour();
      let cookiesSoldThisHour = Math.ceil(customerThisHour * this.avg);
      this.cookiesPerHour.push(cookiesSoldThisHour);
    }
  },

  time: function () {
    let msg = '';
    for (let i = 0; i < hours.length; i++) {
      msg = msg + `\n ${hours[i]} : ${this.cookiesPerHour[i]} cookies `
      this.total += this.cookiesPerHour[i]
    }
    msg = msg + `\n total: ${this.total} cookies`
    console.log(msg);
  },
  render: function () {
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
////////////////////////////////////////////////////////////////////////////
let Dubai = {
  name: 'Dubai',
  min: 11,
  max: 38,
  total: 0,
  cookiesPerHour: [],
  avg: 3.7,


  customersPerHour: function () {
    return Math.floor(Math.random() * (this.max - this.min + 1) + this.min);
  },

  calculateCookiesPerHour: function () {
    for (let i = 0; i < hours.length; i++) {
      let customerThisHour = this.customersPerHour();
      let cookiesSoldThisHour = Math.ceil(customerThisHour * this.avg);
      this.cookiesPerHour.push(cookiesSoldThisHour);
    }
  },

  time: function () {
    let msg = '';
    for (let i = 0; i < hours.length; i++) {
      msg = msg + `\n ${hours[i]} : ${this.cookiesPerHour[i]} cookies `
      this.total += this.cookiesPerHour[i]
    }
    msg = msg + `\n total: ${this.total} cookies`
    console.log(msg);
  },
  render: function () {
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
////////////////////////////////////////////////////////////////////////////
let Paris = {
  name: 'Paris',
  min: 20,
  max: 38,
  total: 0,
  cookiesPerHour: [],
  avg: 2.3,


  customersPerHour: function () {
    return Math.floor(Math.random() * (this.max - this.min + 1) + this.min);
  },

  calculateCookiesPerHour: function () {
    for (let i = 0; i < hours.length; i++) {
      let customerThisHour = this.customersPerHour();
      let cookiesSoldThisHour = Math.ceil(customerThisHour * this.avg);
      this.cookiesPerHour.push(cookiesSoldThisHour);
    }
  },

  time: function () {
    let msg = '';
    for (let i = 0; i < hours.length; i++) {
      msg = msg + `\n ${hours[i]} : ${this.cookiesPerHour[i]} cookies `
      this.total += this.cookiesPerHour[i]
    }
    msg = msg + `\n total: ${this.total} cookies`
    console.log(msg);
  },

  render: function () {
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
////////////////////////////////////////////////////////////////////////////
let Lima = {
  name: 'Lima',
  min: 2,
  max: 16,
  total: 0,
  cookiesPerHour: [],
  avg: 4.6,


  customersPerHour: function () {
    return Math.floor(Math.random() * (this.max - this.min + 1) + this.min);
  },

  calculateCookiesPerHour: function () {
    for (let i = 0; i < hours.length; i++) {
      let customerThisHour = this.customersPerHour();
      let cookiesSoldThisHour = Math.ceil(customerThisHour * this.avg);
      this.cookiesPerHour.push(cookiesSoldThisHour);
      console.log(this.cookiesPerHour);
    }
  },

  time: function () {
    let msg = '';
    for (let i = 0; i < hours.length; i++) {
      msg = msg + `\n ${hours[i]} : ${this.cookiesPerHour[i]} cookies `
      this.total += this.cookiesPerHour[i]
    }
    msg = msg + `\n total: ${this.total} cookies`
    console.log(msg);
  },


  render: function () {
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
Seattle.calculateCookiesPerHour();
Seattle.time();
Seattle.render();

Tokyo.calculateCookiesPerHour();
Tokyo.time();
Tokyo.render();

Dubai.calculateCookiesPerHour();
Dubai.time();
Dubai.render();

Paris.calculateCookiesPerHour();
Paris.time();
Paris.render();

Lima.calculateCookiesPerHour();
Lima.time();
Lima.render();




