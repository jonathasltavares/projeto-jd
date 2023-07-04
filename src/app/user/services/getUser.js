export async function getUser(userName){
    const response = await fetch(`https://api.github.com/users/${userName}`);
    const user = await response.json();

    return user?.data
}