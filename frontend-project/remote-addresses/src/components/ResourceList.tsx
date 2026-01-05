import { useResources } from '../hooks/useResources';

export const ResourceList = ({ category }: { category: string }) => {
  const { resources, isLoading, error } = useResources(category);

  if (isLoading) return <div className="text-center p-10">Loading...</div>;
  if (error) return <div className="text-guide-blue p-10">{error}</div>;

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {resources.map((res) => (
        <div key={res.id} className="group p-4 bg-white dark:bg-gray-800 rounded-lg transition-colors hover:bg-blue-200 dark:hover:bg-blue-300">
          <h3 className="font-bold text-lg text-guide-blue dark:text-blue-200 group-hover:text-guide-blue">{res.title}</h3>
          <p className="text-sm text-gray-500 mb-2">{res.sub_category}</p>
          <p className="text-gray-400 text-sm italic group-hover:text-gray-800">{res.address}</p>
          <div className="mt-4 text-xs font-medium text-gray-400 group-hover:text-gray-800">🕒 {res.hours}</div>
        </div>
      ))}
    </div>
  );
};