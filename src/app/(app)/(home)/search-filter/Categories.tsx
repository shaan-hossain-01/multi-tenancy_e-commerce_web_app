import {Category} from '@payload-types';
import CategoryDropdown from './CategoryDropdown';

interface CategoriesProps {
    data: any;
}

const Categories = ({ data }: CategoriesProps ) => {
  return (
    <div>
        {data.map((category: Category)=>(
            <div key={category.id}>
            <CategoryDropdown category={category} isActive={false} isNavigationHovered={false} />
            </div>
        ))}
    </div>
  )
}

export default Categories