const data = [
    { id: 1, name: "John Doe", age: 30, email: "johndoe@example.com", address: "123 Main St" },
    { id: 2, name: "Jane Smith", age: 25, email: "janesmith@example.com", address: "456 Park Ave" },
    { id: 3, name: "Bob Johnson", age: 35, email: "bobjohnson@example.com", address: "789 Elm St" }
];

let table = document.getElementById("table");

// populate table with data
data.forEach(item => {
    let row = table.insertRow();
    let cell1 = row.insertCell(0);
    let cell2 = row.insertCell(1);
    let cell3 = row.insertCell(2);
    let cell4 = row.insertCell(3);
    let cell5 = row.insertCell(4);
    let cell6 = row.insertCell(5);
    cell1.innerHTML = item.id;
    cell2.innerHTML = item.name;
    cell3.innerHTML = item.age;
    cell4.innerHTML = item.email;
    cell5.innerHTML = item.address;
    cell6.innerHTML = `<button onclick="deleteData(${item.id})">Delete</button>  <button onclick="updateData(${item.id})">Update</button>`;
});

// delete button click event
function deleteData(id) {
    if (confirm("Are you sure you want to delete this data?")) {
        data.forEach((item, index) => {
            if (item.id === id) {
                data.splice(index, 1);
                table.deleteRow(index + 1);
            }
        });
    }
}

// update button click event
function updateData(id) {
    let updateModal = document.getElementById("update-modal");
    updateModal.style.display = "block";
    let currentData;
    data.forEach(item => {
        if (item.id === id) {
            currentData = item;
        }
    });
    document.getElementById("update-name").value = currentData.name;
    document.getElementById("update-age").value = currentData.age;
    document.getElementById("update-email").value = currentData.email;
    document.getElementById("update-address").value = currentData.address;
    document.getElementById("update-form").onsubmit = () => {
        currentData.name = document.getElementById("update-name").value;
        currentData.age = document.getElementById("update-age").value;
        currentData.email = document.getElementById("update-email").value;
        currentData.address = document.getElementById("update-address").value;
  
