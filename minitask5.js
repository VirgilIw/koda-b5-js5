const account = { id: 1, userName: "virgil", password: "12345" };
// password sebelumnya sudah tervalidasi dan lebih dari 5
const newPassword = "4568"; // password baru yg mau diubah
let batas = 5;
if (newPassword.length < 5) {
  console.log(`minimum password = ${batas}`);
} else {
  const changePassword = { ...account, password: newPassword };
  console.log(changePassword);
}
