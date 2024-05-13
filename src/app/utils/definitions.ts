import { MenuItem, Roles } from './interfaces';

export const SIDENAV: MenuItem[] = [
  {
    path: '/sld-dashboard',
    label: 'SDL Dashboard',
    icon: 'saxHome1Outline',
    forRole: Roles.user,
  },
  {
    path: '/dashboard',
    label: 'Dashboard admin',
    icon: 'saxHome1Outline',
    forRole: Roles.admin,
  },
  {
    path: '/iot-dashboard',
    label: 'IOT Dashboard',
    icon: 'saxElement3Outline',
    forRole: Roles.user,
  },
  {
    path: '/devices-management',
    label: 'Devices Management',
    icon: 'saxElement4Outline',
    forRole: Roles.user,
  },
  {
    path: '/realtime-data',
    label: 'Realtime Data',
    icon: 'saxDataOutline',
    forRole: Roles.user,
  },
  {
    path: '/alert-rules',
    label: 'Alert Rules',
    icon: 'saxNotificationBingOutline',
    forRole: Roles.user,
  },
  {
    path: '/setting',
    label: 'Setting',
    icon: 'saxSetting2Outline',
    forRole: Roles.user,
  },
  {
    path: '/history-and-report',
    label: 'History & Report',
    icon: 'saxChart3Outline',
    forRole: Roles.user,
  },
  {
    path: '/profile',
    label: 'Profile',
    icon: 'saxProfile2userOutline',
    forRole: Roles.user,
  },
  {
    path: '/support',
    label: 'Support',
    icon: 'saxExportOutline',
    forRole: Roles.user,
  },
];

export const DEFAULT_USER_AVATAR: string =
  'https://cdn.builder.io/api/v1/image/assets/TEMP/f86a665d3276d99eff1777fc264645af21b004db3b87f103a7496892c6a844f3?apiKey=9cce0a3bf445400ab25afd487ca3b91b&';
