function buildTable(data) {
    const table = document.createElement("table");
  
    const fields = Object.keys(data[0]);
    const headRow = document.createElement("tr");
    fields.forEach(function(field) {
      const headCell = document.createElement("th");
      headCell.appendChild(document.createTextNode(field));
      headRow.appendChild(headCell);
    });
    table.appendChild(headRow);
  
    data.forEach(function(object) {
      const row = document.createElement("tr");
      fields.forEach(function(field) {
        const cell = document.createElement("td");
        cell.appendChild(document.createTextNode(object[field]));
        if (typeof object[field] == "number") {
          cell.style.textAlign = "right";
        }
        row.appendChild(cell);
      });
      table.appendChild(row);
    });
  
    return table;
  }
  
  document.getElementById("mountains")
     .appendChild(buildTable(data));