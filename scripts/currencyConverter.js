
document.addEventListener('DOMContentLoaded', () => {

    let selected_base = document.querySelector("#baseCurrency").value;
    let selected_currency = document.querySelector("#desiredCurrency").value;
    let desired_amount = document.querySelector("#desiredAmount").value;
    
    let exchange = document.getElementById("exchange");

    exchange.addEventListener("click",()=>{
        [document.querySelector("#baseCurrency").value, document.querySelector("#desiredCurrency").value] = [document.querySelector("#desiredCurrency").value, document.querySelector("#baseCurrency").value];
    })    

    document.querySelector("#getRateButton").onclick = () => {

        selected_base = document.querySelector("#baseCurrency").value;
        selected_currency = document.querySelector("#desiredCurrency").value;
        desired_amount = document.querySelector("#desiredAmount").value;

        var myHeaders = new Headers();
        myHeaders.append("apikey", "nkHHB2EQaYrwQNFQnQVxstDXCUjoCtU1");

        var requestOptions = {
            method: 'GET',
            redirect: 'follow',
            headers: myHeaders
        };

        let from = selected_base;
        let to = selected_currency;
        let amount = desired_amount;
        let fetch_url = `https://api.apilayer.com/currency_data/convert?to=${to}&from=${from}&amount=${amount}`;

        fetch(fetch_url, requestOptions)
        .then(response => response.text())
        .then(data => {
            //console.log(data);
            my_data = JSON.parse(data);
            //console.log(my_data);
            //console.log(my_data.result);
            let exchange_rate = my_data.info.quote.toFixed(4);
            let exchange_result = my_data.result.toFixed(2);
            document.querySelector("#resultDisplay").innerHTML = `New Amount: ${exchange_result}${to}`;
            document.querySelector("#rateDisplay").innerHTML = `Exchange rate: 1${from} to ${exchange_rate}${to}`;
        })
        .catch(error => {
            console.log('Error:', error);
        })

    }

});

