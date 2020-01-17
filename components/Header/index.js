// STEP 1: Create a header component.
// -----------------------
// Using a function create the component you see below:
//
//  <div class="header">
//    <span class="date">SMARCH 28, 2019</span>
//    <h1>Lambda Times</h1>
//    <span class="temp">98°</span>
//  </div >
// And add it to the DOM in the .header-container component

// let headerContainer = document.querySelector(".header-container");

// function Header() {
//     headerComponent = document.querySelector("div");
//     date = document.querySelector("span");
//     lambdaTimesTitle = document.querySelector("h1");
//     temperature = document.querySelector("span");

//     headerComponent.append(date);
//     headerComponent.append(lambdaTimesTitle);
//     headerComponent.append(temperature);

//     headerComponent.classList.add("header");
//     date.classList.add("date");
//     temperature.classList.add("temp");

//     date.textContent = "MARCH 28, 2019";
//     lambdaTimesTitle.textContent = 'Lambda Times';
//     temperature.textContent = "98°";

//   return headerComponent;
// }



// headerContainer.append(Header());

var container = document.querySelector('.header-container')
function createHeader(){
      div1 = document.createElement('div')
      span1 = document.createElement('span')
      h11 = document.createElement('h1')
      span2 = document.createElement('span')
      div1.appendChild(span1);
      div1.appendChild(h11);
      div1.appendChild(span2);
      div1.classList.add('header')
      span1.classList.add('date')
      span2.classList.add('temp')
      span1.textContent = 'SMARCH 28, 2019';
      h11.textContent = 'Lambda Times';
      span2.textContent = '98°';
      return div1
}
container.appendChild(createHeader())
