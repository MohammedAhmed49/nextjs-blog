export async function sendContactData(contactData) {
  const response = await fetch("/api/contact", {
    method: "POST",
    body: JSON.stringify(contactData),
  });

  const data = await response.json();

  console.log(data);

  if (!response.ok) {
    throw new Error(data.message || "Something went wrong!");
  }

  return data;
}
