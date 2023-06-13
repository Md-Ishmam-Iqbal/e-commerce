export default function removeProblematicProducts(products) {
  // removed problematic api data element: SanDisk SSD PLUS 1TB Internal SSD
  // removed problematic api data element: Men's casual premium slim fit t-shirts
  for (let i = 0; i < products.length; i++) {
    let element = products[i];
    let elementsToRemove = [
      "SanDisk SSD PLUS 1TB Internal SSD - SATA III 6 Gb/s",
      "Mens Casual Premium Slim Fit T-Shirts ",
      "Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops",
      "WD 2TB Elements Portable External Hard Drive - USB 3.0 ",
      "Samsung 49-Inch CHG90 144Hz Curved Gaming Monitor (LC49HG90DMNXZA) – Super Ultrawide Screen QLED ",
      "Solid Gold Petite Micropave ",
      "MBJ Women's Solid Short Sleeve Boat Neck V ",
    ];
    if (element.title == elementsToRemove[0]) {
      products.splice(i, 1);
    } else if (element.title == elementsToRemove[1]) {
      products.splice(i, 1);
    } else if (element.title == elementsToRemove[2]) {
      products.splice(i, 1);
    } else if (element.title == elementsToRemove[3]) {
      products.splice(i, 1);
    } else if (element.title == elementsToRemove[4]) {
      products.splice(i, 1);
    } else if (element.title == elementsToRemove[5]) {
      products.splice(i, 1);
    } else if (element.title == elementsToRemove[6]) {
      products.splice(i, 1);
    }
  }
}
