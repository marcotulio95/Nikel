let logged = sessionStorage.getItem("logged");
const session = localStorage.getItem("session");
const dataUser = localStorage.getItem(logged);

checkLogged();

createTableBody();

function createTableBody() {
    var corpoTabela = document.getElementById('table-transaction');

    const dataUserObj = JSON.parse(dataUser);
    const transactions = dataUserObj.transactions;
    console.log(transactions)
    corpoTabela.innerHTML = '';

    transactions.forEach(function (transaction) {
        var linha = document.createElement('tr');
        linha.innerHTML = `
            <th scope="row">${transaction.date}</th>
            <td>${transaction.value}</td>
            <td>${transaction.type}</td>
            <td>${transaction.description}</td>
        `;
        corpoTabela.appendChild(linha);
    });
}

function checkLogged() {
    if (session) {
        sessionStorage.setItem("logged", session);
        logged = session;
    }
}
if (logged) {
    saveSession(logged, session);

    window.location.href = "transactions.html";
}
