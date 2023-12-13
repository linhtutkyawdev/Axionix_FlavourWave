import React from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

const ingredients = [
  {
    name: "Black tea leaves",
    quantity: "3,000g",
  },
  {
    name: "Lemongrass",
    quantity: "1,500g",
  },
  {
    name: "Ginger",
    quantity: "750g",
  },
  {
    name: "Honey",
    quantity: "2,250g",
  },
];

interface ProductsDetailsTabsProps {
  description?: string;
}

const ProductsDetailsTabs = ({ description }: ProductsDetailsTabsProps) => {
  return (
    <Tabs
      defaultValue="description"
      className="mt-8  gap-y-6  w-[100%] px-8  lg:px-40 xl:px-48"
    >
      <TabsList>
        <TabsTrigger value="description">Description</TabsTrigger>
        <TabsTrigger value="ingredients">Ingredients</TabsTrigger>
      </TabsList>
      <TabsContent
        value="description"
        className="text-slate-700 text-lg  md:text-xl"
      >
        {description}
      </TabsContent>
      <TabsContent value="ingredients">
        <Table>
          <TableCaption>Ingredients Lists</TableCaption>
          <TableHeader>
            <TableRow>
              <TableHead className="w-[100px]">No.</TableHead>
              <TableHead>Name</TableHead>
              <TableHead>Weight</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {ingredients.map((ingredient, index) => (
              <TableRow key={index + 1}>
                <TableCell className="font-medium">{index + 1}</TableCell>
                <TableCell>{ingredient.name}</TableCell>
                <TableCell>{ingredient.quantity}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TabsContent>
    </Tabs>
  );
};

export default ProductsDetailsTabs;
