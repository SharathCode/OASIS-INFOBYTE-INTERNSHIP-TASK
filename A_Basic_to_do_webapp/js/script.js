const firstNameInput = document.getElementById("firstName");
const lastNameInput = document.getElementById("lastName");
const add = document.getElementById("btn");
const helloElement = document.getElementById("hello");

add.addEventListener("click", () => {
    const firstName = firstNameInput.value;
    const lastName = lastNameInput.value;

    if (firstName.trim() !== "" && lastName.trim() !== "") {
        const fullName = `${firstName} ${lastName}`;
        helloElement.textContent = `Hello, ${fullName}!`;
    }else
    {
        helloElement.textContent  = 'do type';
    }
});