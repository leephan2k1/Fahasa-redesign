'use client';
import { Category } from '@/types/models/category.interface';
import { BxBxsCategoryAlt } from '../icons/category';
import { MajesticonsChevronDownLine } from '../icons/chevron-down';
import { useState } from 'react';

export default function CategoryDropdown({
  categories,
}: {
  categories: Category[];
}) {
  const [subCategories, setSubCategories] = useState<Category[] | undefined>(
    () => {
      return categories.find((e) => {
        return e?.subCategories?.length > 0;
      })?.subCategories;
    },
  );

  const handleHover = (id: string) => {
    setSubCategories(() => categories.find((e) => e.id === id)?.subCategories);
  };

  return (
    <div className="dropdown dropdown-hover">
      <button className="navbar-item flex items-center space-x-1">
        <BxBxsCategoryAlt className="text-4xl" />
        <MajesticonsChevronDownLine />
      </button>

      <div className="w-[50rem] h-[20rem] dropdown-menu dropdown-menu-bottom-right text-2xl">
        <div className="full-size flex">
          <div className="w-[40%] h-full flex flex-col py-6">
            {categories &&
              categories.length > 0 &&
              categories.map((e) => {
                if (e?.subCategories?.length > 0)
                  return (
                    <h4
                      key={e.id}
                      onMouseEnter={() => handleHover(e.id)}
                      className="dropdown-item capitalize font-semibold"
                    >
                      {e.name}
                    </h4>
                  );
              })}
          </div>
          <div className="divider divider-vertical mx-0 h-full"></div>

          <div className="flex-1 h-full">
            {subCategories &&
              subCategories.length > 0 &&
              subCategories.map((e) => {
                return (
                  <h4 key={e.id} className="dropdown-item capitalize">
                    {e.name}
                  </h4>
                );
              })}
          </div>
        </div>
      </div>
    </div>
  );
}
