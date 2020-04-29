import React from 'react';
import {Menu} from 'antd';
const {SubMenu} = Menu;
import {
  MailOutlined,
} from '@ant-design/icons';
/**
 * 菜单导航组件
 * @param {Array} menuList 菜单列表
 * @return {JSX}
 */
export default function MenuComponent({
  menuList,
  style,
}: {
  menuList: Array<{ [prop: string]: any }>;
  style?: { [prop: string]: any };
}) {
  const handleClick = (params: any) => {
    debugger;
  };
  return (
    <Menu onClick={handleClick} style={{...style}} mode="inline">
      {menuList.map(({children, menuId, menuCnName}) => {
        return children.length ? (
          <SubMenu
            key={menuId}
            title={
              <span>
                <MailOutlined />
                <span>{menuCnName}</span>
              </span>
            }
          >
            <MenuComponent style={{marginLeft: '10px'}} menuList={children} />
          </SubMenu>
        ) : (
          <Menu.Item key={menuId}>{menuCnName}</Menu.Item>
        );
      })}
    </Menu>
  );
}
