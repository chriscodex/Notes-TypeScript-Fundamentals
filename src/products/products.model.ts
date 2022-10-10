type Sizes = "S" | "M" | "L" | "XL";

type Product = {
    title: string;
    createdAt: Date;
    stock: number;
    size?: Sizes;
};
