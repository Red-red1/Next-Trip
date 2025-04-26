
const b1 = document.querySelector(".b1");
if (b1) {


    b1.addEventListener("click", () => {

        const userID = document.getElementById("one").value;
        const userMail = document.getElementById("two").value;
        const password = document.getElementById("three").value;
        const i = document.getElementById("i").checked;
        const ii = document.getElementById("ii").checked;







        if (!userID) {
            alert("please enter your userid");
            return;
        }
        if (!userMail) {
            alert("please enter your usermail");
            return;
        }
        if (!password) {
            alert("please enter your password");
            return;
        }
        if (!ii) {
            alert("please accept terms and conditions");
            return;
        }


        // Prepare the data to send
        const data = {
            userID,
            userMail,
            password,
        };

        // Ekhan theke backend e request jacche
        fetch('http://localhost:9090/signup', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data),
        })
            .then(response => {
                if (response.ok) {
                    return response.json();
                } else {
                    throw new Error('Failed to sign up');
                }
            })
            .then(data => {
                console.log('Success:', data);
                alert('Sign-up successful!');
                window.location.href = 'http://127.0.0.1:5500/project.html';
            })
            .catch(error => {
                console.error('Error:', error);
                alert('An error occurred during sign-up.');
            });


        document.querySelector(".f1").reset();

    });


}
const elements = document.querySelectorAll('input,button,select');
elements.forEach((ele, ind) => {

    ele.addEventListener("keydown", (e) => {
        if (e.key == 'ArrowDown') {
            e.preventDefault();
            const n = elements[ind + 1];
            if (n) {
                n.focus();
            }
        }
        else if (e.key == 'ArrowUp') {
            e.preventDefault();
            const n = elements[ind - 1];
            if (n) {
                n.focus();
            }
        }

        else if (e.key === 'Enter' && e.target.tagName == 'BUTTON') {
            e.preventDefault();
            const userID = document.getElementById("one").value;
            const usermail = document.getElementById("two").value;
            const password = document.getElementById("three").value;
            const ii = document.getElementById("ii").checked;

            if (!userID || !usermail || !password || !ii) {
                alert("Please fill all the required fields and accept terms.");
                return;
            }

            alert("Form submitted successfully!");
            window.location.href = 'second.html';
        }
    });
});



