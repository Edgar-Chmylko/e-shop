interface Category {
  id: number;
  title: string;
}

interface Product {
  id: number;
  title: string;
  amount: number;
  categoryId: number;
  image: string;
  price: number;
}
