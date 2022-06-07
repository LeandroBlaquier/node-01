const findByText = (data: any) => {
  const search = data.filter((i) => i.name.includes(data));
  return search;
};
