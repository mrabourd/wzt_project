import { useResources } from '../hooks/useResources';

export const ResourceList = ({ category }: { category: string }) => {
  const { resources, isLoading, error } = useResources(category);

  if (isLoading) return <div className="text-center p-10">Loading...</div>;
  if (error) return <div className="text-red-500 p-10">{error}</div>;

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      {resources.map((res) => (
        <div key={res.id} className="p-4 bg-white dark:bg-gray-700 rounded-lg shadow border border-gray-200">
          <h3 className="font-bold text-lg text-red-50/700">{res.title}</h3>
          <p className="text-sm text-gray-500 mb-2">{res.sub_category}</p>
          <p className="text-gray-700 text-sm italic">{res.address}</p>
          <div className="mt-4 text-xs font-medium text-gray-400">🕒 {res.hours}</div>
        </div>
      ))}
    </div>
  );
};