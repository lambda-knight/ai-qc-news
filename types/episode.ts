export interface Segment {
  mode: string;
  label: string;
  videoUrl?: string;
  audioUrl?: string;
  markdown?: string;
  iaId: string;
  title?: string;
}

export interface Episode {
  date: string;
  segments: Segment[];
}
