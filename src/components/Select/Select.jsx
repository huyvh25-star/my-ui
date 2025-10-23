export default function Select({ label, options = [], ...props }) {
  return (
    <div className="flex flex-col space-y-1">
      {label && (
        <label className="text-sm font-medium text-gray-700">{label}</label>
      )}
      <select
        className="border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-blue-400 text-gray-900"
        {...props}
      >
        {options.map((opt, i) => (
          <option key={i} value={opt.value}>
            {opt.label}
          </option>
        ))}
      </select>
    </div>
  );
}
