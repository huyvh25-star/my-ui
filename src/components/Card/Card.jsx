export default function Card({ title, children, image }) {
  return (
    <div className="bg-white border rounded-2xl shadow-sm overflow-hidden">
      {image && (
        <img src={image} alt={title} className="w-full h-40 object-cover" />
      )}
      <div className="p-4">
        {title && <h3 className="text-lg font-semibold mb-2">{title}</h3>}
        {children}
      </div>
    </div>
  );
}
