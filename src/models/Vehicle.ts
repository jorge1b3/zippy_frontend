import { ObjectId } from "bson";

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