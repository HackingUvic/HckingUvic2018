import { Coordinate } from './coordinate';
export class Post {

  id: number;
  handle: string;
  description: string;
  location: Coordinate;
  imageurl: string;
  hashtags: string[];
}
