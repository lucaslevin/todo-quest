import { Sidebar, SidebarContent, SidebarFooter, SidebarHeader, SidebarRail } from '@/components/ui/sidebar';
import { AccountMenu } from './account-menu';

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
	return (
		<Sidebar className="top-(--header-height) h-[calc(100svh-var(--header-height))]!" {...props}>
			<SidebarHeader></SidebarHeader>
			<SidebarContent></SidebarContent>
			<SidebarFooter>
				<AccountMenu />
			</SidebarFooter>
			<SidebarRail />
		</Sidebar>
	);
}
