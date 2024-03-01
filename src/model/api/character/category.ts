interface Category {
    id: number;
    name: string;
    children: Category[];
}

export default Category;