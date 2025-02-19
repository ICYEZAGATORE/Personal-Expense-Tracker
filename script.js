function addexpense() {
  let addexpense = document.getElementById("inputExpense");
  let expenseText = inputExpense.value.trim();
  if (expenseText === "") return;

  let expenseList = document.getElementById("expenseList");
  let li = document.createElement("li");
  li.className = "Expense";
  li.innerHTML = `
                <span>${expenseText}</span>
                <button onclick="deleteExpense(this)">Delete</button>
            `;
  li.addEventListener("click", function () {
    this.classList.toggle("completed");
  });

  expenseList.appendChild(li);
  expenseInput.value = "";
}
