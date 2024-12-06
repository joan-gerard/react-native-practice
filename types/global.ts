export interface Post {
  $collectionId: string;
  $id: string;
  title: string;
  thumbnail: string;
  video: string;
  prompt: string;

  key: string;
}

export interface User {
  $collectionId: string;
  $id: string;
  avatar: string;
  email: string;
  username: string;
}
