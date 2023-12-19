import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
    providedIn: 'root',
})
export class AuthService {
    isLogged: boolean = false;
    constructor(private httpClient: HttpClient) { }
    async login(data: {}): Promise<any> {
        try {
            const response = await this.httpClient.post('http://localhost:3000/login', data).toPromise();
            if (response == null) {
                return response;
            } else {
                this.isLogged = true;
                return response;
            }
        } catch (error) {
            console.log(error);
        }
    }
}