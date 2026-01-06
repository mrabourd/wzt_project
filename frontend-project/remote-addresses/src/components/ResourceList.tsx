import { useResources } from '../hooks/useResources';
import { ResourceBlock } from './ResourceBlock';

export const ResourceList = ({ category }: { category: string }) => {
  const { resources, isLoading, error } = useResources(category);

  if (isLoading) return <div className="text-center p-10">Loading...</div>;
  if (error) return <div className="text-guide-blue p-10">{error}</div>;

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {resources.map((res) => (
        <ResourceBlock
          key={res.id}
          id={res.id}
          title={res.title}
          category={res.category}
          sub_category={res.sub_category}
          address={res.address}
          hours={res.hours}
          description={res.description}
          phone={res.phone}
        />
      ))}
    </div>
  );
};