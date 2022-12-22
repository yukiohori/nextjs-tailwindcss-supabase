export const Card = ({ job }: any) => {
  return (
    <div className="max-w-sm overflow-hidden rounded shadow-lg">
      <div className="px-6 py-4">
        <div className="mb-2 text-xl font-bold">{job.name}</div>
        <p className="text-base text-gray-700">{job.description}</p>
      </div>
      <div className="px-6 pt-4 pb-2">
        <p className="text-base text-gray-700">{job.price}</p>
      </div>
    </div>
  );
};
