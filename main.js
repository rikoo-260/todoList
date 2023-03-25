const form = document.getElementById("form-task");
const input = document.getElementById("input");
const post = document.getElementById("post");


// membuat fungsi untuk memvalidasi data
form.addEventListener("submit",(event) => {
    // mencegah tindakan default
    event.preventDefault()

    formValidation()
})

// get data dari form 
const data = {}
const acceptData = () => {
    console.log(data)

    data["text"] = input.value
    createPost()
}

// cek apakah form isian kosong atau ada data yang masuk
const formValidation = () => {
    if (input.value === "") {
        alert("Masukan task terlebih dahulu!")
        console.log("failured")
    } else {
        acceptData()
    }
}

// menambah form teks kedalam daftar  
const createPost = () => {
 post.innerHTML += `
 <tbody>
    <tr>
        <td>${data.text}</td>
        <td class="text-end">
            <a href="">
                 <i onclick="hapus(this)" class="bi bi-trash3"></i>
             </a>
        </td>
     </tr>
 </tbody>
 `
 input.value = ""
}

// membuat fungsi hapus
const hapus = (e) => {
    e.parentElement.parentElement.parentElement.parentElement.remove()
}
