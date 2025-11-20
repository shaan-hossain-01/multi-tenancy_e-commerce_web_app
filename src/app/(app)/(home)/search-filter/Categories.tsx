interface CategoriesProps {
    data: any;
}

const Categories = ({ data }: CategoriesProps ) => {
  return (
    <div>Categories: {JSON.stringify(data, null, 2)}</div>
  )
}

export default Categories