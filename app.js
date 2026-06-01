
// app.js
// GitHub Pages compatible.
// Everything runs in the browser.
// No database required.
// No CORS issues.

const tbody = document.querySelector("#resultTable tbody");
const searchBox = document.getElementById("searchBox");
const recordCount = document.getElementById("recordCount");

function renderTable(data){

    tbody.innerHTML = "";

    data.forEach(r=>{

        tbody.innerHTML += `
        <tr>
            <td data-label="Acct No">${r.AcctNo||""}</td>
            <td data-label="Name">${r.Name||""}</td>
            <td data-label="House No">${r.HouseNo||""}</td>
            <td data-label="Street">${r.StreetName||""}</td>
            <td data-label="Phase">${r.Phase||""}</td>
            <td data-label="Remarks">${r.Remarks||""}</td>
        </tr>`;
    });

    recordCount.innerText =
        `${data.length.toLocaleString()} Records Found`;
}

if(typeof homeowners !== "undefined"){
    renderTable(homeowners);
}

searchBox.addEventListener("keyup", ()=>{

    const q = searchBox.value.toLowerCase();

    const filtered = homeowners.filter(h =>
        (h.Name||"").toLowerCase().includes(q) ||
        (h.AcctNo||"").toLowerCase().includes(q) ||
        (h.HouseNo||"").toLowerCase().includes(q) ||
        (h.StreetName||"").toLowerCase().includes(q) ||
        (h.Phase||"").toLowerCase().includes(q)
    );

    renderTable(filtered);
});
