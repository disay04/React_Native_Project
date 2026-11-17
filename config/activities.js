import { ChartNoAxesColumnIncreasing, Cloud, Layers, Network, Smartphone } from 'lucide-react-native';

export const activities = [
  { id: 'hello', number: '01', title: 'Hello World App', topic: 'Your first React Native screen', icon: Smartphone, color: '#7443DB', href: '/activities/hello' },
  { id: 'counter', number: '02', title: 'Counter App (useState)', topic: 'Local state & user interactions', icon: ChartNoAxesColumnIncreasing, color: '#8263ED', href: '/activities/counter' },
  { id: 'fetch', number: '03', title: 'Fetch Data (useEffect)', topic: 'Loading, success & error states', icon: Cloud, color: '#288CE6', href: '/activities/fetch' },
  { id: 'components', number: '04', title: 'Component & Props', topic: 'Reusable, declarative UI', icon: Layers, color: '#DB8B22', href: '/activities/components' },
  { id: 'global', number: '05', title: 'Global State (Context API)', topic: 'One change, everywhere', icon: Network, color: '#20A17E', href: '/activities/global' },
];
