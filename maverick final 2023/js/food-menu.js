
    var obj1 = {};
    var obj2 = {};
    var obj3 = {};
    var obj4 = {};
    var obj5 = {};
    var obj6 = {};

    function b1 () {
        obj1.sandwich1 = 'Sandwich';
        obj1.chocolate_sandwich1 = 'Chocolate sandwich';
        obj1.chocolate_sandwich1_price1 = 'Rs129.00';

        alert("Your order placed.")

        localStorage.setItem("chocolate_sandwich1",'Chocolate sandwich')

    }
    /////////////////
    function b2 () {
        obj2.pasta1 = 'Pasta';
        obj2.maverick_special_pasta1 = 'Maverick Special Pasta';
        obj2.maverick_special_pasta_price1 = 'Rs59.00';
        
        alert("Your order placed.")

        localStorage.setItem("maverick_special_pasta1",'Maverick Special Pasta')
    }
    //////////////////
    function b3 () {
        obj3.cold_coffee1 = 'Cold coffee';
        obj3.maverick_special_cold_coffee1 = 'Maverick Special Cold coffee';
        obj3.maverick_special_cold_coffee_price1 = 'Rs90.00';

        alert("Your order placed.")

        localStorage.setItem("maverick_special_cold_coffee1",'Maverick Special Cold coffee')
        
    }
    ///////////////////
    function b4 () {
        obj4.pizza1 = 'Pizza';
        obj4.peri_peri_paneer_pizza1 = 'Peri peri paneer pizza';
        obj4.peri_peri_paneer_pizza_price1 = 'Rs109.00';

        alert("Your order placed.")
                
        localStorage.setItem("peri_peri_paneer_pizza1",'Peri peri paneer pizza')
    }
    ///////////////////
    function b5 () {
        obj5.pizza2 = 'Pizza';
        obj5.veggie_paradise_pizza1 = 'Veggie Paradise pizza';
        obj5.veggie_paradise_pizza_price1 = 'Rs99.00';

        alert("Your order placed.")

        localStorage.setItem("veggie_paradise_pizza1",'Veggie Paradise pizza')

    }
    ///////////////////
    function b6 () {

        obj6.mocktail1 = 'Mocktail';
        obj6.green_apple_mocktail1 = 'Green Apple Mocktail';
        obj6.green_apple_mocktail_price1 = 'Rs89.00';

        alert("Your order placed.")

        localStorage.setItem("green_apple_mocktail1",'Green Apple Mocktail')

    }


    function read() {
        //1
        var chocolate_sandwich1 = localStorage.getItem("chocolate_sandwich1");

        if (chocolate_sandwich1 == 'Chocolate sandwich') {
            document.getElementById('subsandwich').innerHTML=chocolate_sandwich1;
            document.getElementById('sandwich_price1').innerHTML='Rs129.00';
            document.getElementById('sandwich_price2').innerHTML='Rs129.00';
        }

        //2
        var maverick_special_pasta1 = localStorage.getItem("maverick_special_pasta1");

        if (maverick_special_pasta1 == 'Maverick Special Pasta') {
            document.getElementById('subpasta').innerHTML=maverick_special_pasta1;
            document.getElementById('pasta_price1').innerHTML='Rs59.00';
            document.getElementById('pasta_price2').innerHTML='Rs59.00';
        }

        //3
        var maverick_special_cold_coffee1 = localStorage.getItem("maverick_special_cold_coffee1");
        
        if (maverick_special_cold_coffee1 == 'Maverick Special Cold coffee') {
            document.getElementById('subcoffee').innerHTML=maverick_special_cold_coffee1;
            document.getElementById('coffee_price1').innerHTML='Rs90.00';
            document.getElementById('coffee_price2').innerHTML='Rs90.00';
        }
        
        //4
        var peri_peri_paneer_pizza1 = localStorage.getItem("peri_peri_paneer_pizza1");
        
        if (peri_peri_paneer_pizza1 == 'Peri peri paneer pizza') {
            document.getElementById('subppizza').innerHTML=peri_peri_paneer_pizza1;
            document.getElementById('ppizza_price1').innerHTML='Rs109.00';
            document.getElementById('ppizza_price2').innerHTML='Rs109.00';
        }
        //5
        var veggie_paradise_pizza1 = localStorage.getItem("veggie_paradise_pizza1");
        
        if (veggie_paradise_pizza1 == 'Veggie Paradise pizza') {
            document.getElementById('vsubppizza').innerHTML=veggie_paradise_pizza1;
            document.getElementById('vpizza_price1').innerHTML='Rs99.00';
            document.getElementById('vpizza_price2').innerHTML='Rs99.00';
        }
        //6
        var green_apple_mocktail1 = localStorage.getItem("green_apple_mocktail1");
        
        if (green_apple_mocktail1 == 'Green Apple Mocktail') {
            document.getElementById('submocktail').innerHTML=green_apple_mocktail1;
            document.getElementById('mocktail_price1').innerHTML='Rs89.00';
            document.getElementById('mocktail_price2').innerHTML='Rs89.00';
        }
}