import { ObjectId } from "bson";

export interface Station {
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

export interface Address {
	info: string;
	city: {
		name: string;
		id: number;
	};
	state: {
		name: string;
		id: number;
	};
	country: {
		name: string;
		id: number;
	};
}

export interface User {
	id: ObjectId;
	firstName: string;
	lastName: string;
	email: string;
	password: string;
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

export interface Vehicle {
	id: ObjectId;
	model: string;
	type: "BICYCLE" | "SCOOTER";
	serial: string;
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

export interface Token {
	userId: ObjectId;
	accessToken: string;
	refreshToken: string;
}

export interface FetchOptions {
	body?: string;
	method: "GET" | "POST" | "PUT" | "DELETE";
	headers: {
		Authorization?: string;
		"Content-Type": string;
	};
}

export interface GeoJSONGeometry {
	type: "Point" | "MultiPoint" | "LineString" | "MultiLineString";
	coordinates: [number, number][];
}

export interface GeoJSONfeature {
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

export interface GeoJSON {
	type: "FeatureCollection";
	features: GeoJSONfeature[];
}