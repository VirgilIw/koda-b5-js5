const account = { id: 1, userName: "virgil", password: "12345" };

const newPassword = "45678"; // password baru yg mau diubah

if (newPassword.length < 5) {
  console.log("minimum password 5");
} else {
  const changePassword = { ...account, password: newPassword };
  console.log(changePassword);
}
