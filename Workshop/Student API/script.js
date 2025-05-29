const API_BASE_URL = 'http://localhost:8000/students';

async function getAllStudents() {
    try {
        const response = await fetch(API_BASE_URL);
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        console.log('All Students:', data);
        return data;
    } catch (error) {
        console.error('Error fetching students:', error);
        showNotification('Error fetching students', 'error');
        return [];
    }
}

async function getStudentById(id) {
    try {
        const response = await fetch(`${API_BASE_URL}/${id}`);
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        console.log(`Student with ID ${id}:`, data);
        return data;
    } catch (error) {
        console.error(`Error fetching student with ID ${id}:`, error);
        showNotification(`Error fetching student with ID ${id}`, 'error');
    }
}

async function addStudent(studentData) {
    try {
        const addBtn = document.getElementById('add-btn');
        const originalText = addBtn.innerHTML;
        addBtn.innerHTML = '<span class="loading"></span> Adding...';
        addBtn.disabled = true;

        const response = await fetch(API_BASE_URL, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(studentData),
        });
        
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        
        const data = await response.json();
        console.log('Student added successfully:', data);
        showNotification('Student added successfully', 'success');
        return data;
    } catch (error) {
        console.error('Error adding student:', error);
        showNotification('Error adding student', 'error');
    } finally {
        addBtn.innerHTML = originalText;
        addBtn.disabled = false;
    }
}

async function updateStudent(id, updatedData) {
    try {
        const response = await fetch(`${API_BASE_URL}/${id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(updatedData),
        });
        
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        
        const data = await response.json();
        console.log(`Student with ID ${id} updated successfully:`, data);
        showNotification('Student updated successfully', 'success');
        return data;
    } catch (error) {
        console.error(`Error updating student with ID ${id}:`, error);
        showNotification('Error updating student', 'error');
    }
}

async function deleteStudent(id) {
    try {
        if (!confirm('Are you sure you want to delete this student?')) return;
        
        const response = await fetch(`${API_BASE_URL}/${id}`, {
            method: 'DELETE',
        });
        
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        
        const data = await response.json();
        console.log(`Student with ID ${id} deleted successfully:`, data);
        showNotification('Student deleted successfully', 'success');
        return data;
    } catch (error) {
        console.error(`Error deleting student with ID ${id}:`, error);
        showNotification('Error deleting student', 'error');
    }
}

function showNotification(message, type) {
    const notification = document.createElement('div');
    notification.className = `notification ${type}`;
    notification.textContent = message;
    document.body.appendChild(notification);
    
    setTimeout(() => {
        notification.classList.add('fade-out');
        setTimeout(() => notification.remove(), 300);
    }, 3000);
}

// Initialize the app
document.addEventListener('DOMContentLoaded', () => {
    const nameInput = document.getElementById('student-name');
    const branchInput = document.getElementById('student-branch');
    
    // Set focus to name input when page loads
    nameInput.focus();
});