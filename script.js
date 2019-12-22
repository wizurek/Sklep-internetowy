window.onload = function () {

    let sum = 0.00;

    updateSum(sum);

    let buttons = document.getElementsByClassName('add-to-card');
    for (let button of buttons) {
        button.addEventListener('click', function (e) {
            addToCard(e.target.parentElement);
        });
    }


    document.getElementById('koszyk').addEventListener('click', function (e) {
        if (e.target.classList.contains('remove-product')) {
            removeElement(e.target);
        }
    });

    function addToCard(parentOfProduct) {
        let productToAdd = document.createElement('div');
        productToAdd.classList.add('card-product');
        let productNameToAdd = document.createElement('p');
        let productPriceToAdd = document.createElement('p');
        productPriceToAdd.classList.add('card-product-price');
        let productRemoveButtonToAdd = document.createElement('button');
        productRemoveButtonToAdd.textContent = 'Usuń z koszyka';
        productRemoveButtonToAdd.classList.add('remove-product');




        let nameOfProduct = parentOfProduct.firstElementChild;
        let priceOfProduct = nameOfProduct.nextElementSibling;


        productNameToAdd.textContent = nameOfProduct.textContent;
        productPriceToAdd.textContent = priceOfProduct.textContent;

        productToAdd.appendChild(productNameToAdd);
        productToAdd.appendChild(productPriceToAdd);
        productToAdd.appendChild(productRemoveButtonToAdd);
        document.getElementById('koszyk').appendChild(productToAdd);
        sum += parseFloat(priceOfProduct.textContent);
        updateSum(sum)
    }

    function updateSum(value) {
        document.getElementById('card-sum').textContent = value.toFixed(2);
    }

    function removeElement(clickedElement) {
        let elementToRemove = clickedElement.parentElement;
        document.getElementById('koszyk').removeChild(elementToRemove);
        sum -= parseFloat(clickedElement.previousElementSibling.textContent);
        updateSum(sum);
    }
/*----------------------------------------------------------------------*/

/*  ;

        let wartosc = document.getElementById('name').value;


        if (wartosc.length >= 8) {
            console.log('Poprawna wartość');
            document.getElementById('error').setAttribute('hidden', '');
            e.currentTarget.submit();



        }

    });
};*/


























};
