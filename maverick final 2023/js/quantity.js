function quantity() {
    var sandwich_number = document.getElementById("sandwich_number").value;
    var pasta_number = document.getElementById("pasta_number").value;
    var coffee_number = document.getElementById("coffee_number").value;
    var ppizza_number = document.getElementById("ppizza_number").value;
    var vpizza_number = document.getElementById("vpizza_number").value;
    var mocktail_number  = document.getElementById("mocktail_number").value;

    alert(sandwich_number)

    if (sandwich_number != 0 && localStorage.getItem("chocolate_sandwich1") == 'Chocolate sandwich') {
        localStorage.setItem("sandwich_quantity",sandwich_number);
    }

    if (pasta_number != 0 && localStorage.getItem("maverick_special_pasta1") == 'Maverick Special Pasta') {
        localStorage.setItem("pasta_quantity",pasta_number);
    }
    if (coffee_number != 0 && localStorage.getItem("maverick_special_cold_coffee1") == 'Maverick Special Cold coffee') {
        localStorage.setItem("coffee_quantity",coffee_number);
    }
    if (vpizza_number != 0 && localStorage.getItem("veggie_paradise_pizza1") == 'Veggie Paradise pizza') {
        localStorage.setItem("vpizza_quantity",vpizza_number);
    }

    if (ppizza_number != 0 && localStorage.getItem("peri_peri_paneer_pizza1") == 'Peri peri paneer pizza') {
        localStorage.setItem("ppizza_quantity",ppizza_number);
    }
    if (mocktail_number != 0 && localStorage.getItem("green_apple_mocktail1") == 'Green Apple Mocktai') {
        localStorage.setItem("mocktail_quantity",mocktail_number);
    }
   
    
    
    



}