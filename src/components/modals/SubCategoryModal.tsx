import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";
import { useNavigate } from "react-router-dom";

interface SubCategory {
  id: string;
  title: string;
}

interface Category {
  key: string;
  title: string;
  subCategories: SubCategory[];
}

interface Props {
  open: boolean;
  category: Category;
  onClose: () => void;
}

const SubCategoryModal = ({ open, category, onClose }: Props) => {
    
  const navigate = useNavigate();

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          className="fixed inset-0 z-50 bg-black/40 flex items-center justify-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <motion.div
            className="bg-white rounded-2xl w-full max-w-lg p-6 relative border-soft"
            initial={{ scale: 0.95, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.95, opacity: 0 }}
          >
            {/* Close */}
            <button
              onClick={onClose}
              className="absolute right-4 top-4 p-1 rounded hover:bg-gray-100"
            >
              <X size={18} />
            </button>

            <h2 className="text-xl font-semibold mb-6">
              {category.title}
            </h2>

            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
              {category.subCategories.map((item) => (
                <button
                  key={item.id}
                  onClick={() => {
                    onClose();
                    navigate(`/services/${category.key}/${item.id}`);
                  }}
                  className="border-soft rounded-xl p-4 text-center hover-elevate bg-white"
                >
                  <div className="h-14 w-14 mx-auto rounded-lg bg-gray-100 mb-2" />
                  <p className="text-xs font-medium">{item.title}</p>
                </button>
              ))}
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default SubCategoryModal;
