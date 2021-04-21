export default function destructurize({ ...obj }) {
    const destrArr = [];
  
    obj.special.forEach((item) => {
      const {
        id,
        name,
        icon,
        description = 'Описание недоступно',
      } = item;
  
      destrArr.push({
        id,
        name,
        icon,
        description,
      });
    });
  
    return destrArr;
}