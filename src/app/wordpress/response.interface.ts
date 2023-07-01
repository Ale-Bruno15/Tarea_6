export interface WordpressResponse {
    posts: WordpressPost[];
  }
  
  export interface WordpressPost {
    title: string;
    excerpt: string;
    featured_image: string;
    URL: string;
  }
  