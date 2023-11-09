interface Artists {
  id?: string;
  name?: string;
  image?: string;
}
interface Track {
  title?: string;

  duration?: string;
  playCount?: string;
}
export interface Albums {
  name?: string;
  id?: string;
  artists?: Artists[];
  date?: string;
  image?: string;
  tracks?: Track[];
}
