import { MenuItem, Roles } from './interfaces';

export const SIDENAV: MenuItem[] = [
  {
    path: '/sld-dashboard',
    label: 'SDL Dashboard',
    icon: 'saxHomeBold',
    forRole: Roles.user,
  },
  {
    path: '/dashboard',
    label: 'Dashboard admin',
    icon: 'saxHomeBold',
    forRole: Roles.admin,
  },
  {
    path: '/iot-dashboard',
    label: 'IOT Dashboard',
    icon: 'saxElement4Bold',
    forRole: Roles.user,
  },
  {
    path: '/devices-management',
    label: 'Devices Management',
    icon: 'saxSetting4Bold',
    forRole: Roles.user,
  },
  {
    path: '/realtime-data',
    label: 'Realtime Data',
    icon: 'saxSecurityTimeBold',
    forRole: Roles.user,
  },
  {
    path: '/alert-rules',
    label: 'Alert Rules',
    icon: 'saxNotificationBingBold',
    forRole: Roles.user,
  },
  {
    path: '/setting',
    label: 'Setting',
    icon: 'saxSetting2Bold',
    forRole: Roles.user,
  },
  {
    path: '/history-and-report',
    label: 'History & Report',
    icon: 'saxChartBold',
    forRole: Roles.user,
  },
  {
    path: '/profile',
    label: 'Profile',
    icon: 'saxUserBold',
    forRole: Roles.user,
  },
  {
    path: '/support',
    label: 'Support',
    icon: 'saxBubbleBold',
    forRole: Roles.user,
  },
];

export const DEFAULT_USER_AVATAR: string =
  'https://www.svgrepo.com/show/384674/account-avatar-profile-user-11.svg';
  // https://www.svgrepo.com/show/384674/account-avatar-profile-user-11.svg
