document.addEventListener("DOMContentLoaded", () => {
    const inputUsernameRegister = document.getElementById("username");
    const inputEmailRegister = document.getElementById("email");
    const inputPasswordRegister = document.getElementById("password");
    const inputConfirmPasswordRegister = document.getElementById("confirmPassword");
    const btnRegister = document.getElementById("btnup");
    const signupMessage = document.getElementById("signupMessage");

    const loginBtn = document.querySelector("#login");
    const registerBtn = document.querySelector("#register");
    const loginForm = document.querySelector(".login-form");
    const registerForm = document.querySelector(".register-form");

    const passwordRegex = /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{6,}$/;

    btnRegister.addEventListener("click", (e) => {
        e.preventDefault();
        const username = inputUsernameRegister.value.trim();
        const email = inputEmailRegister.value.trim();
        const password = inputPasswordRegister.value.trim();
        const confirmPassword = inputConfirmPasswordRegister.value.trim();

        if (username === "" || email === "" || password === "" || confirmPassword === "") {
            signupMessage.textContent = "Không được để trống";
            signupMessage.style.color = "red";
        } else if (!passwordRegex.test(password)) {
            signupMessage.textContent = "Mật khẩu phải có ít nhất 6 ký tự, bao gồm ít nhất một chữ cái viết hoa, một chữ cái viết thường, một chữ số và một ký tự đặc biệt.";
            signupMessage.style.color = "red";
        } else if (password !== confirmPassword) {
            signupMessage.textContent = "Mật khẩu không trùng khớp";
            signupMessage.style.color = "red";
        } else {
            // Tạo đối tượng user
            const user = {
                username: username,
                email: email,
                password: password
            };
            // Chuyển đổi đối tượng user sang chuỗi JSON
            let json = JSON.stringify(user);
            // Lưu dữ liệu user vào local storage
            localStorage.setItem(username, json);
            // Hiển thị thông báo thành công
            signupMessage.textContent = "Đăng ký thành công";
            signupMessage.style.color = "black";
         

            // Chờ 2 giây trước khi chuyển sang form đăng nhập
            setTimeout(() => {
                loginBtn.style.backgroundColor = "#21264D";
                registerBtn.style.backgroundColor = "rgba(255, 255, 255, 0.2)";
                loginForm.style.left = "50%";
                registerForm.style.left = "-50%";
                loginForm.style.opacity = "1";
                registerForm.style.opacity = "0";
                document.querySelector(".col-1").style.borderRadius = "0 30% 20% 0";
            }, 2000);
        }
    });

    loginBtn.addEventListener('click', () => {
        loginBtn.style.backgroundColor = "#21264D";
        registerBtn.style.backgroundColor = "rgba(255, 255, 255, 0.2)";

        loginForm.style.left = "50%";
        registerForm.style.left = "-50%";

        loginForm.style.opacity = "1";
        registerForm.style.opacity = "0";

        document.querySelector(".col-1").style.borderRadius = "0 30% 20% 0";
    });

    registerBtn.addEventListener('click', () => {
        loginBtn.style.backgroundColor = "rgba(255, 255, 255, 0.2)";
        registerBtn.style.backgroundColor = "#21264D";

        loginForm.style.left = "150%";
        registerForm.style.left = "50%";

        loginForm.style.opacity = "0";
        registerForm.style.opacity = "1";

        document.querySelector(".col-1").style.borderRadius = "0 20% 30% 0";
    });
});


document.addEventListener("DOMContentLoaded", () => {
const inputUsernameLogin = document.querySelector(".login-form .input-field[type='text']");
const inputPasswordLogin = document.querySelector(".login-form .input-field[type='password']");
const btnLogin = document.querySelector(".login-form .input-submit");
const loginMessage = document.getElementById("signupMessag");

// Hàm xử lý khi đăng nhập thành công
const loginSuccess = (username) => {
    // Lưu tên tài khoản vào local storage
    localStorage.setItem('currentUser', username);
    // Chuyển hướng trở lại trang index.html
    window.location.href = "index.html";
    
};
btnLogin.addEventListener("click", (e) => {
    e.preventDefault();
    const username = inputUsernameLogin.value.trim();
    const password = inputPasswordLogin.value.trim();

    if (username === "admin" && password === "Admin123@") {
        // Nếu người dùng đăng nhập là admin, chuyển hướng đến trang admin.html
        window.location.href = "admin.html";
    } else {
        const userData = localStorage.getItem(username);
        if (userData) {
            const user = JSON.parse(userData);
            if (user.password === password) {
                // Xác thực thành công và truyền tên người dùng vào hàm loginSuccess
                loginSuccess(username);
            } else {
                // Sai mật khẩu
                loginMessage.textContent = "Tên người dùng hoặc mật khẩu không đúng. Vui lòng thử lại.";
                loginMessage.style.color = "red";
            }
        } else {
            // Tên người dùng không tồn tại
            loginMessage.textContent = "Tên người dùng hoặc mật khẩu không đúng. Vui lòng thử lại.";
            loginMessage.style.color = "red";
        }
    }
});

// Các hàm xử lý chuyển đổi giữa form đăng ký và form đăng nhập đã ở đây...
});

