// Mobile navigation expansion
function navspread(n) {
    if (n == 1) {
        document.getElementsByClassName('navlist')[0].classList.add("mobile_show")
        document.getElementsByClassName('sanimg')[0].style.display = 'none'
        document.getElementsByClassName('sanimg')[1].style.display = 'block'
        window.scrollTo({
            top: 0,
            // Smooth scroll to top
        });

    } else {
        document.getElementsByClassName('navlist')[0].classList.remove("mobile_show")
        document.getElementsByClassName('sanimg')[0].style.display = 'block'
        document.getElementsByClassName('sanimg')[1].style.display = 'none'
    }
}
// Mobile navigation item click event
function up(n) {
    if (document.getElementsByClassName('navitemlist')[n].style.display != 'block') {
        document.getElementsByClassName('navitemlist')[n].style.display = 'block';
        for(let i=0;i<4;i++){
            if(i!=n){
                document.getElementsByClassName('navitemlist')[i].style.display = 'none';

            }
        }
    } else {
        document.getElementsByClassName('navitemlist')[n].style.display = 'none';
    }
}

// search button function
// when input some relevant letters show the result of searching
//show the search area
function searchbutton() {
    document.getElementsByClassName('searcharea')[0].style.display = 'block';
}
//hide the search area
function errorbutton() {
    document.getElementsByClassName('searcharea')[0].style.display = 'none';

}
//filter for products according to user input
function filter() {
    let products = [
        {
            productName: 'ECO-RAIL-2 POWER SUPPLY 1-PHASE',
            img:'./photo/nav/Rectangle 54.png'
        },
        {
            productName: 'MST 1-PHASE CONTROL AND ISOLATION TRANSFORMER ',
            img: './photo/shoppingcart/proudct1.png'
        },
        {
            productName: 'MTS 1-PHASE SAFETY TRANSFORMER',
            img: './photo/shoppingcart/proudct2.png'
        },
    ]
    //Get the text entered by the user in the search box
    var string = document.getElementsByClassName('searchinput')[0].value;
    // Get the div element used to display the results
    var divElement = document.getElementsByClassName("result")[0];
    divElement.innerHTML = ''
    //Find products containing search string
    for (let i = 0; i <products.length; i++) {
        if (products[i].productName.toLowerCase().includes(string)) {
            //Create a new div element to display found products
            const resultItem = document.createElement('div');
            resultItem.classList.add('result-item'); 
            const imgElement = document.createElement('img');
            imgElement.src = products[i].img;
            //Create a p element so that its text is the product name
            const pElement = document.createElement('p');
            pElement.classList.add('productName'); 
            pElement.textContent = products[i].productName; 
            //Add image and name to results div
            resultItem.appendChild(imgElement);
            resultItem.appendChild(pElement);
            divElement.appendChild(resultItem);
        }
    }
}

