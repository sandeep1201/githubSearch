import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';

import 'rxjs/add/operator/map';

@Injectable()

export class GithubService{
	private username:string;
	private client_id='fb72555c59b567ca968a';
	private client_secret = 'f2fdba1b8c6a418efe0ce3129d5f187feca1fdb1';

	constructor(private _http:Http){
		console.log('Github service ready...');
		this.username = 'sandeep1201';
	}
	getUser(){
		return this._http.get('http://api.github.com/users/'+this.username+'?client_id='+this.client_id+'&client_secret='+this.client_secret)
		   .map(res=>res.json());

	}
	getRepos(){
		return this._http.get('http://api.github.com/users/'+this.username+'/repos?client_id='+this.client_id+'&client_secret='+this.client_secret)
		   .map(res=>res.json());

	}
	updateUser(username:string){
		this.username = username;
	}
}