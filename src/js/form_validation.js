document.getElementById('contact_form').addEventListener('submit', (e) => {
  
    e.preventDefault();

    // Variables

    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    // Regular Expressions.

    expressionText = !(/^[a-zA-ZÀ-ÿ\s]{1,40}$/).test(name);
    expressionEmail =  !(/^[a-zA-Z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-zA-Z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-zA-Z0-9](?:[a-zA-Z0-9-]*[a-zA-Z0-9])?\.)+[a-zA-Z0-9](?:[a-zA-Z0-9-]*[a-zA-Z0-9])?$/.test(email));

    // Validations.
    

    if(name == null || name == '' || name.legth == 0 || expressionText){
        Swal.fire({
            position: "center",
            icon: "error",
            title: "The 'Name' field must include only letters, accents and spaces",
            showConfirmButton: false,
            timer: 2500
          });
        document.getElementById('name');
    }else if(email == null || expressionEmail){
        Swal.fire({
            position: "center",
            icon: "error",
            title: "The email format is invalid",
            showConfirmButton: false,
            timer: 2500
          });
        document.getElementById('email');
    }else if(message == null || message.legth == 0 || message == ''){
        Swal.fire({
            position: "center",
            icon: "error",
            title: "The 'Message' field cannot be empty",
            showConfirmButton: false,
            timer: 2500
          });
        document.getElementById('message');
    }else{
        Swal.fire({
            position: "center",
            icon: "success",
            title: "Message sent",
            showConfirmButton: false,
            timer: 2500
          });
        document.getElementById('name').value = '';
        document.getElementById('email').value = '';
        document.getElementById('message').value = '';
    }
});

function convertTextToUpperCase(e){
  e.value = e.value.toUpperCase();
}