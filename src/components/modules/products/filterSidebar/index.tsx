import { Slider } from "@/components/ui/slider";
import { Checkbox } from "@/components/ui/checkbox";
import { Star } from "lucide-react";

const FilterSidebar = () => {
  return (
    <div className="w-72 p-4 bg-white border-r rounded-xl shadow-md">
      <div className="mb-4">
        <h3 className="font-semibold mb-2">Filter By Price</h3>
        <div className="flex items-center gap-2">
          <input
            type="number"
            placeholder="Min"
            className="w-16 p-1 border rounded"
          />
          <span>-</span>
          <input
            type="number"
            placeholder="Max"
            className="w-16 p-1 border rounded"
          />
        </div>
        <Slider defaultValue={[0]} max={1000} step={10} className="mt-2" />
      </div>

      <div className="mb-4">
        <h3 className="font-semibold mb-2">Product Types</h3>
        {[
          "Laptops & Accessories",
          "Computers-PC",
          "Speakers & Headset",
          "Keyboards & Mouse",
          "Camera",
          "Video Recording",
          "Tablets",
          "Tablet Lights",
        ].map((item) => (
          <label key={item} className="flex items-center space-x-2 mb-1">
            <Checkbox />
            <span>{item}</span>
          </label>
        ))}
      </div>

      <div className="mb-4">
        <h3 className="font-semibold mb-2">Brands</h3>
        {["HP (25)", "Apple (18)", "Dell (10)", "Asus (11)", "Camera"].map(
          (brand) => (
            <label key={brand} className="flex items-center space-x-2 mb-1">
              <Checkbox />
              <span>{brand}</span>
            </label>
          )
        )}
      </div>

      <div className="mb-4">
        <h3 className="font-semibold mb-2">Rating</h3>
        {[5, 4, 3, 2, 1].map((stars) => (
          <label key={stars} className="flex items-center space-x-2 mb-1">
            <Checkbox />
            <div className="flex">
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  className={`h-4 w-4 ${
                    i < stars ? "text-yellow-500" : "text-gray-300"
                  }`}
                />
              ))}
            </div>
          </label>
        ))}
      </div>

      <div className="mb-4">
        <h3 className="font-semibold mb-2">Availability</h3>
        {["In Stock", "Pre Order", "Upcoming"].map((status) => (
          <label key={status} className="flex items-center space-x-2 mb-1">
            <Checkbox />
            <span>{status}</span>
          </label>
        ))}
      </div>
    </div>
  );
};

export default FilterSidebar;
