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
function deleteExpense(button) {
  let expenseItem = button.parentElement;
  expenseItem.remove();
}
function filterExpenses(filter) {
  let expenses = document.querySelectorAll(".expense");
  expenses.forEach((expense) => {
    switch (filter) {
      case "Category":
        expense.style.display = "flex";
        break;
      case "DateRange":
        expense.classList.contains("Date Range")
          ? (expense.style.display = "flex")
          : (expense.style.display = "none");
        break;
      
    }
  });
}
