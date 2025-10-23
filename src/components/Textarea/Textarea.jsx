export default function Textarea({ label, ...props }) {
  return (
    <div className="flex flex-col space-y-1">
      {label && (
        <label className="text-sm font-medium text-gray-700">{label}</label>
      )}
      <textarea
        rows="4"
        className="border border-gray-300 rounded-lg px-3 py-2 "
        {...props}
      />
    </div>
  );
}
