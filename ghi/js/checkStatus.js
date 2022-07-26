// Get the cookie out of the cookie store
const payloadCookie = await cookieStore.get('jwt_access_payload')
console.log(payloadCookie)
if (payloadCookie) {
  // The cookie value is a JSON-formatted string, so parse it
  console.log(payloadCookie.value)

// this is what we normally need:
//   const encodedPayload = JSON.parse(payloadCookie.value);

//this is what works because it is coming as an object already for some reason:
const encodedPayload = payloadCookie.value
  // Convert the encoded payload from base64 to normal string
  const decodedPayload = atob(encodedPayload)

  // The payload is a JSON-formatted string, so parse it
  const payload = JSON.parse(decodedPayload)

  // Print the payload
  console.log(payload);

  // Check if "events.add_conference" is in the permissions.
  let permissions = payload.user.perms
  // If it is, remove 'd-none' from the link

  if (permissions.includes("events.add_conference")) {
    const addConference = document.getElementById('newconferenceid');
    addConference.classList.remove("d-none")
}
  // Check if "events.add_location" is in the permissions.
  // If it is, remove 'd-none' from the link
  if (permissions.includes("events.add_location")) {
    const addLocation = document.getElementById('newlocationid');
    addLocation.classList.remove("d-none")
}

if (permissions.includes("presentations.add_presentation")) {
    const addLocation = document.getElementById('newpresentationid');
    addLocation.classList.remove("d-none")
}
}