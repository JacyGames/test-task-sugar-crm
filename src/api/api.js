
export class ApiService {
    baseUrl = 'https://cors-anywhere.herokuapp.com/https://sugarcrm.greenstarexteriors.com/rest/v11_4/';
    getData = async (str, id, token) => {
        const data = await fetch(`${this.baseUrl}${str}/${id}`, {
            headers: {
                'Authorization': `Bearer ${token}`,
                'mode': 'cors'
            }
        });
        return await data.json();
    }
    editData = async (str, id, token, data) => {
        const resp = await fetch(`${this.baseUrl}${str}/${id}`,{
            method: 'PUT',
            headers: {
                'Authorization': `Bearer ${token}`,
                'mode': 'cors'
            },
            body: JSON.stringify(data)
        });
        return await resp.json();
    }
    logIn = async () => {
        const data = {
            username: 'admin',
            password: 'vxFV7k5CDEHJ2kEzQ^#s8Y^8PW#MH34v',
            grant_type: 'password',
            client_id: 'sugar'
        };
        const resp = await fetch('https://cors-anywhere.herokuapp.com/https://sugarcrm.greenstarexteriors.com/rest/v11_4/oauth2/token', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        });
        return await resp.json();
    }
}
