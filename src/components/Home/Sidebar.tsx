import React from 'react';
import MenuComponent from './Sidebar/Menu';

/**
 * 递归查找 children 归类
 * @param list
 * @param parentId
 * @param newList
 */

const handlerMenuList = (
    list: any,
    parentId = 'M',
    newList: { [prop: string]: any }[] = [],
) => {
  for (const item of list) {
    if (item.parentId === parentId) {
      newList.push({...item, children: handlerMenuList(list, item.menuId)});
    }
  }
  return newList;
};

import menuList from '@/constant/menu.ts';
export default function Sidebar({className}: { className?: string }) {
  const normalMenuList = handlerMenuList(menuList);
  return (
    <div className={className}>
      <MenuComponent menuList={normalMenuList} />
    </div>
  );
}
