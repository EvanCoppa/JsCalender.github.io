function openForm() {
  document.getElementById("myForm").style.display = "block";
}

function closeForm() {
  document.getElementById("myForm").style.display = "none";
}

months = [
  new Month("January", 31),
  new Month("February", 28),
  new Month("March", 31),
  new Month("April", 30),
  new Month("May", 31),
  new Month("June", 30),
  new Month("July", 31),
  new Month("August", 31),
  new Month("September", 30),
  new Month("October", 31),
  new Month("November", 30),
  new Month("December", 31),
];

days = ["M", "T", "W", "T", "F", "S", "S"];

function Month(name, days) {
  this.monthName = name;
  this.numOfDays = days;
  this.array = [];
}

function populate() {
  tables = [
    document.getElementById("calenderTable"),
    document.getElementById("calenderTable2"),
    document.getElementById("calenderTable3"),
    document.getElementById("calenderTable4"),
    document.getElementById("calenderTable5"),
    document.getElementById("calenderTable6"),
    document.getElementById("calenderTable7"),
    document.getElementById("calenderTable8"),
    document.getElementById("calenderTable9"),
    document.getElementById("calenderTable10"),
    document.getElementById("calenderTable11"),
    document.getElementById("calenderTable12"),
  ];
}

function generateCalender() {
  
  
  populate();
  let monthIndex = 0;
   dayCount = (window.prompt("Enter a Number According to the day the year starts on Example: Monday = 1, Sunday = 7, 2021 Starts on a Friday = 5"));
   dayCount = dayCount - 1;
  for (element of months) {
    tbl = tables[monthIndex];
    let thead = tbl.createTHead();
    let calenderTitle = thead.insertRow();
    let th = document.createElement("th");
    th.setAttribute("colSpan", "7");
    let text = document.createTextNode(element.monthName);
    th.appendChild(text);
    calenderTitle.appendChild(th);

    let calenderDays = tbl.insertRow();
    for (daySymbols of days) {
      let cell = calenderDays.insertCell();
      let text = document.createTextNode(daySymbols);
      cell.appendChild(text);
    }

    count = 1;
    x = 0;
    for (let index = 0; index < 6; index++) {
      let row = tbl.insertRow();
      if (count == 1) {
        for (let index = 0; index < dayCount; index++) {
          let cell = row.insertCell();
          x = dayCount;
        }
      } else {
        x = 0;
      }

      for (let rowIndex = 0; rowIndex < 7 - x; rowIndex++) {
        let cell = row.insertCell();

        if (count <= element.numOfDays) {
          let text = document.createTextNode(count.toString());
          cell.appendChild(text);
          count++;
          if (dayCount < 6) {
            dayCount++;
          } else {
            dayCount = 0;
          }
        }
      }
    }
    monthIndex++;
  }
document.getElementById("button1").style.opacity = "0";

}
