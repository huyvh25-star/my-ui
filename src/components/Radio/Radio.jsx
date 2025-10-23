export default function Radio({ label, name, ...props }) {
  return (
    <label className="inline-flex items-center space-x-2">
      <input
        type="radio"
        name={name}
        className="w-4 h-4 text-blue-500 border-gray-300 focus:ring-blue-400"
        {...props}
      />
      <span className="text-sm text-gray-700">{label}</span>
    </label>
  );
}
