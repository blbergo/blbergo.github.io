//potential TODO: implent this solution using jQuery

//code provided by formspree for integration
var form = document.getElementById("contact-form");

async function handleSubmit(event) {
  event.preventDefault();

  var status = document.getElementById("contact-form-status");
  var data = new FormData(event.target);

  //ajax call
  fetch(event.target.action, {
    method: form.method,
    body: data,
    headers: {
      Accept: "application/json",
    },
  })
    .then((response) => {
      if (response.ok) {
        //success case
        status.innerHTML =
          "<article class='message is-success'><div class='message-body'>Form Submission Successful!</div></article> ";

        form.reset();
      } else {
        response.json().then((data) => {
          //json errors
          if (Object.hasOwn(data, "errors")) {
            //known error case
            status.innerHTML =
              '<article class="message is-danger"><div class="message-body">' +
              data["errors"].map((error) => error["message"]).join(", ") +
              "</div></article>";
          } else {
            //unknown error case
            status.innerHTML =
              '<article class="message is-danger"><div class="message-body">' +
              "Oops! Something went wrong." +
              "</div></article>";
          }
        });
      }
    })
    .catch((error) => {
      //ajax error
      status.innerHTML =
        '<article class="message is-danger"><div class="message-body">' +
        "Oops! Something went wrong." +
        "</div></article>";
    });
}

form.addEventListener("submit", handleSubmit);
