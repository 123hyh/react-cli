import React from 'react';
type NavProps = {
  /* 样式 */
  className?: string;
  /* 退出登录 */
  handlerLogout: () => void;
};
export default function Nav({ className, handlerLogout }: NavProps) {
  return (
    <div className={className} onClick={() => handlerLogout()}>
      nav
    </div>
  );
}
