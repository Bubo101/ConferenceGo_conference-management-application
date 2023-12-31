window.addEventListener("DOMContentLoaded", async () => {
  const url = "http://localhost:8000/api/conferences/";

  try {
    const response = await fetch(url);

    if (!response.ok) {
      throw new Error("Response not ok");
    } else {
      const data = await response.json();

      const selectTag = document.querySelector("#conference");

      for (let conference of data.conferences) {
        const option = document.createElement("option");
        option.value = conference.id;
        option.innerText = conference.name;
        selectTag.appendChild(option);
      }

      const formTag = document.getElementById("create-presentation-form");
      formTag.addEventListener("submit", async (event) => {
        event.preventDefault();
        console.log("Form submitted");

        const formData = new FormData(formTag);
        const json = JSON.stringify(Object.fromEntries(formData));
        const conferenceid = document.querySelector("#conference").value;
        //have selected object

        console.log(json);

        const presentationUrl = `http://localhost:8000/api/conferences/${conferenceid}/presentations/`;
        const fetchConfig = {
          method: "post",
          body: json,
          headers: {
            "Content-Type": "application/json",
          },
        };
        const response = await fetch(presentationUrl, fetchConfig);
        if (response.ok) {
          formTag.reset();
          const newPresentation = await response.json();
          console.log(newPresentation);
        }
      });
    }
  } catch (e) {
    console.log(e);

    const alertPlaceholder = document.getElementById("alert");

    const wrapper = document.createElement("alert");
    wrapper.innerHTML =
      '<div class="alert alert-warning alert-dismissible fade show" role="alert">Invalid URL<button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button></div>';

    alertPlaceholder.append(wrapper);
  }
});
