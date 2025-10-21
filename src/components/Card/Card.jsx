const Card = () => {
  return (
    <article className="bg-white border border-gray-200 w-80 h-auto shadow-md rounded-2xl overflow-hidden transition-all hover:shadow-lg duration-300">
      {/* Image Section */}
      <div className="w-full h-48 overflow-hidden relative">
        <img
          src="/backgroudcard.jpg"
          alt="Sản phẩm nổi bật"
          className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
        />
        <span className="absolute top-2 left-2 bg-green-600 text-white text-xs px-2 py-1 rounded-full shadow-md">
          New
        </span>
      </div>

      {/* Content */}
      <div className="p-4 flex flex-col gap-2">
        <h3 className="text-lg font-semibold text-gray-800">
          Áo Louis Vuitton
        </h3>
        <p className=" font-bold text-base">500.000.000 VNĐ</p>

        <button className="mt-2 bg-green-600 hover:bg-green-700 text-white font-medium py-2 rounded-xl shadow-sm transition-all duration-300">
          Đăng Ký
        </button>
      </div>
    </article>
  );
};

export default Card;
