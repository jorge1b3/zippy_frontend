import { ObjectId } from "bson";

//type CrudOperation = 'GET' | 'POST' | 'DELETE' | 'PUT'



// export class HttpRequest{
// 	uri = '';
// 	header = {
// 		"Content-Type": "application/json"
// 	};
// 	method = 'GET';
// 	body = ''

// 	public POST (){
// 		this.method = 'POST'
// 		return
// 	}

// 	public GET(){
// 		this.method = 'GET'
// 		return this
// 	}

// 	public DELETE(){
// 		this.method = 'DELETE'
// 		return this
// 	}

// 	public PUT(){
// 		this.method = 'PUT'
// 		return this
// 	}

// 	public setUri(uri: string){
// 		this.uri = uri
// 		return this
// 	}

// 	public authentication(token: Token){
// 		this.header = Object.defineProperty(this.header, 'Authentication', `Bearer ${token.accessToken}`)
// 		return this
// 	}

// 	public setBody(body: Object){
// 		this.body = JSON.stringify(body)
// 		return this
// 	}

// 	public toJson(){
// 		return JSON.stringify(
// 			{
// 				method : this.method,
// 				headers: this.header,
// 				body: this.body
// 			}
// 		)
// 	}
// }

export type login = {
	username: String,
	password: String
}

export type Station = {
	id: ObjectId;
	name: string;
	coordinates: [number, number];
	capacity: number;
	status: "ACTIVE" | "INACTIVE";
	vehicleStatusIds?: {
		id: ObjectId;
		status:
			| "AVAILABLE"
			| "IN_USE"
			| "MAINTENANCE"
			| "RESERVED"
			| "OUT_OF_SERVICE"
			| "UNAVAILABLE";
	}[];
}




export type Address = {
	info: string;
	city: {
		name: string;
		id: number;
	};
	state?: {
		name: string;
		id: number;
	};
	country?: {
		name: string;
		id: number;
	};
}

export interface User {
	firstName: string;
	lastName: string;
	email: string;
	birthDate: Date;
	phone: string;
	document: string;
	documentType: "CEDULA" | "PASAPORTE";
	address: Address;
	occupation: string;
	backupPerson: {
		firstName: string;
		lastName: string;
		phone: string;
		email: string;
		document?: string;
		documentType?: "CEDULA" | "PASAPORTE";
	};
}

export interface ResponseUser extends User{
	id: ObjectId;
}

export type Vehicle = {
	id: ObjectId;
	serial: string;
	model: string;
	type: "BICYCLE" | "SCOOTER";
	status: VehicleStatus;
	battery: number;
	isElectric: boolean;
	kilometer: number;
	startUpDate: Date;
}

export type VehicleStatus =
	| "AVAILABLE"
	| "IN_USE"
	| "MAINTENANCE"
	| "RESERVED"
	| "OUT_OF_SERVICE"
	| "UNAVAILABLE";

export type Token = {
	userId: ObjectId;
	accessToken: string;
	refreshToken: string;
}

export type FetchOptions = {
	body?: string;
	method: "GET" | "POST" | "PUT" | "DELETE";
	headers: {
		Authorization?: string;
		"Content-Type": string;
	};
}

export type GeoJSONGeometry = {
	type: "Point" | "MultiPoint" | "LineString" | "MultiLineString";
	coordinates: [number, number][];
}

export type GeoJSONfeature = {
	type: "Feature";
	geometry: GeoJSONGeometry;
	properties: {
		segments?: {
			distance: number;
			duration: number;
			steps: {
				distance: number;
				duration: number;
				type: string;
				instruction: string;
				name: string;
				way_points: number[];
			}[];
		};
		summary?: {
			distance: number;
			duration: number;
		};
		station?: Station;
	};
}

export type GeoJSON  ={
	type: "FeatureCollection";
	features: GeoJSONfeature[];
}

