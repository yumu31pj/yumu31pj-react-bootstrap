/**
 * MicroCMS Contents
 */


export type CatetoryType = {
  linkText: string;
  linkTo: string;
}

export type ContentForIndexType = {
  id: string;
  title: string;
  publishedAt: string;
}

export type ContentsForIndexType = {
  posts: ContentForIndexType[];
}