
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
            <td>${r.AcctNo||""}</td>
            <td>${r.Name||""}</td>
            <td>${r.HouseNo||""}</td>
            <td>${r.StreetName||""}</td>
            <td>${r.Phase||""}</td>
            <td>${r.Remarks||""}</td>
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
