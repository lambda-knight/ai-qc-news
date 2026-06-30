export interface Paper {
  url: string;
  title: string;
}

export interface Segment {
  mode: string;
  label: string;
  videoUrl?: string;
  audioUrl?: string;
  markdown?: string;
  iaId: string;
  title?: string;
  papers?: Paper[];
}

export interface Episode {
  date: string;
  segments: Segment[];
}
