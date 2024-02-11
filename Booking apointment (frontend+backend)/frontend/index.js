
let bookingId = null;

const form = document.querySelector("form");
async function handleFormSubmit(event) {
  try {
    event.preventDefault();
    const bookingDetails = {
      name: event.target.username.value,
      email: event.target.email.value,
      phone: event.target.phone.value,
    };

    if(bookingId===null){
      const bookingData = await axios.post(
        "http://localhost:3000/booking",
        JSON.stringify(bookingDetails),
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
        if(bookingData){
          showUser(bookingData.data.responseData)
        }
      console.log(bookingData);
    }else{
      const editedBookingData = await axios.put(`http://localhost:3000/booking/${bookingId}`, JSON.stringify(bookingDetails),
      {
        headers: {
          "Content-Type": "application/json",
        },
      })
      showUser({...bookingDetails, userId:bookingId});
    }

    
  } catch (error) {
    console.log(error);
  }
}

async function deleteUserDetail(event) {
  try {
    const parent = event.target.parentNode;
    bookingId = parent.querySelector(".userId").innerText;
    const deletedBooking = await axios.delete(`http://localhost:3000/booking/${bookingId}`);
    console.log(deletedBooking);
    parent.remove();
  } catch (error) {
    console.log(error);
  }
}

function editUserDetail(event) {
  const parent = event.target.parentNode;
  bookingId = parent.querySelector(".userId").innerText;
  console.log(bookingId);
  const input = document.querySelectorAll("input");
  input[0].value = parent.querySelector(".name").innerText;
  input[1].value = parent.querySelector(".email").innerText;
  input[2].value = parent.querySelector(".phone").innerText;
  parent.remove();
}

window.addEventListener("DOMContentLoaded", async () => {
  try {
    const allBookingDetails = await axios.get("http://localhost:3000/booking");
    const newObj = allBookingDetails.data.responseData;
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

  const input = document.querySelectorAll("input");
  for (let i = 0; i < input.length; i++) {
    input[i].value = "";
  }
}
