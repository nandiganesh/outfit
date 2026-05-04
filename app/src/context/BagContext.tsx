import { createContext, useContext, useState, useCallback, type ReactNode } from 'react';
import type { BagItem, Product } from '@/types';

interface BagContextType {
  items: BagItem[];
  addItem: (product: Product, size: string, quantity?: number) => void;
  removeItem: (productId: string, size: string) => void;
  updateQuantity: (productId: string, size: string, quantity: number) => void;
  clearBag: () => void;
  totalItems: number;
  totalPrice: number;
}

const BagContext = createContext<BagContextType | null>(null);

export function BagProvider({ children }: { children: ReactNode }) {
  const [items, setItems] = useState<BagItem[]>(() => {
    const saved = localStorage.getItem('outfit-bag');
    return saved ? JSON.parse(saved) : [];
  });

  const addItem = useCallback((product: Product, size: string, quantity = 1) => {
    setItems((prev) => {
      const existing = prev.find(
        (item) => item.product.id === product.id && item.size === size
      );
      let newItems: BagItem[];
      if (existing) {
        newItems = prev.map((item) =>
          item.product.id === product.id && item.size === size
            ? { ...item, quantity: item.quantity + quantity }
            : item
        );
      } else {
        newItems = [...prev, { product, size, quantity }];
      }
      localStorage.setItem('outfit-bag', JSON.stringify(newItems));
      return newItems;
    });
  }, []);

  const removeItem = useCallback((productId: string, size: string) => {
    setItems((prev) => {
      const newItems = prev.filter(
        (item) => !(item.product.id === productId && item.size === size)
      );
      localStorage.setItem('outfit-bag', JSON.stringify(newItems));
      return newItems;
    });
  }, []);

  const updateQuantity = useCallback((productId: string, size: string, quantity: number) => {
    if (quantity <= 0) {
      removeItem(productId, size);
      return;
    }
    setItems((prev) => {
      const newItems = prev.map((item) =>
        item.product.id === productId && item.size === size
          ? { ...item, quantity }
          : item
      );
      localStorage.setItem('outfit-bag', JSON.stringify(newItems));
      return newItems;
    });
  }, [removeItem]);

  const clearBag = useCallback(() => {
    setItems([]);
    localStorage.removeItem('outfit-bag');
  }, []);

  const totalItems = items.reduce((sum, item) => sum + item.quantity, 0);
  const totalPrice = items.reduce((sum, item) => sum + item.product.price * item.quantity, 0);

  return (
    <BagContext.Provider
      value={{ items, addItem, removeItem, updateQuantity, clearBag, totalItems, totalPrice }}
    >
      {children}
    </BagContext.Provider>
  );
}

export function useBag() {
  const context = useContext(BagContext);
  if (!context) throw new Error('useBag must be used within BagProvider');
  return context;
}
