const Voyage_distance = document.getElementById("Voyage_distance");
const km = document.getElementById("km");
const gasoline_types = document.getElementById("gasoline_types");

const Calc = document.getElementById('Calc')

Calc.addEventListener('submit', (e) => {
  e.preventDefault();
})

let fuelType = [
  {
    type: "Gasolina",
    price: 6.22,
  },
  {
    type: "Etanol",
    price: 4.21,
  },
  {
    type: "Diesel",
    price: 6.02,
  },
  {
    type: "Eletricidade",
    price: 0.80,
  },
  {
    type: "Hidrogênio",
    price: 17.00,
  },
  {
    type: "GNV",
    price: 4.00,
  },
  {
    type: "GLP",
    price: 8.35,
  }
];

document.addEventListener('click', (e) => {



  if (e.target.closest("#submit")) {
    if (Voyage_distance.value !== '' && km.value !== '' && gasoline_types.value !== '') {

      console.log(Voyage_distance.value, km.value, gasoline_types.value)
      let resultado = Calcular(Voyage_distance.value, km.value, gasoline_types.value);
      document.querySelector('.result').querySelector('.resultAgo').textContent = resultado






      let insideModalResults = document.querySelector('.insideModalResults');

      //cria o elemento e coloca dentro do modal
      let content = document.createElement('div');
      insideModalResults.appendChild(content)
      content.classList.add('content');

      // cria as 3 variaveis e coloca dentro de content

      let content_variabels = [
        document.createElement('p'),
        document.createElement('p'),
        document.createElement('p')
      ];
      let variables = [
        {
          value: km.value,
          class: 'mediumConsume'
        },
        {
          value: Voyage_distance.value,
          class: 'voyageDistance'
        },
        {
          value: gasoline_types.value,
          class: 'fuelType'
        }   
      ]


      let variablesInContent = document.createElement('div')
      variablesInContent.classList.add('variables');
      for (let i = 0; i < content_variabels.length; i++) {
        const element = content_variabels[i];
        const elementType = variables[i].value;
        const elementClass = variables[i].class;


        console.log(element, elementType)
        element.textContent = elementType;
        element.classList.add(elementClass)
        variablesInContent.appendChild(element);
        console.log(variablesInContent)

      }


      content.appendChild(variablesInContent);


      //cria o resultado

      let viableResult = document.createElement('p')
      viableResult.classList.add('viableResult')
      viableResult.textContent = resultado
      content.appendChild(viableResult)


      console.log(insideModalResults)




      // <!-- <div class="content">
      //     <div class="variables">
      //       <p class="mediumConsume">12</p>
      //       <p class="voyageDistance">100</p>
      //       <p class="fuelType">Gasolina</p>
      //     </div>
      //     <p class="viableResult">16.37</p>
      //   </div> -->

    }
  }


})

function Calcular(x, y, z) {
  // x = distance
  // y = +- km   
  // z = fuel type
  let fuelTypePrice = fuelType.find(i => i.type == z).price;
  let result = (x / y) * fuelTypePrice;
  console.log(x, y, z, result.toFixed(2))
  return result.toFixed(2)
}