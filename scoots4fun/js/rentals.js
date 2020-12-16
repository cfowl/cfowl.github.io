// ** POPULATES RENTALS TABLE DATA -- from prices.json ** //
const rentals = "data/prices.json";
fetch(rentals)
  .then(response => response.json())
  .then(json => {
      const rentals = json.vehicle;
      rentals.forEach(x => {
          let table = document.querySelector("#rentals-table tbody");
          let row = document.createElement("tr");
          let model = document.createElement("td");
          let people = document.createElement("td");
          let res3hr = document.createElement("td");
          let resfull = document.createElement("td");
          let walk3hr = document.createElement("td");
          let walkfull = document.createElement("td");

          model.textContent = x.model;
          people.textContent = x.people;
          res3hr.textContent = x.reservation_3hr;
          resfull.textContent = x.reservation_full;
          walk3hr.textContent = x.walkin_3hr;
          walkfull.textContent = x.walkin_full;

          res3hr.setAttribute("class", "table-hide");
          resfull.setAttribute("class", "table-hide");

          row.appendChild(model);
          row.appendChild(people);
          row.appendChild(res3hr);
          row.appendChild(resfull);
          row.appendChild(walk3hr);
          row.appendChild(walkfull);
          table.appendChild(row);
      })
  });