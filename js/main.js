import moneys from "./moneyData.js";

window.convert = () => {
    
    // input
    let from = document.getElementById('from').value;
    let to = document.getElementById('to').value;
    let input = document.getElementById('amount').value;

    if (input == ''){
        document.getElementById('result').innerHTML = 'Nominal belum ditentukan';
        document.getElementById('amount').focus();
        return 0;
    }

    // process
    let findCurrency = (data) => {
        return data.from === from && data.to === to
    };

    let money = moneys.find(findCurrency);

    if (money == null) {
        document.getElementById('result').innerHTML = "Tidak ada data konversi";
    }

    let output = money.convert(input);

    // output
    document.getElementById('result').innerHTML = output;
};

document.getElementById('convert').addEventListener('click', convert);