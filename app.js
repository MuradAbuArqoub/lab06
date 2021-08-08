let hours = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'];

let Seattle = {
  name: 'Seattle',
  min: 23,
  max: 65,
  total: 0,
  cookiesPerHour:[],
  avg: 6.3,
  

  customersPerHour: function() {
    return Math.floor(Math.random() * (this.max - this.min + 1) + this.min);
  },
  
  calculateCookiesPerHour: function(){ 
    for(let i = 0; i < hours.length; i++){
    let customerThisHour = this.customersPerHour();
    let cookiesSoldThisHour = Math.ceil(customerThisHour * this.avg);
    this.cookiesPerHour.push(cookiesSoldThisHour);
    }
},

  time: function() {
      let msg = '';
      for(let i = 0; i < hours.length; i++){
          msg = msg + `\n ${hours[i]} : ${this.cookiesPerHour[i]} cookies `
          this.total += this.cookiesPerHour[i]
      }
      msg = msg + `\n total: ${this.total} cookies`
      console.log(msg);
  }
  }
////////////////////////////////////////////////////////////////////////////
  let Tokyo = {
    name: 'Tokyo',
    min: 3,
    max: 24,
    total: 0,
    cookiesPerHour:[],
    avg: 1.2,
    
  
    customersPerHour: function() {
      return Math.floor(Math.random() * (this.max - this.min + 1) + this.min);
    },
    
    calculateCookiesPerHour: function(){ 
      for(let i = 0; i < hours.length; i++){
      let customerThisHour = this.customersPerHour();
      let cookiesSoldThisHour = Math.ceil(customerThisHour * this.avg);
      this.cookiesPerHour.push(cookiesSoldThisHour);
      }
  },
  
    time: function() {
        let msg = '';
        for(let i = 0; i < hours.length; i++){
            msg = msg + `\n ${hours[i]} : ${this.cookiesPerHour[i]} cookies `
            this.total += this.cookiesPerHour[i]
        }
        msg = msg + `\n total: ${this.total} cookies`
        console.log(msg);
    }
    }
////////////////////////////////////////////////////////////////////////////
    let Dubai = {
        name: 'Dubai',
        min: 11,
        max: 38,
        total: 0,
        cookiesPerHour:[],
        avg: 3.7,
        
      
        customersPerHour: function() {
          return Math.floor(Math.random() * (this.max - this.min + 1) + this.min);
        },
        
        calculateCookiesPerHour: function(){ 
          for(let i = 0; i < hours.length; i++){
          let customerThisHour = this.customersPerHour();
          let cookiesSoldThisHour = Math.ceil(customerThisHour * this.avg);
          this.cookiesPerHour.push(cookiesSoldThisHour);
          }
      },
      
        time: function() {
            let msg = '';
            for(let i = 0; i < hours.length; i++){
                msg = msg + `\n ${hours[i]} : ${this.cookiesPerHour[i]} cookies `
                this.total += this.cookiesPerHour[i]
            }
            msg = msg + `\n total: ${this.total} cookies`
            console.log(msg);
        }
        }
////////////////////////////////////////////////////////////////////////////
        let Paris = {
            name: 'Paris',
            min: 20,
            max: 38,
            total: 0,
            cookiesPerHour:[],
            avg: 2.3,
            
          
            customersPerHour: function() {
              return Math.floor(Math.random() * (this.max - this.min + 1) + this.min);
            },
            
            calculateCookiesPerHour: function(){ 
              for(let i = 0; i < hours.length; i++){
              let customerThisHour = this.customersPerHour();
              let cookiesSoldThisHour = Math.ceil(customerThisHour * this.avg);
              this.cookiesPerHour.push(cookiesSoldThisHour);
              }
          },
          
            time: function() {
                let msg = '';
                for(let i = 0; i < hours.length; i++){
                    msg = msg + `\n ${hours[i]} : ${this.cookiesPerHour[i]} cookies `
                    this.total += this.cookiesPerHour[i]
                }
                msg = msg + `\n total: ${this.total} cookies`
                console.log(msg);
            }
            }
////////////////////////////////////////////////////////////////////////////
            let Lima = {
                name: 'Lima',
                min: 2,
                max: 16,
                total: 0,
                cookiesPerHour:[],
                avg: 4.6,
                
              
                customersPerHour: function() {
                  return Math.floor(Math.random() * (this.max - this.min + 1) + this.min);
                },
                
                calculateCookiesPerHour: function(){ 
                  for(let i = 0; i < hours.length; i++){
                  let customerThisHour = this.customersPerHour();
                  let cookiesSoldThisHour = Math.ceil(customerThisHour * this.avg);
                  this.cookiesPerHour.push(cookiesSoldThisHour);
                  }
              },
              
                time: function() {
                    let msg = '';
                    for(let i = 0; i < hours.length; i++){
                        msg = msg + `\n ${hours[i]} : ${this.cookiesPerHour[i]} cookies `
                        this.total += this.cookiesPerHour[i]
                    }
                    msg = msg + `\n total: ${this.total} cookies`
                    console.log(msg);
                }
                }
console.log('Seattle');
Seattle.calculateCookiesPerHour();
Seattle.time();

console.log('Tokyo');
Tokyo.calculateCookiesPerHour();
Tokyo.time();

console.log('Dubai');
Dubai.calculateCookiesPerHour();
Dubai.time();

console.log('Paris');
Paris.calculateCookiesPerHour();
Paris.time();

console.log('Lima');
Lima.calculateCookiesPerHour();
Lima.time();

//coundnt finish in time sad

// let container = document.getElementById('container');
// listCookies.appendChild(liEl);

// let h2El = document.createElement('h2');
// h2El.textContent = 'Seattle';

// let pEl = document.createElement('p');
// container.appendChild(pEl);



// foodDiv.appendChild(ulEl);
