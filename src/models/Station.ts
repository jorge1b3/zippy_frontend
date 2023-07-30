import { ObjectId } from "bson";

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