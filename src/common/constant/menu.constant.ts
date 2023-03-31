export interface IMenuData {
  key: string;
  text: string;
  link: string;
  icon?: string;
  children?: IMenuData[] | null;
}

export const MENU_DATA = [
  {
    key: 'user',
    text: 'User',
    link: '',
    children: [
      {
        key: 'app-user-list',
        text: 'App user list',
        link: '/app-user',
      },

      {
        key: 'admin-user-list',
        text: 'Admin user list',
        link: '/admin-user',
      },
    ],
  },
  {
    key: 'board',
    text: 'Board',
    link: '',
    children: [
      {
        key: 'board-group',
        text: 'Board group',
        link: '/board-group',
      },
      {
        key: 'board-list',
        text: 'Board list',
        link: '/board-list',
      }
    ],
  },
] as IMenuData[];