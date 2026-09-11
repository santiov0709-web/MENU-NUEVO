export type CategoryId = 'todos' | 'entradas' | 'casa' | 'parrilla' | 'mar' | 'pastas' | 'ligera' | 'bebidas' | 'licores';

export interface MenuItemType {
    id: number;
    category: CategoryId;
    title: string;
    description: string;
    price: string;
    imageUrl: string;
    badges?: string[];
}

export const menuData: MenuItemType[] = [
    // ENTRADAS
    { id: 1, category: 'entradas', title: 'Choricitos La Reserva', description: '', price: '$ 25.000', imageUrl: '' },
    { id: 2, category: 'entradas', title: 'Tostadas de Ajo', description: '', price: '$ 25.000', imageUrl: '' },
    { id: 3, category: 'entradas', title: 'Canastas de Platano', description: '', price: '$ 25.000', imageUrl: '' },
    
    // RESERVA DE LA CASA
    { id: 4, category: 'casa', title: 'Filet Mignon', description: 'Corte de Solomito fino envuelto en tocineta bañado en salsa de champiñones, acompañado de papa francesa y ensalada tropical', price: '$ 65.000', imageUrl: '', badges: ['Más Vendido', 'Recomendado por la Casa'] },
    { id: 5, category: 'casa', title: 'Stroganoff de Res', description: 'Trozos de carne de res, bañados en salsa al vino con tocineta y champiñones, acompañado de papas francesa y ensalada tropical', price: '$ 65.000', imageUrl: '', badges: ['Más Vendido', 'Recomendado por la Casa'] },
    { id: 6, category: 'casa', title: 'Solomito al Vino', description: 'Suave corte de carne, en salsa al vino con queso y champiñones acompañado de papas francesa y ensalada tropical', price: '$ 65.000', imageUrl: '', badges: ['Recomendado por la Casa'] },
    { id: 7, category: 'casa', title: 'Cordon Blue', description: 'Pechuga apanada rellena jamon salchicha y queso en una cama de salsa blanca, acompañada de papas francesa y ensalada tropical', price: '$ 50.000', imageUrl: '', badges: ['Más Vendido', 'Recomendado por la Casa'] },
    { id: 8, category: 'casa', title: 'Pechuga Clásica', description: 'Bañada en salsa de champiñones, acompañada de papas francesa y ensalada tropical', price: '$ 50.000', imageUrl: '', badges: ['Más Vendido', 'Recomendado por la Casa'] },
    { id: 9, category: 'casa', title: 'Pechuga Tropical', description: 'Bañada en salsa dulce y frutas con jamon y queso acompañada de papas francesa y ensalada tropical', price: '$ 50.000', imageUrl: '', badges: ['Más Vendido', 'Recomendado por la Casa'] },
    { id: 10, category: 'casa', title: 'Philadelphia Steak', description: 'Cama de lomo de cerdo en julianas, maicitos, champiñones y cebolla caramelizada bañados con una mezcla de quesos.', price: '$ 55.000', imageUrl: '', badges: ['Recomendado por la Casa'] },
    { id: 11, category: 'casa', title: 'Chuleta de Cerdo', description: 'Trozo de carne obtenido justo encima de las costillas, acompañado de papas francesa y ensalada pico e gallo', price: '$ 50.000', imageUrl: '', badges: ['Recomendado por la Casa'] },
    { id: 12, category: 'casa', title: 'Chuleta Apanada', description: 'Filete de lomo de cerdo apanado acompañado de papas francesa y ensalada tropical', price: '$ 50.000', imageUrl: '', badges: ['Recomendado por la Casa'] },
    { id: 13, category: 'casa', title: 'Medallones de Cerdo', description: 'Bañado en salsas de ciruela, tamarindo, maracuyá acompañado de papa a la francesa y ensalada tropical', price: '$ 50.000', imageUrl: '', badges: ['Recomendado por la Casa'] },
    
    // PARRILLA
    { id: 14, category: 'parrilla', title: 'Picada La Reserva', description: 'Mezcla de carnes Cerdo, Res, Pollo en julianas acompañado de chorizos, papa criolla, yuca y papa francesa', price: '$ 60.000', imageUrl: '' },
    { id: 15, category: 'parrilla', title: 'Parrillada La Reserva', description: '500 Gr Mezcla de Filete cerdo, res, pollo, chorizos, vegetales, papa criolla y yuca.', price: '$ 60.000', imageUrl: '' },
    { id: 16, category: 'parrilla', title: 'Punta de Anca', description: 'Corte de 400 Gr Ubicado en la cadera, reconocido por su cobertura de grasa de gran sabor y terneza media acompañado de papas francesa y ensalada pico e gallo.', price: '$ 56.000', imageUrl: '', badges: ['Más Vendido', 'Recomendado por la Casa'] },
    { id: 17, category: 'parrilla', title: 'Churrasco', description: 'Corte de 400 Gr carne magra con mucho sabor y textura acompañado de papas francesa y ensalada pico e gallo.', price: '$ 55.000', imageUrl: '', badges: ['Más Vendido', 'Recomendado por la Casa'] },
    { id: 18, category: 'parrilla', title: 'Baby Beef', description: '350 gr corte de solomito magro acompañado de papas francesa y ensalada pico e gallo.', price: '$ 60.000', imageUrl: '' },
    { id: 19, category: 'parrilla', title: 'Costillas BBQ', description: 'Corte especial del cerdo codiciado por su suave textura y delicioso sabor servido en pequeñas porciones acompañado de papas francesa y ensalada pico e gallo.', price: '$ 48.000', imageUrl: '' },
    { id: 20, category: 'parrilla', title: 'Sobrebarriga La Reserva', description: 'Receta muy colombiana 400 Gr corte de carne graso y de abundante sabor acompañado de papas francesa y ensalada pico e gallo.', price: '$ 50.000', imageUrl: '' },
    { id: 21, category: 'mar', title: 'Ceviche o Coctel de Camarones', description: 'Camarones frescos preparados con la receta tradicional de la casa, acompañados de galletas saladas y un toque cítrico.', price: '$ 43.000', imageUrl: '' },
    { id: 22, category: 'mar', title: 'Cazuela de Mariscos', description: 'Exquisita selección de mariscos en una base cremosa y reconfortante. Acompañada de patacones crujientes.', price: '$ 53.000', imageUrl: '' },
    { id: 23, category: 'mar', title: 'Trucha Tres Quesos', description: 'Fino filete de trucha bañado y gratinado con una deliciosa mezcla de tres quesos fundidos. Acompañada de patacón.', price: '$ 53.000', imageUrl: '' },
    { id: 24, category: 'mar', title: 'Salmon en Salsa de Queso', description: 'Fresco corte de salmón a la plancha cubierto con nuestra exclusiva y cremosa salsa de queso, servido con patacón.', price: '$ 55.000', imageUrl: '' },
    { id: 25, category: 'mar', title: 'Robalo a la Marinera', description: 'Delicioso filete de róbalo bañado en nuestra rica salsa marinera con una selección de frutos del mar.', price: '$ 58.000', imageUrl: '' },

    // PASTAS
    { id: 26, category: 'pastas', title: 'Pasta Carbonada', description: 'Clásico de la cocina italiana, incluye crema de leche queso parmesano y tocineta. Acompañado de pan o francesa', price: '$ 50.000', imageUrl: '' },
    { id: 27, category: 'pastas', title: 'Pasta Bologñesa', description: 'Receta tradicional italiana, pasta en salsa a base de carne molida, servida con queso parmesano acompañado de pan o francesa', price: '$ 50.000', imageUrl: '' },
    { id: 28, category: 'pastas', title: 'Pasta en Camaron', description: 'Acompañado de pan o francesa', price: '$ 50.000', imageUrl: '' },
    { id: 29, category: 'pastas', title: 'Pasta a la Marinera', description: 'Acompañado de pan o francesa', price: '$ 50.000', imageUrl: '' },

    // RESERVA LIGERA (Comidas Rápidas)
    { id: 30, category: 'ligera', title: 'Hamburguesa La Reserva', description: '250 Gr Carne de res, pollo desmechado, Jamón, queso, aros de cebolla, tocineta salsas y vegetales acompañado de Papas francesa.', price: '$ 35.000', imageUrl: '' },
    { id: 31, category: 'ligera', title: 'Papas Especiales', description: 'Cama de papas francesa, pollo desmechado, carne en cuadritos, tocineta, Ranchera, maíz, queso gratinado y salsas.', price: '$ 35.000', imageUrl: '' },
    { id: 32, category: 'ligera', title: 'Papas Especiales Maxi', description: 'Cama de papas francesa, pollo desmechado, carne en cuadritos, tocineta, Ranchera, maíz huevos de codorniz, ripio de papa y queso gratinado y salsas.', price: '$ 45.000', imageUrl: '' },
    { id: 33, category: 'ligera', title: 'Sandwich Arabe', description: 'Pan arabe relleno de Jamón, pollo, salchicha ranchera, tocineta, queso y tomate verde acompañado de papas francesa.', price: '$ 38.000', imageUrl: '', badges: ['Más Vendido', 'Recomendado por la Casa'] },
    { id: 34, category: 'ligera', title: 'Patacon La Reserva', description: 'Patacón pintón o verde, pollo desmechado, carne en trozos, tomate verde, tocineta, salchicha ranchera, maíz y queso.', price: '$ 35.000', imageUrl: '' },
    { id: 35, category: 'ligera', title: 'Creppe Mixto', description: 'Pollo, carne, queso, y maicitos bañados en salsa de champiñones acompañado de papas francesa.', price: '$ 35.000', imageUrl: '' },
    { id: 36, category: 'ligera', title: 'Desgranado La Reserva', description: 'Maíz dulce, pollo desmechado, carne en trozos, salchicha ranchera, tocineta queso gratinado', price: '$ 35.000', imageUrl: '' },
    { id: 37, category: 'ligera', title: 'Cajita Feliz', description: 'Elige entre mini-hamburguesa, mini-perro Nuggets o salchipapa, más papa francesa, jugo y juguete sorpresa.', price: '$ 37.000', imageUrl: '' },
    { id: 38, category: 'ligera', title: 'Menu Infantil (Pechuga)', description: 'Filete de pechuga apanada papas francesas y ensalada de frutas', price: '$ 35.000', imageUrl: '' },
    { id: 39, category: 'ligera', title: 'Menu Infantil (Muslitos)', description: 'Muslitos de pollo apanados acompañados de papa francesa y ensalada de frutas y juguito', price: '$ 35.000', imageUrl: '' },

    // BEBIDAS
    { id: 40, category: 'bebidas', title: 'Jugos Naturales', description: '', price: '$ 10.000', imageUrl: '' },
    { id: 41, category: 'bebidas', title: 'Limonada de Coco', description: '', price: '$ 13.000', imageUrl: '' },
    { id: 42, category: 'bebidas', title: 'Limonada Hierbabuena', description: '', price: '$ 13.000', imageUrl: '' },
    { id: 43, category: 'bebidas', title: 'Limonada Cereza', description: '', price: '$ 13.000', imageUrl: '' },
    { id: 44, category: 'bebidas', title: 'Sodas Saborizadas', description: '', price: '$ 13.000', imageUrl: '' },
    { id: 45, category: 'bebidas', title: 'Jugos Hit', description: '', price: '$ 5.000', imageUrl: '' },
    { id: 46, category: 'bebidas', title: 'Mister Tea', description: '', price: '$ 5.000', imageUrl: '' },
    { id: 47, category: 'bebidas', title: 'Agua Natural', description: '', price: '$ 4.000', imageUrl: '' },
    { id: 48, category: 'bebidas', title: 'Agua con Gas', description: '', price: '$ 4.000', imageUrl: '' },
    { id: 49, category: 'bebidas', title: 'Agua Manantial', description: '', price: '$ 7.000', imageUrl: '' },
    { id: 50, category: 'bebidas', title: 'Te Hatsu', description: '', price: '$ 13.000', imageUrl: '' },
    { id: 51, category: 'bebidas', title: 'Soda Hatsu', description: '', price: '$ 10.000', imageUrl: '' },
    { id: 52, category: 'bebidas', title: 'Gaseosas', description: '', price: '$ 5.000', imageUrl: '' },
    { id: 53, category: 'bebidas', title: 'Cerveza Corona', description: '', price: '$ 12.000', imageUrl: '' },
    { id: 54, category: 'bebidas', title: 'Cerveza Stella', description: '', price: '$ 12.000', imageUrl: '' },
    { id: 55, category: 'bebidas', title: 'Cerveza Light', description: '', price: '$ 7.000', imageUrl: '' },
    { id: 56, category: 'bebidas', title: 'Cerveza Poker', description: '', price: '$ 7.000', imageUrl: '' },
    { id: 57, category: 'bebidas', title: 'Cerveza Pilsen', description: '', price: '$ 7.000', imageUrl: '' },
    { id: 58, category: 'bebidas', title: 'Cerveza Aguila', description: '', price: '$ 7.000', imageUrl: '' },
    { id: 59, category: 'bebidas', title: 'Cerveza Reds', description: '', price: '$ 7.000', imageUrl: '' },
    { id: 60, category: 'bebidas', title: 'Cerveza Club Colombia', description: '', price: '$ 10.000', imageUrl: '' },

    // LICORES
    { id: 61, category: 'licores', title: 'Casillero del Diablo', description: 'Vino', price: '$ 150.000', imageUrl: '' },
    { id: 62, category: 'licores', title: 'Undurraga', description: 'Vino', price: '$ 110.000', imageUrl: '' },
    { id: 63, category: 'licores', title: 'Santa Rita 120', description: 'Vino', price: '$ 110.000', imageUrl: '' },
    { id: 64, category: 'licores', title: 'Frontera', description: 'Vino', price: '$ 90.000', imageUrl: '' },
    { id: 65, category: 'licores', title: 'Gato Negro', description: 'Vino', price: '$ 90.000', imageUrl: '' },
    { id: 66, category: 'licores', title: 'Lazo', description: 'Vino', price: '$ 90.000', imageUrl: '' },
    { id: 67, category: 'licores', title: 'Dubonnet', description: 'Aperitivo', price: '$ 120.000', imageUrl: '' },
    { id: 68, category: 'licores', title: 'Manischewitz', description: 'Aperitivo', price: '$ 120.000', imageUrl: '' },
    { id: 69, category: 'licores', title: 'Baileys', description: 'Aperitivo', price: '$ 120.000', imageUrl: '' },
    { id: 70, category: 'licores', title: 'Champaña Piterlongo', description: 'Champaña', price: '$ 220.000', imageUrl: '' },
    { id: 71, category: 'licores', title: 'JP Chenet', description: 'Champaña', price: '$ 100.000', imageUrl: '' },
    { id: 72, category: 'licores', title: 'Champaña Presidencial', description: 'Champaña', price: '$ 90.000', imageUrl: '' }
];

export const categories: { id: CategoryId, name: string }[] = [
    { id: 'todos', name: 'Todo el Menú' },
    { id: 'entradas', name: 'Entradas' },
    { id: 'casa', name: 'Reserva de la Casa' },
    { id: 'parrilla', name: 'Parrilla' },
    { id: 'mar', name: 'La Reserva del Mar' },
    { id: 'pastas', name: 'Pastas' },
    { id: 'ligera', name: 'Reserva Ligera' },
    { id: 'bebidas', name: 'Bebidas' },
    { id: 'licores', name: 'Licores' }
];
