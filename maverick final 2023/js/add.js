function add1() {
    var emp = document.getElementById('subsandwich').innerHTML;
    if (emp == 'Empty') {
        alert("Please select food")
    } else {
        var snum = parseInt(document.getElementById('sandwich_number').value); // Capture the correct element
        snum = snum * 129;
        document.getElementById('sandwich_price2').innerHTML = "Rs" + snum + ".00";
        bill();
    }
}

function add2() {
    var emp = document.getElementById('subpasta').innerHTML;
    if (emp == 'Empty') {
        alert("Please select food")
    } else {
        var pnum = parseInt(document.getElementById('pasta_number').value); // Capture the correct element
        pnum = pnum * 59;
        document.getElementById('pasta_price2').innerHTML = "Rs" + pnum + ".00";
        bill();
    }
}

function add3() {
    var emp = document.getElementById('subcoffee').innerHTML;
    if (emp == 'Empty') {
        alert("Please select food")
    } else {
        var cnum = parseInt(document.getElementById('coffee_number').value); // Capture the correct element
        cnum = cnum * 90;
        document.getElementById('coffee_price2').innerHTML = "Rs" + cnum + ".00";
        bill();
    }
}

function add4() {
    var emp = document.getElementById('subppizza').innerHTML;
    if (emp == 'Empty') {
        alert("Please select food")
    } else {
        var ppnum = parseInt(document.getElementById('ppizza_number').value); // Capture the correct element
        ppnum = ppnum * 109;
        document.getElementById('ppizza_price2').innerHTML = "Rs" + ppnum + ".00";
        bill();
    }
}

function add5() {
    var emp = document.getElementById('vsubppizza').innerHTML;
    if (emp == 'Empty') {
        alert("Please select food")
    } else {
        var vnum = parseInt(document.getElementById('vpizza_number').value); // Capture the correct element
        vnum = vnum * 99;
        document.getElementById('vpizza_price2').innerHTML = "Rs" + vnum + ".00";
        bill();
    }
}

function add6() {
    var emp = document.getElementById('submocktail').innerHTML;
    if (emp == 'Empty') {
        alert("Please select food")
    } else {
        var mnum = parseInt(document.getElementById('mocktail_number').value); // Capture the correct element
        mnum = mnum * 89;
        document.getElementById('mocktail_price2').innerHTML = "Rs" + mnum + ".00";
        bill();
    }
}

function bill() {
    var p1 = parseInt(document.getElementById('sandwich_price2').innerHTML.replace('Rs', '')) || 0;
    var p2 = parseInt(document.getElementById('pasta_price2').innerHTML.replace('Rs', '')) || 0;
    var p3 = parseInt(document.getElementById('coffee_price2').innerHTML.replace('Rs', '')) || 0;
    var p4 = parseInt(document.getElementById('ppizza_price2').innerHTML.replace('Rs', '')) || 0;
    var p5 = parseInt(document.getElementById('vpizza_price2').innerHTML.replace('Rs', '')) || 0;
    var p6 = parseInt(document.getElementById('mocktail_price2').innerHTML.replace('Rs', '')) || 0;

    var subtotal = p1 + p2 + p3 + p4 + p5 + p6;
    document.getElementById('subtotal').innerHTML = 'Rs' + subtotal + '.00';

    var total = subtotal + 50; // Add Rs. 50 as delivery charge or any additional fee

    if (subtotal == 0) {
        document.getElementById('total').innerHTML = 'Rs00.00';
    } else {
        document.getElementById('total').innerHTML = 'Rs' + total + '.00';
    }
}

function popupbill() {
    var total = document.getElementById('total').innerHTML;

    if (total == 'Rs00.00') {
        alert("You haven't ordered any food.");
    } else {
        localStorage.setItem("total", total);
        alert("Total Bill: " + total);
        window.open('checkout.html');
    }
}
