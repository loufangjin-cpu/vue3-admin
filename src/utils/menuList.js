export const getMenuList = () => {
	return [
		{
			menuId: '111',
			menuName: 'Home',
			children: [
				{ menuId: 'home-1', menuName: 'home', path: '/home', children: [] },
				{ menuId: 'home-2', menuName: 'home2', path: '/home1', children: [] },
			],
		},
		{ menuId: '333', menuName: 'Charts', path: '/charts', children: [] },
	];
};
