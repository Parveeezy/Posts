import { PostTypes } from "./Post-types.ts"

export interface FullPostCardTypes extends PostTypes {
	thumbnailUrl: string;
	url: string;
}