const url_api="https://employee-api-using-nodejs.onrender.com/employee"

const fetchEmployeeData = () => {
    fetch(url_api)
    .then(response => response.json())
    .then((data) => {
        console.log(data);
        let output = '';
        data.forEach((e, index) => {
            output += `
            <tr>
                <td class="fw-semibold">${e._id}</td>
                <td>${e.name}</td>
                <td><a href="mailto:${e.email}" class="text-decoration-none">${e.email}</a></td>
                <td><span class="badge bg-primary bg-opacity-10 text-primary">${e.role}</span></td>
                <td class="fw-bold">${e.salary}</td>
                <td class="text-nowrap">
                    <button onclick="openModal('${e._id}')" type="button" class="btn btn-sm btn-edit me-2" data-bs-toggle="modal" data-bs-target="#exampleModal">
                        <i class="bi bi-pencil-square me-1"></i>Edit
                    </button>
                    <button onclick="delte_employee('${e._id}')" class="btn btn-sm btn-danger">
                        <i class="bi bi-trash me-1"></i>Delete
                    </button>
                </td>
            </tr>
            `;
        });
        document.getElementById("output").innerHTML = output;
    });
}

fetchEmployeeData();

const openModal=(id)=>{
    fetch(url_api+'/'+id)
    .then(response=>response.json())
    .then((data)=>{
        document.getElementById('modal-name').value=data.name;
        document.getElementById('modal-email').value=data.email;
        document.getElementById('modal-role').value=data.role;
        document.getElementById('modal-salary').value=data.salary;
        document.getElementById('modal-id').value=data._id;
    });

}
const editEmployee = () => {
    const name = document.getElementById("modal-name").value;
    const email = document.getElementById("modal-email").value;
    const role = document.getElementById("modal-role").value;
    const salary = document.getElementById("modal-salary").value;
    const id = document.getElementById('modal-id').value;
    
    fetch(url_api + '/' + id, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ name, email, role, salary })
    })
    .then(response => response.json())
    .then((data) => {
        const modal = bootstrap.Modal.getInstance(document.getElementById('exampleModal'));
        modal.hide();
        
        Swal.fire({
            title: "Success!",
            text: "Employee updated successfully",
            icon: "success",
            timer: 1500,
            showConfirmButton: false
        });
        
        document.getElementById("output").innerHTML = '';
        fetchEmployeeData(); 
    })
    .catch((error) => {
        console.log(error);
        Swal.fire({
            title: "Error!",
            text: "Something went wrong",
            icon: "error"
        });
    });
};

const createEmployee=()=>{
    const name=document.getElementById("name").value;
    const email =document.getElementById("email").value;
    const role=document.getElementById("role").value;
    const salary=document.getElementById("salary").value;
    fetch(url_api,{
        method:'POST',
        headers:{
            'Content-Type':'application/json'
        },
        body:JSON.stringify({name,email,role,salary})
    })
    .then(response=>response.json())
    .then((data)=>{

        Swal.fire({
            title: "Success!",
            icon: "success",
            draggable: true
        });
        
        setTimeout(()=>{
            window.location.href="index.html";
        
        },2000)
    })
    .catch((error) => {
        console.log(error);
        Swal.fire({
            title: "oops",
            icon: "error",
            draggable: true
        });
    });
    
}
const delte_employee=(id)=>{
    fetch(url_api+'/'+id,{
        method:'DELETE'
    })
    .then(response=>response.json())
    .then((data)=>{

        Swal.fire({
            title: "Success!",
            icon: "success",
            text:"emplopyee deleted successfully"
        });
        fetchEmployeeData();
        
        
    })
    .catch((error) => {
        console.log(error);
        Swal.fire({
            title: "oops",
            icon: "error",
            text:"something went wrong!"
        });
    });   
}