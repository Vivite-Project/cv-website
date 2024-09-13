interface Article {
  id: number;
  title: string;
  description: string;
}

interface Thematic {
  id: number;
  title: string;
  articles: Article[];
}

export default Thematic;
