export async function users1() {
    try {
        const response = await fetch('http://localhost:3080/api/users');
        return response;
        const users = await response.json();
        return users;
    } catch (error) {
        console.log(error);
    }
}

export async function createUser(data) {
    const response = await fetch(`/api/user`, {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({user: data})
      })
    return await response.json();
}