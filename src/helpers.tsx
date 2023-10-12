import { DataCardOrigin, PayloadItem } from "./config/interfaces";


export function updateData(
  data: DataCardOrigin[],
  payloadItem: PayloadItem,
  sourceName: string,
  targetName: string
) {
  // Encontrar el indice del origen y del destino
  const datos = JSON.parse(JSON.stringify(data));
  const sourceIndex = datos.findIndex(
    (item: DataCardOrigin) => item.name === sourceName
  );
  const targetIndex = datos.findIndex(
    (item: DataCardOrigin) => item.name === targetName
  );

  // Si no se encontraron los indices, devolver sin cambios
  if (sourceIndex === -1 || targetIndex === -1) {
    return datos;
  }

  // Encontrar el valor del elemento en el origen y quitarlo
  const sourceData = datos[sourceIndex].data;
  const dataIndex = sourceData.findIndex(
    (item: PayloadItem) => item.id === payloadItem.id
  );
  if (dataIndex !== -1) {
    // Eliminar el elemento
    sourceData.splice(dataIndex, 1);
  }

  // Agrega el valor a los datos de destino
  datos[targetIndex].data.push(payloadItem);

  return datos;
}

