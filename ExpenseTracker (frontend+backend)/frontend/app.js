const form = document.querySelector("form");
let expenseId = null;

async function addExpense(event) {
  try {
    event.preventDefault();
    const expenseObject = {
      amount: event.target.amount.value,
      description: event.target.description.value,
      category: event.target.category.value,
    };

    if (expenseId === null) {
      const expenseData = await axios.post(
        "http://localhost:3000/expense-tracker",
        expenseObject,
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      showUser(expenseData.data.responseData);
    } else {
      const editedExpenseData = await axios.put(
        `http://localhost:3000/expense-tracker/${expenseId}`,
        expenseObject,
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      showUser({ ...expenseObject, userId: expenseId });
    }
  } catch (error) {
    console.log(error);
  }
}

async function deleteUserDetail(event) {
  try {
    const parent = event.target.parentNode;
    expenseId = parent.querySelector(".userId").innerText;
    const deletedExpense = await axios.delete(
      `http://localhost:3000/expense-tracker/${expenseId}`
    );
    console.log(deletedExpense);
    parent.remove();
  } catch (error) {
    console.log(error);
  }
}

function editUserDetail(event) {
  const parent = event.target.parentNode;
  expenseId = parent.querySelector(".userId").innerText;
  const input = document.querySelectorAll("input");
  input[0].value = parent.querySelector(".amount").innerText;
  input[1].value = parent.querySelector(".description").innerText;
  form.querySelector("select").value =
    parent.querySelector(".category").innerText;
  parent.remove();
}

// function deleteExpense(event) {
//   const deleteNode = event.target.parentNode;
//   const timeStampLi = deleteNode.getElementsByTagName("li");
//   let timeStamp;
//   for (let i = 0; i < timeStampLi.length; i++) {
//     if (timeStampLi[i].classList.contains("timeStamp")) {
//       timeStamp = timeStampLi[i].innerText.slice(12);

//       //this line will run only when i clicked on edit button
//       if (event.target.classList.contains("edit")) {
//         const recovery = JSON.parse(localStorage.getItem(timeStamp));
//         const form = document.querySelector("form");
//         const allInput = form.getElementsByTagName("input");
//         allInput[0].value = recovery.amount;
//         allInput[1].value = recovery.description;
//         form.querySelector("select").value = recovery.category;
//       }

//       localStorage.removeItem(timeStamp);
//       break;
//     }
//   }

//   deleteNode.remove();

// }

// localStorage.setItem(expenseObject.timeStamp, JSON.stringify(expenseObject));

window.addEventListener("DOMContentLoaded", async () => {
  try {
    const allExpenseDetails = await axios.get(
      "http://localhost:3000/expense-tracker"
    );
    const newObj = allExpenseDetails.data.responseData;
    console.log(newObj);
    for (let i = 0; i < newObj.length; i++) {
      showUser(newObj[i]);
    }
  } catch (error) {
    console.log(error);
  }
});

function showUser(newObj) {
  const entries = Object.entries(newObj);

  const ul = document.createElement("ul");
  entries.forEach(([key, value]) => {
    const li = document.createElement("li");
    li.innerText = value;
    li.classList.add(key);
    ul.append(li);
  });
  const btn = document.createElement("button");
  btn.innerText = "delete";
  btn.setAttribute("type", "click");
  btn.setAttribute("onclick", "deleteUserDetail(event)");

  const editBtn = document.createElement("button");
  editBtn.innerText = "edit";

  editBtn.setAttribute("type", "click");
  editBtn.setAttribute("class", "edit");
  editBtn.setAttribute("onclick", "editUserDetail(event)");
  ul.append(btn);
  ul.append(editBtn);
  form.after(ul);

  const allInput = form.getElementsByTagName("input");
  for (let i = 0; i < allInput.length; i++) {
    allInput[i].value = "";
  }
  form.querySelector("select").value = "0";
}
